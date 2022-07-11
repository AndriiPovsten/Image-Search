let input = document.getElementById('input');
let grid = document.getElementsByClassName('grid')[0];
window.addEventListener('load', dayNightMode)
input.addEventListener('keydown', function (event){
    if(event.key ==='Enter')
        loadImg();
})
function loadImg(){
    removeImages();
    let url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&client_id=1X5poiv5P7zYJ6rs5Ua84iBbyDR8fg1IS10Dskr3ZRY';
    fetch(url)
        .then(response =>{
            if(response.ok)
                return response.json();
            else
                alert(response.status)
        })
        .then(data =>{
            let imageNodes = [];
            for (let i = 0; i < data.results.length; i++){
                imageNodes[i] = document.createElement('div');
                imageNodes[i].className = 'img';
                imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
                imageNodes[i].addEventListener('dblclick', function(){
                    window.open(data.results[i].links.download, '_blank');
                })
                grid.appendChild(imageNodes[i]);
            }
        })

}
function removeImages(){
    grid.innerHTML = '';
}
function dayNightMode(){
    let date = new Date();
    let hour = date.getHours();
    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }

}
