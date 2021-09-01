import { firebaseFunctions } from "../lib/firebase.js";

export const feed = () => {
  const feedPrincipal = document.createElement("div");
  const viewFeed = /*html*/ `
  <div class ="containerPost" id="containerPost">
  <div class ="dataPost" id="postForm">
      <div class ="profileData">
      <img alt="" id="imgUser" class= "imgUser"/><br>
      <div class ="nameUser" id="nameUser"></div>
      </div>
      </div>
      <form id ="feedForm" class="feedForm">  
      <input type= 'text' id= "commentPost" class="commentPost" placeholder= "¿Qué cocino hoy?"  autofocus> <br>
      <div class = "botones">
      <button class="icon"><i class="fas fa-camera"></i></button>   
      <button type='submit' class="publicButton" id="publicButton">PUBLICAR</button> 
      </div>
      </form>  
    </div>
    <div class ="published" id="published"></div>
    
    <button id ="closed"> cerrar Sesión jeje</button>

`;

feedPrincipal.innerHTML = viewFeed;

  //<--------SACAMOS PROPIEDADES DE GOOGGLE------------->

  const userProfile = feedPrincipal.querySelector("#nameUser");
  const userImg = feedPrincipal.querySelector("#imgUser");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userProfile.innerHTML = user.displayName;
      userImg.src = user.photoURL;
    } else {
    console.log("no existe user");
    }
  });

//<--------CAPTURO LO QUE EL USUARIO COMENTA------------->

  const printPost = feedPrincipal.querySelector('#feedForm'); 
printPost.addEventListener("submit", (e) =>{
e.preventDefault();

  const postContent = feedPrincipal.querySelector('#commentPost').value;
  if(postContent.trim() == ''){
    alert('Entonces, ¿qué cocinarás hoy?')
  } else{
    firebaseFunctions.savePublish(postContent);
    printPost.reset();
  }
});

firebaseFunctions.getPost();







// const cerrarSesion = feedPrincipal.querySelector("#closed");
//   cerrarSesion.addEventListener("click", () => {
//     firebaseFunctions.closeSesion();
//   });

  return feedPrincipal;
};
