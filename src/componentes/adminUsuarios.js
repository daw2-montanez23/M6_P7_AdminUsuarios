export const array = {
  usuari: [
    {
      id: '0',
      nick: 'Juan',
      email: 'juan@gmail.com',
      pass: '12345'
    },
    {
      id: '1',
      nick: 'Alberto',
      email: 'alberto@gmail.com',
      pass: '12345'

    },
    {
      id: '2',
      nick: 'Nicolas',
      email: 'nicolas@gmail.com',
      pass: '12345'

    }
  ]
}
export const tabla = {
  pintar: () => {
    let html = `<table id="table"> 
            <thead>
                <th>id</th>
                <th>nick</th>
                <th>mail</th>
            </thead>
            <tbody>
        `
    for (let i = 0; i < array.usuari.length; i++) {
      html += `<tr>
                        <td>${array.usuari[i].id}</td>
                        <td>${array.usuari[i].nick}</td>
                        <td>${array.usuari[i].email}</td>
                        <td><button type=button class="btn btn-danger border" id="borrar" data-id=${array.usuari[i].id}>Borrar</button></td>
                        <td><button type=button class="btn btn-success border" id="editar" data-id=${array.usuari[i].id}>Editar</button></td>
                    </tr>`
    }

    html += `<tbody>
            <table>
        `
    return (html)
  },
  borrar: () => {

  }
}
