
function showRandomImage() {
    const imgElement = document.getElementById('random-img');
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imagePath = `${randomNumber}.jpg`; 


    imgElement.src = imagePath;
    imgElement.style.display = 'inline-block';
    
    console.log("Зображення №:", randomNumber);
}


const btn = document.getElementById('next-btn');
btn.addEventListener('click', showRandomImage);

showRandomImage();