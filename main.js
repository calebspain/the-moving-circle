const up = document.querySelector('.up')
const down = document.querySelector('.down')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const circle = document.querySelector('.circle')

// control buttons
up.addEventListener('click', () => {
    circle.style.top = circle.offsetTop - 100 + 'px'
})

down.addEventListener('click', () => {
    circle.style.top = circle.offsetTop + 100 + 'px'
})

left.addEventListener('click', () => {
    circle.style.left = circle.offsetLeft - 100 + 'px'
})

right.addEventListener('click', () => {
    circle.style.left = circle.offsetLeft + 100 + 'px'
})

// arrow keys
document.addEventListener('keydown', e => {
    switch (e.which) {
        case 37: // left
            circle.style.left = circle.offsetLeft - 100 + 'px'
            break
        case 38: // up
            circle.style.top = circle.offsetTop - 100 + 'px'
            break
        case 39: // right
            circle.style.left = circle.offsetLeft + 100 + 'px'
            break
        case 40: // down
            circle.style.top = circle.offsetTop + 100 + 'px'
            break
        default: return
    }
    e.preventDefault()
})