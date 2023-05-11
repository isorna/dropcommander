import fs from "fs"
import path from "path"
import { getFrontmatterData } from './common'

/**
 * Recursively iterate a folder and return an array with the $frontmatter data of each document.
 *
 * @param folder: string
 * @returns Record<string, any>
 */
export async function getDocuments (folder: string): Promise<Record<string, any>> {
  const folderPath = path.join(process.cwd(), folder)
  const folderContent = fs.readdir(folderPath, (err, files: string[]) => {
    return files.filter((file: string) => fs.statSync(folderPath).isDirectory())
  })

  const { text, position } = getFrontmatterData(`${folderPath}/index.md`)
  window.setTimeout(() => console.log(folderContent, text, position), 1000)
  return []
}