const imageCollection = document.querySelectorAll('.image-wrap img')
const length = imageCollection.length

const imageBackButton = document.querySelector('.display-button-back')
const imageNextButton = document.querySelector('.display-button-next')

const imageChangeHandler = (currentImage, laterImage) => {
    currentImage.classList.remove('image-active')
    currentImage.classList.add('image-nonactive')

    laterImage.classList.add('image-active', 'fade')
    laterImage.classList.remove('image-nonactive')
}

imageBackButton.addEventListener('click', () => {
    for(let i = 0; i < length; i += 1) {
        if(imageCollection[i].classList.contains('image-active')) {
            let prevIndex = i === 0 ? length - 1 : i - 1

            imageChangeHandler(imageCollection[i], imageCollection[prevIndex])
            break;
        } 
    }
})


imageNextButton.addEventListener('click', () => {
    for(let i = 0; i < length; i += 1) {
        if(imageCollection[i].classList.contains('image-active')) {
            let nextIndex = i === length - 1 ? 0 : i + 1
            
            imageChangeHandler(imageCollection[i], imageCollection[nextIndex])
            break;
        } 
    }
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('slide');
      }
    });
});

const advantagesList = document.querySelectorAll('.advantages ul li');

advantagesList.forEach(item => {
    observer.observe(item);
})


const cardsData = [
    {
        id: 1,
        cardTitle: 'Kaktus Plants',
        cardPrice: 85.000
    },

    {
        id: 2,
        cardTitle: 'Landak Plants',
        cardPrice: 105.000
    },

    {
        id: 3,
        cardTitle: 'Kecubung Plants',
        cardPrice: 85.000
    },

    {
        id: 4,
        cardTitle: 'Kecubung Plants',
        cardPrice: 85.000
    },

    {
        id: 5,
        cardTitle: 'Kecubung Plants',
        cardPrice: 85.000
    }  
]


const select = document.querySelector('.select');
const cardsList = document.querySelector('.cards-list')

const filterCardsData = () => {
    let value = select.value;

    if(value == 0) {
       renderCards(cardsData.sort((prev, next) => prev.cardPrice - next.cardPrice))
    }

    if(value == 1) {
        renderCards(cardsData.sort((prev, next) => next.cardPrice - prev.cardPrice))
    }
}

select.addEventListener('change', filterCardsData);

const renderCards = (goods) => {
    cardsList.innerHTML = ''
    cardsList.innerHTML = goods.map(
        (item) => `
        <li>
            <h3>${item.cardTitle}</h3>
            <p>IDR ${item.cardPrice}</p>
            <img src="./img/item${item.id}.jpg" alt="Card ${item.id}">
        </li>
    `).join('');
}

renderCards(cardsData);