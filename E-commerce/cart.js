var removeItem = document.getElementsByClassName("danger");

for(var i =0 ; i<removeItem.length; i++){
    var button = removeItem[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        counterUpdate()


    })
}

var cartsymbol = document.getElementsByClassName('cartsymbol');
for(var i =0; i<cartsymbol.length;i++){
    var cart =cartsymbol[i]
    cart.addEventListener('click',function(event){
        var cartClicked = event.target;
        var shopitem = cartClicked.parentElement.parentElement;
        var price = shopitem.getElementsByClassName('itemPrice')[0].innerHTML;
        var text = shopitem.getElementsByClassName('itemName')[0].innerHTML;
        var img = shopitem.getElementsByClassName('itemImg')[0].src;
        console.log(price,text,img);
       
        addItemToCart(price , text , img)
        


    })
}

var tableCart =document.getElementsByClassName('tableBodyCart')[0];

function addItemToCart(price , text , img){
    var row = document.createElement('tr');

    // var remove = document.createElement('td');
    // remove.innerHTML='<a href="#" class="danger"><i class="fa-regular fa-circle-xmark"></i></a>'

    // var imgCell = document.createElement('td');
    // imgCell.innerHTML =" <img src="+img+" >";
    
    // var textCell = document.createElement('td');
    // textCell.innerHTML = text;
    // var priceCell = document.createElement('td');
    // priceCell.innerHTML = price;
    var cartrowcont = `                   <td><a href="#" class="danger"><i class="fa-regular fa-circle-xmark"></i></a></td>
    <td><img src="${img}" alt=""></td>
    <td>${text}</td>
    <td class="price">${price}</td>
    <td ><input class="Quantity" type="number" value="1"></td>
    <td class="Total">$118.19</td>`

    row.innerHTML=cartrowcont;
    

    tableCart.append(row);

   


}

var quantityInputs = document.getElementsByClassName('Quantity');
for(var i =0 ; i< quantityInputs.length;i++){
    var input = quantityInputs[i]
    input.addEventListener('change',function(event){
        var inputchange = event.target;
        if(isNaN(inputchange.value)|| inputchange.value <=0){
            inputchange.value=1;
        }
        counterUpdate();


    })
}

function counterUpdate(){
    var row = document.getElementsByClassName('cartrow');
    var total = 0;
    var all = document.getElementsByClassName('totalAll');
    for(var i=0; i<row.length;i++){
        var priceElement = document.getElementsByClassName('price')[i]
        var quantityElement = document.getElementsByClassName('Quantity')[i]

        var price = parseFloat(priceElement.innerHTML.replace('$',''));

        var quantity= quantityElement.value

        total= total + (price*quantity);

        
        

    }
    // total=Math.round(total*100)/100;
    for(var i =0 ; i<all.length ; i++){
        all[i].innerHTML ='$'+ total;
    }
}



