import fs from "fs"
import fm from 'front-matter'

/**
 * Get frontmatter data from a provided file,
 * and return its title and position attributes.
 *
 * @param filePath: string
 * @returns {
*  text: string,
*  position: number
* }
*/
export function getFrontmatterData(filePath: string): Record<string, any> {
 const fileData = fs.readFileSync(filePath, 'utf8')
 const fileFrontmatterContent = fm(fileData) as Record<string, any>

 return {
   text: fileFrontmatterContent.attributes.title,
   position: fileFrontmatterContent.attributes.position
 }
}