/// lots op refactoring to do, but can't be bothered to do it

let forrest = [];
let result1 = 0;


fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            forrest.push(i.split(""));
        });
        forrest.map((i,index1)=>i.map((j,index2)=>{
            result1 += lookup(index1, index2);
        }));
        console.log("result1:" + result1);
    }
)

function lookup(i, j) {
    if ((i == 0)|| (j == 0) || (i == forrest.length - 1) || (j == forrest[0].length - 1)) { return 1}
    if (forrest[i][j] > Math.max(...forrest[i].slice(0, j))) { return 1 }
    if (forrest[i][j] > Math.max(...forrest[i].slice(j+1, forrest[i].length))) { return 1 }
    let tempArray = [];
    forrest.map((ii,index1)=>ii.map((jj,index2)=>{
        if (j==index2)
        {
            tempArray.push(forrest[index1][index2]);
        }
    }));
    if (forrest[i][j] > Math.max(...tempArray.slice(0, i))) { return 1 }
    if (forrest[i][j] > Math.max(...tempArray.slice(i+1, tempArray.length))) { return 1 }
    return 0;
}

