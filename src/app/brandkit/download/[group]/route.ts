import { createBrandKitDownloadHandler } from 'open-brandkit/next/server'

export const runtime = 'nodejs'
export const { GET } = createBrandKitDownloadHandler()
