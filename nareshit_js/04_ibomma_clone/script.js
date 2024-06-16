const mainDiv = document.getElementById('main')
function fetchData()
{
    fetch("https://api.sampleapis.com/movies/horror")
    .then(function(son) { return son.json() })
    .then(function (data) { displayData(data) })
    .catch(function(err) { console.log(err) })
}
fetchData();

function displayData(data)
{
    data.forEach(function (val)
{
    const pdiv = document.createElement('div');
    const photo = document.createElement('img');
    const name = document.createElement('h5');
    photo.src = val.posterURL;
    photo.alt = val.title;
    name.textContent = val.title;
    pdiv.append(photo, name)
    mainDiv.appendChild(pdiv)  
})
}