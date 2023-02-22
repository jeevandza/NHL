const express = require("express");
const database = require("./database.sql");
const postPlayers = require("./Schema/playerList");

const PORT = 9000;

const app = express();

/**
 * To create data base using simple query
 */

app.get("/team_list", (req, res) => {
  let sql = "SELECT * FROM master_team_list";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result, "result");
  });
});

app.get("/add_players", (req, res) => {
  let addPlayers = `insert into list_of_players(player_id, name,skill,coach,captain,team_id)
  values
  (84,"Ichigo","Goalkeeper",false,false,1),
  (85,"Kushin","Front",false,false,2),
  (86,"kashiki","back",false,false,2),
  (87,"Zampa","center",false,false,3),
  (88,"kappa","defender",false,false,5),
  (89,"kuppa","defender",false,false,6),
  (90,"gaja","back",false,false,7),
  (91,"Donald","center",false,false,6),
  (92,"bangman","back",false,false,7),
  (93,"kumar","center",1,false,8),
  (94,"haramsifsd","center",1,false,9),
  (96,"savish","front",false,false,10),
  (97,"kamchi","front",false,false,1),
  (98,"momkasd","front",false,false,2)
  `;

  database.query(addPlayers, (err, result) => {
    if (err) throw err;
    console.log(result, "test");
  });
});

app.get("/players_list", (req, res) => {
  let playerList = "SELECT * FROM list_of_players";
  database.query(playerList, (err, result) => {
    if (err) throw err;
    console.log(result, "platers list");
  });
});

app.get("/create_game_table", (req, res) => {
  let createGameTable =
    "CREATE TABLE game_list(game_id int not null, game_date datetime,  host_name varchar(255),PRIMARY KEY (game_id),host_team int,guest_team int , foreign key(host_team)references master_team_list(team_id) ) foreign key(guest_team)references master_team_list(team_id) )";

  database.query(createGameTable, (err, result) => {
    if (err) throw err;
    console.log(result, "game data table created");
  });
});

app.get("/createAGame", (req, res) => {
  let addGameData = `INSERT INTO GAME_LIST VALUES (101,(datetime,"1999-05-12 12:34:09 AM",5),"Hulishe",8,2,"0:2")`;
  const gameData = ``;

  database.query(addGameData, (err, result) => {
    if (err) throw err;
    console.log(result, "Submitted to SQL");
  });
});

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
