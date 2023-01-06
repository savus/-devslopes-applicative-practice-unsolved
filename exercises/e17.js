export function minBy(array, cb) {
   let smallest = array[0];
   for( let i = 0; i < array.length; i++) {
    if(smallest.age > cb(array[i]) ) {
      smallest = array[i];
    }
   }
   return smallest;
}

export function maxBy(array, cb) {
   let biggest = array[0];
   for( let i = 0; i < array.length;i++) {
      if(biggest.age < cb(array[i])) {
         biggest = array[i];
      }
   }
   return biggest;
}
