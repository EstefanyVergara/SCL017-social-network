// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { login} from './lib/views/loginTemplate';
myFunction();
document.getElementById('root').innerHTML = login();
login();
