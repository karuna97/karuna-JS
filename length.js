let array1= [2,3,[5,6,8,1,5],9];
let array2 = 0;
function length(array){
   for(let i in array){
      if(Array.isArray(array[i])){
          length(array[i])
       }else{
          array2++
       }
    }
    return length;
};

length(array1);
console.log(array2);
//uf nfsg 