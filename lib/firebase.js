

export const firebaseFunctions = {

loginGoogle: () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)

    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).then(() => {
        window.location.assign('#/feed');
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

registerUser : ( registerUser, registerMail, registerPass)=>{
  firebase.auth().createUserWithEmailAndPassword(registerMail, registerPass)
    .then(() => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
      displayName: registerUser,
      });
      user.sendEmailVerification()
      alert('Verifica tu correo electrónico para luego iniciar sesión');
      console.log(sendEmailVerification()); 
    })
    .catch((error) => {
      let errorCode = error.code;
      switch (errorCode) {
        case "auth/weak-password":
          alert("La contraseña debe tener entre 6 y 8 caracteres");
          cleanFormSignUp();
          break;
        case "auth/invalid-email":
          alert("La dirección de correo electrónico no es correcta");
          cleanFormSignUp();
          break;
        case "auth/email-already-in-use":
          alert("Este usuario ya existe");
          cleanFormSignUp();
          break;
      }
    });
}}
