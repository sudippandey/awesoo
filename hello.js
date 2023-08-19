// first is the array 
// array is the reference type value it is that when we copy value of the array or any 
//  eference type data copy or refrence value is copied wher in the primitive full copy is copied
// lets see the example here
var arr = [3,5,7,6]
var arrb = arr
arrb.push(7)
console.log(arr)
console.log(arrb)
// okk here the value is changing when we change the refrence value so
 var z = [...arrb]  //it is the way to make real copy of arraay or any obbj 
z.push(8)
console.log(z)


var a = 30
var b = a
console.log(a)
