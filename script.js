const chapters = {
    "Chapter1":"順次処理","Chapter2":"順次処理",
    "Chapter10":"分岐","Chapter11":"分岐","Chapter12":"分岐と演算子",
    "Chapter3":"繰り返し","Chapter4":"繰り返し","Chapter8":"繰り返し","Chapter9":"繰り返し","Chapter11":"繰り返し",
    "Chapter5":"イベント処理","Chapter6":"イベント処理","Chapter7":"イベント処理",
    "Chapter13":"変数","Chapter14":"変数","Chapter15":"変数",
    "Chapter16":"関数","Chapter17":"関数", "Chapter18": "変数", "Chapter19":"関数",
    "テストの合計点と平均点":"応用プログラミング",
    "お釣りを求めよう":"応用プログラミング",
    "三目並べ":"応用プログラミング",
    "目指せスマートホーム":"応用プログラミング",
    "くじ引きロボット": "応用プログラミング",
    "3で割り切れる時に笑おう":"アルゴリズムとデータ構造",
    "最大・最小・交かん":"アルゴリズムとデータ構造",
    "文字列マスター":"コンピュータ基礎",
    "ビット演算":"コンピュータ基礎",
    "そのパスワードは安全？":"ネットワークとセキュリティ",
    "暗号化・復号": "ネットワークとセキュリティ",
}

let todayLessonType = "";
let typingType = "";
function displayHandler(lessonType) {
    todayLessonType = lessonType;
    if (lessonType == "normal") {
        document.getElementById("normalDay").style.display = "inline";
        document.getElementById("presentationDay").style.display = "none";
    } else if(lessonType == "presentation") {
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
    const homeWorkContent = document.getElementById("mission02").options[document.getElementById("mission02").selectedIndex].text;
    const mode = document.getElementById("mode").value;
    const hwMode = document.getElementById("hwMode").value;
    const typing = document.getElementById("typing").value;
    const timeattack = document.getElementById("time-attack").value;
    const mission_mode =document.getElementById("mission_mode").value;
    const mission = document.getElementById("mission").options[document.getElementById("mission").selectedIndex].text;
    const production_content = document.getElementById("production_content").value;
    const ingenuity = document.getElementById("ingenuity").value;
    const state_of_announcement = document.getElementById("state_of_announcement").value;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const coachName = document.getElementById("coachname").value;
    message = month+"/"+day+"<br>";
    //normalday
    if (todayLessonType == "normal"){
        message += "【" + studentName + "さんレッスンレポート】<br>";
        message += "<br>";
        if(chapter=="Create"){
            message += "本日はクリエイトモードを中心に行いました。<br>";
            message += "<br>";
            message += "本日のレッスン目標は、「"+mission+"」でした。<br>";
        }else{
            message += "本日は「"+ chapters[chapter] + "を学ぶ、" + chapter + "」に取り組みました。<br>";
            message += "<br>";
            message += "本日のレッスン目標は、「"+mode+"の"+chapter+"を"+mission+"」でした。<br>";
        }
        message += "<br>" + "---タイピング---" + "<br>" + typing + "<br>";
        message += "<br>" + "---タイムアタック---" + "<br>" + timeattack + "<br>";
        message += "<br>" + "---ミッションモード---" + "<br>" + mission_mode + "<br>";
        message += "<br>";
        if(homeWork=="クリエイトモード"){
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+homeWork+"で、"+ "発表会へ向けてクリエイトを創作する" + "」<br>";
        }else if (mission02Val=="ChallengeMode"){
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+hwMode+ "の" +homeWork+"で、"+ homeWorkContent + "」<br>";
        }
        else{
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+hwMode+ "で" + homeWork + "の" + chapters[homeWork]+ "を、"+ homeWorkContent + "」<br>";
        }

    //presentation
    }else{
        message += "【" + pstudentName + "さんレッスンレポート】<br>";
        message += "<br>";
        let pTitle = document.getElementById("title").value;
        message += "本日は、発表会を行いました<br>"
        message += pstudentName + "さんは、" + "[タイトル：" + pTitle +"]を発表してくれました。<br>"
        message += "<br>" + "---作品内容---" + "<br>" + production_content + "<br>"
        message += "<br>" + "---工夫やこだわり、難しかった点---" + "<br>" +　ingenuity + "<br>"
        message += "<br>" + "---発表の様子---" + "<br>" +　state_of_announcement + "<br>"
        if(homeWork=="クリエイトモード"){
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+homeWork+"で、"+ homeWorkContent + "」<br>";
        }else if (mission02Val=="ChallengeMode"){
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+hwMode+ "の" +homeWork+"で、"+ homeWorkContent + "」<br>";
        }
        else{
            message += "◇◇自宅学習目標◇◇" + "<br>" + "「"+hwMode+ "の" +homeWork+ "を、"+ homeWorkContent + "」<br>";
        }
    }
    message += "<br>";
    message += "よろしくお願いいたします。<br>";
    message += "<br>";
    message += "記入者：コーチ"+coachName;
    document.getElementById('result').innerHTML = message;
}

// ----------------------------------------------------------------------
// let input = document.createElement('input');
// input.setAttribute('type', 'checkbox');
// input.setAttribute('id', 'kuro');
// input.setAttribute('name', 'kuro');
// input.setAttribute('value', '1');
// let label = document.createElement('label');
// label.htmlFor = 'kuro';
// label.appendChild(document.createTextNode('ブロック'));
// let divNode = document.getElementById("selectMode")
// divNode.appendChild(input);
// divNode.appendChild(label);

// let input2 = document.createElement('input');
// input2.setAttribute('type', 'checkbox');
// input2.setAttribute('id', 'b');
// input2.setAttribute('name', 'b');
// input2.setAttribute('value', '2');
// let label2 = document.createElement('label');
// label2.htmlFor = 'b';
// label2.appendChild(document.createTextNode('Pythonブロック'));
// let divNode2 = document.getElementById("selectMode")
// divNode2.appendChild(input2);
// divNode2.appendChild(label2);
// ----------------------------------------------------------------------

function onClickCopy() {
    const pTag = document.getElementById('result');
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
    document.getElementById("pstudentname")
]

const dontLength = dontEnter.length;
let dontI = 0;
while(dontI < dontLength){
    const sN = dontEnter[dontI]
    sN.addEventListener('focus',function(e){
    e.target.onkeypress = function(e){
      if(e.keyCode===13){
        return false;
      }
    }
  });
  dontI++;
};
