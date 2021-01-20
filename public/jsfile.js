var writeherediv = document.getElementById("writeherediv");
var button = document.getElementById("button");

function storeData(){

    var firebaseref = firebase.database().ref();

    firebaseref.child("Text").set("Some value");
}