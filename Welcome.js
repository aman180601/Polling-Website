firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")
    } else {
        document.getElementById("user").innerHTML = "Hello  " + user.email;
    }
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function logout() {
    firebase.auth().signOut()
}



firebase.database().ref().on("value", (snapshot) => {
    document.getElementById("alpha").innerHTML = "value in database is: " + snapshot.val();
});