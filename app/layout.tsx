import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptVault – Search & Organize Your AI Prompt Library',
  description: 'Tag, categorize, and search through your collection of AI prompts with performance metrics and version history. Built for AI engineers and prompt specialists.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8ffbe7b-9303-40b1-957d-135e2289fa86"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
