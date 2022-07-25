function saveData() {
    window.location = "kwitter_roomList.html";
    var username = document.getElementById("user_name").value;
    localStorage.setItem("users", username);
}