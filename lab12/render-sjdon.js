function renderSJDON(sjdon, root) {
    if (!Array.isArray(sjdon) || typeof root === 'undefined') {
        throw new Error("Invalid arguments: SJDON should be an array, and root must be a DOM element.");
    }

    const [tagName, attributesOrContent, ...children] = sjdon;

    const element = document.createElement(tagName);

    if (attributesOrContent && typeof attributesOrContent === 'object' && !Array.isArray(attributesOrContent)) {
        for (const [key, value] of Object.entries(attributesOrContent)) {
            element.setAttribute(key, value);
        }
    } else if (attributesOrContent) {
        element.textContent = attributesOrContent;
    }

    for (const child of children) {
        if (Array.isArray(child)) {
            renderSJDON(child, element);
        } else if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        }
    }

    // Füge das erstellte Element zum Root-Element hinzu
    root.appendChild(element);
}


module.exports = { renderSJDON }
