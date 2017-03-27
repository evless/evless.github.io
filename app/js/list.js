export default class List {
    constructor(classList, name) {
        this.list = document.querySelector(classList);

        this.list.addEventListener('keydown', (e) => {
            e.preventDefault();

            return;
        });
    }

    addCommand(text) {
        let child = document.createElement('div');
        child.innerHTML = text;
        this.list.appendChild(child);
        this.list.scrollTop = 99999999;
    }
}
