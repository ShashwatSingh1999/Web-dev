document.addEventListener('DOMContentLoaded',function(){

document.querySelector('form').addEventListener('submit',function(event){
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(document.querySelector('form').elements.password.value);
        console.log(event.target.password.value);
        event.target.username.value='';
        event.target.password.value='';
        event.target.userEmail.value='';
})
document.querySelector('#userEmail').addEventListener('input',function(event){
        // console.dir(event.target);
        const emailElement=event.target;
        if(emailElement.validity.typeMismatch){
                emailElement.setCustomValidity('please enter an email!');
                emailElement.reportValidity();
        }else{
                emailElement.setCustomValidity('');
        }

});



})
