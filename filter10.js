let bookList=
[
    {
        name:"Javascript Good parts",
        author:"Douglas Croockford",
        stock:"10"
    },
    {
        name:"A smarter way to learn javascript",
        author:"mark meyers",
        stock:"12"
    },
    
    {
        name:"effective javascript",
        author:"david herman",
        stock:"0"
    }
]
let filterarr=bookList.filter((e)=>e.stock!=0).map((e)=>{return{title:e.name,author:e.author}
});
console.log(filterarr);