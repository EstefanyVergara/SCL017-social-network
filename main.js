// Este es el punto de entrada de tu aplicacion
import {changeRouter} from './lib/router.js'
import { login } from './views/loginTemplate.js';
import { register } from './views/registerTemplate.js';
import { feed } from './views/feedTemplate.js';

document.getElementById('root').appendChild(feed())
// document.getElementById('root').appendChild(register())


const init = () =>{
window.addEventListener('hashchange' , ()=>{ 
changeRouter(window.location.hash);
})
}; 
window.addEventListener('load', init);
