const APIlink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3f23c3cad8222c80d3e8b858ef5ee7d5&page=1'
const img_path = 'https://image.tmdb.org/t/p/w1280'
const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=3f23c3cad8222c80d3e8b858ef5ee7d5&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APIlink);
function returnMovies(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div')
            div_card.setAttribute('class','movie-title')

            const div_row = document.createElement('div')
            div_row.setAttribute('class','row')

            const div_column = document.createElement('div')
            div_column.setAttribute('class','column')

            const image = document.createElement('img')
            image.setAttribute('class','card')
            image.setAttribute('id','image')

            const title = document.createElement('h3')
            title.setAttribute('id','title')

            const center = document.createElement('center')

            title.innerHTML = `${element.title}`;
            image.src = img_path + element.poster_path;

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)
            main.appendChild(div_row)

        });
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML = '';

    const search_item = search.value;

    if(search_item){
        returnMovies(search_api+search_item);
    }
})