//metodo filtrar me retorna arreglo con usuarios que cumplen el filtro
function filtrarforce(arr) {
  let result = [];

  result = arr.filter(function (element) {
    return element.isForceUser === true;
  });

  return result;
}

//tranformo el arreglo retornando un arreglo con las sumatorias de los scores por cada usuario
function scores(arr) {
  let result = [];
  result = arr.map(function (element) {
    return element.pilotingScore + element.shootingScore;
  });

  return result;
}

//aplico reduce para sumar lo valores de el arreglo.
function sumatoriascores(arr) {
  let result = 0;
  result = arr.reduce(function (acumulador, element) {
    return acumulador + element;
  }, 0);

  return result;
}

var personnel = [
  {
    id: 5,

    name: "Luke Skywalker",

    pilotingScore: 98,

    shootingScore: 56,

    isForceUser: true,
  },

  {
    id: 82,

    name: "Sabine Wren",

    pilotingScore: 73,

    shootingScore: 99,

    isForceUser: false,
  },

  {
    id: 22,

    name: "Zeb Orellios",

    pilotingScore: 20,

    shootingScore: 59,

    isForceUser: false,
  },

  {
    id: 15,

    name: "Ezra Bridger",

    pilotingScore: 43,

    shootingScore: 67,

    isForceUser: true,
  },

  {
    id: 11,

    name: "Caleb Dume",

    pilotingScore: 71,

    shootingScore: 85,

    isForceUser: true,
  },
];

console.log(
  "Este es el resultado: " + sumatoriascores(scores(filtrarforce(personnel)))
);
