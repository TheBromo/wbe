const factorial = function(steps) {
    let factor = 1n;
    let i = 1n
    switch (typeof steps) {
        case "bigint":
            break;
        case "number":
            factor = 1;
            i = 1;
            break;
        default:
            return undefined
    }

    for (; i <= steps; i++) {
        factor = factor * i
    }
    return factor
}


module.exports = { factorial }
