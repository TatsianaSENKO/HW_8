
document.documentElement.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);

let ul1 = document.createElement('ul');
ul1.innerHTML = `<li></li>`;
ul1.classList.add('list');
document.body.appendChild(ul1);

let item1 = ul1.querySelector('li:nth-child(1)');
item1.classList.add('item1');

let h4 = document.createElement('h4');
h4.innerHTML = 'FREELANCER';
h4.classList.add('subtitle');
item1.appendChild(h4);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
h2.classList.add('title');
item1.appendChild(h2);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('text');
item1.appendChild(p2);

let btn = document.createElement('a');
btn.innerHTML = 'START HERE';
btn.setAttribute('href', '#')
btn.classList.add('btn');
item1.appendChild(btn);

let item2 = item1.cloneNode(true);
ul1.appendChild(item2);
item2.classList.add('item2');

let subtitle2 = item2.querySelector('h4');
subtitle2.classList.add('subtitle2');
subtitle2.innerHTML = 'STUDIO';
subtitle2.style.color = '#FFC80A';

let title2 = item2.querySelector('h2');
title2.classList.add('title2');
title2.style.color = 'white';

let text2 = item2.querySelector('p');
text2.classList.add('text2');
text2.style.color = 'white';

let btn2 = item2.querySelector('a');
btn2.classList.add('btn2');
btn2.style.color = 'white';


let style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
ul {
    list-style: none;
}
h1 {
    font-family: 'Arvo', serif;
    font-size: 36px;
    line-height: 48px; /* 133.333% */
    font-weight: 400;
    color: #212121;
    text-align: center;
    margin-bottom: 10px;
}

p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 26px; /* 185.714% */
    color: #9FA3A7;
    text-align: center;
}

.list {
    display: flex;
    justify-content: center;
    margin-top: 55px;
}
.item1 {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 80px 0;
    border: 1px solid #E8E9ED;
    border-radius: 4px;
    align-items: center;
}

.item2 {
    background: #8F75BE;
    border: none;
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    margin-bottom: 20px;
}

.title {
    font-family: 'Arvo', serif;
    font-size: 36px;
    line-height: 46px; /* 127.778% */
    font-weight: 400;
    color: #212121;
    text-align: center;
    max-width: 210px;
    margin-bottom: 25px;
}

.text {
    font-size: 12px;
    line-height: 22px; /* 183.333% */
    max-width: 210px;
    margin-bottom: 55px;
}

.btn {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
    color: #212121;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
}
.btn::before {
    content:'';
    background: url(/img/Button.png) no-repeat;
    width: 170px;
    height: 60px;
    position: absolute;
    top: -21px;
    left: -30px;
}
`;
document.head.appendChild(style);