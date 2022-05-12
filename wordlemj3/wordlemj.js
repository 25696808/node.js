var height = 5
var width = 17

var row = 0
var col = 0

var gameOver = false;

var doSpin = 0;

//var words = ["HAPPY","APPLE","BLACK","GREEN"];
//var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
//胡牌生成器
var shunTzu = ["123","234","345","567","789","QWE","WER","ERT","RTY","TYU","ASD","SDF","DFG","GHJ","JKL"];
var kerTzu = ["111","222","333","444","555","666","777","888","999","QQQ","WWW","EEE","RRR","TTT","YYY","AAA","SSS","DDD","FFF","GGG","HHH","ZZZ","XXX","CCC","VVV","BBB","NNN"];
var changTzu = ["11","22","33","44","55","66","77","88","99","QQ","WW","EE","RR","TT","YY","AA","SS","DD","FF","GG","HH","ZZ","XX","CC","VV","BB","NN"];


let word = "";
let newWord = "";
for(let k=0;k<100; k++){
    word = "";
    newWord = "";
    let shunNum = Math.floor(Math.random()*5); //01234
    let kerNum = 5-shunNum;
    let changNum = 1;
    let checkTrue = true;
    for(let i=0; i<shunNum; i++){
        word += shunTzu[Math.floor(Math.random()*shunTzu.length)];
    }
    for(let i=0; i<kerNum; i++){
        word += kerTzu[Math.floor(Math.random()*shunTzu.length)];
    }
    for(let i=0; i<changNum; i++){
        word += changTzu[Math.floor(Math.random()*shunTzu.length)];
    }
    //alert(word);
    //let newWord = "";
    var searchTable = "123456789QWERTYUIOASDFGHJKLZXCVBN";
    for(let i=0; i<searchTable.length; i++){
        let searchNum = searchTable[i];
        let count = 0;
        for(let j=0; j<word.length; j++){
            if(searchNum == word[j]){
                newWord += searchNum;
                count ++;    
            }
        }
        if(count<=4){
            checkTrue = true;
        }else{
            checkTrue = false;
            break;
        }
    }

    if(checkTrue == true){
        break;
    }else{
        continue;
    }
    
}
window.alert(newWord);
word = "";
word = newWord;



//var word = "123456789QWERTYAA";
var guessWord = "";
console.log(word.length);


let mode = 1;

var userName = ["Amber", "Josh", "科科鐘","蔡明里"];
var userScore = [1020,2030,30,420];
var ranking = "";

var YourName = prompt('請輸入你的暱稱');





//載入init()
window.onload = function() {
    initialize();
    
}

function initialize() {
    //創建board遊戲上方面板
    for(let r=0;r<height;r++) {
        for(let c=0;c<width;c++) {
            //<span id='0-0' class='tile'>  </span>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.setAttribute("name", "");                 //NAME!!!!!!!!!!!!!!!!!!!!
            tile.innerText = "";
            tile.classList.add("tile");
            //tile.innerText = "";
            //tile加入到<div id = board> 內
            document.getElementById("board").appendChild(tile);
        }
    }
    //建立keyboard下方鍵盤
    let keyboard = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9"], //一萬-九萬
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O"], //一筒-九筒
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"], //一條-九條
        ["Enter", "Z", "X", "C", "V", "B", "N", "⌫" ] //北南東西發中
    ]
    for(let i = 0; i < keyboard.length; i++){
        let currentRow = keyboard[i]; //現在的ROW = 0 1 2 
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for(let j = 0; j < currentRow.length; j++){  //ROW[0] = 1 2 3...
            let keyTile = document.createElement("div");
            let key = currentRow[j]; //currentRow[0] = 1
            //keyTile.innerText = key;
            //加上圖片
            let keyImg = document.createElement("img");
            if (key == "Enter" || key == "⌫" || key == " "){
                keyTile.innerText = key;
            }
            else{
                keyImg.src ="img/"+key+".svg";
                keyImg.classList.add("keyboard-img");
            } 
            //幫鍵盤內每個按鈕加ID
            if (key == "Enter") {
                keyTile.id = "Enter";
                keyImg.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
                keyImg.id = "Backspace";
            }
            else{
                keyTile.id = "Key" + key; // "Key" + "A";
                keyImg.id = "Key" + key;
            } 
            //監聽者 按下去執行processKey()
            keyTile.addEventListener("click", processKey);
            //幫鍵盤內每個按鈕加CLASS
            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            //創建的每一個變成一行
            keyTile.appendChild(keyImg);
            keyboardRow.appendChild(keyTile);
            //keyboardRow.appendChild(keyImg);
        }//創建的每一行串成一個DIV
        document.body.appendChild(keyboardRow);
    }
    //創建左下方作者
    copyRight = document.createElement("p");
    copyRight.id = "copyRight";
    copyRight.innerText = "Copyright ChuChiaYuan";
    copyRight.classList.add("copyright");
    document.body.appendChild(copyRight);

    let hitMode = document.getElementById("B_mode");
    hitMode.addEventListener("click", changeMode);



}//function init

function changeMode(){
    if(mode == 1){
        document.body.style.backgroundColor="#383C51";
        document.body.style.transition = ".2s ease-in";
        document.getElementById("title").style.color = "white";
        document.getElementById("copyRight").style.color = "white";
        document.getElementById("info").style.color = "white";
        document.getElementById("answer").style.color = "white";
        document.getElementById("B_mode").style.color = "white";
        mode = 0;
    }
    else{
        document.body.style.backgroundColor="white";
        document.getElementById("title").style.color = "black";
        document.getElementById("copyRight").style.color = "black";
        document.getElementById("info").style.color = "rgb(50, 53, 52)";
        document.getElementById("answer").style.color = "black";
        document.getElementById("B_mode").style.color = "rgb(50, 53, 52)";

        mode= 1;
    }
    
    
}
//當按下按鈕時執行processInput()
function processKey() {
    //如果按下A 則e.code = "KeyA"
    e = { "code" : this.id }; 
    processInput(e);
    if(doSpin == 1){
        let currentTile = document.getElementById(row.toString()+"-"+(col-1).toString());
        
        currentTile.classList.add("tile2");
        currentTile.classList.remove("tile");
    }else if(doSpin == 2){
        let currentTile = document.getElementById(row.toString()+"-"+(col).toString());
        currentTile.classList.remove("tile2");
        currentTile.classList.add("tile");
    }
}
/*開始執行輸入
  按下A-Z 上方出現數字 動畫旋轉
  Backspace 返回 上方清空
  ENTER 提交 執行update()
  如果gameOver = true 結束遊戲
*/
function processInput(e) {
    //document.addEventListener('keyup',(e) => {
        //gameOver=true 跳出 不管怎麼案都沒反應
        if (gameOver){
            return};

        if(e.code == "Enter"){
            let checkHU = 1;
            if(col == width){
                let checkGuessWord = guessWord;
                let count = 0;
                //大於四個
                for(let i = 0;i<width;i++){
                    let checkNum = checkGuessWord[i];
                    for(let j = i;j<width;j++){
                        if(checkNum == checkGuessWord[j]){
                            count++;
                        }
                    }
                    if(count > 4){
                        alert("非胡牌排型!");
                        checkHU = 0;
                        break;
                    }
                    count = 0;
                }
                //
                let searchSwith = "123456789QWERTYUIOASDFGHJKLZXCVBN";
                let searchNo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
                for(let i = 1; i < width; i++){
                    let checkNum = checkGuessWord[i]; //3'2'1456879
                    for(let j = 0; j < searchSwith.length; j++){
                        //let mark = "";
                        if(checkNum == searchSwith[j]){ //2=2
                            for(let k = j+1; k < searchSwith.length; k++){
                                let mark = searchNo[k]; //3
                                for(let z=0; z<i; z++){ //i=1
                                    let positions = 0;
                                    for(let x=0; x<searchSwith.length; x++){
                                        if(checkGuessWord[z] == searchSwith[x]){
                                            positions = x;
                                        }
                                    }
                                    
                                    if(searchNo[positions] > mark && checkHU==1 ){
                                        alert("非胡牌排型!");
                                        checkHU = 0;
                                        break;
                                    }
                                }

                            }
                        }
                    }
                }

                if(checkHU == 1){
                    update();
                    guessWord = "";
                }

            }
        }
        else if(e.code == "Backspace"){
            if(col>0 && col<=width) {
                col -= 1;}
            
            let currentTileImg = document.getElementById(row.toString()+"-"+col.toString());
            currentTileImg.removeChild(currentTileImg.childNodes[0]);
            let currentTile = document.getElementById(row.toString()+"-"+col.toString());
            currentTile.classList.remove("spin");
            doSpin = 2;
            let tmp = guessWord;
            guessWord = "";
            for(let i=0; i<(tmp.length-1); i++){
                guessWord += tmp[i];
            }
            
        }
        else{
            if(col<width){
                //!!!!!!!!!!!!
                guessWord += e.code[3];

                let currentTile = document.getElementById(row.toString()+"-"+col.toString());
                let currentTileImg = document.createElement("img");
                let imgName = "";
                for(let i=0; i<e.code.length; i++){
                    if(i>2){imgName += e.code[i];}
                }
                //currentTile.innerText = imgName;
                currentTile.classList.add("spin");
                doSpin = 1;
                currentTileImg.src = "img/"+imgName+".svg";
                currentTileImg.classList.add("board-img");
                currentTileImg.id = imgName;
                //currentTile.setAttribute("name",imgName);        //!!!!!!!!!!!
                currentTile.appendChild(currentTileImg);
                col++;
            }
        }

        if(gameOver == false && row == height){
            gameOver = true;
            let currentWord = document.getElementById("answer");
            currentWord.innerText = "The answer is : ";
            for(let i = 0; i < width; i++){
                let currentRow = document.getElementById("answer-sheet");
                currentRow.classList.add("answer-sheet");
                let Tile = document.createElement("span");
                let TileImg = document.createElement("img");
                Tile.classList.add("tile");
                Tile.classList.add("correct");
                TileImg.classList.add("board-img");
                TileImg.src = "img/"+word[i]+".svg";
                Tile.appendChild(TileImg);
                currentRow.appendChild(Tile);
            }

            userName.push(YourName);
            userScore.push(0);
            for (var z = 0; z < userName.length; z++) {
                let tempScore = userScore[z];
                let tempName = userName[z];
                for (var j = z+1; j < userName.length; j++) {
                    if(tempScore < userScore[j]){
                        tempScore = userScore[j];
                        userScore[j] = userScore[z];
                        userScore[z] = tempScore;
                        tempName = userName[j];
                        userName[j] = userName[z];
                        userName[z] = tempName;
                    }
                }
                
            }
            for (var z = 0; z < userName.length; z++) {
                ranking += ((z+1)+" : "+userName[z]+" - "+userScore[z]+"\n");
            }
            alert(ranking);
        }        
    
}


/*按下ENTER後執行
  
*/
function update(){

    console.log(guessWord);
    let correct = 0;

    //計算每個字母的數量  之後判斷能不能是胡牌
    let letterCount = {};
    for(let i=0; i<word.length; i++){
        let letter = word[i];
        if(!letterCount[letter]){
            letterCount[letter]=1;
        }else{
            letterCount[letter]++;
        }
    }
    console.log(letterCount);

    //判斷是否位置正確
    for(let i=0; i<width; i++){
        let currentTile = document.getElementById(row.toString()+"-"+i.toString());
        let letter = guessWord[i];
        if(word[i] == letter){

            currentTile.classList.add('correct');
            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove('present');
            keyTile.classList.add('correct');
            correct += 1;
            letterCount[letter] -= 1;
        }
        if(correct == width){
            gameOver = true;
            alert('胡牌');
            
            userName.push(YourName);
            userScore.push((height - row)*2);
            for (var z = 0; z < userName.length; z++) {
                let tempScore = userScore[z];
                let tempName = userName[z];
                for (var j = z+1; j < userName.length; j++) {
                    if(tempScore < userScore[j]){
                        tempScore = userScore[j];
                        userScore[j] = userScore[z];
                        userScore[z] = tempScore;
                        tempName = userName[j];
                        userName[j] = userName[z];
                        userName[z] = tempName;
                    }
                }
                
            }
            for (var z = 0; z < userName.length; z++) {
                ranking += ((z+1)+" : "+userName[z]+" - "+userScore[z]+"\n");
            }
            alert(ranking);
        }
    }

    //判斷是否有此字&無此字
    for(let i=0;i<width; i++){
        let currentTile = document.getElementById(row.toString()+"-"+i.toString());
        let letter = guessWord[i];

        if(!currentTile.classList.contains("correct")){
            if(word.includes(letter) && letterCount[letter]>0){

                currentTile.classList.add("present");
                let keyTile = document.getElementById("Key"+letter);
                if(!keyTile.classList.contains("correct")){

                    keyTile.classList.add("present");
                }
                
                letterCount[letter] -= 1;
            }
            else{
                currentTile.classList.add('absent');
                let keyTile = document.getElementById("Key" + letter);
                //keyTile.classList.add("absent");
                if(!keyTile.classList.contains("correct")){
                    if(!keyTile.classList.contains("present")){
                        keyTile.classList.add("absent");}
                }                    
            }
        }
        
    }

    row +=1;
    col = 0;
}


