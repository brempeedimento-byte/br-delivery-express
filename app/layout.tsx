export const metadata = { title: 'BR Express' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  )
}
