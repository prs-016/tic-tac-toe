// reset won after 2s
// modal none(flex), .text div.won none, .text none, .grid none(grid), PLAYERS: flex


const theme = document.querySelector("#toggleTheme");
const body = document.body;
let counter=0;
let bool1=false;
let bool2=false;

theme.addEventListener("click", ()=>{
    theme.classList.toggle("dark");
    body.classList.toggle("dark");
    if((counter++) %2 ==0)
    {
        theme.textContent="☀️ Light Mode";
    }
    else
    {
        theme.textContent="🌙 Dark Mode";
    }
});

const card = document.querySelector(".Player1")
if(card){
    const play = card.querySelector(".Select-Player");
    const bot = card.querySelector(".Select-Bot");
    play.addEventListener("click",()=>{
        const img = card.querySelector("img");
        img.src="./images/player.gif";
        play.classList.add("clicked");
        if(bot.classList.contains("clicked"))
        {
            bot.classList.remove("clicked");
        }
        bool1=true;
        runVS();
    });
    bot.addEventListener("click",()=>{
        const img = card.querySelector("img");
        img.src="./images/bot.gif";
        bot.classList.add("clicked");
        if(play.classList.contains("clicked"))
        {
            play.classList.remove("clicked");
        }
        bool1=true;
        runVS();
    });
};

const card2 = document.querySelector(".Player2")
if(card2){
    const play = card2.querySelector(".Select-Player");
    const bot = card2.querySelector(".Select-Bot");
    play.addEventListener("click",()=>{
        const img = card2.querySelector("img");
        img.src="./images/player.gif";
        play.classList.add("clicked");
        if(bot.classList.contains("clicked"))
        {
            bot.classList.remove("clicked");
        }
        bool2=true;
        runVS();
    });
    bot.addEventListener("click",()=>{
        const img = card2.querySelector("img");
        img.src="./images/bot.gif";
        bot.classList.add("clicked");
        if(play.classList.contains("clicked"))
        {
            play.classList.remove("clicked");
        }
        bool2=true;
        runVS();
    });
};

let not_triggered=true
function runVS() {
    if (bool1 && bool2 && not_triggered) {
        const start = document.querySelector(".start");
        const player1 = document.querySelector(".Player1");
        const player2 = document.querySelector(".Player2");
        const startBtn = document.querySelector(".startbtn");
        const vsText = document.querySelector(".VS");

        // Set initial positions for animations
        start.style.display = "flex";
        startBtn.style.transform = "translateY(-100vh)";
        vsText.style.transform = "translateY(-100vh)";
        player1.style.transform = "translateX(0)";
        player2.style.transform = "translateX(0)";

        // Trigger animations
        setTimeout(() => {
            startBtn.style.transition = "transform 1s ease-out";
            vsText.style.transition = "transform 1s ease-out";
            player1.style.transition = "transform 1s ease-out";
            player2.style.transition = "transform 1s ease-out";

            startBtn.style.transform = "translateY(0)";
            vsText.style.transform = "translateY(0)";
            player1.style.transform = "translateX(-5vw)";
            player2.style.transform = "translateX(5vw)";
        }, 100);
        not_triggered=false;
    }

    let bool3=false;
    let bool4=false;
    const input1=document.querySelector("#Name1");
    const input2=document.querySelector("#Name2");
    input1.addEventListener("input", ()=>{
        if(input1.value.trim()!=="")
        {
            bool3=true;
        }
        else{
            bool3=false;
        }
        runSubmit();
    });
    input2.addEventListener("input", ()=>{
        if(input2.value.trim()!=="")
        {
            bool4=true;
        }
        else{
            bool4=false;
        }
        runSubmit();
    });

const submit = document.querySelector(".start button")
    function runSubmit(){
        if(bool3&&bool4)
        {
            submit.disabled=false;
        }
        else{
            submit.disabled=true;
        }
    }
}
