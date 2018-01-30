/* ++++++++++++ Initialize Firebase ++++++++++ */
var config = {
    apiKey: "AIzaSyC0Mm77qD91FvT1x4YWY_3NEtSx3Hkbh4c",
    authDomain: "pruebas-3d15a.firebaseapp.com",
    databaseURL: "https://pruebas-3d15a.firebaseio.com",
    projectId: "pruebas-3d15a",
    storageBucket: "pruebas-3d15a.appspot.com",
    messagingSenderId: "437883428230"
  };
  firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();


$('#login').click(function(){
	firebase.auth()
	.signInWithPopup(provider)
	.then(function(result) {
		console.log(result.user);
		saveDate(result.user);
		$('#login').hide();
		$('#root').append("<img width='100px' src='"+result.user.photoURL+"''/>");
    $('#name').append(result.user.displayName);
    $('#email').append(result.user.email);
	})
});

// Funcion guarda automaticamente al usuario que se loguea con gmail
function saveDate(user) {
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("pruebas/" + user.uid)
  .set(usuario)   //modifica la llave

}

//Escribir en BD

$('#guardar').click(function(){
  firebase.database().ref("pruebas")
  .set({
    nombre:"Ivon",
    edad:"20",
    sexo:"mucho"
  })
});

// $('#guardar').click(function(){
//   firebase.database().ref("pruebas")
//   .set($('#input'))
// });

// aqui estoy leyendo de la BD
// firebase.database().ref("pruebas")
// .on("child_added", function() {
//   var user = s.val();
//   	$('#root').append("<img width='100px' src='"+user.foto+"''/>");
//
// })
