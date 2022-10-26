let item_1 = document.getElementById("item-1");
let item_2 = document.getElementById("item-2");
let big = document.getElementById("big")

item_1.onclick = active;
item_2.onclick = active;




item_1.addEventListener("click",toogle1);
item_2.addEventListener("click",toogle1);

function active () {
    item_1.classList.remove("active")
    item_2.classList.remove("active")
    this.classList.add("active")
}

function toogle1() {
        let src = this.firstElementChild.firstElementChild.src
        let text = this.lastElementChild.innerHTML


        big.style.backgroundImage = `url(${src})`
        big.firstElementChild.innerHTML = text
        
        console.log(text)
}
