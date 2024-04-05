const container = document.querySelector(".container");
let rainbowToggle = false;

function randRGBVal() {
    return Math.floor(Math.random() * 255);
}

// Row of n cells
function createRow(n) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    // Create square cells
    for (let i = 0; i < n; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        // square.style.opacity = 0.5;
        // Make them react to hovers
        square.addEventListener("mouseover", () => {
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = rainbowToggle ? `rgb(${randRGBVal()}, ${randRGBVal()}, ${randRGBVal()})` : 'black';
            }
            // Also increase opacity by 10% every hover
            let currOpacity = square.style.opacity;
            currOpacity *= 100;
            currOpacity += 10;
            square.style.opacity = currOpacity + "%";
        });

        console.log(`Added to row16 ${i}`);
        row.appendChild(square);
    }
    return row;
}
// Setup phase
function setupGrid(n = 16) {
    // Add n rows to the container
    for (let i = 0; i < n; i++) {
        container.appendChild(createRow(n));
        console.log(`Added to container ${i}`);
    }
}

setupGrid();

// Grid button
const gridBtn = document.getElementById("resetGrid");
gridBtn.addEventListener("click", () => {
    let newN = -1;
    while (!(0 < newN && newN <= 100)) {
        newN = parseInt(prompt("New grid size (1-100 only): "));
    }
    // Remove old grid
    const cont = document.querySelector(".container");
    cont.replaceChildren();
    // Set up new grid
    setupGrid(newN);
});

// Rainbow toggle button
const rgbBtn = document.getElementById('rainbow')
rgbBtn.addEventListener('click', () => rainbowToggle = !rainbowToggle)
