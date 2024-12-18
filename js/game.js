let result = document.querySelector("#result"),
chance = document.querySelector("#chance"),
user = document.querySelector("#user"),
playBtn = document.querySelector("#play"),
resetBtn = document.querySelector("#reset");

let chances = 5; //변수안에다가 5라는숫자입력
let gameOver = false;
let history = [];

function randomNum(){
   computerNum = Math.floor(Math.random() * 100 +1);
   
}//1부터 100까지의 수

randomNum();

playBtn.addEventListener("click", play);


function play() {
    let userNum = user.value;
    // console.log(userNum)
    if(userNum < 1 || userNum > 100) {
        result.textContent = "1부터 100까지의 숫자를 입력하세요"
        return;
    }//return문으로 처음으로 돌아가기

    // console.log(history.includes(userNum));//history에 값이 들어가지 않았으므로 false만 나옴

    
    if(history.includes(userNum)) {
        result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    if(userNum < computerNum) {
        // console.log("up")
        result.textContent = "up"
        document.querySelector("#imgBox").src = "img/up.png";
    } else if(userNum > computerNum) {
        // console.log("down")
        result.textContent = "down"
        document.querySelector("#imgBox").src = "img/down.png";
    } else {
        // console.log("bingo")
        result.textContent = "bingo"
        document.querySelector("#imgBox").src = "img/bingo.png";
    }

    chances = chances - 1;
    // console.log(chances)
    chance.textContent = `남은찬스 : ${chances}번`;

    history.push(userNum);
    console.log(history);

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true) {
        playBtn.disabled = true;
    }//비활성화 시키기

    resetBtn.addEventListener("click", reset);

    function reset(){
        user.value = "";
        chances = 5;
        chance.textContent = `남은찬스 : ${chances}번`
        result.textContent = "up / down / bingo";
        // playBtn.disabled = false;
        gameOver = false;
        if (gameOver == false) {
            playBtn.disabled = false;
        }
        document.querySelector("#imgBox").src = "img/Untitled-5.png";
        history = [];
        randomNum();
    }

    user.addEventListener("focus", () => {
        user.value = "";
    });//focus했을때 입력되있는 값 지우기
}