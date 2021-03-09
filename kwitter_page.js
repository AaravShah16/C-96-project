var firebaseConfig = {
    apiKey: "AIzaSyBxvLmPglrC8iGs11ZQf3Y-LWiCEF9q8QQ",
    databaseURL: "https://kwitter-b5b77-default-rtdb.firebaseio.com/",
    authDomain: "kwitter-b5b77.firebaseapp.com",
    projectId: "kwitter-b5b77",
    storageBucket: "kwitter-b5b77.appspot.com",
    messagingSenderId: "820700805579",
    appId: "1:820700805579:web:8e6fdf68eb4ce125339e4e",
    measurementId: "G-Q9Y2XBWTEL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")
  function send(){
      msg = document.getElementById("message").value
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      })
      document.getElementById("message").value = ""
  }
  function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html"
  }