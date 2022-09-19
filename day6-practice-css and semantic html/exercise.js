const COLOR='rgb(128, 128, 255)';
const letters=document.querySelectorAll('.letter');
document.addEventListener('keydown',function(event){
  const keyPressed=event.code;
  if(keyPressed==='KeyD'){
    for(let letter of letters){
      if(letter.innerText==='D' && letter.style.color!=COLOR){
        letter.style.color=COLOR;
        break;
      }
    }
    }
    else if(keyPressed==='KeyE'){
        for(let letter of letters){
          if(letter.innerText==='E' && letter.style.color!=COLOR){
            letter.style.color=COLOR;
            break;    
          }
        }}
    else if(keyPressed==='KeyV'){
            for(let letter of letters){
              if(letter.innerText==='V' && letter.style.color!=COLOR){
                letter.style.color=COLOR;
                break;
              }
        }}
    else if(keyPressed==='KeyS'){
            for(let letter of letters){
              if(letter.innerText==='S' && letter.style.color!=COLOR){
                letter.style.color=COLOR;
                break;
              }
        }}
    else if(keyPressed==='KeyN'){
            for(let letter of letters){
              if(letter.innerText==='N' && letter.style.color!=COLOR){
                letter.style.color=COLOR;
                break;
              }
            }}
    else if(keyPressed==='KeyT'){
                for(let letter of letters){
                  if(letter.innerText==='T' && letter.style.color!=COLOR){
                    letter.style.color=COLOR;
                    break;
                  }
                }}
            
});