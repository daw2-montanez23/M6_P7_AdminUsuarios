import './style.css'

import { header } from './componentes/header.js'
import { admin } from './vistas/admin.js'
import { home } from './vistas/home.js'
import { about } from './vistas/about.js'

document.querySelector('#header').innerHTML = header.template
header.script()

document.querySelector('#main').innerHTML = about.template
about.script()
document.querySelector('#main').innerHTML = admin.template
admin.script()
document.querySelector('#main').innerHTML = home.template
home.script()
