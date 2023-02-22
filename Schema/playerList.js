function generateArray() {
  var names = ["Falisha", "Defina", "Fiska", "Papi"];

  const skils = [
    "Front-1",
    "Front-2",
    "Left",
    "Right",
    "Middle-Left",
    "Middle-right",
    "Defender-1",
    "defender-2",
    "Goal keeper",
    "center-player",
  ];
  var newObj = [];

  const total_teams = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < 40; i++) {
    newObj[i] = {
      player_id: Math.ceil(Math.random() * 150),
      name: names[Math.floor(Math.random() * names.length)].toString(),
      skill: skils[Math.floor(Math.random() * names.length)].toString(),
      coach: i > 59 ? true : false,
      captain: i < 9 ? true : false,
      team_id: Math.ceil(Math.random() * 10),
    };
  }

  return newObj;
}

console.log(generateArray());

module.exports = generateArray();
