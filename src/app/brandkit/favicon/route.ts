import { createBrandKitFaviconHandler } from 'open-brandkit/next/server'

import config from '../../../../brandkit.config'

export const runtime = 'nodejs'
export const { POST } = createBrandKitFaviconHandler(config)
