// LAB 1.1
/* 1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của
thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
'Thiago', 'Coutinho' và 'Perisic'
5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
'team1', 'draw' và 'team2')
6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà
không sử dụng if/else hoặc toán tử 3 ngôi.
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnaby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "3:0",
  scored: ["Lewandowski", "Gnaby", "Lewandowski", "Muller"],
  date: "January 8, 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = (...players) => {
  console.log(players);
  console.log(`${players} goals were scored`);
};
printGoals(...game.scored);

// 7.
team1 < team2
  ? console.log("Team 1 is more likely to win")
  : console.log("Team 2 is more likely to win");

// LAB 1.2
/*
1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
dụ: "Goal 1: Lewandowski")
2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
nhớ)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
 Tỉ lệ thắng của Bayern Munich: 1.33
 Tỉ lệ hòa of draw: 3.25
 Tỉ lệ thắng của Borrussia Dortmund: 6.5
Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau �
�
Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key
(tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
Ví dụ:
 {
Gnarby:1,
Hummels:1,
Lewandowski: 2
 }
*/

// 1.
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}
