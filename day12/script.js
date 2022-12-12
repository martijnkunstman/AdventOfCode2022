let result1 = 0;
let result2 = 0;
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
                if (heightMap[i][j] == "S") {
                    startPoint = [i, j];
                }
                if (heightMap[i][j] == "E") {
                    endPoint = [i, j];
                }
                heightMap[i][j] = heightMap[i][j].charCodeAt(0) - 97;
            }
        }
        console.log(heightMap)
        console.log(startPoint);
        console.log(endPoint);
        showHeightMap();
        //
        var graph = new Graph(heightMap);
        var start = graph.grid[startPoint[0]][startPoint[1]];
        var end = graph.grid[endPoint[0]][endPoint[1]];
        result = astar.search(graph, start, end);

        console.log(result);
        showResult();
        //
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
            newDiv.id = "pixel_" + i +"_"+j ;
            newDiv.style.backgroundColor = "red";
            newDiv.style.opacity = heightMap[i][j] / 26;
            container.appendChild(newDiv);
        }
        const newDiv = document.createElement("br");
        container.appendChild(newDiv);
    }
}
//175 to low
function showResult() {
    for (let i = 0; i < result.length; i++) {        
        document.getElementById("pixel_" + result[i].x + "_" + result[i].y).style.backgroundColor = "green";
        document.getElementById("pixel_" + result[i].x + "_" + result[i].y).style.opacity = 1;
    }
}

