import fs from 'fs'
import csvReader from 'csv-parser'
import { join } from 'path'


// const fs = require('fs');
// const {join} = require('path');
// const csvReader = require('csv-parser');

const csvDir = join(process.cwd(), 'csvs')
let fileContents = [];

export function getCSVSlugs() {
  return fs.readdirSync(csvDir)
}

export function getCSVData(id, callback){
  const realSlug = id.replace(/\.csv$/, '')
  const fullPath = join(csvDir, `${realSlug}.csv`)
  fileContents = [];

  fs.createReadStream(fullPath)
  .pipe(csvReader())
  .on('data', (row) => {
    fileContents.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    callback(fileContents);
  });
}

export function getAllPostIds() {
  const fileNames = getCSVSlugs();
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.csv$/, '')
      }
    }
  })
}