/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  let count=0;
   for(let i=0; i<=arr.length; i++){
    let a=arr[i];
    let b=arr[a-1];
    let c=arr[b-1];
  if((i+1)==c && a!=b && b!=c){
  count++; 
  arr[i]=0;
   arr[a-1]=0;
    arr[b-1]=0;
   }
  }
  return count
};
