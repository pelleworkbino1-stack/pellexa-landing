const ICON_SRC = '/brand/pellexa-icon.png'
const LOGO_FULL_SRC = '/brand/pellexa-logo-full.png'

export interface PellexaLogoProps {
  /** `mark` = icon + wordmark (navbar). `full` = complete brand lockup (footer). */
  variant?: 'mark' | 'full'
  /** Product-line suffix, e.g. "LED" */
  suffix?: string
  className?: string
}

export default function PellexaLogo({
  variant = 'mark',
  suffix,
  className = '',
}: PellexaLogoProps) {
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <img
          src={LOGO_FULL_SRC}
          alt="Pellexa — Global Sourcing Agency"
          className="h-32 w-auto max-w-[min(100%,380px)] object-contain drop-shadow-lg sm:h-40"
          width={380}
          height={360}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={ICON_SRC}
        alt=""
        aria-hidden
        className="h-11 w-11 shrink-0 object-contain drop-shadow-md sm:h-12 sm:w-12"
        width={48}
        height={48}
        decoding="async"
      />
      <div className="flex items-baseline gap-1.5 leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-white">
          Pellexa
        </span>
        {suffix ? (
          <span className="font-display text-base font-medium text-brand-400">
            {suffix}
          </span>
        ) : null}
      </div>
    </div>
  )
}
