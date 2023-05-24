import fs from 'node:fs'

export default {
  watch: ['./es/dzc/_api/*.json'],
  load (watchedFiles: any[]) {
    return watchedFiles.map(file => {
      return {
        slug: file.slice(Number(file.lastIndexOf('/')) + 1, -5),
        data: JSON.parse(fs.readFileSync(file, 'utf-8'))
      }
    })
  }
}
