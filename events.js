//BUBBLING
const grandparent=document.getElementById("grandparent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");

child.addEventListener('click',()=>{
    console.log('child clicked');
})
parent.addEventListener('click',()=>{
    console.log('parent clicked');
})
grandparent.addEventListener('click',()=>{
    console.log('grandparent clicked');
})













/*const button=document.getElementById("box");
const container=document.getElementById("container");


const coordinates=document.createElement("p");
document.body.append(coordinates);

/*button.addEventListener("click",()=>{
    console.log("click");
    coordinates.innerHTML=`${ click.offsetX} ${ click.offsetY}`;
})*/

/*const logmessage=(event)=>
{
  coordinates.innerHTML=`${event.offsetX}  ${event.offsetY}`;
  box.style.left=`${event.offsetX}px`;
  box.style.top=`${event.offsetY}px`;
}




container.addEventListener('mousemove', logmessage);
*/