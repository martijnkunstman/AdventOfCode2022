fetch('./input.txt').then(r => r.text()).then(
    (d) => {
        d = d.split(/\n/g);
        scorepart1 = 0;  
        scorepart2 = 0; 
        //part 1   
        d.map(            
            (s) => {           
                let letter = s.split("").filter((item, index,array) => (array.indexOf(item) != index)&&(index >= array.length/2)&&(array.indexOf(item) < array.length/2))[0];
                scorepart1 +=letter.charAt(0).charCodeAt(0)-96 < 0 ? letter.charAt(0).charCodeAt(0) - 38:letter.charAt(0).charCodeAt(0)-96;
            }
        )
        //part 2
        //todo....
        console.log(scorepart1);
        document.body.innerHTML += scorepart1 + "<br>" + scorepart2;
    }
)