 export const orderItem = (item, dataList) => {
    return typeof item === String ?
    dataList.sort(function(a, b) {
       var stringA = a[item].toUpperCase(); // ignore upper and lowercase
       var stringB = b[item].toUpperCase(); // ignore upper and lowercase
       if (stringA < stringB) {
         return -1;
       }
       if (stringA > stringB) {
         return 1;
       }
     
       // names must be equal
       return 0;
     }) : 
     dataList.sort(function(a, b) {
       return a - b;
     });
 }