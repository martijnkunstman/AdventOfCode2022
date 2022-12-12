/// lots op refactoring to do, but can't be bothered to do it

let forrest = [];
let result1 = 0;
let result2 = 0;
let scenic = [];


fetch('./testinput.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            forrest.push(i.split(""));
        });
        forrest.map((i, index1) => {
            scenic.push([]);
            i.map((j, index2) => {
                result1 += lookup(index1, index2);
                scenic[index1][index2] = lookup2(index1, index2);
            })
        });
        console.log("result1:" + result1);
        console.log(scenic);
        console.log("resukt2:" + Math.max(...scenic.flat()));
    }
)
function lookup2(i, j) {
    if ((i == 0) || (j == 0) || (i == forrest.length - 1) || (j == forrest[0].length - 1)) { return 0 }
    //lookup howmany trees you can see from this one
    let count = 0;
    let leftArray = [...forrest[i].slice(0, j)].reverse();
    let rightArray = [...forrest[i].slice(j + 1, forrest[i].length)];
    
    let left=1;
    let right=1;
    let down=1;
    let up=1;

    for (let k = 0; k < leftArray.length; k++) {
      
    } 
    return left*right*down*up;
}

function lookup(i, j) {
    if ((i == 0) || (j == 0) || (i == forrest.length - 1) || (j == forrest[0].length - 1)) { return 1 }
    if (forrest[i][j] > Math.max(...forrest[i].slice(0, j))) { return 1 }
    if (forrest[i][j] > Math.max(...forrest[i].slice(j + 1, forrest[i].length))) { return 1 }
    let tempArray = [];
    forrest.map((ii, index1) => ii.map((jj, index2) => {
        if (j == index2) {
            tempArray.push(forrest[index1][index2]);
        }
    }));
    if (forrest[i][j] > Math.max(...tempArray.slice(0, i))) { return 1 }
    if (forrest[i][j] > Math.max(...tempArray.slice(i + 1, tempArray.length))) { return 1 }
    return 0;
}

