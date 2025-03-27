let Data = [

    {
        id:"dasdasdas",
        idd:"asdgdsdfgfsdd",
        Name:"Hanger",
        Price:120,
        img:"Hammer-img.jpg",
    },
    {
        id:"nnmvbvcmb",
        idd:"dasgdsdfgfsdd",
        Name:"Hammer",
        Price:300,
        img:"Hammer-img.jpg",
    },
    {
        id:"gdsdfgfsdd",
        idd:"sdagdsdfgfsdd",
        Name:"Toy",
        Price:500,
        img:"Toy-img.jpg",
    },
    {
        id:"vxcvzcjngh",
        idd:"sdfvxcvzcjngh",
        Name:"Watch",
        Price:650,
        img:"Watch-img.jpg",
    }

]
let  userArr = [];
let Catalogues =document.querySelector('.Catalogues');
function CataloguesCreater(){
Catalogues.innerHTML = Data.map(function(x){
   
    return `
    
    <div class="ITEM-PARENT col-lg-2" id="${x.idd}">
    <div class="item productsss">
        <img width="220" src="${x.img}" alt="">
        <h5 class="name">${x.Name}</h5>
        <h4>Price :$ ${x.Price}</h4>

        <div class="plus-minus">
            <i onclick="decrement(${x.id})" class="bi bi-dash"></i>
            <div class="plus-minus-value" id="${x.id}"></div>
            <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
        </div>
    </div>


</div>

`

    

}).join("")}
CataloguesCreater();


    let searchbox =document.querySelector('.search-box');
    let name = document.getElementsByTagName('h5');
    
    
    searchbox.addEventListener('input',function(x){
  
        const val = x.target.value;
        console.log(val);

        Data.filter(function(x){

            let itemparent = document.getElementById(x.idd);
            console.log(itemparent);
            console.log(x.Name.toLowerCase());
            x.Name.toLowerCase().includes(val.toLowerCase()) ?  itemparent.style.display = "": itemparent.style.display = "none"; 
            

            // console.log(a);
            
        })
    
    
    })
    // console.log(searchbox);
    // let val = searchbox.target.value;
    // let productsss =document.querySelectorAll('.productsss');
    // let pname =document.querySelectorAll(".name");
        
  

 


