// 表のクラスを作成
// VerticalLineは縦軸の項目、HorizonalLineは横軸の項目、resultは値, unitは単位
var Gruf = function(title, VerticalLine, HorizonalLine, result, unit) {
  this.title = title
  this.VerticalLine = VerticalLine
  this.HorizonalLine = HorizonalLine
  this.result = result
    // ここで表に使うtable要素のタグを生産
    // (横軸の数だけtrをループで生産し、横軸の数だけループでtdを生産する。)
    //配列を順番に取り出す。
  this.createTable = function() {
    var table = document.createElement("table");
    table.id = "gruf";
    // 一段目のtrタグを作成
    var first_tr = document.createElement("tr");
    //一段目の最初のtdタグを作る
    var first_td = document.createElement("td");
    //一段目の最初のtdは表のタイトルにする。
    first_td.innerHTML = this.title;
    document.body.appendChild(table);
    table.appendChild(first_tr);
    first_tr.appendChild(first_td);
    var y = 0;
    //横軸の項目をループで順番に取り出し、tdに入れる
    while (y < HorizonalLine.length) {
      var koumoku = document.createElement("td");
      koumoku.innerHTML = HorizonalLine[y];
      first_tr.appendChild(koumoku);
      y++;
    };
    var i = 0;
    while (i < VerticalLine.length) {
      // 生成されたテーブルの中に縦軸の数だけtrを作成
      var tr = document.createElement("tr");
      table.appendChild(tr);
      var firstTd = document.createElement("td");
      //最初のtdには縦軸の項目を順番に入れる。
      firstTd.innerHTML = VerticalLine[i];
      tr.appendChild(firstTd);
      var y = 0; //横軸のループに使う
      while (y < HorizonalLine.length) {
        // 生成されたtrの中に横軸の数だけtdを作成
        var td = document.createElement("td");
        td.innerHTML = result[i][y] + unit;
        tr.appendChild(td);
        y++;
      };
      i++;
    };
  };
}

students = ["asahi", "ryota", "shingo", "takeru", "tomoya"];
subjects = ["国語", "数学", "理科", "社会", "英語"];
//連想配列にすると数字で値を取得することができないので、配列に横軸の項目と同じ順番で作成
asahi = [90, 80, 72, 79, 68];
ryota = [80, 60, 72, 42, 68];
shingo = [82, 90, 66, 43, 80];
takeru = [78, 60, 55, 91, 60];
tomoya = [60, 78, 40, 49, 55];
results = [asahi, ryota, shingo, takeru, tomoya]; //それぞれの配列をresultという別の配列に格納

// 成績表を例にインスタンスを作成
seiseki = new Gruf("成績表", students, subjects, results, "点");
seiseki.createTable(); //createTableメソッドで成績表を作成
