let cnt = 0;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initilize(emote) {
    const width = window.innerWidth;
    for(let i = 0; i < 25 ; i++) {
        const emoji = document.createElement('p');
        emoji.innerHTML = emote;
        emoji.className = 'emoji';
        emoji.style.left = rand(0, width) + 'px';
        emoji.style.zIndex = '4';
        document.body.append(emoji);
    }
}

function move() {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        const delay = rand(0, 1000);
        emoji.style.animation = `move 0.75s linear ${delay}ms forwards`;
    });
}

document.getElementById("but").addEventListener("click", function() {
    const oldImage = document.getElementById("finger");
    const newImage = document.getElementById("cry");
    const oldtext = document.getElementById("text1");
    const newtext = document.getElementById("text2");
    const but1 = document.getElementById("yes");
    const but2 = document.getElementById("no");
    cnt++;
    if (cnt === 1) {
        oldImage.style.display = "none";
        newImage.style.display = "block";
        newtext.style.display = "block";
        initilize('&#128557');
        move();
    }
    else 
    {
        const oldbutton = document.getElementById("but");
        const pray = document.getElementById("pray");
        oldbutton.style.display = "none";
        newImage.style.display = "none";
        oldtext.style.display = "none";
        newtext.innerHTML = 'mình đi chơi điiii';
        newtext.style.animation = "newpage 1s forwards";
        pray.style.display = "block";
        but1.style.display = "block";
        but2.style.display = "block";
    }
}); 
let no_cnt = 0;
document.getElementById("yes").addEventListener("click",function(){
    window.location.href = "wheel/index.html";
});
document.getElementById("no").addEventListener("click",function(){
    no_cnt++;
    const easter1 = document.getElementById("easter-egg1");
    const easter2 = document.getElementById("easter-egg2");

    const pic1 = document.getElementById("pr1");
    const pic2 = document.getElementById("pr2");
    if(no_cnt === 3)
    {
        pr1.style.display = 'block';
        easter1.style.display = "block";
    }
    else if(no_cnt === 6)
    {
        initilize('&#128542');
        move();
        pr2.style.display = 'block';
        easter2.style.display = "block";   
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    const but2 = document.getElementById("no");
    let X = rand(75,width) - 75;
    let Y = rand(75,height) - 75;
    but2.style.left = X + "px";
    but2.style.bottom = Y + "px";
});
