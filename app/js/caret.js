export default class Caret {
    constructor(classCursor, list) {
        this.list = list;
        this.cursor = document.querySelector(classCursor);
        this.caret = this.cursor.querySelector('div');
        this.start = false;
    }

    init() {
        this.caret.focus();

        this.caret.addEventListener('keypress', (e) => {
            if (13 === e.charCode) {
                if (!this.start) {
                    this.start = true;
                    document.body.classList = 'start';
                }

                let html = this.caret.innerHTML;
                this.list.addCommand('noname: ' + html);
                this.list.addCommand(this.handleText(html));

                this.caret.innerHTML = '';
                e.preventDefault();

                return;
            }
        }, false);

        window.addEventListener('click', (e) => {
            this.caret.innerHTML = '';
            this.caret.focus();
            e.preventDefault();

            return;
        }, false);
    }

    handleText(text) {
        switch (text) {
            case 'help':
                return 'helper';
                break;
            default:
                return 'command not found';
        }
    }
}
