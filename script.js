const chapters = {
  博士の研究所: "順次処理",
  お片付けをしよう: "順次処理",
  お菓子屋さんの手伝い2: "分岐",
  裏山探検: "分岐・繰り返し",
  発進ロボットカー: "分岐と演算子",
  花を植えよう: "繰り返し",
  お使いロボット: "繰り返し",
  花を植えよう2: "繰り返し",
  タイルデザイナー見習い: "繰り返し",
  お菓子屋さんの手伝い: "イベント処理",
  にらめっこロボット: "イベント処理",
  通信ロボット: "イベント処理",
  恐怖の橋渡り: "変数",
  カラフルな我が家: "変数",
  作文ロボット: "変数",
  博士の研究所2: "関数",
  料理はお任せ: "関数",
  シュートを決めよう: "変数",
  暗号ロボットの挑戦状: "関数",
  タイルデザイナー見習い2: "関数",
  テストの合計点と平均点: "応用プログラミング",
  お釣りを求めよう: "応用プログラミング",
  三目並べ: "応用プログラミング",
  目指せスマートホーム: "応用プログラミング",
  くじ引きロボット: "応用プログラミング",
  アクションゲームを作ろう: "応用プログラミング",
  "3で割り切れる時に笑おう": "アルゴリズムとデータ構造",
  "最大・最小・交かん": "アルゴリズムとデータ構造",
  文字列マスター: "コンピュータ基礎",
  ビット演算: "コンピュータ基礎",
  ビット演算2: "コンピュータ基礎",
  "そのパスワードは安全？": "ネットワークとセキュリティ",
  パスワードを守ろう: "ネットワークとセキュリティ",
  "暗号化・復号": "ネットワークとセキュリティ",
  手書き文字認識: "AIプログラミング"
};

let todayLessonType = "";
let typingType = "";
function displayHandler(lessonType) {
  todayLessonType = lessonType;
  if (lessonType == "normal") {
    document.getElementById("normalDay").style.display = "inline";
    document.getElementById("presentationDay").style.display = "none";
  } else if (lessonType == "presentation") {
    document.getElementById("presentationDay").style.display = "inline";
    document.getElementById("normalDay").style.display = "none";
  }
}

let message = "";
function submitHandler() {
  const chapter = document.getElementById("chapter").value;
  const studentName = document.getElementById("studentName").value;
  const pstudentName = document.getElementById("pstudentname").value;
  const homeWork = document.getElementById("chapter02").value;
  const mission02Val = document.getElementById("mission02").value;
  const homeWorkContent =
    document.getElementById("mission02").options[
      document.getElementById("mission02").selectedIndex
    ].text;
  const mode = document.getElementById("mode").value;
  const hwMode = document.getElementById("hwMode").value;
  const typing = document.getElementById("typing").value;
  const timeattack = document.getElementById("time-attack").value;
  const mission_mode = document.getElementById("mission_mode").value;
  const mission =
    document.getElementById("mission").options[
      document.getElementById("mission").selectedIndex
    ].text;
  const production_content =
    document.getElementById("production_content").value;
  const ingenuity = document.getElementById("ingenuity").value;
  const state_of_announcement = document.getElementById(
    "state_of_announcement"
  ).value;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const coachName = document.getElementById("coachname").value;
  message = month + "/" + day + "<br>";
  //normalday
  if (todayLessonType == "normal") {
    message += `【 ${studentName} さんレッスンレポート】<br>`;
    message += "<br>";
    if (chapter == "クリエイトモード") {
      message += "本日はクリエイトモードを中心に行いました。<br>";
      message += "<br>";
      message += `本日のレッスン目標は、「 ${mission} 」でした。<br>`;
    } else {
      message += `本日は「 ${chapters[chapter]}を学ぶ、${chapter} 」に取り組みました。<br>`;
      message += "<br>";
      message += `本日のレッスン目標は、「 ${mode}の${chapter}を${mission}」でした。<br>`;
    }
    message += "<br>---タイピング---<br>"
    message += `${typing}<br>`;
    message += "<br>---タイムアタック---<br>";
    message += `${timeattack}<br>`;
    message += "<br>---ミッションモード---<br>";
    message += `${mission_mode}<br>`;
    message += "<br>";
    if (homeWork == "クリエイトモード") {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${homeWork}で、発表会へ向けてクリエイトを創作する」<br>`;
    } else if (mission02Val == "ChallengeMode") {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${hwMode}の${homeWork}で、${homeWorkContent}」<br>`;
    } else {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${hwMode}で${homeWork}のステージを、${homeWorkContent}」<br>`;
    }

    //presentation
  } else {
    message += `【${pstudentName}さんレッスンレポート】<br>`;
    message += "<br>";
    const pTitle = document.getElementById("title").value;
    message += "本日は、発表会を行いました<br>";
    message += `${pstudentName}さんは、[タイトル：${pTitle}]を発表してくれました。<br>`;
    message += "<br>---作品内容---<br>"
    message += `${production_content}<br>`;
    message += "<br>---工夫やこだわり、難しかった点---<br>";
    message += `${ingenuity}<br>`;
    message += "<br>---発表の様子---<br><br>"
    message += `${state_of_announcement}<br>`;
    if (homeWork == "クリエイトモード") {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${homeWork}で、${homeWorkContent}」<br>`;
    } else if (mission02Val == "ChallengeMode") {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${hwMode}の${homeWork}で、${homeWorkContent}」<br>`;
    } else {
      message += "◇◇自宅学習目標◇◇<br>";
      message += `「${hwMode}の${homeWork}を、${homeWorkContent}」<br>`;
    }
  }
  message += "<br>よろしくお願いいたします。<br>";
  message += "<br>";
  message += `記入者：コーチ${coachName}`;
  document.getElementById("result").innerHTML = message;
}

function onClickCopy() {
  const pTag = document.getElementById("result");
  const range = document.createRange();
  range.selectNodeContents(pTag);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  const clipboardText = selection;
  navigator.clipboard.writeText(clipboardText);
  selection.removeAllRanges();
}

const dontEnter = [
  document.getElementById("studentName"),
  document.getElementById("pstudentname"),
];

const dontLength = dontEnter.length;
let dontI = 0;
while (dontI < dontLength) {
  const sN = dontEnter[dontI];
  sN.addEventListener("focus", function (e) {
    e.target.onkeypress = function (e) {
      if (e.keyCode === 13) {
        return false;
      }
    };
  });
  dontI++;
}
