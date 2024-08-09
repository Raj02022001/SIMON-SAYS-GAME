let gameSeq =[];
let userSeq =[];
let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;
let h2 =  document.querySelector("h2");
document.addEventListener("keypress" ,function () {
  if (started == false) {
      console.log("game started");
      started = true;

      levelup();
  }
})
  function gameflash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash")
    }, 250);
  }
  function userflash(btn){
    btn.classList.add("userflash");
    setTimeout (function(){
        btn.classList.remove("userflash")
    }, 250);
  }


  function levelup(){
    userSeq=[];
    level ++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
  }

  function checkAns(index){
    if (gameSeq[index] == userSeq[index]){
      if (gameSeq.length == userSeq.length){
        setTimeout(levelup,1000);
      }
    }else{
      h2.innerHTML = `Game Over. Your Score is <b>${level}</b> <br> Start Again by Pressing Any Key.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout (function (){
        document.querySelector("body").style.backgroundColor = "antiquewhite";
      }, 150);
      reset();
    }
  }

  function btnpress(){
    let btn=this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor)
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
  }

  let allbtn = document.querySelectorAll(".btn");
    for (btn of allbtn){
      btn.addEventListener("click", btnpress);
    }
  
    function reset(){
      started = false;
      gameSeq=[];
      userSeq=[];
      level =0;
    }