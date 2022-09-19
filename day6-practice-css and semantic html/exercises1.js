const COLOR='rgb(128, 128, 255)';
const letters=document.querySelectorAll('.letter');
document.addEventListener('keydown',function(event){
    const keyPressed=event.key;
      for(let letter of letters){
        if(letter.innerText===keyPressed.toUpperCase() && letter.style.color!=COLOR){
          letter.style.color=COLOR;
          break;
        }
      }
  
  });