var firebaseConfig = {
    apiKey: "AIzaSyCoj5WF16zvfuDvJtJpFNYIsuNwAd8X7e0",
    authDomain: "uchat1-28fcc.firebaseapp.com",
    databaseURL: "https://uchat1-28fcc-default-rtdb.firebaseio.com",
    projectId: "uchat1-28fcc",
    storageBucket: "uchat1-28fcc.appspot.com",
    messagingSenderId: "835377439699",
    appId: "1:835377439699:web:c6bf3f9d84e599f9f9c526"
  };
  firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
function addRoom(){
    room_name=document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
    purpose : "It exists and acts as an room"
    });
    
    localStorage.setItem("room_name", room_name);
    window.location = "uchat_page.html";
    
    }
    
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="uchat_page.html";
    }
    function logoutboi(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }