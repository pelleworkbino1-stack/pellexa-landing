/**
 * Convert pellexa-icon-source.png (sphere on solid black bg) to a transparent
 * PNG used as the site icon. Also extracts the full logo lockup with a
 * transparent background from pellexa-source.png (white bg).
 *
 * NOTE — both `*-source.png` inputs were removed from the repo, so this script
 * currently no-ops with a "Skipping" line for each. The generated artifacts it
 * used to produce (`pellexa-icon.png`, `pellexa-logo-full.png`) are committed
 * and are what the app actually loads. Restore a source file here to make the
 * matching half runnable again.
 */
import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const brandDir = join(__dirname, '../public/brand')

const iconSource = join(brandDir, 'pellexa-icon-source.png')
const logoSource = join(brandDir, 'pellexa-logo-source.png')

function blackToAlpha(buf) {
  const out = Buffer.from(buf)
  const FULL_BLACK = 22
  const SOFT_BLACK = 60
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i], g = out[i + 1], b = out[i + 2]
    const max = Math.max(r, g, b)
    if (max <= FULL_BLACK) {
      out[i + 3] = 0
    } else if (max <= SOFT_BLACK) {
      const t = (max - FULL_BLACK) / (SOFT_BLACK - FULL_BLACK)
      out[i + 3] = Math.round(255 * Math.min(1, t))
    } else {
      out[i + 3] = 255
    }
  }
  return out
}

function whiteToAlpha(buf) {
  const out = Buffer.from(buf)
  const WHITE = 245
  const SOFT = 230
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i], g = out[i + 1], b = out[i + 2]
    if (r >= WHITE && g >= WHITE && b >= WHITE) {
      out[i + 3] = 0
    } else {
      const avg = (r + g + b) / 3
      if (avg >= SOFT) {
        const t = (avg - SOFT) / (WHITE - SOFT)
        out[i + 3] = Math.round(255 * (1 - Math.min(1, t)))
      } else {
        out[i + 3] = 255
      }
    }
  }
  return out
}

async function rawRgba(inputPath, region) {
  const pipeline = region
    ? sharp(inputPath).extract(region).ensureAlpha()
    : sharp(inputPath).ensureAlpha()
  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true })
  return { buf: Buffer.from(data), width: info.width, height: info.height }
}

async function savePng(buf, w, h, outFile, { pad = 0, trim = false, max = 0 } = {}) {
  let pipeline = sharp(buf, { raw: { width: w, height: h, channels: 4 } }).png()
  if (trim) {
    pipeline = sharp(await pipeline.toBuffer()).trim({ threshold: 1 })
  }
  if (pad > 0) {
    pipeline = pipeline.extend({
      top: pad, bottom: pad, left: pad, right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
  }
  if (max > 0) {
    pipeline = pipeline.resize(max, max, { fit: 'inside', withoutEnlargement: true })
  }
  await pipeline.toFile(outFile)
  console.log('Wrote', outFile)
}

async function buildIcon() {
  if (!existsSync(iconSource)) {
    console.log('Skipping icon — pellexa-icon-source.png not found')
    return
  }
  const { buf, width, height } = await rawRgba(iconSource)
  const transparent = blackToAlpha(buf)
  // Capped at 256px. The 1024px source used to pass straight through, which
  // shipped a 705 KB favicon; the icon renders at 48 CSS px and the largest
  // consumer is the 180px apple-touch-icon, so 256 still leaves retina
  // headroom at 76 KB. Without this cap, re-running the script would undo
  // that optimization.
  await savePng(transparent, width, height, join(brandDir, 'pellexa-icon.png'), {
    pad: 8,
    trim: true,
    max: 256,
  })
}

async function buildFullLogo() {
  if (!existsSync(logoSource)) {
    console.log('Skipping full logo — pellexa-logo-source.png not found')
    return
  }
  const { buf, width, height } = await rawRgba(logoSource)
  const transparent = blackToAlpha(buf)
  await savePng(transparent, width, height, join(brandDir, 'pellexa-logo-full.png'), {
    pad: 12,
    trim: true,
  })
}

async function main() {
  await buildIcon()
  await buildFullLogo()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
