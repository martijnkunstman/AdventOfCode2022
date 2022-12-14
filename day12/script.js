let result1 = 0;
let result2 = 1000000;
let result;
let startPoint;
let endPoint;
let heightMap = [];
let container = document.getElementById("container");

fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            heightMap.push(i.split(""));
        })
        for (let i = 0; i < heightMap.length; i++) {
            for (let j = 0; j < heightMap[i].length; j++) {
                found = false;
                if (heightMap[i][j] == "S") {
                    startPoint = [i, j];
                    heightMap[i][j] = 0;
                    found = true;
                }
                if (heightMap[i][j] == "E") {
                    endPoint = [i, j];
                    heightMap[i][j] = 26;
                    found = true;
                }
                if (!found) {
                    heightMap[i][j] = heightMap[i][j].charCodeAt(0) - 97;
                }
            }
        }
        showHeightMap();
        //
        // part 1
        // 
        console.log("part 1");
        var graph = new Graph(heightMap);
        var start = graph.grid[startPoint[0]][startPoint[1]];
        //console.log("start", start); 
        var end = graph.grid[endPoint[0]][endPoint[1]];
        result = astar.search(graph, start, end);
        showResult();
        //
        // part 2
        // 
        console.log("part 2");
        for (let i = 0; i < heightMap.length; i++) {
            for (let j = 0; j < heightMap[i].length; j++) {
                if (heightMap[i][j] == 0) {
                    console.log("found:" +i +"-" + j );
                    var start = graph.grid[i][j];
                    result = astar.search(graph, start, end);
                    console.log(result.length);
                }
            }
        }
        
    }
)



let counter = 0;
function showHeightMap() {
    for (let i = 0; i < heightMap.length; i++) {
        for (let j = 0; j < heightMap[i].length; j++) {
            //console.log(counter);
            counter++;
            const newDiv = document.createElement("div");
            newDiv.className = "pixel";
            newDiv.id = "pixel_" + i + "_" + j;
            //newDiv.style.backgroundColor = "rgba("+(255*heightMap[i][j] / 26)+",255,255,1)";
            newDiv.style.backgroundColor = "rgba(" + (255 * heightMap[i][j] / 26) + ",0,0,1)";
            newDiv.style.opacity = heightMap[i][j] / 26;
            container.appendChild(newDiv);
        }
        const newDiv = document.createElement("br");
        container.appendChild(newDiv);
    }
}

function showResult() {
    for (let i = 0; i < result.length; i++) {
        document.getElementById("pixel_" + result[i].x + "_" + result[i].y).style.backgroundColor = "green";
        document.getElementById("pixel_" + result[i].x + "_" + result[i].y).style.opacity = 1;
    }
    console.log("result1:" + result.length);
    //result1 = 437
}

function showResult2() {
    console.log("result2:" + result2);
    //result1 = 437
}



