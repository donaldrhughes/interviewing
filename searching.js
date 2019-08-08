//take in petname (unique) and array of owners :: return petname
var obj = {
    id: 1,
    owner: "Don",
    petname: ["spot", "fido", "doggy", "kitty"]
}

function findOwnerByPetname(petname){
    for(p in obj){
        for(var j=0; j < obj.petname.length; j++){
            // console.log(petname);
            if(obj.petname[j] === petname){
                return obj.owner;
            }
                
           
        }
    }

}
console.log(findOwnerByPetname("fido"));
