
// export const savePublish = (postContent) => {
//   const db = firebase.firestore();
//   const user = firebase.auth().currentUser;
//   db.collection("post").add({
//     name: user.displayName,
//     post: postContent,
//     date: firebase.firestore.FieldValue.serverTimestamp(),
//     userId: user.uid,
//     like:[],
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });


// }
