const createTwoElementsArrays = (arr) => {
  let arrays = [];
  let firstElementIndex = 0;
  let secondElementIndex = firstElementIndex + 1;

  const pushTwoElements = () => {
    arrays.push([arr[firstElementIndex], arr[secondElementIndex]]);
    secondElementIndex++;

    if (secondElementIndex === arr.length) {
      firstElementIndex++;
      secondElementIndex = firstElementIndex + 1;
    }
    if (firstElementIndex === arr.length - 1) return;

    pushTwoElements();
  };

  pushTwoElements();
  return arrays;
};
