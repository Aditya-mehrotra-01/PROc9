
var firebaseConfig = {
    apiKey: "AIzaSyDVrcULrBMCuoP6LL3jjARW5-VNCs2YglM",
    authDomain: "kwitter-52769.firebaseapp.com",
    projectId: "kwitter-52769",
    storageBucket: "kwitter-52769.appspot.com",
    messagingSenderId: "237411866089",
    appId: "1:237411866089:web:a390994190370ffa9d2778"
  };

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        

    });
    document.getElementById("msg").value="";
}

