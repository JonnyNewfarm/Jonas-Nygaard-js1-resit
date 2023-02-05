const btn = document.getElementById("#button");
const punchlineDiv = document.getElementById("#punchline-id")



btn.addEventListener("click", function () {
    if (punchlineDiv.style.display === "block") {
        punchlineDiv.style.display = "none";
    }
    else {
        punchlineDiv.style.display = "block";
    }
});