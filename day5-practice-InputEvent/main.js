const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('input',function(){
    h1.innerText=`Welcome, ${input.value}`;
    if(input.value===''){
        h1.innerText='Enter Your Username';
    }
});
document.body.style.textAlign='center';