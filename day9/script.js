/// lots op refactoring to do, but can't be bothered to do it

let moves = [];
let result1 = 0;
let result2 = 0;
let positionH = [0, 0];
let positionT = [0, 0];
let result1array = [];
let result2array = [];
let result2arrayHistory = [];


fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            moves.push(i.split(" "));
        });
        //
        moves.map(i => {
            move(i[0], i[1]);
        });
        result1 = [...new Set(result1array)].length;
        console.log(result1);
        //

        
        result2 = [...new Set(result2array)].length;
        console.log(result2);
    }
)

function positionNew(positionIn,positionOut)
{
    if ((positionOut[0] + 1 < positionIn[0])) {
        positionOut[0]++;
        if ((positionOut[1] < positionIn[1])) {
            positionOut[1]++;
        }
        if ((positionOut[1] > positionIn[1])) {
            positionOut[1]--;
        }
    }
    if ((positionOut[0] - 1 > positionIn[0])) {
        positionOut[0]--;
        if ((positionOut[1] < positionIn[1])) {
            positionOut[1]++;
        }
        if ((positionOut[1] > positionIn[1])) {
            positionOut[1]--;
        }
    }
    if ((positionOut[1] + 1 < positionIn[1])) {
        positionOut[1]++;
        if ((positionOut[0] < positionIn[0])) {
            positionOut[0]++;
        }
        if ((positionOut[0] > positionIn[0])) {
            positionOut[0]--;
        }
    }
    if ((positionOut[1] - 1 > positionIn[1])) {
        positionOut[1]--;
        if ((positionOut[0] < positionIn[0])) {
            positionOut[0]++;
        }
        if ((positionOut[0] > positionIn[0])) {
            positionOut[0]--;
        }
    }
    return positionOut;
}

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
        positionT = positionNew(positionH,positionT);
        result1array.push(positionT[0] + "-" + positionT[1]);
    }
}