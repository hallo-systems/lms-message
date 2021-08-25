const chapters = {
    "Chapter1":"順次処理","Chapter2":"順次処理",
    "Chapter10":"分岐","Chapter11":"分岐","Chapter12":"分岐と演算子",
    "Chapter3":"繰り返し","Chapter4":"繰り返し","Chapter8":"繰り返し","Chapter9":"繰り返し","Chapter11":"繰り返し",
    "Chapter5":"イベント処理","Chapter6":"イベント処理","Chapter7":"イベント処理",
    "Chapter13":"変数","Chapter14":"変数","Chapter15":"変数",
    "Chapter16":"関数","Chapter17":"関数",
    "アドバンスモード1":"応用プログラミング","アドバンスモード2":"アルゴリズムとデータ構造", "アドバンスモード3":"コンピュータ基礎"
}

var todayLessonType = "";
var typingType = "";
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

function typingHandler(typing) {
    typingType = typing;
    if (typing == "yes"){
        document.getElementById("typing-comment").style.display = "inline";
    }else{
        document.getElementById("typing-comment").style.display = "none";
    }
}

var message = "";
function submitHandler() {
    let chapter = document.getElementById("chapter").value;
    let studentName = document.getElementById("studentName").value;
    let pstudentName = document.getElementById("pstudentname").value;
    // let comment = document.getElementById("comment").value;
    let homeWork = document.getElementById("homeWork").value;
    let phomeWork = document.getElementById("phomeWork").value;
    // let typing = document.getElementById("typingComentDescription").value;
    // ------------------------------------------------------
    let typing = document.getElementById("typing").value;
    let timeattack = document.getElementById("time-attack").value;
    let mission_mode =document.getElementById("mission_mode").value;
    // ------------------------------------------------------
    let mission = document.getElementById("mission").options[document.getElementById("mission").selectedIndex].text;
    // let pDescription = document.getElementById("pDescription").value;
    let production_content = document.getElementById("production_content").value;
    let ingenuity = document.getElementById("ingenuity").value;
    let state_of_announcement = document.getElementById("state_of_announcement").value;    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let coachName = document.getElementById("coachname").value;
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
            message += "本日のレッスン目標は、「"+chapter+"を"+mission+"」でした。<br>";
        }
        message += "<br>" + "---タイピング---" + "<br>" + typing + "<br>";
        message += "<br>" + "---タイムアタック---" + "<br>" + timeattack + "<br>";
        message += "<br>" + "---ミッションモード---" + "<br>" + mission_mode + "<br>";
        // message += "<br>" + comment;
        message += "<br>";
        if (typingType == "yes"){
            message += "タイピング練習では、"+typing+"<br>";
        };
        message += "◇◇自宅学習目標◇◇" + "<br>" + "「" +homeWork+ "」" + "<br>";

    //presentation
    }else{
        message += "【" + pstudentName + "さんレッスンレポート】<br>";
        message += "<br>";
        var pTitle = document.getElementById("title").value;
        message += "本日は、発表会を行いました<br>"
        message += pstudentName + "さんは、" + "[タイトル：" + pTitle +"]を発表してくれました。<br>"
        message += "<br>" + "---作品内容---" + "<br>" + production_content + "<br>"
        message += "<br>" + "---工夫やこだわり、難しかった点---" + "<br>" +　ingenuity + "<br>"
        message += "<br>" + "---発表の様子---" + "<br>" +　state_of_announcement + "<br>"
        message += "<br>" +　"◇◇自宅学習目標◇◇" + "<br>" + "「" +phomeWork+ "」" + "<br>";
    }
    message += "<br>";
    message += "よろしくお願いいたします。<br>";
    message += "<br>";
    message += "記入者：コーチ"+coachName;

    document.getElementById('result').innerHTML = message;
}

function onClickCopy() {
    let pTag = document.getElementById('result');
    let range = document.createRange();
    range.selectNodeContents(pTag);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}

// document.getElementById("studentname").onkeypress = function (event) {
//     if (event.key === 'Enter') event.preventDefault();
// }