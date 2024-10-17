function parseToProto(json, proto) {
    const jobj = JSON.parse(json)
    return Object.assign(Object.create(proto), jobj)
}


module.exports = { parseToProto }
