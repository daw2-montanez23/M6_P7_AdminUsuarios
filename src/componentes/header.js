import { router } from "./router"

export const header ={
    template:`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id="home">Home</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="admin">Admin</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    `,
    script:()=>{
    document.querySelector('#admin').addEventListener('click', ()=>{
        router.admin()
    })  
    document.querySelector('#about').addEventListener('click', ()=>{
        router.about()
    })  
    document.querySelector('#home').addEventListener('click', ()=>{
        router.home()
    })    
}
}