/// lots op refactoring to do, but can't be bothered to do it

let dataObject = { files: [], total: 0 };
let dir = [];
let sizeCounter = 0;
let dirfound = 70000000;

fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            if (i.substring(0, 1) == "$") {
                if (i.substring(0, 5) == "$ cd ") {
                    let dodir = i.split(" ")[2];
                    if (dodir == "..") {
                        dir.pop();
                    }
                    else {
                        if (dodir != "/") dir.push(dodir);
                    }
                }
            }
            else {
                if (i.substring(0, 4) == "dir ") {
                    let place = dataObject;
                    dir.map(x => place = place[x]);
                    place[i.substring(4, i.length)] = { files: [], total: 0 }
                }
                else {
                    let place = dataObject;
                    place.total += Number(i.split(" ")[0]);
                    dir.map(x => {
                        place = place[x];
                        place.total += Number(i.split(" ")[0]);
                    });
                    place["files"].push({ name: i.split(" ")[1], size: Number(i.split(" ")[0]) });
                }
            }
        });
        dirsizetodelete = 30000000-(70000000-41111105);
        console.log(dataObject);
        iter(dataObject)
        console.log(sizeCounter);
        console.log(dirfound);
    }
)

function iter(o) {
    Object.keys(o).forEach(function (k) {
        if (o[k] !== null && typeof o[k] === 'object') {
            iter(o[k]);
            return;
        }
        if (k === 'total') {
            if ((o[k] <= dirfound)&&(o[k] >= dirsizetodelete)) {
                dirfound = o[k];
            }
            if (o[k] <= 100000) {
                sizeCounter = sizeCounter + o[k];
            }
        }
    });
}