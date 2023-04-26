//--------------------------------------------------------
//sin usar metodos map, filter o reduce,

function filtrarforce2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isForceUser) {
      result.push(arr[i]);
    }
  }
  return result;
}

function scores2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].pilotingScore + arr[i].shootingScore);
  }
  return result;
}

function sumscores(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
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
  "Este es el resultado: " + sumscores(scores2(filtrarforce2(personnel)))
);
