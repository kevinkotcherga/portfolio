import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
        const toggle = (body) => {
      // si la valeur de toggled dans le localstorage est vide, alors on applique le dark theme
      if (localStorage.toggled === '') {
        body.classList.add('dark');
        localStorage.toggled = "dark";
        // si non on applique le light theme
      } else {
        body.classList.remove('dark');
        localStorage.toggled = "";
      }
    }



      const body = document.querySelector("body")
      const checkbox = document.querySelector("#checkBox")

      // au chargement de la page(changement de page sur le site) on checke (dans le local storage) si le dark theme est le theme choisi
      if (localStorage.toggled === 'dark') {
        // on applique la class au body
        body.classList.add('dark');
        checkbox.checked = true;
      }

      // on écoute le click sur la checkbox
      checkbox.addEventListener("click", (event) => {
        // on lance la fonction toggle, en lui passant le body
        toggle(body)
      })
  }
}
