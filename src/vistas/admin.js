import {tabla} from '../componentes/adminUsuarios.js'

export const admin ={
    template:`
     <h1>Pagina admin</h1>

        <div>
        ${tabla.pintar()}
        </div>`,
    script:()=>{
        console.log('hola, soy la vista admin');
    }

}