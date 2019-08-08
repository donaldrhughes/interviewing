// let obj = {
//     id: 1,
//     pet: "kitty",
//     owner: "Don"
// }

const arr = [1,2,3,4,5,6,7];

function findDuplicates(arr){
    for(let i=0; i < arr.length; i++){
        // return arr[i];
        let value = arr[i];
        for(let j=0; j < arr.length; j++){
        if(arr[j] == value){
        return true;
        }
        
        }
    }
}

console.log(findDuplicates(arr));

//return true if duplicates exist