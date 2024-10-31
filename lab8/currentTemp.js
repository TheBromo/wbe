if (process.argv.length !== 3) {
    console.error('expected one argument')
    process.exit(1)
}

const cityname = process.argv[2]

async function getTemp(cityname) {
    const url = `https://wttr.in/${cityname}?format=j1`
    const response = await fetch(url).catch((err) => {
        console.error(err)
        process.exit(1)
    })

    const json = await response.json();
    return json.current_condition[0].temp_C
}


getTemp(cityname).then((res) => {
    console.log(`${res}°`);
});

