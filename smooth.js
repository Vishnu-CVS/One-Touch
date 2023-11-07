document.addEventListener("DOMContentLoaded", function () {
    const dropDownContainer = document.getElementById("drop-down-container");
    dropDownContainer.style.display = "block";

    // Call the typing animation when DOM done 
    typeTextAnimation();
});

function typeTextAnimation() {
    const dropDownContainer = document.getElementById("drop-down-container");
    const text = dropDownContainer.textContent.trim(); 
    const words = text.split(" "); 
    let index = 0;

    function revealWord() {
        if (index < words.length) {
            dropDownContainer.textContent = words.slice(0, index + 1).join(" ");
            index++;
            setTimeout(revealWord, 100); 
        }
    }

    // Start the typing animation immediately
    revealWord();
}
