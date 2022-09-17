const h1=document.querySelector('h1');
const chColorBtn=document.querySelector('#chColorBtn');
const container=document.querySelector('#container');
container.style.textAlign="Center"
h1.textAlign="center";

chColorBtn.addEventListener('click',function(){
    const randomObj=getRandomColor();
    const randomColor=randomObj.color;
    h1.innerText=randomColor;
    // give white color to text if darker background
    if(randomObj.csum<=300){
        h1.style.color='white';
    }else{
        h1.style.color='black';
    }
    document.body.style.backgroundColor=randomColor;
})
function getRandomColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return {color:`rgb(${r},${g},${b})`, csum:r+g+b};
}