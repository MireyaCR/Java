// Your code here:
const frasetodo1 = " of milk on the wall, "
const frasetodo2 = " of milk. "
const frasetodo3 = "Take one down and pass it around, "
const frasetodo4 = " of milk on the wall. "
const frasefinal2 = "Go to the store and buy some more, 99 bottles of milk on the wall."

function sing() {
    let cancion = "";
    for (let index = 99; index >= 0; index--) {
        cancion += `${index == 1 ? index + ' bottle' : index != 0 ? index + ' bottles':'No more bottles'}${frasetodo1}${index == 1 ? index + ' bottle' : index != 0 ? index + ' bottles':'no more bottles'}${frasetodo2}`;
        if (index != 0) {
            cancion += `${frasetodo3}${index - 1 == 1 ? index - 1 + ' bottle' : index - 1 != 0 ? index - 1 + ' bottles' : 'no more bottles'}${frasetodo4}`;
        } else {
            cancion += `${frasefinal2}`;
        }
    }
    return cancion;
}
console.log(sing());
for (let index = 0; index < 99; index++) {
    console.log(index)
}