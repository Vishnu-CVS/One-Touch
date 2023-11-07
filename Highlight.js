function highlightToolsRows() {
    const table = document.getElementById("dcc-table");

    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName("td");

        if (cells.length > 1) {
            if (cells[1].textContent.trim() === "Tools") {
                row.style.backgroundColor = "yellow"; // Change to your desired highlight color
                row.style.fontWeight = "bold"; // Optionally, make the text bold
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Call the function to highlight rows with "Tools"
    highlightToolsRows();
});
