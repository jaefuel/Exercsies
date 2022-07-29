
// Create game
let game;

// Set initial game started condition to false
let gameStarted = false;

let totalCount = 0;

// Initial message
document.querySelector(".text").innerText="Who Will Play first?";


// Player selection and start game
document.querySelectorAll("button").forEach(element => element.addEventListener("click", () => {
       
    if (!gameStarted)
    {
        game = new newGame(element.innerText);
        gameStarted = true;
    }  
}));

// Add all the boxes to an array
let boxes = document.querySelectorAll(".box");

boxes.forEach(element => element.addEventListener("click", () => {
    if (gameStarted == true && element.innerText=="")
    {
        if(game.currentP == "O")
        {
            element.innerText="o";
            game.currentP = "X";
            document.querySelector(".text").innerText=`It's ${game.currentP.toUpperCase()}'s turn!`;
            totalCount++;
            game.checkWin();
            
            console.log(totalCount);

            if(totalCount == 9 && !game.checkWin())
            {
                boxes.forEach(element => element.innerText = "");
                gameStarted = false;
                game = null;
                document.querySelector(".text").innerText="Tie. Who Will Play first?";
                totalCount=0;

            }
        }
        else if(game.currentP = "X")
        {
            element.innerText="x";
            game.currentP = "O";
            document.querySelector(".text").innerText=`It's ${game.currentP.toUpperCase()}'s turn!`;
            totalCount++;
            game.checkWin();
            console.log(totalCount);

            if(totalCount == 9 && !game.checkWin())
            {
                boxes.forEach(element => element.innerText = "");
                gameStarted = false;
                game = null;
                document.querySelector(".text").innerText="Tie. Who Will Play first?";
                totalCount=0;                
            }
        }
    }  
}));

class newGame
{
    constructor(currentP)
    {  
        this.currentP = currentP;
        document.querySelector(".text").innerText=`It's ${this.currentP.toUpperCase()}'s turn!`;


    }

    checkWin()
    {
        if (boxes[0].innerText == "o" && boxes[1].innerText == "o" && boxes[2].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
            
        }
        else if (boxes[3].innerText == "o" && boxes[4].innerText == "o" && boxes[5].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[6].innerText == "o" && boxes[7].innerText == "o" && boxes[8].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[0].innerText == "o" && boxes[3].innerText == "o" && boxes[6].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[1].innerText == "o" && boxes[4].innerText == "o" && boxes[7].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[2].innerText == "o" && boxes[5].innerText == "o" && boxes[8].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[0].innerText == "o" && boxes[4].innerText == "o" && boxes[8].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[2].innerText == "o" && boxes[4].innerText == "o" && boxes[6].innerText == "o")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="O wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }



        if (boxes[0].innerText == "x" && boxes[1].innerText == "x" && boxes[2].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[3].innerText == "x" && boxes[4].innerText == "x" && boxes[5].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[6].innerText == "x" && boxes[7].innerText == "x" && boxes[8].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[0].innerText == "x" && boxes[3].innerText == "x" && boxes[6].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[1].innerText == "x" && boxes[4].innerText == "x" && boxes[7].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[2].innerText == "x" && boxes[5].innerText == "x" && boxes[8].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[0].innerText == "x" && boxes[4].innerText == "x" && boxes[8].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }
        else if (boxes[2].innerText == "x" && boxes[4].innerText == "x" && boxes[6].innerText == "x")
        {
            console.log(totalCount);
            document.querySelector(".text").innerText="X wins! Who Will Play first?";
            boxes.forEach(element => element.innerText = "");
            gameStarted = false;
            game = null;
            totalCount=0;
            return true;
        }

    

        return false;
        
        
    }

}

















