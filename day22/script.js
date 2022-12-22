let data = [];
let path = [];
let direction = 0;//0 = right, 1 = down, 2 = left, 3 = up
let position = { x: 0, y: 0 };

fetch('./input.txt').then(r => r.text()).then(
    s => {
        let isPath = false;
        s.split('\r\n').map(i => {
            !isPath ? (i == "" ? isPath = true : data.push(i.split(""))) : path = i;
        })
        path = path.replace(/L/g, "-L-");
        path = path.replace(/R/g, "-R-");
        path = path.split("-");
        fillData();
        drawMap();
        getStartPosition();
        walkMap();
        console.log("result:" + (1000 * (position.y + 1) + 4 * (position.x + 1) + direction));
    }
)

function fillData() {
    let dataXlength = 0;
    data.map(i => {
        if (i.length > dataXlength) dataXlength = i.length;
    });
    data.map(i => {
        while (i.length < dataXlength) { i.push(" "); }
    });
}

function getStartPosition() {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] == ".") {
                position.x = j;
                position.y = i;
                return
            }
        }
    }
}

function walkMap() {
    for (a = 0; a < path.length; a++) {
        //mark current position
        document.getElementById("y" + position.y + "-x" + position.x).classList.add("current");
        //
        if (path[a] == 'R') { direction++ }
        if (path[a] == 'L') { direction-- }
        if (direction > 3) { direction = 0 }
        if (direction < 0) { direction = 3 }
        //
        if ((path[a] != 'R') && (path[a] != 'L')) {
            //console.log(direction + "-" + path[a]);
            for (b = 0; b < Number(path[a]); b++) {
                currentPosition = { ...position };
                if (direction == 0) { position.x++ }
                if (direction == 1) { position.y++ }
                if (direction == 2) { position.x-- }
                if (direction == 3) { position.y-- }
                //check bounds
                checkBounds();
                //check white
                if (data[position.y][position.x] == " ") {
                    if (direction == 0) {
                        while (data[position.y][position.x] == " ") {
                            position.x++;
                            checkBounds();
                        }
                    }
                    if (direction == 1) {
                        while (data[position.y][position.x] == " ") {
                            position.y++;
                            checkBounds();
                        }
                    }
                    if (direction == 2) {
                        while (data[position.y][position.x] == " ") {
                            position.x--;
                            checkBounds();
                        }
                    }
                    if (direction == 3) {
                        while (data[position.y][position.x] == " ") {
                            position.y--;
                            checkBounds();
                        }
                    }
                }
                //check wall
                if (data[position.y][position.x] == "#") {
                    position = currentPosition;
                }
                document.getElementById("y" + position.y + "-x" + position.x).classList.add("visited");
            }
        }
    }
}

function checkBounds() {
    if (position.y < 0) { position.y = data.length - 1 }
    if (position.x < 0) { position.x = data[0].length - 1 }
    if (position.y > data.length - 1) { position.y = 0 }
    if (position.x > data[0].length - 1) { position.x = 0 }
}

function drawMap() {
    for (y = 0; y < data.length; y++) {
        document.getElementById("container").innerHTML += `<div id="y${y}" class="row"></div>`;
        for (x = 0; x < data[y].length; x++) {
            let color = "";
            if (data[y][x] == "") {
                color = "white";
            }
            if (data[y][x] == ".") {
                color = "lightgray";
            }
            if (data[y][x] == "#") {
                color = "black";
            }
            document.getElementById("y" + y).innerHTML += `<div id="y${y}-x${x}" class="cell" style="background-color:${color}"></div>`;
        }
    }
}