export const firebaseFunctions = {
  //<--------INICIO DE SESIÓN CON GOOGLE------------->
  loginGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)

      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .then(() => {
        window.location.assign("#/feed");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  },

  //<--------REGISTRO DE USUARIOS NUEVOS------------->
  registerUser: (registerUser, registerMail, registerPass) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(registerMail, registerPass)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: registerUser,
        });
        user.sendEmailVerification();
        alert("Verifica tu correo electrónico para luego iniciar sesión");
        console.log("Enviando correo");
      })
      .catch((error) => {
        let errorCode = error.code;
        switch (errorCode) {
          case "auth/weak-password":
            alert("La contraseña debe tener entre 6 y 8 caracteres");
            break;
          case "auth/invalid-email":
            alert("La dirección de correo electrónico no es correcta");
            break;
          case "auth/email-already-in-use":
            alert("Este usuario ya existe");
            break;
        }
      });
  },

  //<--------INICIO DE SESIÓN------------->
  loginUser: (loginMail, loginPass) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginMail, loginPass)
      .then((userCredential) => {
        var user = userCredential.user;
        if (user.emailVerified) {
          window.location.assign("#/feed");
        } else {
          alert("No haz verificado tu correo electrónico");
          window.location.assign("#/");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/user-not-found") {
          alert("Cuenta no registrada, registrate y vuelve a intentarlo");
        } else if (errorCode == "auth/wrong-password") {
          alert("Contraseña incorrecta");
        } else {
          alert(errorMessage);
        }
      });
  },

  //<--------CIERRE DE SESIÓN------------->
  closeSesion: () => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.hash = "#/";
    });
  },

  //<--------CREACIÓN DE LA DATA------------->

  savePublish: (postContent) => {
    const db = firebase.firestore();
    let user = firebase.auth().currentUser;

    db.collection("post").add({
      user: user.displayName,
      post: postContent,
      avatar: user.photoURL,
      date: new Date().toLocaleDateString(),
      userId: user.uid,
      like: 0,
    });
  },

  //------ PUBLICA LA DATA----//

  getPost: () => {
    const deletedPost = (id) => db.collection("post").doc(id).delete();

    const editPost = (id) => db.collection("post").doc(id).get();

    const db = firebase.firestore();

    let id = " ";

    const collectionPost = (callback) =>
      db.collection("post").orderBy("date", "desc").onSnapshot(callback);
    collectionPost((querySnapshot) => {
      published.innerHTML = ""; //esta e la wea del post qlo
      querySnapshot.forEach((doc) => {
        const textInner = doc.data();
        textInner.id = doc.id;

        published.innerHTML +=
          /*html*/
          `<div class ="postPublished">
        ${textInner.user}
              <div class="postUser">    
              <p>${textInner.post}</p>        
              </div>
                    <div class="containerLike">
                        <button i class='fas fa-heart btnLike' id='likePost' value='${textInner.id}'></i></button> 
                        <span>${textInner.like}</span>
                        </div>
                        </div>`;

        if (doc.data().userId == firebase.auth().currentUser.uid) {
          published.innerHTML += `<div class="containerBtn">
              <button i class='far fa-edit btn-edit' data-id='${textInner.id}'></i></button>       
              <button i class='fas fa-trash-alt btn-deleted' data-id='${textInner.id}'></i></button>
              </div>`;
        }
      });

      //------ FUNCIONAMIENTO DE EDITAR----//
      const btnEdit = document.querySelectorAll(".btn-edit");
      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const doc = await editPost(e.target.dataset.id);
          const task = doc.data().post;
          id = doc.id;

          const postEditBox = prompt("Escribe un nuevo comentario", task);
          await db.collection("post").doc(id).update({
            post: postEditBox,
          });
        });
      });

      //------ FUNCIONAMIENTO DE BOTÓN BORRAR----//
      const btnDeleted = document.querySelectorAll(".btn-deleted");
      btnDeleted.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          e.preventDefault();
          const confirmDeleted = confirm(
            "Estás seguro que quieres elimitar el post"
          );
          if (confirmDeleted) {
            await deletedPost(e.target.dataset.id);
          }
        });
      });

      const btnLike = document.querySelectorAll(".btnLike");
      btnLike.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          alert("no funciono todavía perdona las molestías");
        });
      });
    });
  },
};
