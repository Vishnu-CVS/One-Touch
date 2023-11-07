function populateTable(sector, tableId) {
    fetch(`${sector}.csv`) 
        .then(response => response.text())
        .then(data => {
            const links = data.split('\n').map(line => line.split(','));
            const tbody = document.querySelector(`#${tableId} tbody`);

            for (let index = 1; index < links.length; index++) { 
                const link = links[index];
                if (link.length === 3) { 
                    const [name, address, comments] = link;
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${index}</td>
                        <td>${name}</td>
                        <td><a href="${address}" target="_blank">${address}</a></td>
                        <td class="comments-cell">${comments}</td> 
                    `;

                    tbody.appendChild(row);
                }
            }
        });
}

window.addEventListener("load", () => {
    // Populate tables for each sector
    populateTable("Infra", "infra-table");
    populateTable("Pharma", "pharma-table");
    populateTable("Retail", "retail-table");
    populateTable("Dcc", "dcc-table");
    populateTable("new-joiners", "new-joiners-table");
});


document.addEventListener("DOMContentLoaded", function () {
    const dropDownContainer = document.getElementById("drop-down-container");

    setTimeout(function () {
        dropDownContainer.style.display = "block";
    }, 100); 
});
