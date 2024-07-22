let userinputes = document.getElementById('search')
let searchbtn= document.getElementById('searchbtn')
let product = document.querySelector('.box-container')
let heading= document.querySelector('.msg')

async function fetchapi(uservalue){
     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${uservalue}`)
     .then((response)=>response.json())
     .then((data)=>{
         // Clear previous results
             product.innerHTML = '';
        data.meals.forEach(element => {
            let fooddiv =document.createElement('div')
            fooddiv.classList.add('box-item')
            fooddiv.innerHTML=`<img src="${element.strMealThumb}">
            <h3>${element.strMeal}</h3>
            <p>${element.strCategory}</p>
            <p>${element.strArea}</p>`

            product.appendChild(fooddiv)
            
           });
     })
     .catch(error => {
        heading.innerText = 'Sorry Not available , Please Try Another Food.';
        console.error('Error fetching data:', error);
    });
   
}
searchbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let user = userinputes.value.trim()
    fetchapi(user)
    
})