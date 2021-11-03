 export const orderItem = (item, dataList) => {
    return typeof dataList[0][item] === "string" ?
    dataList.sort(function(a, b) {
       const stringA = a[item].toUpperCase(); // ignore upper and lowercase
       const stringB = b[item].toUpperCase(); // ignore upper and lowercase
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
       return a[item] - b[item];
     });
 }