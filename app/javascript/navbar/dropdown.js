export default function dropdown(button, target) {
    button.addEventListener('click', () => {
        target.classList.toggle("hidden")
        console.log('hi')
    })
}