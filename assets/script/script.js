const ul = document.querySelector('ul')

function getApiGitHub() {
  fetch('https://api.github.com/users/viniciuslemos93/repos')
    .then(async res => {
      //Se o status da requisição for diferente de Ok, então retorna o Throw new Error
      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()
      //Utilizamos o map para percorrer cada ítem da nossa API.
      data.map(item => {
        let li = document.createElement('li')

        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')//Para carregar no formato BR [dia/mes/ano]
            .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)

      })

    }).catch(e => console.log(e))
}

getApiGitHub()