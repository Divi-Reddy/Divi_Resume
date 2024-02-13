$(document).ready(function () {
    $("#dd-button").on("click", function () {
        $("#dropdown").toggleClass("hidden");
    });
});
$(document).ready(function () {
    $("#dd-button2").on("click", function () {
        $("#dropdown").toggleClass("hidden");
    });
});

function downloadCV() {
    var link = document.createElement('a');
    link.style.display = "none";
    link.href = 'https://drive.google.com/uc?export=download&id=1-PkBl_rck0laLE_Ex12GPfcKjz3BLUOQ';
    link.download = 'Divijendra_Resume.pdf';
    link.click();
}
function hide() {
    $("#dropdown").toggleClass("hidden");

}