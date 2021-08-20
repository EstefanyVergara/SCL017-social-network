import {login} from '../views/loginTemplate.js';
import {register} from '../views/registerTemplate.js';
import {feed} from '../views/feedTemplate.js';

export const changeRouter = (hash) =>{
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

switch (hash) {
    case '#/':
        containerRoot.appendChild(login());
    break;   
    case '#/register':
        containerRoot.appendChild(register());
    break;   
    case '#/feed':
        containerRoot.appendChild(feed());
};
}

