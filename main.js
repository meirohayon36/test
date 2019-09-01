var head = document.getElementById("head");
var click = document.getElementById("click");
var screen = document.getElementById("screen");
var hour = document.getElementById("hour");
var point = document.getElementById("point");
var left = document.getElementById("left");
var level = document.getElementById("level");
var miss = document.getElementById("miss");
var side = document.getElementById("side");

var dur = 0;
var spinTime = 300;

head.addEventListener("mouseover", start)

function start() {

  head.innerHTML = "click me to start";   // אני משנה את הכותרת בשעה שאני מרחף על הכותרת 

}
function activate() {    // פונקצה בדף הראשי שהיא מתחילה את המשחק את הסיבוב והבריחה והניקוד
  
  if (confirm("ready to start?")) {
    dur = 2;
    click.style.animationDuration = dur + "s";  // אני מתחיל את המשחק שהדיב מסתובב ב2 שניות

    click.addEventListener("mouseover", theClick);

    click.addEventListener("click", clicker);

    screen.addEventListener("click", lost);

    var x = 60;       //  שניות 10 זה הדיב של השניות שמתחיל ב60 וכל שלב נוסף לי 
    var z = 2;
    if (hour.innerText == x) {

      var myInterval = setInterval(countDown, 1000);

      function countDown() {
        x = x - 1;
        hour.innerHTML = x
        if (level.innerHTML == z) {
          x = x + 10;
          hour.innerHTML = x;
          x = x - 1;
          hour.innerHTML = x;
          z++
        }
        if (hour.innerText == -1) {
          clearInterval(myInterval);   // זה עוצר את השעון
          gameOver();
        }
      }
    }
  }
}
function gameOver() {
  click.style.animation = "none";
  click.style.top = "0";
  click.style.left = "0";
  click.removeEventListener("mouseover", theClick)
  click.removeEventListener("click", clicker)
  screen.removeEventListener("click", lost);
  hour.innerHTML=0;
  if(level.innerHTML<6){
    message = alert("the point" + ":" + point.innerHTML + "\n" + "the miss" + ":" + miss.innerHTML)
  }else{
    message= alert("you won the game")
  }
}

screen.addEventListener("mouseover", ret);
side.addEventListener("mouseover", ret);

function ret() {

  head.innerHTML = "catch me if you can !";
}
// זאת הפונקציה שעושה את הבריחה של הדיב אם יש ריחוף של העכבר וגם כל שלב עולה המהירות של הבריחה
function theClick() {
  setTimeout(escape, spinTime);
}

function escape() {

  click.style.top = Math.random() * 520 + "px";
  click.style.left = Math.random() * 775 + "px";
}
var poin = 0;                                   // .. 20 זאת הפונקציה שמעלה את הניקוד כל פעם שלוחצים על הדיב תלוי באיזה שלב אם שלב ראשון עולה ב10 נקודות שלב שני  
var lef = 10;
var leve = 1;
var more = 10;

function clicker() {

  if (point.innerHTML == poin) {
    poin = poin + more;
    lef = lef - 1;

    point.innerHTML = poin;

    left.innerHTML = lef;

    if (left.innerHTML == 0) {
      if (level.innerHTML == 6) {
        gameOver();

      } else {
        nextLevel();
      }
    }
  }
}
function nextLevel() {
  spinTime -= 50;
  dur -= 0.25 ;
  click.style.animationDuration = dur+"s";
  more = more + 10;
  leve = leve + 1;
  level.innerHTML = leve;
  lef = 10;
  left.innerHTML = lef;
}

var w = 1;                // וכן הלאה 2 כאן ההגדרה שכל פעם שאני ילחץ חוץ לדיב ירד לי נקודות שלב ראשון נקודה שלב שני 

function lost() {
  if (level.innerHTML == 1) {
    poin = poin - 1
    point.innerHTML = poin;
    miss.innerHTML = w;
    w++
  }
  if (level.innerHTML == 2) {
    poin = poin - 2;
    point.innerHTML = poin
    miss.innerHTML = w;
    w++
  }
  if (level.innerHTML == 3) {
    poin = poin - 3;
    point.innerHTML = poin
    miss.innerHTML = w;
    w++
  }
  if (level.innerHTML == 4) {
    poin = poin - 4;
    point.innerHTML = poin
    miss.innerHTML = w;
    w++
  }
  if (level.innerHTML == 5) {
    poin = poin - 5;
    point.innerHTML = poin;
    miss.innerHTML = w;
    w++
  }
}


























































































