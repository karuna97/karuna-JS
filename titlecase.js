let title="the road not taken";
function titleCaseEdit(title){
    title=title.toLowerCase().split(' ');
    for (let i=0;i<title.length;i++){
title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
    }
return title.join(' ');

};
console.log(titleCaseEdit(title))

