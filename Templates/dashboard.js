//add hovered class in selected list items

let list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover',activeLink))