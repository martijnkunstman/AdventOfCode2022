fetch('./input.txt').then(r => r.text()).then(
    (d) => {
        d = d.split(/\n/g);
        let scorepart1 = 0, scorepart2 = 0, tempArray;
        d.map(
            (s, i) => {
                //part 1
                let letter = s.split("").filter((item, index, array) => (array.indexOf(item) != index) && (index >= array.length / 2) && (array.indexOf(item) < array.length / 2))[0];
                scorepart1 += letter.charAt(0).charCodeAt(0) - 96 < 0 ? letter.charAt(0).charCodeAt(0) - 38 : letter.charAt(0).charCodeAt(0) - 96;
                //part 2
                if (!(i % 3)) {
                    tempArray = [];
                }
                tempArray.push(s);
                if (tempArray.length == 3) { 
                    letter = _.intersection(tempArray[0].split(""), tempArray[1].split(""), tempArray[2].split(""))[0];
                    scorepart2 += letter.charAt(0).charCodeAt(0) - 96 < 0 ? letter.charAt(0).charCodeAt(0) - 38 : letter.charAt(0).charCodeAt(0) - 96;
                }            
            }
        )
        console.log(scorepart1);
        console.log(scorepart2);
        document.body.innerHTML += scorepart1 + "<br>" + scorepart2;
    }
)