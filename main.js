
{ 
const reset= document.querySelector(".reset");
const dotime= document.querySelector(".timer");
function doreset() {
    reset.style.opacity=1;
    reset.addEventListener("click",()=> {
        window.location.reload();
    });
}
let starttime
function setword() {
    word=words.splice(Math.floor(Math.random()* words.length),1)[0];   
    el.textContent=word;
    loc=0;
    dotime.style.opacity=1;
    
}
words=[
    "pink",
    "red",
    "blue",
    "danger!",
    "soccer",
    "baseball",
    "kicker",
    "travel",
    "design",
    "business",
    "possibly",
    "guilty",
    "comunity",
    "sunday",
    "monday",
    "interest",
    "international",
    "natural",
    "living",
    "eliminate",
    "abnormal",
    "blindness",
    "consultant",
    "explosion",
    "population"
]
const el=document.querySelector(".target")
let word
let loc=0
// setword();
document.addEventListener("keydown",e=> {
if (e.key!==word[loc]) {
    return 
}
loc++
el.textContent="_".repeat(loc) +word.substring(loc); 
if (loc==word.length) {
    if (words.length===15) {
        const finishtime =((Date.now()-starttime)/1000).toFixed(2);
        const result= document.querySelector(".result");
        setTimeout(()=> {
            doreset();
        },1000);
        clearInterval(timeset);
        clearInterval(t_timeset);

        // setTimeout(()=> {
        //     result.textContent=`${finishtime}seconds`;
        // },1000)
        if (finishtime<15) {
            setTimeout(()=> {
                result.style.color="pink"
                result.textContent=`やるやん！！この調子！${finishtime}秒！！`;
            },1000)
        }else if(finishtime < 20){
            setTimeout(()=> {
                result.textContent=`まぁまぁやなー。もっといける！${finishtime}秒〜`;
            },1000)
        }else{
            setTimeout(()=> {
                result.style.color="red"
                result.textContent=`おそいぞ、遅いぞ！！${finishtime}秒だぞ !`;
            },1000)
        }
        // setTimeout(()=> {
        //     result.textContent=`${finishtime}seconds`;
        // },1000)
        el.textContent="Finish!!"
        return
    };
    setword();
};

});

const btn=document.querySelector(".btn");
function opening() {
    const startgame=document.querySelector(".startgame");
    const main=document.querySelector(".main_item");
    btn.addEventListener("click",function() {
        startgame.classList.add("outview")
        main.classList.add("inview")
    
        interval=setInterval(count_down,1000);
        
    });
}

let count=4;
function count_down () {
if (count===1) {
    setword();
    starttime=Date.now();
    clearInterval(interval);
    timeset=setInterval(timer,1000);
    t_timeset=setInterval(t_timer,10000);
}
else {
    count--;
    el.textContent=count;
}
};

let time=0;
const t=document.querySelector(".timeone")
function timer() {
    if (time===9) {
        time=-2
        time++
    }
    time++
    t.textContent=time
}
let timetwo=0;
const t_t=document.querySelector(".timetwo");
function t_timer() {
    timetwo++
    t_t.textContent=timetwo;
    if(timetwo===2) {
        dotime.style.color="red"
    };
}

opening();
}

