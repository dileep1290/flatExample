let arr = [1,[2,[3,4]]];

// console.log(arr.flat(2))

function flaten(list){
    let newArray = [];
    
    list.forEach((element)=>{
        if(Array.isArray(element)){
            newArray = newArray.concat(flaten(element));
        }
        else{
            newArray.push(element);
        }
    })
    return newArray;
}

console.log(flaten(arr));