let msg = document.querySelector(".msg");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let play = false;
let swords = ["python", "javascript", "php", "go", "ruby", "java", "html", "css", "reactjs", "angularjs", "swift", "android", "sql"];
let newWords = "";
let ranWords = "";



btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess the word";
        input.classList.toggle('hidden');
        newWords = createNewWords();
        ranWords = scrambleWords(newWords.split(""));
        msg.innerHTML = `Guess the Output : ${ranWords.join("")}`;
    }else{
        let tempWord = input.value;
        if(tempWord === newWords){  
            play = false;
            msg.innerHTML = "Wohoo! You are Correct.";
            btn.innerHTML = "Start again";
            input.classList.toggle('hidden');
            input.value = "";
        }else{ 
            msg.innerHTML = `Hmmm... Try again! : ${ranWords.join("")}`;  
        }
    }
});

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * swords.length);
    let newTempSwords = swords[ranNum];

    return newTempSwords;
}

const scrambleWords = (arr) => {
    
    for(let i = arr.length - 1; i > 0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
       
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}