// SCSS
import './scss/_anim.scss';
import './scss/index.scss';
import './scss/cursor.scss';
import './scss/list.scss';


// APP
import List from './js/list.js';
import Caret from './js/caret.js';

let list = new List('.list');
let caret = new Caret('.cursor', list);
caret.init();
