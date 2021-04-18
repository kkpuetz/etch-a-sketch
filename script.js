// create box for the cells
const grid = document.createElement('div');
grid.classList.add('grid')
container.appendChild(grid);

// add cells to the box
for (i = 0; i < 16 * 16; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell')
    // cell.textContent = 'K';
    grid.appendChild(cell);
}

