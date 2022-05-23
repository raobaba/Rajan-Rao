//store the products array in localstorage as "products"
let arr = JSON.parse(localStorage.getItem("products"));
function subProducts(){
    event.preventDefault();
   let form = document.getElementById("products");
   let type = form.type.value;
   let desc = form.desc.value;
   let price = form.price.value;
   let image = form.url.value;
   document.getElementById("type").innerText = null;
   document.getElementById("desc").innerText = null;
   document.getElementById("price").innerText = null;
   document.getElementById("url").innerText = null;
   let p1 = new Products(type,desc,price,image);
   console.log(p1);
   arr.push(p1);

   localStorage.setItem("products",JSON.stringify(arr))


}

function Products(type,desc,price,image){
     this.type = type;
     
     this.desc = desc;
     this.price = price;
     this.image = image;

}
