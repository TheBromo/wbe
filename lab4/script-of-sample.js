const scriptOfSample = function(char, scripts) {
    const utfcode = char.codePointAt(0)
    for (let script of scripts) {
        for (let range of script.ranges) {
            const lower = range[0]
            const upper = range[1]

            if (utfcode >= lower && utfcode <= upper) {
                return script.name
            }
        }
    }
    return "unknown"
}


function scriptsInString(string, SCRIPTS) {
    let result = {}
    for (let i = 0; i < string.length; i++) {
        let system = scriptOfSample(string[i], SCRIPTS)
        if (system in result) result[system] = result[system] + 1
        else result[system] = 1
    }
    return result
}


module.exports = { scriptOfSample }
