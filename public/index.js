var db = firebase.firestore();
function storeData(){
        var mypost = document.getElementById("writeherediv").value
        db.collection("confessions").add({
            name: mypost
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        var post = document.querySelector("#post");

            db.collection("confessions").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                 //console.log(doc.id, " => ", doc.data());
              post.innerHTML = '<div class="col" id="colpost"> <p id="postpara"> '+ doc.data().name +' </p> </div>';
                });
            });
}

   
/**db.collection("cities").add({
    name: "Tokyo",
    country: "Japan"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});     **/
