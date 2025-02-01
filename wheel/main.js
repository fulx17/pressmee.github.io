const wheel = document.getElementById('wheel');
const spinbutton = document.getElementById('spin');
let cnt = 0;
const colors = ['#D1E9F6', '#F7B5CA'];
const word = ['Trà sữa', 'Ăn Chè', 'trượt băng', 'Ăn Nướng', 'Tô Tượng', 'Photobooth'];
const icon = ['icon/1.png', 'icon/2.png', 'icon/3.png', 'icon/4.png', 'icon/5.png', 'icon/6.png',]
let sliceAngles = [];
function createClippath(numberItem) {
    const alpha = 360 / numberItem;
    const radian = (alpha * Math.PI) / 180;
    const x = Math.cos(radian) * 50 + 50;
    const y = Math.sin(radian) * 50 + 50;
    return `polygon(50% 50%, ${x}% ${y}%, 100% 50%)`;
}

function createWheel(items) {
    wheel.innerHTML = '';
    const cnt = items.length;
    items.forEach((item, index) => {
        const slice = document.createElement('div');
        slice.classList.add('slice');
        const angle = index * 360 / cnt;
        sliceAngles.push(angle); // Lưu góc của mỗi slice
        slice.style.transform = `rotate(${angle}deg)`;
        slice.style.backgroundColor = colors[index  % colors.length]; 
        slice.style.clipPath = createClippath(cnt);

        const label = document.createElement('div');
        label.classList.add('label');
        label.innerHTML = item;
        slice.appendChild(label);
        wheel.appendChild(slice);
    });
}


function getCurrentSlice(degree) {
    let cnt = word.length, pos = 0, cur_max = -1;
    for(let i = 0; i < word.length; i++) {
        let slice_deg = (i * 360 / cnt + degree) % 360;
        if(slice_deg <= 270) {
            if(cur_max < slice_deg)
            {
                cur_max = slice_deg;
                pos = i;
            }
        }  
    }
    return pos;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initilize(emote) {
    const width = window.innerWidth;
    for(let i = 0; i < 150 ; i++) {
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
        const delay = rand(0, 5000);
        emoji.style.animation = `move 0.75s linear ${delay}ms forwards`;
    });
}


let cur = 0;
spinbutton.addEventListener('click', () => {
    const pw = document.getElementById('prize-word');
    const pc = document.getElementById('pic');
    pw.style.display = 'none';
    pw.style.fontSize = '0px';
    pc.style.display = 'none';
    pc.style.width = '0px';
    pc.style.height = '0px';
    const randomDegree = rand(3000,7000);
    cur += randomDegree;
    wheel.style.transform = `rotate(${cur}deg)`;
    setTimeout(() => {
        const degree = cur % 360;
        let pos = getCurrentSlice(degree);
        pw.style.display = 'block';
        pc.style.display = 'block';
        pw.innerHTML = word[pos];
        pc.src = icon[pos];
        pw.style.animation = `expand 0.75s forwards`;
        pc.style.animation = `expandpic 0.75s forwards`;
    }, 4200); 
    /*setTimeout(() =>{
        const date = document.getElementById('date');
        date.style.animation = 'date 1s forwards';
        initilize('&#x1F49E');
        move();
    }, 6000);*/
});
createWheel(word);