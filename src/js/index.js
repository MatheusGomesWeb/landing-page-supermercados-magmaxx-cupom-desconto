import Scroll from './scripts/Scroll';
import Form from './scripts/Form';

// Objeto com os eventos de scroll
const scroll = new Scroll('[data-js-scrollToForm]', '.l-main');
scroll.start();

// Validação Formulário
const form = new Form();
form.start();
