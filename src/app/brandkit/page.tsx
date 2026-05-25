import { BrandKitPage, getBrandKitNextPageProps } from 'open-brandkit/next'

import config from '../../../brandkit.config'

export default async function BrandKitRoute() {
  const props = await getBrandKitNextPageProps(config)
  const route = config.route ?? '/brandkit'

  return (
    <BrandKitPage
      {...props}
      endpoints={{
        bannerPresets: `${route}/banners/presets`,
        bannerUpload: `${route}/banners`,
        favicon: `${route}/favicon`,
      }}
    />
  )
}
