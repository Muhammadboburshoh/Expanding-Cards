const panels = document.querySelectorAll(".panel")

// console.log(panels[0]);

panels.forEach( (panel) => {
  // console.log(panil);
  panel.addEventListener("click", () => {
    removeActive()
    panel.classList.add("active")

    /* if(panel.classList[1] === undefined) {
      panel.classList.add("active")
    } else if(panel.classList[1] === "active") {
      panel.classList.remove("active")
    }; */
    
  })
})

function removeActive () {
  panels.forEach( panel => {
    panel.classList.remove("active")
  })
}