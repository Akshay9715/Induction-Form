setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}
 
showTime();

let op = document.querySelector('#Opassword');
let cp = document.querySelector('#Cpassword');
let submit = document.querySelector('#Submit');

submit.addEventListener('click',function(){
    console.log(op.value);
    console.log(cp.value);
})



/** Music  */

let back = document.querySelector('.back');
let numb = 0;
back.addEventListener('click',function(e){
    let music = document.querySelector('#music');
    if (numb === 0){
        music.setAttribute('src','music2.mp3');
        numb++;
        numb = numb%3;

    }else if (numb === 1) {
        music.setAttribute('src','music3.mp3');
        numb++;
        numb = numb%3;
    } else {
        music.setAttribute('src','music1.mp3');
        numb++;
        numb = numb%3;
    }
})

let next = document.querySelector('.next');
next.addEventListener('click',function(e){
    let music = document.querySelector('#music');
    if (numb === 1){
        music.setAttribute('src','music1.mp3');
        numb = 0;
    }else if (numb === 2) {
        music.setAttribute('src','music3.mp3');
        numb = 1;
    } else {
        music.setAttribute('src','music2.mp3');
        numb = 0;      
    }
    
})




/** GSAP Amination */
const tl = gsap.timeline();

tl.from('h1',{
    y : -100,
    opacity : 0,
})
    .from('nav',{
        x : 1500,
        //duration : 1,
        //opacity : 0,
    })
    .from(".child1",{
        scale : 0,
        opacity : 0,
    })
    .from('#inductionForm',{
    x : 500,
    //y : -500,
    // scale : 0.1,
    // skewZ : 0.1,
    opacity : 0,
    duration : 1,
    //ease : 'elastic',
    // delay : 2,
})

gsap.to('.songs',{
    scale : 0.98,
    duraiton : 0.4,
    yoyo : true,
    repeat : -1,

})