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

