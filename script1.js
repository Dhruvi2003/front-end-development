let grid=document.querySelector(".products");
let filterInput=document.getElementById("filterInput");
fetch('https://fakestoreapi.com/products')
.then(res =>res.json())
.then(json =>{
    //iterating products
    console.log(json);
    for(let value of json){
        addElement(grid,value); 
    }
});

//add event listener
filterInput.addEventListener('keyup',filterProducts);
//callback function
function filterProducts(){
    let filterValue=filterInput.value.toUpperCase();
    let item=grid.querySelectorAll('.item')
    //console.log(filterValue);
    //console.log(item);

    for(let i=0;i<item.length;i++){
        let span=item[i].querySelector('.title');
        if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
              item[i].style.display="initial";
        }
        else{
  item[i].style.display="none";
        }
    }
}


//get value from the api create dynamic element
function addElement(appendIn,value){
    let div=document.createElement('div');
    div.className="item col-4 justify-self-center";
    let{image,title,category,price,id}=value;

    div.innerHTML=`
    <img id="cc" src="${image}" class="bg-cover img" alt="img1">
            <div class="text-center py-3 font-poppins">
                <p class="text-lg title">
                    Product ${title}:
                </p>
                <p> Category:${category}</p>
                <p>Rs:${(price)*100}</p>
                <a href="#" data-name="Lemon" data-price="5" class="add-to-cart btn btn-primary" >Add to cart</a>
        </div>
        `;
        appendIn.appendChild(div);
}
