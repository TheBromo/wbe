const fs = require('node:fs/promises')


if (process.argv.length !== 4) {
    console.error('Expected two arguments!')
    process.exit(1)
}

const inputFileName = process.argv[2]
const outputFileName = process.argv[3]

printFileProperties()
    .then(() => readFile())
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

async function printFileProperties() {
    return fs.stat(inputFileName)
        .then((stats) => {
            console.log(`file size: ${stats.size}`);
            console.log(`last change: ${stats.ctime}`);
            console.log(`block count: ${stats.blocks}`);
        })
        .catch((err) => {
            throw err;
        });
}

async function readFile() {
    console.time("file open");
    return fs.readFile(inputFileName, { encoding: 'utf8' })
        .then((data) => {
            console.timeEnd("file open");

            const json = convertCSVtoJson(data);
            return fs.writeFile(outputFileName, json);
        })
        .catch((err) => {
            throw err;
        });
}

function convertCSVtoJson(csv) {
    const [keys, ...data] = csv.trim().split('\n').map((item) => item.split(','))
    const objs = data.map((item) => {
        const object = {};
        keys.forEach((key, index) => (object[key] = item.at(index)));
        return object;
    });

    return JSON.stringify(objs);
}



