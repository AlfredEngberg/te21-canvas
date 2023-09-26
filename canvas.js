import Rectangle from './Rectangle.js'
import bullet from './bullet.js'


export function setup(element) {
    const width = 800
    const height = 600
    const canvas = element.querySelector('#test')
    const context = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    const rectangle = new Rectangle(1, 0, 200, 200, 'red')

    document.addEventListener('keyup', (e) => {
        console.log("we need more bullets")
            const bullets = new bullet(rectangle.x, rectangle.y, 5, 5, 'white')
    })

    const moreSpeed = element.querySelector('#addSpeed')
    moreSpeed.addEventListener('click', () => {
        console.log(moreSpeed)
        if (rectangle.speed >= 0) {
            rectangle.speed += 1
        } else {
            rectangle.speed -= 1
        }
    })

    const lessSpeed = element.querySelector('#removeSpeed')
    lessSpeed.addEventListener('click', () => {
        console.log(lessSpeed)
        if (rectangle.speed >= 0) {
            rectangle.speed -= 1
        } else {
            rectangle.speed += 1
        }
    })


    function step() {
        context.clearRect(0, 0, width, height)
        rectangle.update(canvas)
        rectangle.draw(context)
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step)

} 


// Yo jag sak typ göra på rad 15, med skott (I NEED MORE BULLETS)