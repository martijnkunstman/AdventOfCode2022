let result1 = 0;
let result2 = 0;
let array = [];

let x = 1;
let c = 0;

fetch('./testinput.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            move(i.split(" ")[0], i.split(" ")[1]);
            array.push([i.split(" ")[0], i.split(" ")[1]]);
        })
        //test should be: 13140
        console.log("result1:" + result1);
        //part 2
        drawPixels();
    }
)
function move(i, j) {
    //console.log(i + "-" + j);
    if (i == "noop") {
        c = c + 1;
    }
    if (i == "addx") {
        c = c + 1;
    }
    let found = false;
    if ((c == 20) || (!((c + 20) % 40))) {
        console.log("c:" + c + " x:" + x + " =:" + c * x);
        result1 = result1 + c * x;
        found = true;
    }
    if (i == "addx") {
        c = c + 1;
    }
    if (((c == 20) || (!((c + 20) % 40))) && (!found)) {
        console.log("c:" + c + " x:" + x + " =:" + c * x);
        result1 = result1 + c * x;
    }
    if (i == "addx") {
        x = x + Number(j);
    }
}

function drawPixels() {
    let c = 0;
    let ii = 0;
    console.log("length:" + array.length);

    for (i = 0; i < array.length; i++) {
        
        if (array[i][0] == "noop") {
            c = c + 1;
            ii++;
            document.body.innerHTML += "<div class='pixel off'>" + ii + "</div>";
            if (!(c % 40)) {
                document.body.innerHTML += "<br>";
            }
        }
        else {
            c = c + 1;
            ii++;
            document.body.innerHTML += "<div class='pixel off'>" + ii + "</div>";
            if (!(c % 40)) {
                document.body.innerHTML += "<br>";
            }
            c = c + 1;
            ii++;
            document.body.innerHTML += "<div class='pixel off'>" + ii + "</div>";
            if (!(c % 40)) {
                document.body.innerHTML += "<br>";
            }
        }
    }
}


