// /docs/pages.js
const files = import.meta.glob('/**/*.md', { import: '__pageData', eager: true })
export const pages = Object.values(files).map(({ relativePath, frontmatter }) => ({
  ...frontmatter,
  href: `/${relativePath.replace(/\.md$/, '.html')}`
}))
