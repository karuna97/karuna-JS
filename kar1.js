let vegetables=['carrot','tomato','cucumber','cabbage','potato'];
let color=['orange','red','green','violet','brown'];
let veg='carrot';
function vegetable(veg){
    for(let i=0;i<vegetables.length;i++){
    if(veg==vegetables[i]){
    return(color[i]);
}
}
}
console.log(vegetable(veg));
