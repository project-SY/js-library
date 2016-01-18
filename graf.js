// 表のクラスを作成
var Gruf = function(title, VerticalLine, HorizonalLine, result) {
  this.title = title
  this.VerticalLine = VerticalLine
  this.HorizonalLine = HorizonalLine
  this.result = result
    // ここで表に使うtable要素のタグを生産
    // (横軸の数だけtrをループで生産し、横軸の数だけループでtdを生産する。)
    //配列を順番に取り出す。
  this.createTable = function() {
    var element = document.createElement("table");
    element.id = "gruf";
    //一段目の最初のtdだけ空のtdにする
    var first_tr = document.createElement("tr");
    var first_td = document.createElement("td");
    first_td.innerHTML = "空っぽです";
    document.body.appendChild(element);
    element.appendChild(first_tr);
    first_tr.appendChild(first_td);
    var i = 0;
    while (i < HorizonalLine.length) {
      var koumoku = document.createElement("td");
      koumoku.innerHTML = HorizonalLine[i];
      first_tr.appendChild(koumoku);
      i++;
    };
    var i = 0;
    while (i < VerticalLine.length) {
      // 生成されたテーブルの中に縦軸の数だけtrを作成
      var tr = document.createElement("tr");
      element.appendChild(tr);
      var firstTd = document.createElement("td");
      firstTd.innerHTML = VerticalLine[i];
      tr.appendChild(firstTd);
      var y = 0;
      while (y < HorizonalLine.length) {
        // 生成されたtrの中に横軸の数だけtdを作成
        var td = document.createElement("td");
        td.innerHTML = result[i][y];
        tr.appendChild(td);
        y++;
      };
      i++;
    };
  };
}

students = ["asahi", "ryota", "shingo", "takeru", "tomoya"];
subjects = ["国語", "数学", "理科", "社会", "英語"];
asahi = [90, 80, 72, 79, 68];
ryota = [80, 60, 72, 42, 68];
shingo = [82, 90, 66, 43, 80];
takeru = [78, 60, 55, 91, 60];
tomoya = [60, 78, 40, 49, 55];

results = [asahi, ryota, shingo, takeru, tomoya];

seiseki = new Gruf("成績表", students, subjects, results);
// console.log(seiseki.yoko);
// console.log(seiseki.tate);
console.log(seiseki.result[0]);
console.log(seiseki.VerticalLine.length);
seiseki.createTable();
