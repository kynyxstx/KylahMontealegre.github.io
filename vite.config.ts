import { defineConfig } from 'vite'
import type { Plugin, ViteDevServer, PreviewServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Git exclusions are not HTTP access controls. Block private paths before Vite
// handles root/public files, in addition to its filesystem restrictions.
function privateFileProtection(): Plugin {
  const protect = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, res, next) => {
      let pathname: string
      try { pathname = decodeURIComponent(((req as { url?: string }).url || '/').split('?')[0]).replaceAll('\\', '/') }
      catch { res.statusCode = 400; res.end('Bad request'); return }
      if (pathname.split('/').some(segment => (segment.startsWith('.') && !(segment === '.vite' && /\/node_modules\/\.vite\/deps\//.test(pathname))) || /^(private-project-screenshots|portfolio-ky-private)$/i.test(segment))) {
        res.statusCode = 403
        res.end('Access denied')
        return
      }
      next()
    })
  }
  return { name: 'private-file-protection', configureServer: protect, configurePreviewServer: protect }
}

export default defineConfig({
  base: '/KylahMontealegre.github.io/',
  plugins: [privateFileProtection(), react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    fs: {
      strict: true,
      allow: [decodeURIComponent(new URL('.', import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1')],
      deny: ['**/.*/**', '**/.env*', '**/*.{crt,pem,key}', '**/private-project-screenshots/**', '**/Portfolio-KY-Private/**'],
    },
  },
})
