import {login} from '../views/loginTemplate.js';
import {register} from '../views/registerTemplate.js';

export const changeRouter = (hash) =>{
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

switch (hash) {
    case '#/':
        containerRoot.appendChild(login());
      break;   
    case '#/register':
        containerRoot.appendChild(register());
      
};



}

