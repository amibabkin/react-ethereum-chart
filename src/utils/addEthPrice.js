// добавить сразу всем объектам воле ethPrice, пересчитанное также сразу
export function addEthPrice(array) {
  for (let object of array) {
    let gasPrice = object.gasPrice;
    object.ethPrice = (gasPrice * 21000) / 1000000000;
  }
}
