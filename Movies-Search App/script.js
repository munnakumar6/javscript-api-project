let moviecontainer = document.querySelector('.Movie-container');
let searchbox = document.getElementById('searchbox');
let searchbtn = document.getElementById('searchbtn');



function showmovie(){
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
    .then((response)=>response.json())
    .then((data)=>{
        showmovieresult(data)
    })
}
showmovie()

function showmovieresult(data){
    moviecontainer.innerHTML=""
    data.results.forEach(element => {
        let createbox = document.createElement('div');
        createbox.classList.add('search-result');
        createbox.innerHTML=`
        <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                <div class="discription">
                    <h2> ${element.original_title}</h2>
                     <p><span>Release Date : ${element.release_date} </span> <span> Original Language :" ${element.original_language}" </span></p>
                     <p>Popularity : ${element.popularity}</p>
                     <p>${element.overview}</p>
                </div> 
        `
        moviecontainer.appendChild(createbox)  
    });
}

// searbar section start 

searchbtn.addEventListener('click',()=>{
    if(searchbox.value === ""){
        showmovie()
    }
    else{
        function btnsearch(){
            fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchbox.value}`)
            .then((response)=>response.json())
            .then((data)=>{
                userresult(data)
            })
        }

        btnsearch()
        
        function userresult(data){
            moviecontainer.innerHTML=""
            data.results.forEach(element => {
                let createbox = document.createElement('div');
                createbox.classList.add('search-result');
                createbox.innerHTML=`
                <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                        <div class="discription">
                            <h2> ${element.original_title}</h2>
                             <p><span>Release Date : ${element.release_date} </span> <span> Original Language :" ${element.original_language}" </span></p>
                             <p>Popularity : ${element.popularity}</p>
                             <p>${element.overview}</p>
                        </div> 
                `
                moviecontainer.appendChild(createbox)  
            });
        }
        
    }
})


