export function formattingTimeToISO(array) {
  for (let object of array) {
    object.time = new Date(`20${object.time}`).toISOString();
    // .substring(0, 16);
  }
}
