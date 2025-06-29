let container = document.querySelector('.container');
let mode = 'draw';
function add_divs(grid_size=16){
    let eles = document.querySelectorAll('.ele');
    eles.forEach((ele)=>{
        container.removeChild(ele);
    });
    for (let i=0;i<grid_size*grid_size;i++){
        let div = document.createElement('div');
        div.classList.add('ele');
        div.style.width = `${960/grid_size}px`;
        div.style.height = `${960/grid_size}px`;
        div.addEventListener("mouseenter",handleHover);
        container.appendChild(div);
    }
};

add_divs();

function handleHover(e){
    if (mode === 'draw'){
        e.target.style.backgroundColor = 'rgb(0,0,0)';
    }
    else if(mode === 'rainbow'){
        let red  = Math.floor(Math.random()*256);
        let green  = Math.floor(Math.random()*256);
        let blue  = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    else if (mode === 'erase'){
        e.target.style.backgroundColor = 'rgb(255,255,255)';
    }
};

function clear(){
    let btns = document.querySelectorAll('.ele');
    btns.forEach((btn)=>{
        btn.style.backgroundColor = 'rgb(255,255,255)';
    })
}

document.querySelector('.erase').addEventListener('click',()=>{mode = 'erase'});
document.querySelector('.rainbow').addEventListener('click',()=>{mode = 'rainbow'});
document.querySelector('.clear').addEventListener('click',()=>{clear()});
document.querySelector('.draw').addEventListener('click',()=>{mode = 'draw'});
document.querySelector('.divs').addEventListener('click',()=>{
    const input = prompt('Enter the grid size');
    add_divs(input);
});
