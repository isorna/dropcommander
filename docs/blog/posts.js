// /blog/posts.js
const files = import.meta.glob('./articles/*.md', { import: '__pageData', eager: true })

export const posts = Object.values(files).map(({ relativePath, frontmatter }) => ({
  ...frontmatter,
  href: `/${relativePath.replace(/\.md$/, '.html')}`
}))
