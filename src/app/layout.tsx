export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, background: '#000' }}>{children}</body>
    </html>
  )
}
