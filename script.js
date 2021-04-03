const chapters = {
    "Chapter1":"順次処理","Chapter2":"順次処理",
    "Chapter10":"分岐","Chapter11":"分岐","Chapter12":"分岐と演算子",
    "Chapter3":"繰り返し","Chapter4":"繰り返し","Chapter8":"繰り返し","Chapter9":"繰り返し","Chapter11":"繰り返し",
    "Chapter5":"イベント処理","Chapter6":"イベント処理","Chapter7":"イベント処理",
    "Chapter13":"変数","Chapter14":"変数","Chapter15":"変数",
    "Chapter16":"関数","Chapter17":"関数"
}

var message = "";
var yes_no = "";
var motivation_yes_no = "yes";
var todayLesson = "";

$('input').click(function(){
    yes_no = $('input[name="typing"]:checked').val();
    motivation_yes_no = $('input[name="motivation"]:checked').val();
    todayLesson = $('input[name="todayLesson"]:checked').val();
    if (todayLesson == "normal") {
        document.getElementById("normalDay").style.display = "inline";
        document.getElementById("presentationDay").style.display = "none";
    } else {
        document.getElementById("presentationDay").style.display = "inline";
        document.getElementById("normalDay").style.display = "none";
    }
    if (yes_no == "yes"){
        document.getElementById("typing-comment").style.display = "inline";
    }else{
        document.getElementById("typing-comment").style.display = "none";
    }
    if (motivation_yes_no == "no"){
        document.getElementById("motivation-comment").style.display = "none";
    }else{
        document.getElementById("motivation-comment").style.display = "inline";
    }
})

$('.submit').on('click', function(e){
    e.preventDefault();
    var chapter = $('#chapter').val();
    var studentName = $('#studentname').val();
    var pstudentName = $('#pstudentname').val();
    var comment = $('#comment').val();
    var homeWork = $('#homeWork').val();
    var phomeWork = $('#phomeWork').val();
    var typing = $('#typing-comment-description').val();
    var mission = $('#mission option:checked').text();
    var motivation = $('#motivation-description').val();
    var pDescription = $('#pDescription').val();
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var coachName = $('#coachname').val()

    message = month+"/"+day+"<br>";
    if (todayLesson == "normal"){
        message += "【" + studentName + "さんレッスンレポート】<br>";
        message += "<br>";
        if(chapter=="Create"){
            message += "本日はクリエイトモードを中心に行いました。<br>";
            message += "<br>";
            message += "本日のレッスン目標は、"+mission+"にするでした。<br>";
        }else{
            message += "本日は"+ chapters[chapter] + "を学ぶ、" + chapter + "に取り組みました。<br>";
             message += "<br>";
            message += "本日のレッスン目標は、"+chapter+"を"+mission+"にするでした。<br>";
        }
        message += comment + "<br>";
        if (motivation_yes_no == "yes") {
            message += motivation + "<br>";
        };
        message += "<br>";
        if (yes_no == "yes"){
            message += "タイピング練習では、"+typing+"<br>";
        };
        message += "自宅学習での目標は「"+homeWork+"」です。<br>";
    
    //presentation
    }else{
        message += "【" + pstudentName + "さんレッスンレポート】<br>";
        message += "<br>";
        var pTitle = $('#title').val();
        message += "本日は、発表会を行いました<br>"
        message += pstudentName + "さんは、" + "[タイトル：" + pTitle +"]を発表してくれました。<br>"
        message += "<br>"
        message += pDescription + "<br>"
        message += "<br>"
        message += "自宅学習での目標は「"+phomeWork+"」です。<br>";
    }
    message += "<br>";
    message += "よろしくお願いいたします。<br>";
    message += "<br>";
    message += "記入者：コーチ"+coachName;
    
    document.getElementById('result').innerHTML = message;
})
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