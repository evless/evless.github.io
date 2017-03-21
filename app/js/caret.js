export default class Caret {
    constructor(classCursor, list) {
        this.list = list;
        this.cursor = document.querySelector(classCursor);
        this.caret = this.cursor.querySelector('div');
        this.name = 'noname';
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
                this.handleText(html);

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
        if ('' !== text) {
            this.list.addCommand(`<b>${this.name}: </b>` + text);
            this.list.addCommand(this.switchText(text));
        }
    }

    switchText(text) {
        let split = text.split('=');

        switch (split[0].toLowerCase()) {
            case 'помощь':
                return `
                    Помощь - Помощь по командам <br />
                    Дата - Получить текущую дату <br />
                    Автор - Узнать об авторе <br />
                    Опыт работы - Опыт работы с разными штуками <br />
                    Обратная связь - Обратная связь <br />
                    Установить имя - Задать имя [name]
                `;
                break;
            case 'help':
                return `
                    help - Помощь по командам <br />
                    date - Получить текущую дату <br />
                    author - Узнать об авторе <br />
                    experience - Опыт работы с разными штуками <br />
                    feedback - Обратная связь <br />
                    setName - Задать имя [name]
                `;
                break;
            case 'автор':
            case 'author':
                return `
                    Всем привет! Меня зовут Евгений Грачев и вы попали ко мне на страничку.
                    Тут вы не найдете каких-то красивых графиков и прочей лабудени. Всё, что надо
                    можно получить от этой мини консоли набрав команду <i>help</i>.
                    <br />
                    Если говорить конкретно обо мне, то я фронтенд разработчик в одной из крупных контор
                    города Перми. Я очень люблю свою работу и люблю всякие новомодные либы и приблуды, которые
                    помогают в разработке или усложняют её. Люблю навесить всяких линтеров и автоматических
                    сборок в gitlab ci, что бы разрабы страдали. Но вообще я люблю поизобретать что-то новое в
                    свободное от основной работы время. Люблю портировать настольные игры в браузер, но не очень доходит
                    до реализации из-за нехватки сил, но весь кайф в самом процессе :).
                    <br />
                    Если же захотите, то можете со мной связаться через твиттер или почту. <br />
                    Вам в помощь команда <i>feedback</i>
                `;
                break;
            case 'опыт работы':
            case 'experience':
                return `
                    Основы: <br />
                        - HTML <br />
                        - CSS <br />
                        - JavaScript <br />
                        - NodeJS <br />
                        - Git / Mercurial <br />
                        - MongoDB <br />

                    <br /><br />
                    Фреймворки и прочее: <br />
                        - SASS / LESS <br />
                        - Angular / Knockout / React <br />
                        - Guld / Webpack <br />
                        - Koa <br />
                        - Mongoose <br />
                        - Docker <br />
                        - Gitlab CI / Teamcity

                `;
                break;
            case 'дата':
            case 'date':
                return new Date();
                break;
            case 'установить имя':
            case 'setname':
                this.name = split[1];

                return 'Имя изменено.';
                break;
            case 'привет':
            case 'привет!':
            case 'hello':
                return 'Привет!';
                break;
            case 'whoami':
                return this.name;
                break;
            case 'обратная связь':
            case 'feedback':
                return `
                    Github - <a href="http://github.com/evless" target="_blank">http://github.com/evless</a> <br />
                    Twitter - <a href="https://twitter.com/_linless" target="_blank">https://twitter.com/_linless</a> </br>
                `;
                break;
            default:
                return 'Нет такой команды';
        }
    }
}
