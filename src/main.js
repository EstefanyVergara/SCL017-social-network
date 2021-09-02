import {changeRouter} from './lib/router.js'
import { login } from './views/loginTemplate.js';

document.getElementById('root').appendChild(login())

const init = () =>{
window.addEventListener('hashchange' , ()=>{ 
changeRouter(window.location.hash);
})
}; 
window.addEventListener('load', init);
