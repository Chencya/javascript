// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// for (const [num, name] of game.scored.entries()) {
//   console.log(`第${num + 1}球，${name}进了`);
// }
// for (let [team, odd] of Object.entries(game.odds)) {
//   let teamteam = team === "x" ? "平局" : game[team];
//   console.log(`${teamteam}: ${odd}`);
// }
/*
让我们继续开发我们的足球博彩应用！这次，我们有一张记录比赛期间发生事件的日志地图。数值是事件本身，键是每个事件发生的分钟数（一场足球比赛有90分钟加上一些补时）。

1. 创建一个包含比赛中发生的不同事件的数组'events'（无重复项）
2. 比赛结束后，发现第64分钟的黄牌是不公平的。所以将这个事件从比赛事件日志中移除。
3. 在控制台打印以下字符串："平均每9分钟发生一次事件"（记住一场比赛有90分钟）
4. 遍历事件并将它们打印到控制台，标记是在上半场还是下半场（45分钟后），如下所示：
      [上半场] 17: ⚽️ 进球

祝你好运 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// const events = new Set([...gameEvents.values()]);
// const event64 = gameEvents.get(64);
// events.delete(event64);
// console.log(events);
// console.log(`平均每9分钟发生一次事件`);
// for ([time, item] of gameEvents.entries()) {
//   if (time <= 17) {
//     console.log(`[上半场] ${time}: ${item}`);
//   } else console.log(`[下半场] ${time}: ${item}`);
// }
// const a = "b";
// if (a === "c" || "a") {
//   console.log(`ok`);
// }
// 编程挑战 #4
/*
编写一个程序，接收以下划线形式命名的变量名列表，并将其转换为驼峰式命名。

输入将来自插入到DOM中的textarea（见下方代码），当按钮被点击时进行转换。

测试数据（粘贴到textarea中）
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

应产生如下输出（5个独立的console.log输出）
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

提示1：记住textarea中表示换行的字符😉
提示2：解决方案只需处理由两个单词组成的变量，如a_b
提示3：开始时不必担心✅符号。先解决变量名转换问题后再处理😉
提示4：这个挑战故意设计得比较难，如果你卡住了可以观看解决方案视频。然后暂停并继续！

完成后，用自己的测试数据进行测试！

祝你好运😀
*/
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const element = document.querySelector("button");
// element.addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   let str1 = text.split("\n");
//   for (let item2 of str1) {
//     let str2 = item2.split("_");
//     let name =
//       str2[0].toLowerCase() +
//       str2[1][0].toUpperCase() +
//       str2[1].slice(1).toLowerCase();
//     console.log(`${name}`);
//   }
// });
// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const addVAT = (rate) => (value) => value + value * rate;
// const addvat2 = addVAT(0.23);
// console.log(addvat2(23));

/*
让我们构建一个简单的投票应用！

一个投票包含一个问题、一组供人们选择的选项数组，以及记录每个选项回复数量的数组。这些数据存储在下面的起始对象中。

以下是你的任务：

1. 在 'poll' 对象上创建名为 'registerNewAnswer' 的方法。该方法需要完成两件事：
  1.1. 显示一个提示窗口让用户输入所选选项的编号。提示窗口应如下所示：
        你最喜欢的编程语言是什么？
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        （输入选项编号）
  
  1.2. 根据输入的数字更新答案数组。例如，如果选项是3，就将数组中位置3的值加1。确保检查输入是否为数字以及数字是否合理（比如输入52显然不合理，对吧？）

2. 当用户点击"参与投票"按钮时调用此方法。

3. 创建 'displayResults' 方法用于展示投票结果。该方法接收一个字符串参数（称为'type'），可以是'string'或'array'。如果类型是'array'，则直接使用console.log()显示结果数组（这是默认选项）。如果类型是'string'，则显示类似"投票结果为13, 2, 4, 1"的字符串。

4. 每次调用'registerNewAnswer'方法结束时运行'displayResults'方法。

提示：充分利用你在这个章节和前几个章节学到的知识😉

额外任务：使用'displayResults'方法显示测试数据中的两个数组。同时使用'array'和'string'两种显示方式。注意不要将数组放入poll对象中！那么在这种情况下this关键字应该指向什么？

额外测试数据1：[5, 2, 3]
额外测试数据2：[1, 5, 3, 9, 6, 1]

祝你好运😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     let value = prompt(
//       "你最喜欢的编程语言是什么\n0:javascript\n 1:python \n2:rust\n 3:c++\n 输入选项编号"
//     );
//     if (value === "0" || value === "1" || value === "2" || value === "3") {
//       this.answers[Number(value)] += 1;
//     }
//   },
// };
// const button = document.createElement("button");

// button.textContent = "参与投票";
// document.querySelector("button").addEventListener("click", function () {
//   poll.registerNewAnswer();
// });

/*
朱莉娅和凯特正在进行一项关于狗狗的研究。她们各自询问了5位狗主人关于狗狗的年龄，并将数据存入数组（每人一个数组）。目前，她们只想知道狗狗是成年犬还是幼犬。如果狗狗年龄大于等于3岁则为成年犬，小于3岁则为幼犬。

创建一个名为'checkDogs'的函数，该函数接收两个狗狗年龄数组（'dogsJulia'和'dogsKate'），并执行以下操作：

1. 朱莉娅发现前两只和最后两只狗的主人实际上养的是猫，不是狗！因此需要创建朱莉娅数组的浅拷贝，并从拷贝数组中移除猫的年龄数据（因为直接修改函数参数是不良实践）
2. 创建一个包含朱莉娅（修正后）和凯特数据的合并数组
3. 对每只剩余的狗狗，在控制台输出它是成年犬（"第1号狗狗是成年犬，年龄5岁"）还是幼犬（"第2号狗狗还是幼犬🐶"）
4. 为两组测试数据运行该函数

提示：使用本节目前学过的所有知识点😉

测试数据1：朱莉娅的数据 [3, 5, 2, 12, 7]，凯特的数据 [4, 1, 15, 8, 3]
测试数据2：朱莉娅的数据 [9, 16, 6, 8, 3]，凯特的数据 [10, 5, 6, 1, 4]

祝你好运😀
*/

// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliacopy = [...dogsJulia];
//   dogsJuliacopy.splice(-2, 2);
//   dogsJuliacopy.splice(0, 2);
//   console.log(dogsJuliacopy);
//   const dogsall = [...dogsKate, ...dogsJuliacopy];
//   dogsall.forEach(function (value, index) {
//     if (value >= 3) {
//       console.log(`第${index + 1}号狗狗是成年犬，年龄${value}岁`);
//     } else {
//       console.log(`第${index + 1}号狗狗是幼年犬，年龄${value}岁`);
//     }
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// 编程挑战 #2

/* 
让我们回到Julia和Kate关于狗狗的研究。这次，她们想把狗的年龄转换成人类年龄，并计算研究中狗狗的平均年龄。

创建一个函数'calcAverageHumanAge'，它接受一个狗狗年龄的数组('ages')，并按顺序执行以下操作：

1. 使用以下公式计算狗狗对应的人类年龄：如果狗狗年龄<=2岁，humanAge = 2 * dogAge。如果狗狗年龄>2岁，humanAge = 16 + dogAge * 4。
2. 排除所有人类年龄小于18岁的狗狗（等同于保留至少18岁的狗狗）
3. 计算所有成年狗狗的平均人类年龄（你应该已经从其他挑战中知道如何计算平均值了😉）
4. 为以下两组测试数据运行该函数

测试数据1: [5, 2, 4, 1, 15, 8, 3]
测试数据2: [16, 6, 10, 5, 6, 1, 4]

祝你好运 😀
*/
// function calcAverageHumanAge(ages) {
// const humanAges = ages.map((age) => (age > 2 ? age * 4 + 16 : 2 * age));
// console.log(humanAges);
// const filhumanages = humanAges.filter((hage) => hage >= 18);
// console.log(filhumanages);
// let totalage = filhumanages.reduce((acc, fhage) => acc + fhage);
// let averageage = totalage / filhumanages.length;
// console.log(averageage);
//   const averageage = ages
//     .map((age) => (age > 2 ? age * 4 + 16 : 2 * age))
//     .filter((hage) => hage >= 18)
//     .reduce((acc, fhage, i, arr) => acc + fhage / arr.length, 0);
//   console.log(averageage);
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

class persen {
  university = "hutb";
  constructor(fullname, firstname, lastname) {
    this.fullname = fullname;
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get getuniversity() {
    console.log("你好");
    return this.university;
  }
}
console.log(persen.university);
// const xiaoming = new persen("chenyuan", "yuan", "chen");
// console.log(xiaoming.getuniversity);

// persen(fullname, firstname, lastname){
//     this.fullname = fullname;
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// persen.prototype.getuniversity=function(){
//       console.log("你好");
//       return this.university;
// }
