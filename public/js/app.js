document.querySelector('.input').addEventListener('keyup', (event) => {

    if (event.keyCode == 13) {

      var value = event.target.value

      var li = document.createElement('li')
      li.classList.add("todo-item");

      li.innerHTML = `

        <span>${value}</span>

      `


      li.addEventListener("click", (event) => {
        event.target.classList.toggle("done");
      } )

      document.querySelector('.list').appendChild(li)

      document.querySelector('.input').value = ""
    
    }

  })