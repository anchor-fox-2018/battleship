/*
grid = board
ships = ships name
shipsSize = each ships' size
orientation = randomize vertical or horizontal
    1 = -
    0 = |
fullDyanmic = coordinate yang bebas sampe 9
limitedDynamic = coordinate yang 9 - panjang kapal

////////////

bombs = the input from process.argv
alphabet = the string that each process.argv refers to
*/

function battleship() {
    //make board
    let grid = [];
    for (let i = 0; i <= 9; i++) {
        let childGrid = [];
        for (let c = 0; c <= 9; c++) {
            childGrid.push(' ');
        }
        grid.push(childGrid);
    }

    //push ships
    let ships = ['C', 'B', 'S', 'D'];
    let shipsSize = [5, 4, 3, 2];

    for (let i = 0; i < ships.length; i++) {
        let orientation = Math.round(Math.random());
        let fullDynamic = Math.round(Math.random() * 9);
        let limitedDynamic = Math.abs(Math.round(Math.random() * 9 - shipsSize[i]));

        //check if filled (horizontal)
        if (orientation === 1) {
            let filled = false;
            for (let c = limitedDynamic; c <= 9; c++) {
                if (grid[fullDynamic][c] !== ' ') {
                    filled = true;
                    break;
                }
            }

            //do the pushing (horizontal)
            if (filled === false) {
                for (let n = limitedDynamic; n <= limitedDynamic - 1 + shipsSize[i]; n++) {
                    grid[fullDynamic][n] = ships[i];
                }
            }

            //if something is in the way? (horizontal)
            else {

            }
        }
        //check if filled (vertical)
        else if (orientation === 0) {
            let filled = false;
            for (let c = limitedDynamic; c <= 9; c++) {
                if (grid[c][fullDynamic] !== ' ') {
                    filled = true;
                    break;
                }
            }

            //do the pushing (vertical)
            if (filled === false) {
                for (let n = limitedDynamic; n <= limitedDynamic - 1 + shipsSize[i]; n++) {
                    grid[n][fullDynamic] = ships[i];
                }
            }

            //if something is in the way? (vertical)
            else {

            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    let bombs = [];
    
    //converting argv
    for (let p = 2; p <= 11; p++) {
        let translateBombs = process.argv[p].toLowerCase().split('');
        let alphabet = 'abcdefghij';

        //changing first element
        translateBombs[0] = alphabet.indexOf(translateBombs[0]);

        //changing second element
        if (translateBombs.length === 3) {
            translateBombs[1] = 9;
            translateBombs.splice(2, 1);
        }
        else {
            translateBombs[1]--;
        }

        bombs.push(translateBombs);
    }

    //adding 'X'
    let hit = 0;
    let miss = 0;
    for (let q = 0; q < bombs.length; q++) {
        if (grid[bombs[q][1]][bombs[q][0]] !== ' ') {
            hit += 1;
        }
        else if (grid[bombs[q][1]][bombs[q][0]] === ' ') {
            miss += 1;
        }
        grid[bombs[q][1]][bombs[q][0]] = 'X';
    }

    console.log(grid);
    console.log(`HIT: ${hit}`);
    console.log(`MISS: ${miss}`);

}

battleship()