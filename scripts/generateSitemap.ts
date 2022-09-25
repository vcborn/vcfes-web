import { writeFile, readdir } from 'fs/promises'

const routes = ['/']
const site_url = 'https://fes.vcborn.com'

function formatPage(name: string, published: string) {
  return `\n  <url>\n    <loc>${name}</loc>\n    <lastmod>${published}</lastmod>\n  </url>`
}

async function generateSitemap() {
  const publishDate = new Date().toISOString()
  let content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  routes.forEach((route: string) => {
    content = `${content}${formatPage(`${site_url}${route}`, publishDate)}`
  })

  const fes = await readdir('src/pages/fes')
  fes.forEach((route: string) => {
    const path = `${site_url}/fes/${route.replace('.tsx', '')}`
    content = `${content}${formatPage(path, publishDate)}`
  })

  content = `${content}\n</urlset>`
  await writeFile('public/sitemap.xml', content, { encoding: 'utf-8' })
}

generateSitemap()
