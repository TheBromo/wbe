function showBoard() {

    let fields = []

    for (let i = 0; i < 42; i++) {
        let checked = []
        const prob = Math.random()
        if (prob > 0.75) {
            checked.push(elt("div", { class: "blue piece", }))
        } else if (prob > 0.5) {
            checked.push(elt("div", { class: "red piece", }))
        }

        fields.push(elt("div", { class: "field", }, ...checked))
    }

    const board = elt("div", { class: "board", }, ...fields)

    const html = document.getElementById("test");
    html.appendChild(board)
}
