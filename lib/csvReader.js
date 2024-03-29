
/**
 * Methods from this file should be called only in the Static functions of Nextjs
 */

import fs from 'fs'
import csvReader from 'csv-parser'
import { join } from 'path'

const csvDir = join(process.cwd(), 'csvs')
let fileContents = {};

export function getCSVSlugs() {
  return fs.readdirSync(csvDir)
}

export function getCSVData(id){
  const realSlug = id.replace(/\.csv$/, '')
  const fullPath = join(csvDir, `${realSlug}.csv`)
  fileContents = {};

  const stream = fs.createReadStream(fullPath)
  .pipe(csvReader())
  .on('data', (row) => {
    fileContents[`${row?.Word}`] = row;
  })

  return new Promise(resolve => {
    stream.on('end', () => {
      resolve({
        id,
        data: fileContents
      });
    });
  })
  
}

export function getAllCSVIds() {
  let fileNames = getCSVSlugs();
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.csv$/, '')
      }
    }
  })
}

/***
 * 
 * Move CSVS to AWS S3
 */