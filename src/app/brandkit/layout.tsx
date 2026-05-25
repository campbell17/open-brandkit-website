import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Brand Kit',
}

export default function BrandKitLayout({ children }: { children: ReactNode }) {
  return children
}
