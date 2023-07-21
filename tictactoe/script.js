console.log('welcom to tic tac toe')
let bgmusic=new Audio('background.mp3')
let turn=new Audio('ting.mp3')
let over= new Audio('over.mp3')
let Turn ="X";
//bgmusic.play();
isgameover=false;
//function to change turn
const changeTurn=()=>{

    return Turn=="X"?"0":"X"
}
//Function to check win
const checkwin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext')
        let wins=[
            [0, 1, 2, 3.5, 4, 0],
            [3,4,5, 3.5, 15, 0],
            [6,7,8, 3, 25, 0],
            [0,3,6,-6.2, 15, 90],
            [1,4,7, 3.5, 14, 90],
            [2,5,8, 13.2, 15, 90],
            [0,4,8,2.5, 14, 45],
            [2,4,6, 2.5, 16, 135],
        ]
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText ===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !==""))
            {
                document.querySelector('.info').innerText= 'Congratulation '+ boxtext[e[0]].innerText +' Win';
                isgameover=true;
                over.play();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width="23vw";


            }
     })
}
//game logic


let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
           boxtext.innerText=Turn;
           Turn=changeTurn();
           turn.play();
           checkwin();
           if (!isgameover){
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
            
        } 
        }
    })
})
//coding for reset button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width="0px";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
