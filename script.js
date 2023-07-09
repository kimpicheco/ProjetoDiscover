function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil do Kim de óculos escuros.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil do Kim.")
  }
}
let aboutMe = document.getElementById("aboutMe")
function openAboutMe() {
  aboutMe.classList.add("open-aboutMe")
}
function closeAboutMe() {
  aboutMe.classList.remove("open-aboutMe")
}

let popup = document.getElementById("popUP")
function openPopup() {
  popup.classList.add("open-popup")
}
function closePopup() {
  popup.classList.remove("open-popup")
}
function alrt() {
  alert("Em construção!")
}
document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popUPimg").style.display = "block"
    document.querySelector(".xpams").style.display = "block"
    document.querySelector(".popup-bgfade").style.display = "block"
    document.querySelector(".popUPimg img").src = image.getAttribute("src")
  }
})
document.querySelector(".xpams").onclick = () => {
  document.querySelector(".popUPimg").style.display = "none"
  document.querySelector(".xpams").style.display = "none"
  document.querySelector(".popup-bgfade").style.display = "none"
}
console
