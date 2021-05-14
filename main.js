const app = document.getElementById('app')
const nav = document.getElementById('navig')
const header = document.getElementById('header')
const h1 = document.getElementById('h1')
const divB = document.getElementById('grid-container')

const divB1 = document.createElement('div')
const h3DivB1 = document.createElement('h3')
const pB1 = document.createElement('p')
const buttonUsun1 = document.createElement('button')

const divB2 = document.createElement('div')
const h3DivB2 = document.createElement('h3')
const pB2 = document.createElement('p')
const buttonUsun2 = document.createElement('button')

const divB3 = document.createElement('div')
const h3DivB3 = document.createElement('h3')
const pB3 = document.createElement('p')
const buttonUsun3 = document.createElement('button')

const divB4 = document.createElement('div')
const h3DivB4 = document.createElement('h3')
const pB4 = document.createElement('p')
const buttonUsun4 = document.createElement('button')

const divB5 = document.createElement('div')
const h3DivB5 = document.createElement('h3')
const pB5 = document.createElement('p')
const buttonUsun5 = document.createElement('button')

const divB6 = document.createElement('div')
const h3DivB6 = document.createElement('h3')
const pB6 = document.createElement('p')
const buttonUsun6 = document.createElement('button')

const buttonUsun = document.createElement('button')

nav.setAttribute('class', 'navigation')
h1.setAttribute('class', 'margin-header')

divB.appendChild(divB1)
divB1.setAttribute('id', 'grid-element1')
divB1.setAttribute('class', 'ook')
divB1.appendChild(h3DivB1)
h3DivB1.innerText = 'Book1'
divB1.appendChild(pB1)
pB1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB1.appendChild(buttonUsun1)
buttonUsun1.innerText = "Usuń"

divB.appendChild(divB2)
divB2.setAttribute('id', 'grid-element2')
divB2.setAttribute('class', 'book')
divB2.appendChild(h3DivB2)
h3DivB2.innerText = 'Book2'
divB2.appendChild(pB2)
pB2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB2.appendChild(buttonUsun2)
buttonUsun2.innerText = "Usuń"

divB.appendChild(divB3)
divB3.setAttribute('id', 'grid-element3')
divB3.setAttribute('class', 'book')
divB3.appendChild(h3DivB3)
h3DivB3.innerText = 'Book3'
divB3.appendChild(pB3)
pB3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB3.appendChild(buttonUsun3)
buttonUsun3.innerText = "Usuń"


divB.appendChild(divB4)
divB4.setAttribute('id', 'grid-element4')
divB4.setAttribute('class', 'book')
divB4.appendChild(h3DivB4)
h3DivB4.innerText = 'Book4'
divB4.appendChild(pB4)
pB4.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB4.appendChild(buttonUsun4)
buttonUsun4.innerText = "Usuń"

divB.appendChild(divB5)
divB5.setAttribute('id', 'grid-element5')
divB5.setAttribute('class', 'book')
divB5.appendChild(h3DivB5)
h3DivB5.innerText = 'Book5'
divB5.appendChild(pB5)
pB5.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB5.appendChild(buttonUsun5)
buttonUsun5.innerText = "Usuń"

divB.appendChild(divB6)
divB6.setAttribute('id', 'grid-element6')
divB6.setAttribute('class', 'book')
divB6.appendChild(h3DivB6)
h3DivB6.innerText = 'Book6'
divB6.appendChild(pB6)
pB6.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sapien iaculis metus posuere mollis. Sed at lectus egestas augue condimentum mattis commodo in risus. Curabitur consectetur finibus rutrum. Praesent tristique sodales aliquet. Curabitur accumsan dolor a turpis feugiat, ac malesuada purus volutpat. Maecenas vel viverra quam, et mattis risus. Mauris at enim pharetra, venenatis mauris a, fringilla odio. Fusce in dictum justo. Donec posuere eu justo id mattis."
divB6.appendChild(buttonUsun6)
buttonUsun6.innerText = "Usuń"


function usun() {

}