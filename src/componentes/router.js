import { home } from '../vistas/home'
import { admin } from '../vistas/admin'
import { about } from '../vistas/about'

export const router = {
  home: () => {
    document.querySelector('main').innerHTML = home.template
    home.script()
  },
  about: () => {
    document.querySelector('main').innerHTML = about.template
    about.script()
  },
  admin: () => {
    document.querySelector('main').innerHTML = admin.template
    admin.script()
  }
}
