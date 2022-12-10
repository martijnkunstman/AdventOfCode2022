/// lots op refactoring to do, but can't be bothered to do it

let moves = [];
let result1 = 0;
let positionH = [0, 0];
let positionT = [0, 0];
let result1array = [];


fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            moves.push(i.split(" "));
        });
        moves.map(i => {
            move(i[0], i[1]);
        });
        console.log(result1array);
        result1 = [...new Set(result1array)].length;
        console.log(result1);
    }
)


function move(d, i) {
    for (j = 0; j < i; j++) {
        switch (d) {
            case 'L':
                positionH[0]--
                break;
            case 'R':
                positionH[0]++
                break;
            case 'U':
                positionH[1]++
                break;
            case 'D':
                positionH[1]--
                break;
        }
        if ((positionT[0] + 1 < positionH[0])) {
            positionT[0]++;
            if ((positionT[1] < positionH[1])) {
                positionT[1]++;
            }
            if ((positionT[1] > positionH[1])) {
                positionT[1]--;
            }
        }
        if ((positionT[0] - 1 > positionH[0])) {
            positionT[0]--;
            if ((positionT[1] < positionH[1])) {
                positionT[1]++;
            }
            if ((positionT[1] > positionH[1])) {
                positionT[1]--;
            }
        }
        if ((positionT[1] + 1 < positionH[1])) {
            positionT[1]++;
            if ((positionT[0] < positionH[0])) {
                positionT[0]++;
            }
            if ((positionT[0] > positionH[0])) {
                positionT[0]--;
            }
        }
        if ((positionT[1] - 1 > positionH[1])) {
            positionT[1]--;
            if ((positionT[0] < positionH[0])) {
                positionT[0]++;
            }
            if ((positionT[0] > positionH[0])) {
                positionT[0]--;
            }
        }
        result1array.push(positionT[0] + "-" + positionT[1]);
    }
}