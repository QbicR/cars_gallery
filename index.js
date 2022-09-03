const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

const clearActiveClasses = () => {
    for (const slide of slides) {
        slide.classList.remove('active')
    }
}