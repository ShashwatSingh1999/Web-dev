document.addEventListener('DOMContentLoaded',function(){
    function handleMouseover(event){
        console.log(event);
    }
    const startBtn=document.querySelector('#start');
    const stopBtn=document.querySelector('#stop');
    startBtn.addEventListener('click',function(){
        document.addEventListener('mouseover',handleMouseover);
    })
    stopBtn.addEventListener('click',function(){
        document.removeEventListener('mouseover',handleMouseover);
    })
    //display everything user enters in textbox from the keyboard, except 
    // for the key 2
    const display=document.querySelector('#display');
    document.querySelector('input').addEventListener('keypress',function(event){
        console.log(event.key);
        if(event.key==2){
            event.preventDefault();
            display.innerText="see the input, I won't register 2";
        }else{
            display.innerText=event.key;
        }
        
    }) 
    document.querySelector('#user').addEventListener('focus',function(){
        console.log('focus event trigerred!');
    })
    document.querySelector('#user').addEventListener('blur',function(){
        console.log('blur event trigerred!');
    })
    // event capture and bubbling
    document.querySelector('#subchild').addEventListener('click',function(e){
        console.log('subchild clicked!');
        // e.stopPropagation();
    },false)
    document.querySelector('.child').addEventListener('click',function(e){
        console.log('child clicked!');
        e.stopPropagation();
    },false)
    document.querySelector('.parent').addEventListener('click',function(e){
        console.log('parent clicked!');
        // e.stopPropagation();
    },false)
})
