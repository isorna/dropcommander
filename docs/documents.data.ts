import type { Page } from '.vitepress/lib/types'
import { createContentLoader } from 'vitepress'

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
        const frontmatter = page.frontmatter
        return {
          title: frontmatter?.title,
          position: frontmatter?.position,
          excerpt: frontmatter?.excerpt,
          href: page.url,
          image: frontmatter?.image
        }
      }) as Page[]
  }
})
