// 表を作成するために必要な情報を定義するためのオブジェクトを作り、 それを元にテーブルのタグ生成するための関数を作る。

// var object1 = {
//   name: "りんご",
//   price: 2000
// };
// console.log(object1.name);

var Person = function(name, age) {
  this.name = name;
  this.age = age;
  // this.sayHello = "私は" + this.name + "です";
  // var sayHello = function() {
  //   "私は" + this.name + "です";
};
Person.prototype.sayHello = function() {
  console.log("私は" + this.name + "です");
};

asahi = new Person("旭", 21);
asahi.sayHello();

// 表のクラスを作成
var Gruf = function(title, yoko, tate, result) {
  this.title = title
  this.yoko = yoko
  this.tate = tate
  this.result = result
    // ここで表に使うtable要素のタグを生産
    // (横軸の数だけtrをループで生産し、横軸の数だけループでtdを生産する。)
    //配列を順番に取り出す。
}

subjects = ["国語", "数学", "理科", "社会", "英語"];
students = ["asahi", "ryota", "shingo", "takeru", "tomoya"];


result = [asahi, ryota, tomoya, takeru, shingo]

seiseki = new Gruf("成績表", subjects, students, result);
console.log(seiseki.yoko);
console.log(seiseki.tate);
console.log(seiseki.result[1]);
