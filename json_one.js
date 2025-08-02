const car = [
  {
    name: "BMW",
    variation: {
      color: "black",
      wheel: "4",
      size: "4 seater",
    },
  },
  {
    name: "Honda",
    variation: {
      color: "black",
      wheel: "4",
      size: "4 seater",
    },
  },
  {
    name: "Hondai",
    variation: {
      color: "white",
      wheel: "4",
      size: "7 seater",
    },
  },
];



let id = 1;

car.forEach(c => {
  if (c.variation.color === "black") {
    c.id = id++;
  }
});

console.log(car)