var height = 5
var width = 17

var row = 0
var col = 0

var gameOver = false;

var doSpin = 0;

//var words = ["HAPPY","APPLE","BLACK","GREEN"];
//var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
var word = "123456789QWERTYAA";
var guessWord = "";
console.log(word.length);

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
    copyRight.innerText = "Copyright ChuChiaYuan";
    copyRight.classList.add("copyright");
    document.body.appendChild(copyRight);


}//function init

//當按下按鈕時執行processInput()
function processKey() {
    //如果按下A 則e.code = "KeyA"
    e = { "code" : this.id }; 
    processInput(e);

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
            if(col == width){
                
                update();
                
                guessWord = "";}
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
                TileImg.classList.add("board-img");
                TileImg.src = "img/"+word[i]+".svg";
                Tile.appendChild(TileImg);
                currentRow.appendChild(Tile);
            }
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
            keyTile.classList.remove('absent');
            keyTile.classList.add('correct');
            correct += 1;
            letterCount[letter] -= 1;
        }
        if(correct == width){
            gameOver = true;
            alert('胡牌');
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