export const metadata = { title: 'BR Express', description: 'Sistema de Logística' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, backgroundColor: '#000', color: '#fff' }}>{children}</body>
    </html>
  )
}
