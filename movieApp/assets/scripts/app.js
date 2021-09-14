const addModalBtn = document.querySelector('#add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backDrop  = document.getElementById('backdrop');
const cancelAddModal = addModalBtn.querySelector('.btn--passive');
const userInputs = document.getElementsByTagName('input');
const movies = [];
const confirmAddMovie = cancelAddModal.nextElementSibling;
const entryTextsection = document.getElementById('entry-text');


const toggleBackDrop = ()=>{
    backDrop.classList.toggle('visible');
};

const movieUi = ()=>{
    if (movies === 0){
        entryTextsection.style.display ='block';

    }else{
        entryTextsection.style.display ='none';
    }

};

const renderMovieElement = (title,imageUrl, rating)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}"  alt="${title}">
    </div>
    <div class="movie-element__info">
    <h3>${title}</h3>
    <p>${rating}/ 5 stars</p>

    </div>
    
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}



const ToggleModal = ()=>{
    addModalBtn.classList.toggle('visible');
    toggleBackDrop();
};
const clearUserInput = ()=>{
    for(const userInput of userInputs){
        userInput.value = ''
    } 
};

const cancelAddMovie = ()=>{
    ToggleModal();
    clearUserInput();
};

const userInputHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (titleValue.trim()===''|| 
        imageUrlValue.trim()==='' ||
        ratingValue.trim() === '' || 
        +ratingValue <1 ||
        +ratingValue >6){
            alert('Please enter a valid title or url or rating');
            return;

    };
const newMovies = {
    title:titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue

};
movies.push(newMovies);
console.log(movies);
ToggleModal();
clearUserInput();
renderMovieElement(newMovies.title,newMovies.imageUrl,newMovies.rating);
movieUi();


};
 

const toggleHandler = ()=>{
    ToggleModal();

}


startAddMovieBtn.addEventListener('click',ToggleModal);
backDrop.addEventListener('click', toggleHandler);
cancelAddModal.addEventListener('click',cancelAddMovie);
confirmAddMovie.addEventListener('click',userInputHandler)