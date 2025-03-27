
let Shop = document.querySelector('.Shops');

let basket = JSON.parse(localStorage.getItem('Data')) || [];



Shop.innerHTML = data.map(function (x) {
    let search = basket.find(function (v) {
        return v.id == x.id;
    })






    return `
     <div class="item" id="${x.idd}">

        <img  src="${x.img}" alt="">
        <div class="details">
            <div class="name">${x.name}</div>
            <div class="price">$ 300</div>
        </div>
        

        <div class="plus-minus-val" id="${x.priceToid}" style="display:none">

            <div onclick="decrement(${x.id})" class="add"><i class="bi bi-dash-lg"></i></div>
            <div  class="value" id="${x.id}">${search === undefined ? 1 : search.item}</div>
            <div onclick="increment(${x.id})"  class="sub"><i class="bi bi-plus-lg"></i></div>
           </div>

            <button class="Addto" id="${x.AddToid}" onclick="addtocart(${x.id},${x.AddToid})">Add To Cart</button>
      </div>  
      
    `
}).join("");



function increment(x) {
    console.log(x);
    let selectedItem = x.id;
    let search = basket.find(function (y) {
        return selectedItem == y.id;
    })

    if (search === undefined) {
        basket.push({
            id: x.id,
            item: 1,
            AddToid:x.AddToid,
        })

    }
    else {
        search.item += 1;
    }
    console.log(basket);
    update(selectedItem);
    localStorage.setItem('Data', JSON.stringify(basket));
}

function decrement(x) {
    let selectedItem = x.id;
    let search = basket.find(function (y) {
        return selectedItem == y.id;
    })


    if (search == undefined) return;

    else {
        search.item -= 1;

    }
    update(selectedItem);
    basket = basket.filter(function (x) {
        return x.item !== 0;
    })
    localStorage.setItem('Data', JSON.stringify(basket));
    if (search.item === 0) return;


    // console.log(basket);

}
function update(x) {
    let search = basket.find(function (y) {
        return x == y.id
    })

    if (search == undefined) return;
    else {
        document.getElementById(x).innerHTML = search.item;
    }
    calculation();

}


function calculation() {
    let maps = basket.map(function (x) {

        return x.item;

    }).reduce((acc, curr) => acc + curr, 0)

    // console.log(maps);
   let cartVal = document.querySelector('.cart-val')
   console.log(cartVal);
 
    cartVal.innerHTML = maps;
   
 

}

calculation();


let searchbaR = document.querySelector('.searchbaR');

searchbaR.addEventListener('input', function (x) {

    let InpVal = x.target.value;

    let filter = data.filter(function (x) {
        let itemparent = document.getElementById(x.idd);
        console.log(itemparent);
        x.name.toLowerCase().includes(InpVal.toLowerCase()) ? itemparent.style.display = '' : itemparent.style.display = 'none';
    })


})


function addtocart(x,o) {
    var selected = x.id;
    var selected2 = o.id;
    console.log(o);
    // console.log(selected);
    let search = basket.find(function (y) {
        return x.id == y.id;
    })
    if (search == undefined) {
        basket.push({
            id: x.id,
            item: 1,
            AddToid:o.id,
        })

        let dataChaiye = data.find(function (z) {

            return z.id == x.id;

        })



        let ADDTO = document.getElementById(dataChaiye.AddToid);
        console.log(ADDTO);

        ADDTO.innerText = 'Go To Cart';





        localStorage.setItem('Data', JSON.stringify(basket));
        localStorage.setItem('Add-Cart-Inner-Text', JSON.stringify(ADDTO.innerText))
        calculation();
        update(selected);

    } else {
        alert('Item is Already Added')
    }


}



addEventListener('DOMContentLoaded', function () {

  
    


    data.map(function (x) {

        let dataChaiye = data.find(function (z) {

            return z.id == x.id;

        })
        let arr = [];
        let ADDTO = document.getElementById(dataChaiye.AddToid);
        arr.push(ADDTO);

       

        let getBasket =  basket.find(function(c){

        let y =  arr.find(function(u){
                return u.id == c.AddToid
            })
            console.log(y);
            if(y == undefined)return;
            y.innerText =       JSON.parse(localStorage.getItem('Add-Cart-Inner-Text'));
        })
     
       
       
     

        


    })
   



})


    //    let ADDTO = document.getElementById(dataChaiye.AddToid);
    //    console.log(ADTO);




