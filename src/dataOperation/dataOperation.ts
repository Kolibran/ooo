export const dataOperation = (setRawData: (data: any) => void) => {
  fetch("https://testbackend.nc-one.com/image")
    .then((response) => response.json())
    .then((data) => {
      const sumWithInitial = data.reduce(
        (accumulator: any[], currentValue: any) =>
          accumulator.some(
            (item) =>
              item.name === currentValue.name &&
              item.price === currentValue.price
          )
            ? accumulator
            : [...accumulator, currentValue],
        []
      );
      return setRawData(sumWithInitial);
    })
    .catch((error) => console.error("An error occurred:", error));
};
