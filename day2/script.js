fetch('./input.txt').then(r => r.text()).then(
    (d) => {    
        d = d.split(/\n/g).map(x=>x=x.split(" "))
        score = 0;
        scorepart2 = 0;
        d.map(x=>{
            //A = Rock = X = 1
            //B = Paper = Y = 2
            //C = Scissors = Z = 3

            //part 1
            if (x[0]=="A"){
                if (x[1]=="X"){
                    score = score + 1;//Rock
                    score = score + 3;//draw
                }
                if (x[1]=="Y"){
                    score = score + 2;//Paper
                    score = score + 6;//win
                }
                if (x[1]=="Z"){
                    score = score + 3;//Scissors
                    score = score + 0;//lose
                }
            }
            if (x[0]=="B"){
                if (x[1]=="X"){
                    score = score + 1;//Rock
                    score = score + 0;//lose
                }
                if (x[1]=="Y"){
                    score = score + 2;//Paper
                    score = score + 3;//draw
                }
                if (x[1]=="Z"){
                    score = score + 3;//Scissors
                    score = score + 6;//win
                }               
            }
            if (x[0]=="C"){               
                if (x[1]=="X"){
                    score = score + 1;//Rock
                    score = score + 6;//win
                }
                if (x[1]=="Y"){
                    score = score + 2;//Paper
                    score = score + 0;//lose
                }
                if (x[1]=="Z"){
                    score = score + 3;//Scissors
                    score = score + 3;//draw
                }
            }
            
            //part 2
            if (x[1]=="X"){
                //lose
                scorepart2 = scorepart2 + 0;
                if (x[0]=="A"){
                    scorepart2 = scorepart2 + 3;//Scissors loses from Rock
                }
                if (x[0]=="B"){
                    scorepart2 = scorepart2 + 1;//Rock loses from Paper
                }
                if (x[0]=="C"){
                    scorepart2 = scorepart2 + 2;//Paper loses from Scissors 
                }
            }
            if (x[1]=="Y"){
                //draw
                scorepart2 = scorepart2 + 3;
                if (x[0]=="A"){
                    scorepart2 = scorepart2 + 1;//Rock draw Rock
                }
                if (x[0]=="B"){
                    scorepart2 = scorepart2 + 2;//Paper draw Paper
                }
                if (x[0]=="C"){
                    scorepart2 = scorepart2 + 3;//Scissors draw Scissors 
                }

            }
            if (x[1]=="Z"){
                //win
                scorepart2 = scorepart2 + 6;
                if (x[0]=="A"){
                    scorepart2 = scorepart2 + 2;//Paper win from Rock
                }
                if (x[0]=="B"){
                    scorepart2 = scorepart2 + 3;//Scissors win from Paper
                }
                if (x[0]=="C"){
                    scorepart2 = scorepart2 + 1;//Rock win from Scissors 
                }
            }
        });
        console.log("score:"+score);
        console.log("scorepart2:"+scorepart2);
    }
)