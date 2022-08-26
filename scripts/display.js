let container=document.querySelector(".container1");

function display(data){
container.innerHTML= null;
data.forEach(function(elem){
let div= document.createElement("div");
let img=document.createElement("img");
img.src=elem.img;
let title=document.createElement("p");
title.innerText=elem.category;
 div.append(img,title);
 container.append(div);
})


}


display(category_data);
console.log(category_data);