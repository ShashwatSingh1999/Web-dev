// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
let baseURL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container=document.querySelector('#container');
for(let i=1;i<=151;i++){
    const pokemon=document.createElement('div');
    pokemon.classList.add('pokemon-class');
    const img=document.createElement('img');
    img.src=baseURL+`${i}.png`
    const label=document.createElement('span')
    label.innerText=`#${i}`
    pokemon.appendChild(img)
    pokemon.appendChild(label)
    
    container.appendChild(pokemon);

}
