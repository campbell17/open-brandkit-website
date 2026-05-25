type BrandLogoProps = {
  lightSrc: string
  darkSrc?: string
  alt: string
  className?: string
}

export function BrandLogo({
  lightSrc,
  darkSrc,
  alt,
  className = 'h-10 w-auto',
}: BrandLogoProps) {
  return (
    <>
      <img
        src={lightSrc}
        alt={alt}
        className={`${className}${darkSrc ? ' dark:hidden' : ''}`}
      />
      {darkSrc ? (
        <img
          src={darkSrc}
          alt={alt}
          className={`${className} hidden dark:block`}
        />
      ) : null}
    </>
  )
}
