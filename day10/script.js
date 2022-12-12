let result1 = 0;
let result2 = 0;

let x = 1;

fetch('./testinput.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            move(i.split(" ")[0],i.split(" ")[1]);
        })        
    }
)
function move(i,j)
{
    console.log(i + "-" + j);
}
