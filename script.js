
// let input=document.getElementById('yerlesdir')
// let submit=document.getElementById('btn')
// let maindiv=document.querySelector('.container')

// let button=document.getElementById('logo')

// input.addEventListener('change',()=>{
    

//     let div=document.createElement('div')
//     let inputvalue=input.value
//     maindiv.append(div)
    
//     div.append(inputvalue)

// })
// submit.addEventListener('click',(event)=>{
// event.preventDefault()

//  input.value=' '

// })
let body=document.querySelector('body')
let btn=document.createElement('button')


body.append(btn)



btn.textContent='add'
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    let container=document.createElement('div')
let face=document.createElement('div')
let eyes=document.createElement('div')
let eye1=document.createElement('div')
let eye2=document.createElement('div')
eye1.className='goz1'
eye2.className='goz2'
eyes.className='gozler'
body.append(container)
container.append(face)
face.append(eyes)
eyes.append(eye1)
eyes.append(eye2)

face.className='head'
container.style.display='block'
})






