// Метрика ------------------------------------------
// offsetWidth/Height - внешняя ширина и высота (ширина контента + padding + border)
// clientWidth/Height - размер области внутри рамок (ширина контента + padding)
// scrollWidth/Height - полный размер с учётом прокрученной области
// scrollLeft/scrollTop - ширина/высота прокрученной области

console.log(element.offsetWidth)
console.log(element.offsetHeight)
console.log(' ')
console.log(element.clientWidth)
console.log(element.clientHeight)
console.log(' ')
console.log(element.scrollHeight)
console.log(' ')
console.log(element.offsetLeft)

element.addEventListener('scroll', () => {
  console.log(element.scrollTop)
})

setTimeout(() => {
  console.log(element.scrollTop)
}, 3000)


// Координаты
// pageX/pageY - относительно документа
// clientX/clientY - относительно окна

element.addEventListener('click', ({ pageX, pageY, clientX, clientY }) => {
  console.log(pageX, pageY)
  console.warn(clientX, clientY)
})

console.log(window)

const rect = element.getBoundingClientRect()
console.log(rect)
