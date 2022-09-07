export function addEthPrice(array) {
  for (let object of array) {
    object["ethPrice"] = "0";
    // console.log(object);
  }
}
