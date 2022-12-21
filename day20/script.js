let result1 = 0;
let result2 = 0;
let numberArray = [];
let numberArray2 = [];
let copyArray;
let copyArray2;
let factor = 811589153;

//1, 2, -3, 3, -2, 0, 4 start
//1, 2, -3, 4, 0, 3, -2 end

fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map((item, index) => {
            numberArray.push([index, parseInt(item)]);
            numberArray2.push([index, parseInt(item) * factor]);
        })

        //part 1

        copyArray = [...numberArray];
        for (i = 0; i < numberArray.length; i++) {
            let value = numberArray[i];
            indexOfItemToMove = value[0];
            howMuchToMove = value[1];
            indexOfItemToMoveInArray = findIndex(copyArray, indexOfItemToMove);
            newIndexOfItemToMoveInArray = indexOfItemToMoveInArray + howMuchToMove;
            newIndexOfItemToMoveInArray = moduloNegative(newIndexOfItemToMoveInArray, (copyArray.length - 1))
            array_move(copyArray, indexOfItemToMoveInArray, newIndexOfItemToMoveInArray)
        }
        for (a = 0; a < copyArray.length; a++) {
            console.log(copyArray[a][1]);
        }
        for (a = 0; a < copyArray.length; a++) {
            if (copyArray[a][1] == 0) {
                zeroIndex = a;
                index1000 = (zeroIndex + 1000) % (copyArray.length);
                result1 += copyArray[index1000][1];
                index2000 = (zeroIndex + 2000) % (copyArray.length);
                result1 += copyArray[index2000][1];
                index3000 = (zeroIndex + 3000) % (copyArray.length);
                result1 += copyArray[index3000][1];
                console.log("result1:" + result1);
                break;
            }
        }

        //part 2   

        copyArray2 = [...numberArray2];

        for (ii = 0; ii < 10; ii++) {
            for (i = 0; i < numberArray2.length; i++) {
                let value = numberArray2[i];
                indexOfItemToMove = value[0];
                howMuchToMove = value[1];
                indexOfItemToMoveInArray = findIndex(copyArray2, indexOfItemToMove);
                newIndexOfItemToMoveInArray = indexOfItemToMoveInArray + howMuchToMove;
                newIndexOfItemToMoveInArray = moduloNegative(newIndexOfItemToMoveInArray, (copyArray2.length - 1))
                array_move(copyArray2, indexOfItemToMoveInArray, newIndexOfItemToMoveInArray)
            }
        }

        for (a = 0; a < copyArray2.length; a++) {
            console.log(copyArray2[a][1]);
        }

        for (a = 0; a < copyArray2.length; a++) {
            if (copyArray2[a][1] == 0) {
                zeroIndex = a;
                index1000 = (zeroIndex + 1000) % (copyArray2.length);
                result2 += copyArray2[index1000][1];
                index2000 = (zeroIndex + 2000) % (copyArray2.length);
                result2 += copyArray2[index2000][1];
                index3000 = (zeroIndex + 3000) % (copyArray2.length);
                result2 += copyArray2[index3000][1];
                console.log("result2:" + result2);
                break;
            }
        }
    }
)

function moduloNegative(x, m) {
    return (x % m + m) % m;
}

function findIndex(array, indexOfItemToMove) {
    for (a = 0; a < array.length; a++) {
        if (array[a][0] == indexOfItemToMove) {
            return a;
        }
    }
}

function array_move(array, old_index, new_index) {
    if (old_index != new_index) {
        while (old_index < 0) {
            old_index += array.length;
        }
        while (new_index < 0) {
            new_index += array.length;
        }
        if (new_index >= array.length) {
            var k = new_index - array.length + 1;
            while (k--) {
                array.push(undefined);
            }
        }
        array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    }
};