var height = 6
var width = 5

var row = 0
var col = 0

var gameOver = false;

var words = ["HAPPY","APPLE","BLACK","GREEN"];
var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(word);

//載入init()
window.onload = function() {
    initialize();
}

function initialize() {
    //創建board遊戲上方面板
    for(let r=0;r<height;r++) {
        for(let c=0;c<width;c++) {
            //<span id='0-0' class='tile'>  </span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            //tile加入到<div id = board> 內
            document.getElementById("board").appendChild(tile);
        }
    }
    //建立keyboard下方鍵盤
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
    for(let i = 0; i < keyboard.length; i++){
        let currentRow = keyboard[i]; //現在的ROW = 0 1 2 
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");
        for(let j = 0; j < currentRow.length; j++){  //ROW[0] = Q W E...
            let keyTile = document.createElement("div")
            let key = currentRow[j]; //currentRow[0] = Q
            keyTile.innerText = key;
            
            //幫鍵盤內每個按鈕加ID
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
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
            keyboardRow.appendChild(keyTile);
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
        if (gameOver) return;

        //只要col 未超過 width 就可以執行加入字母 之後col++
        if("KeyA" <= e.code && e.code <= "KeyZ"){
            if(col < width) {  //col=0 1 2 3 4
                //目前的格子
                let currentTile = document.getElementById(row.toString()+"-"+col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                    currentTile.classList.add("spin");
                    col++;
                }
            }
        }
        //col介於12345 按下 消除當前的字母 並col--
        else if(e.code == "Backspace") {
            if(col>0 && col<=width) {
                col -= 1;
            }
            let currentTile = document.getElementById(row.toString()+"-"+col.toString());
            currentTile.innerText = "";
            currentTile.classList.remove("spin");
        }
        //當欄位已填滿 col = 5 時按下ENTER 執行update()
        else if(e.code == "Enter"){
            if(col == width){
            update(); //????????????????????????
            
            }
            
        }
        if(gameOver == false && row == height){
            gameOver = true;
            let currentWord = document.getElementById("answer");
            currentWord.innerText = "The answer is : " + word;
        }        
    //})//Listener
}


/*按下ENTER後執行
  
*/
function update(){
    let correct = 0;
    
    //PENNY {P:1 E:1 N:2 Y:1} 計算每種字母的數量
    let letterCount = {}; 
    for (let i = 0; i < word.length; i++){
        let letter = word[i];

        if(!letterCount[letter]){
            letterCount[letter] = 1;
        }
        else{
            letterCount[letter] += 1;
    }}

    /*是否位置正確
      獲取上方面板內字母
      判斷跟word[]內字母是否相同
      相同的話correct +1 並且把上方面板該字變綠 下方鍵盤字母變綠(去除橘色)
      correct = 5 全對 遊戲結束 
    */
    for(let i=0; i<width; i++){
        let currentTile = document.getElementById(row.toString()+"-"+i.toString());
        let letter = currentTile.innerText;
    
        if(letter == word[i]){
            currentTile.classList.add('correct'); 
            
            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");
            
            
            correct += 1;
            letterCount[letter] -= 1; //如果這個字用過就-1
        }
        if(correct == width){
            gameOver = true;
        }
    }
    /*是否有這個字母
      獲取上方面板內字母
      如果上方面板字母不是綠色(class不是correct)
            有此字(word.includes(letter))
            這個字還有剩未用(letterCount[letter] > 0)
                把上方字母變成橘色 下方鍵盤變橘色
            其他 
                把上方字母變灰 下方鍵盤變灰
      處理完一列後row++ col=0
      
    */
    for(let i=0; i<width; i++){
        let currentTile = document.getElementById(row.toString()+"-"+i.toString());
        let letter = currentTile.innerText;
    
        if(!currentTile.classList.contains('correct')){
            if(word.includes(letter) && letterCount[letter] > 0){
                currentTile.classList.add('present');
                
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
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