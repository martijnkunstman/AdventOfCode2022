//
//quick and dirty don't bother converting the stacks to array from textfile...
//
//        [H]         [S]         [D]
//    [S] [C]         [C]     [Q] [L]
//    [C] [R] [Z]     [R]     [H] [Z]
//    [G] [N] [H] [S] [B]     [R] [F]
//[D] [T] [Q] [F] [Q] [Z]     [Z] [N]
//[Z] [W] [F] [N] [F] [W] [J] [V] [G]
//[T] [R] [B] [C] [L] [P] [F] [L] [H]
//[H] [Q] [P] [L] [G] [V] [Z] [D] [B]
// 1   2   3   4   5   6   7   8   9
//
//
//    [D]    
//[N] [C]    
//[Z] [M] [P]
// 1   2   3 
//
//let data = ["NZ", "DCM", "P"]; //test
//
let data = ["DZTH", "SCGTWRQ", "HCRNQFBP", "ZHFNCL", "SQFLG", "SCRBZWPV", "JFZ", "QHRZVLD", "DLZFNGHB"];
let dataCopy = [...data];
let instructions = [];
let result1 = "";
let result2 = "";

fetch('./input.txt').then(r => r.text()).then(
    d => {
        d = d.split("move");
        d.map(
            (item, index) => {
                if (index > 0) {
                    instructions.push([Number(item.split(" ")[1]), Number(item.split(" ")[3])-1, Number(item.split(" ")[5])-1])
                }
            }
        )
        instructions.map(
            item => {
                for (let i = 0; i < item[0]; i++) {
                    data[item[2]] = data[item[1]][0] + data[item[2]];
                    data[item[1]] = data[item[1]].slice(1);
                }                
            }
        )
        
        instructions.map(
            item => {
                    dataCopy[item[2]] = dataCopy[item[1]].slice(0, item[0]) + dataCopy[item[2]];
                    dataCopy[item[1]] = dataCopy[item[1]].slice(item[0]);
           }
        )

        data.map(item => result1 += item[0]);
        dataCopy.map(item => result2 += item[0]);

        console.log(result1+" - "+result2);
        document.body.innerHTML += result1 + "<br>" + result2;
    }
)