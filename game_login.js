function addUser() {
    player1_name = document.getElementById("player1Name").value;
    player2_name = document.getElementById("player2Name").value;

    localStorage.setItem("player1Name", player1_name);
    localStorage.setItem("player2Name", player2_name);

    window.location = "game_page.html";
}