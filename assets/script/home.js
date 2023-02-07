const randomName = document.querySelector('.random-name');
const randomPfp = document.querySelector('.random-pfp');

const apiData = () => {
    fetch('https://randomuser.me/api')
      .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        randomName.innerHTML = data.results[0].name.last + " " + data.results[0].name.first;
        randomPfp.style.backgroundImage = `url(${data.results[0].picture.large})`;
        randomPfp.style.backgroundSize = 'cover';
    })
}

window.addEventListener('load', () =>{
    apiData();
})