const csvWriter = require( 'csv-writer')
const {join} = require('path');
const fs = require('fs');
const csvReader = require('csv-parser');

const csvDir = join(process.cwd(), 'csvs')

const createCsvWriter = csvWriter.createObjectCsvWriter;

function getCSVData(id){
    const realSlug = id.replace(/\.csv$/, '')
    const fullPath = join(csvDir, `${realSlug}.csv`)
    let data = {};
  
    const stream = fs.createReadStream(fullPath)
    .pipe(csvReader())
    .on('data', (row) => {
      data[`${row.Word}`] = row;
    })
  
    return new Promise(resolve => {
      stream.on('end', () => {
        console.log('CSV file successfully processed');
        resolve({
            ...data
        });
      });
    })
    
}

module.exports = async function writeCsvData(params){
    const id = params.id;
    const realSlug = id.replace(/\.csv$/, '')
    const fullPath = join(csvDir, `${realSlug}.csv`)
  
    const csvWriter = createCsvWriter({
      path: fullPath,
      header: [
          {id: 'Test', title: 'Test'},
          {id: 'Question', title: 'Question'},
          {id: 'Word', title: 'Word'},
          {id: 'Meaning', title: 'Meaning'},
          {id: 'Sentence', title: 'Sentence'},
          {id: 'POS', title: 'POS'},
          {id: 'Deck', title: 'Deck'}
      ]
    });
  
    const csvData = await getCSVData(id);
    csvData[params.word]['Deck'] = params.deck;
    const records = Object.keys(csvData).map((word)=> csvData[word]);
  
    return csvWriter.writeRecords(records)       // returns a promise
}