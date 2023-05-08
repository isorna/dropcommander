import { SidebarItem } from './types'
import fs from "fs"
import path from "path"
import fm from 'front-matter'

/**
 * Get frontmatter data from a provided file,
 * and return its categoryTitle and position attributes.
 *
 * @param filePath: string
 * @returns {
 *  text: string,
 *  position: number
 * }
 */
function getFrontmatterData(filePath: string): Record<string, any> {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const fileFrontmatterContent = fm(fileData) as Record<string, any>

  return {
    text: fileFrontmatterContent.attributes.categoryTitle,
    position: fileFrontmatterContent.attributes.position
  }
}

/**
 * Iterate folderContent and return an array with the values of each SidebarItem,
 * sorted by position frontmatter attribute.
 *
 * Exclude index.md file, /_api and /_assets folders from beign parsed.
 *
 * @param folderContent: string []
 * @param documentRoot: string
 * @param contentDirectory: string
 * @returns SirebarItems[]
 */
function getSidebarItems(folderContent: string[], documentRoot:string, contentDirectory: string): SidebarItem[] {
  // Exclude index.md file, as it contains current folder frontmatter attributes
  const contentFiles = folderContent.filter(file => file.endsWith('.md') && !file.endsWith('index.md'))
    .map((fileName: string) => {
      const filePath = path.join(process.cwd(), documentRoot, contentDirectory, fileName)
      const { text, position } = getFrontmatterData(filePath)
      return {
        text,
        link: `${contentDirectory}${fileName.replace('.md', '.html')}`,
        position
      }
    })
  // Exclude /_api and /_asssets folders as they doesn't contain documents
  const contentFolders = folderContent.filter(file => !file.endsWith('.md') && !file.endsWith('_api') && !file.endsWith('_assets') && fs.statSync(path.resolve(process.cwd(), documentRoot, contentDirectory, file, '/')).isDirectory())
    .map((folderName: string) => {
      const folderPath = path.join(process.cwd(), documentRoot, contentDirectory, folderName)
      const folder = fs.readdirSync(folderPath).filter((file: string) => fs.statSync(folderPath).isDirectory())
      const { text, position } = getFrontmatterData(`${folderPath}/index.md`)
      return {
        collapsed: true,
        text,
        link: `${contentDirectory}${folderName}/index.html`,
        items: getSidebarItems(folder, documentRoot, `${contentDirectory}${folderName}/`),
        position
      }
    })
  return [
    ...contentFiles,
    ...contentFolders
  ].sort((a, b) => a.position - b.position)
}

/**
 * Create a SidebarItem object structure from a provided contentDirectory.
 *
 * @param documentRoot: string
 * @param contentDirectory: string
 * @returns SidebarItem
 */
export function getSidebar(documentRoot: string, contentDirectory: string): SidebarItem {
  const folderPath = path.join(process.cwd(), documentRoot, contentDirectory)
  const folderContent = fs.readdirSync(folderPath).filter((file: string) => fs.statSync(folderPath).isDirectory())
  const { text, position } = getFrontmatterData(`${folderPath}/index.md`)

  return {
    collapsed: true,
    text,
    link: contentDirectory,
    items: getSidebarItems(folderContent, documentRoot, contentDirectory),
    position
  }
}