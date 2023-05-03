import { SidebarItem } from './types'
import fs from "fs"
import path from "path"
import fm from 'front-matter'

function getSidebarItems(directory: string[], documentRoot:string, contentDirectory: string): SidebarItem[] {
  const contentFiles = directory.filter(file => file.endsWith('.md') && !file.endsWith('index.md'))
    .map((fileName: string) => {
      const filePath = path.join(process.cwd(), documentRoot, contentDirectory, fileName)
      const fileData = fs.readFileSync(filePath, 'utf8')
      const fileFrontmatterContent = fm(fileData) as Record<string, any>
      return {
        text: fileFrontmatterContent.attributes.categoryTitle,
        link: `${contentDirectory}${fileName.replace('.md', '.html')}`,
        position: fileFrontmatterContent.attributes.position
      }
    })
  const contentFolders = directory.filter(file => !file.endsWith('.md') && fs.statSync(path.resolve(process.cwd(), documentRoot, contentDirectory, file, '/')).isDirectory())
    .map((folderName: string) => {
      const folderPath = path.join(process.cwd(), documentRoot, contentDirectory, folderName)
      const folderData = fs.readFileSync(`${folderPath}/index.md`, 'utf8')
      const folderFrontmatterContent = fm(folderData) as Record<string, any>
      const folder = fs.readdirSync(folderPath).filter((file: string) => fs.statSync(folderPath).isDirectory())
      return {
        collapsed: true,
        text: folderFrontmatterContent.attributes.categoryTitle,
        link: `${contentDirectory}${folderName}/index.html`,
        items: getSidebarItems(folder, documentRoot, `${contentDirectory}${folderName}/`),
        position: folderFrontmatterContent.attributes.position
      }
    })
  return [
    ...contentFiles,
    ...contentFolders
  ].sort((a, b) => a.position - b.position)
}

export function getSidebar(documentRoot: string, contentDirectory: string): SidebarItem {
  const directoryPath = path.join(process.cwd(), documentRoot, contentDirectory)
  const directory = fs.readdirSync(directoryPath).filter((file: string) => fs.statSync(directoryPath).isDirectory())
  const directoryIndexPath = path.join(process.cwd(), documentRoot, contentDirectory, 'index.md')
  const directoryIndexData = fs.readFileSync(directoryIndexPath, 'utf8')
  const indexFrontmatterContent = fm(directoryIndexData) as Record<string, any>
  return {
    collapsed: true,
    text: indexFrontmatterContent.attributes.categoryTitle,
    link: contentDirectory,
    items: getSidebarItems(directory, documentRoot, contentDirectory)
  }
}