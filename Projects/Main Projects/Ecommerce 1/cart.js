let basket = JSON.parse(localStorage.getItem('Data')) || [];
function calculation() {
    let maps = basket.map(function (x) {

        return x.item;

    }).reduce((acc, curr) => acc + curr, 0)

    console.log(maps);

    document.querySelector('.cart-val').innerHTML = maps;

}

calculation();
let ShoppingCarts = document.querySelector('.ShoppingCarts');

function generateCarts() {
    if (basket.length !== 0) {
        ShoppingCarts.innerHTML = basket.map(function (x) {
            let search = data.find(function (v) {
                return x.id == v.id;
            })
            let SignalTotalRemoveItem = document.querySelector('.Signal-Total-RemoveItem');
            SignalTotalRemoveItem.innerHTML = `
                <h2 class="Final-val"></h2>
                <button onclick="clearcart()"><a href="shoes.html">Clear Cart</a></button>
            `

            return `
             <div class="Shop-item">
                <img width="120" src="${search.img}" alt="" >
    
               
                <div class="Product-details">
    
               
                 <h6 class="generateCarts-name">${search.name}</h6>
                 <h6 class="generateCarts-price">$ ${search.price}</h6>
                <h6 onclick="removeItem(${search.id})" class="generateCarts-x"><i class="bi bi-x-lg"></i></h6>
               
    
             </div>
    
                
                <div class="generateCarts-Total">
                <h6>Total :$ ${x.item * search.price}</h6>
                </div>
             
                
                    
                    
           <div class="btn-incre-decre">
                      <div onclick="decrement(${x.id})" class="add"><i class="bi bi-dash-lg"></i></div>
                       <div  class="value" id="${x.id}">${x.item}</div>
                        <div onclick="increment(${x.id})"  class="sub"><i class="bi bi-plus-lg"></i></div>
                </div>
                
                
    
              
    
    
          
             
             </div>

            `

        }).join("")


    } else {
        let SignalTotalRemoveItem = document.querySelector('.Signal-Total-RemoveItem');
        SignalTotalRemoveItem.innerHTML = `
            <h2>Cart Is Empty</h2>
            <button><a href="shoes.html">Back To Shopping </a></button>
        `
        ShoppingCarts.innerHTML = "";
    }

}
generateCarts();

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
        })
    }
    else {
        search.item += 1;
    }
    console.log(basket);
    update(selectedItem);
    generateCarts();
    Total();
    localStorage.setItem('Data', JSON.stringify(basket));
}

function decrement(x) {
    let selectedItem = x.id;
    let search = basket.find(function (y) {
        return selectedItem == y.id;
    })


    if (search == undefined) return;
    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem);

    basket = basket.filter(function (x) {
        return x.item !== 0;
    })
  
    generateCarts();
   
    localStorage.setItem('Data', JSON.stringify(basket));
    Total();

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

function removeItem(x) {

    selectedItem = x.id;
    basket = basket.filter(function (c) {
        return x.id !== c.id;
    })
    
    calculation();
    generateCarts();
    
   
        //  localStorage.setItem('addiddd',JSON.stringify(Addto.id));



    
    localStorage.setItem('Data', JSON.stringify(basket));
    Total();


      
}

function clearcart() {
    basket = [];
    localStorage.setItem('Data', JSON.stringify(basket));
    generateCarts();
    calculation();
}
function Total() {
    let Total = basket.map(function (x) {
        let search = data.find(function (y) {
            return x.id == y.id;

        })
        return x.item * search.price;
    }).reduce((x, y) => x + y, 0)
   let finalval = document.querySelector('.Final-val')
   if(finalval == undefined)return;else{
    finalval.innerText = 'Total : $ ' + Total;
   }
   

}
Total();




