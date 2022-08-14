let s = document.body.getElementsByClassName('version_id')

if (s[0]){
s[0].innerHTML = 1
} else {
let newEl = document.createElement("p")
newEl.innerHTML = 1
newEl.className = "version_id"
newEl.style = "display:none"
document.body.append(newEl)
}
