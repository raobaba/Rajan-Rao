var products = JSON.parse(localStorage.getItem("products"));
console.log(products);

products.forEach(function(el,ind){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
     td1.innerText = el.type;
     td1.style.fontSize = "25px";
    var td2 = document.createElement("td");
    td2.innerText = el.desc;
    td2.style.fontSize = "25px";
    var td3 = document.createElement("td");
     td3.innerText = el.price;
     td3.style.fontSize = "23px";
    var img = document.createElement("img");
    img.src = el.image;
    img.style.width = "100%";
    img.style.height = "70px";
    var td4 = document.createElement("td");
    td4.append(img);
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.fontSize = "25px";
    btn.style.marginTop = "15px";
    btn.style.color = "red";
    btn.style.border = "none";
    btn.addEventListener("click", function(){
        removeProducts(el,ind);
    })
    tr.append(td1,td2,td3,td4,btn);
    document.getElementById("body").append(tr);


})

function removeProducts(el,ind){
 
    console.log(el,ind);
    products.splice(ind,1);
    console.log(products);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.reload();
}