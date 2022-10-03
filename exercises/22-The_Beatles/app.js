

//Your code above ^^^
const lib="let it be"
const frase1= "whisper words of wisdom";
const frase2= "there will be an answer"

function sing() {
  let cancion ="";
      for (let index = 1; index <= 8; index++) {
        cancion+=`${lib}, ` ; 
        if ( index%4==0) {
            if (index/4==1) {
                cancion+=`${frase1}, `  
                cancion+=`${lib}, `    
            } else {
                cancion+=`${frase2}, ` 
                cancion+=`${lib}`   
            }                    
        }
            }
    return cancion;
}
console.log(sing());