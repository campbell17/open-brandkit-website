import { createBrandKitBannerPresetHandler } from 'open-brandkit/next/server'

import config from '../../../../../brandkit.config'

export const runtime = 'nodejs'
export const { POST } = createBrandKitBannerPresetHandler(config)
