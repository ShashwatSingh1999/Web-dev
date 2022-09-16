const form = document.querySelector('form');
const list=document.querySelector('#list');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    let productInput=form.elements.product;
    let qtyInput=form.elements.qty;
    list.appendChild(makeNewListItems(productInput.value,qtyInput.value));
    productInput.value='';
    qtyInput.value='';
})
function makeNewListItems(product,qty){
    const newLi=document.createElement('li');
    newLi.innerText=`${qty} ${product}`;
    // list.appendChild(newLi);
    return newLi;
}