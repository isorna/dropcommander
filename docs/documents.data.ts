import { createContentLoader } from 'vitepress'

interface BreadcrumbItem {
  path: string
  text: string
}

interface FrontmatterData {
  title: string
  excerpt: string
  position: number
  breadcrumb?: BreadcrumbItem[]
}

interface Page extends FrontmatterData {
  href: string
  image?: string
}

declare const data: Page[]
export { data }

// More info here: https://vitepress.dev/guide/data-loading
// EXAMPLE: https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts
/**
 * Creates a contentLoader for all documents (*.md) inside current folder,
 * so that it can be used from each document with:
 * import { data as pages } from '/documents.data'
 */
export default createContentLoader('**/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform (rawData) {
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData
      .sort((a, b) => {
        return a.frontmatter.position - b.frontmatter.position
      })
      .map(page => {
        // console.log('en el map', page.url)
        return {
          title: page.frontmatter.title,
          position: page.frontmatter.position,
          excerpt: page.frontmatter.excerpt,
          href: page.url,
          image: page?.frontmatter.image
        }
      }) as Page[]
  }
})
