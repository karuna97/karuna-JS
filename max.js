import fetch from "node-fetch";

function maxAndminprz(productList){
    let min = productList[0].price;
    let max = 0;

    productList.map((product)=>{
        if(product.price > max) max = product.price;
        else if(product.price < min) min = product.price;
    });

    let minProduct = productList.filter((e) => e.price === min);
    let maxProduct = productList.filter((e) => e.price === max);

    console.log("min price\n"+minProduct[0].product+" Price:"+minProduct[0].price);
    console.log("max price\n"+maxProduct[0].product+" Price:"+maxProduct[0].price);

}

function makeApiCall(){
    fetch("https://demo7303877.mockable.io/",{method:"GET"})
    .then((res)=>{
        let promise = res.json();
        promise.then((result)=>{
            let productList = result.products;
            maxAndminprz(productList);
        })
    })
}

makeApiCall();