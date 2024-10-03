
const equal = function(obj1, obj2) {
    if (obj1 === obj2) {
        return true
    } else {
        if (obj1 !== null && obj2 !== null && typeof obj1 === "object" && typeof obj2 === "object") {

            if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

            let list1 = Object.keys(obj1)
            let list2 = Object.values(obj2)


            for (let el of list1) {
                console.log(obj2[el])
                if (!list2.includes(obj1[el])) {
                    return false
                }
                if (obj2[el] !== obj1[el]) {
                    return false
                }
            }
            return true
        } else {
            return false
        }
    }


}

module.exports = { equal }
