const myRoles=['data analyst....','Open Source Enthusiast...','Human Being']
let dynamicContent=document.getElementById('dynamic-text');
let letterIndex=0;
let roleIndex=0;
const typingSpeed=100;
const erasingSpeed=100;

function printLetters(role){
    if (letterIndex==role.length){
        letterIndex-=1;
        clearLetters();
    }
    else if(letterIndex<role.length){
        dynamicContent.textContent+=role[letterIndex];
        letterIndex+=1;
        setTimeout(function(){
            printLetters(role);
        },typingSpeed);
    }
}

function clearLetters(){
    if(letterIndex==-1){
        // after clearing print next letter
        roleIndex=(roleIndex+1)%myRoles.length;
        // to print next letter from starting
        letterIndex=0;
        printLetters(myRoles[roleIndex]);
    }
    else if(letterIndex>-1){
        updatedText="";
        for(let index=0;index<letterIndex;index++){
            updatedText+=myRoles[roleIndex].charAt(index);
        }
        dynamicContent.textContent=updatedText;
        letterIndex-=1;
        setTimeout(function(){
            clearLetters();
        },erasingSpeed);
    }
  
}

printLetters(myRoles[roleIndex]);