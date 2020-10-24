const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.info');
const gotImg = document.querySelector('.got_name');
const info = document.querySelector('.info_1');
const tech = document.querySelector('.tech');
const git = document.querySelector('.github');

container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth/2-e.pageX)/20;
    let yAxis = (window.innerHeight/2 - e.pageY)/20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//animate in

container.addEventListener('mouseenter',(e) => {
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(100px)";
    info.style.transform = "translateZ(50px)";
    gotImg.style.transform = "translateZ(50px)";
    git.style.transform = "translateZ(50px)";
    tech.style.transform ="translateZ(50px)";
})

//animate out
container.addEventListener('mouseleave',(e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `all ease 0.3s`;
    info.style.transform = "translateZ(0px)";
});