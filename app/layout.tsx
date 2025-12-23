export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, background: '#000', color: '#0f0', fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  )
}
