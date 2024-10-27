const fs = require('node:fs')


if (process.argv.length !== 4) {
    console.error('Expected two arguments!')
    process.exit(1)
}

const inputFileName = process.argv[2]
const outputFileName = process.argv[3]



fs.stat(inputFileName, (err, stats) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`file size: ${stats.size}`)
    console.log(`last change: ${stats.ctime}`)
    console.log(`block count: ${stats.blocks}`)
    readFile()
})



function readFile() {
    console.time("file open")
    fs.readFile(inputFileName, "utf8", (err, data) => {
        if (err) throw err
        console.timeEnd("file open")
        console.log(data)
    })
}


function convertCSV(csv) {
    const headers = []
    const lines = csv.split('\n');

    if (lines.length < 2) {
        console.error("file is empty or has no data")
        process.exit(1)
    }

    let proto = {}

    const header = lines[0];

    for (const attribute in header.split(';')) {
        proto.attribute


    }



}



