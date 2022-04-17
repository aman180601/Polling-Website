var messageRef = firebase.database().ref('message');

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

document.getElementById('create').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();

    var pollname = getInputVal('pollname');
    var option1 = getInputVal('pollop1');
    var option2 = getInputVal('pollop2');
    var option3 = getInputVal('pollop3');
    var option4 = getInputVal('pollop4');
    savemessage(pollname, option1, option2, option3, option4);
}

function getInputVal(id) {
    return document.getElementById(id).value;

}

function savemessage(pollname, option1, option2, option3, option4) {
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        pollname: pollname,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4
    })
}

function listitem(pollname, option1, option2, option3, option4) {
    var ul = document.getElementById('list');

    var pname = document.createElement('li');
    var opt1 = document.createElement('li');
    var opt2 = document.createElement('li');
    var opt3 = document.createElement('li');
    var opt4 = document.createElement('li');


    pname.innerHTML = 'Poll Name: ' + pollname;
    opt1.innerHTML = 'Option1: ' + option1;
    opt2.innerHTML = 'Option2: ' + option2;
    opt3.innerHTML = 'Option3: ' + option3;
    opt4.innerHTML = 'Option4: ' + option4;

    ul.appendChild(pname);
    ul.appendChild(opt1);
    ul.appendChild(opt2);
    ul.appendChild(opt3);
    ul.appendChild(opt4);
}

function myPolls() {
    messageRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let pname = childSnapshot.val().pollname;
            let opt1 = childSnapshot.val().option1;
            let opt2 = childSnapshot.val().option2;
            let opt3 = childSnapshot.val().option3;
            let opt4 = childSnapshot.val().option4;
            listitem(pname, opt1, opt2, opt3, opt4);
        });
    });
}