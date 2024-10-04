let findTag = function(tag) {
    console.log(tag.length)
    for (let i = 0; i < tag.length; i++) {
        console.log(tag[i])
        if (tag[i] === '<') {
            console.log("found <")
            let pointer = i + 1
            while (pointer < tag.length && tag[pointer] !== ' ' && tag[pointer] !== '<') {
                console.log(`comparing ${tag[pointer]} with > at position ${pointer}`)
                if (tag[pointer] === '>') {
                    return tag.slice(i + 1, pointer)
                }
                pointer++
            }
        }
    }
    return undefined
}

module.exports = { findTag }
