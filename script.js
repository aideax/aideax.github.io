/* keypress space event = 32 */
/* keypress backspace event = 8 */
let toType = document.querySelector("#toType");
let input = document.querySelector("#input");
let btnStart = document.querySelector("#btnStart");
let charTyped = document.querySelector("#charTyped");
let errors = document.querySelector("#errors");
let wpm = document.querySelector("#wpm");
let accuracy = document.querySelector("#accuracy");
let time = 60;
let running = false;
let words1 = ["bee", "aromatic", "auspicious", "flight", "arrogant", "seal", "finger", "ethereal", "curly", "sheet", "wound", "bizarre", "division", "subdued", "military", "subsequent", "moldy", "dog", "fly", "deserve", "roll", "knee", "camp", "shave", "hospitable", "boiling", "bear", "obedient", "ad hoc", "drag", "heavenly", "loss", "fuel", "second-hand", "arch", "oatmeal", "shy", "stocking", "faint", "murder", "snakes", "madly", "ski", "rush", "drawer", "gifted", "phobic", "carpenter", "rambunctious", "angle", "ignore", "account", "bells", "motionless", "poke", "aspiring", "shelter", "attend", "dress", "striped", "fair", "delicious", "pour", "flawless", "pail", "underwear", "choke", "abject", "beg", "dinosaurs", "melted", "actually", "toe", "sidewalk", "skirt", "hang", "elegant", "voracious", "deranged", "learned", "drab", "lyrical", "tremendous", "pointless", "haircut", "second", "company", "clear", "limping", "range", "nimble", "achiever", "unequaled", "receptive", "hushed", "furry", "nondescript", "historical", "common", "dislike", "cut", "orange", "zealous", "fluttering", "overt", "wiry", "familiar", "badge", "wrestle", "nauseating", "government", "first", "disgusted", "outrageous", "writer", "caring", "prick", "creature", "alluring", "rule", "breath", "property", "babies", "name", "wakeful", "zoom", "superb", "melodic", "road", "fact", "argue", "grass", "damaged", "furniture", "poison", "plane", "delay", "scarce", "excellent", "field", "tax", "gaze", "rely", "flow", "books", "birthday", "frightening", "teeth", "demonic", "bumpy", "helpless", "gruesome", "educate", "sparkling", "wire", "form", "squeal", "acoustics", "excite", "straw", "highfalutin", "describe", "jobless", "position", "type", "cloudy", "manage", "mother", "frightened", "wren", "hall", "wet", "crook", "strengthen", "exotic", "absorbed", "feigned", "appear", "infamous", "mammoth", "wonderful", "irritate", "machine", "collect", "irate", "vessel", "hissing", "public", "impossible", "nice", "hellish", "soda", "far-flung", "solid", "obtainable", "claim", "ignorant", "white", "terrible", "plucky", "secretary", "prickly", "curious", "bouncy"];
let words2 = ["obey", "meeting", "event", "agree", "mundane", "cream", "necessary", "roomy", "unsightly", "match", "verse", "romantic", "unit", "sneaky", "level", "poised", "secretive", "amused", "obsequious", "cheat", "swing", "bat", "miniature", "painstaking", "rabbit", "ghost", "best", "eggs", "sordid", "unkempt", "misty", "scrape", "squalid", "discover", "cooperative", "waggish", "morning", "tug", "stone", "juvenile", "neat", "nutritious", "suit", "notebook", "soup", "twig", "cakes", "early", "zany", "living", "depend", "nest", "preach", "mom", "giddy", "title", "filthy", "north", "note", "support", "damp", "labored", "ban", "guarantee", "battle", "chin", "authority", "itchy", "queen", "overjoyed", "alike", "gratis", "animal", "knowledge", "actor", "library", "rescue", "glue", "old", "vegetable", "wretched", "cuddly", "fat", "burly", "pack", "agonizing", "ambiguous", "locket", "broken", "steadfast", "shiver", "fit", "yell", "warn", "tray", "meddle", "wrong", "possess", "tail", "fold", "crazy", "wandering", "selection", "want", "comparison", "gullible", "cagey", "quartz", "humorous", "thoughtful", "snatch", "object", "foolish", "awake", "remarkable", "bath", "eight", "afraid", "brother", "burn", "leather", "expand", "liquid", "replace", "dirt", "mark", "men", "rude", "jaded", "sleepy", "hunt", "righteous", "poor", "button", "instruct", "sail", "veil", "innate", "enormous", "unique", "boy", "desire", "creepy", "cold", "ordinary", "deadpan", "expensive", "rose", "careless", "languid", "mixed", "mean", "happen", "thrill", "zip", "joke", "well-made", "comb", "business", "marked", "smelly", "husky", "care", "heal", "talk", "superficial", "ill-informed", "lame", "sense", "daffy", "smell", "pickle", "sprout", "snow", "shaggy", "alarm", "digestion", "copper", "blade", "spy", "tin", "hungry", "placid", "insect", "plastic", "party", "knife", "request", "cactus", "helpful", "mine", "determined", "defective", "basket", "exultant", "owe", "songs", "profit", "farm", "trick", "fireman", "town", "corn"];
let words3 = ["drain", "guitar", "bashful", "aback", "cover", "suck", "flavor", "faded", "tall", "shrill", "round", "frequent", "birth", "bite-sized", "unpack", "handsomely", "well-to-do", "charge", "design", "sun", "cent", "double", "adventurous", "massive", "cluttered", "abnormal", "uninterested", "hanging", "complete", "detailed", "testy", "unfasten", "sick", "weary", "amuck", "spray", "edge", "flowery", "ancient", "green", "spiders", "tease", "back", "fail", "even", "weak", "beam", "sticks", "country", "fool", "peep", "afternoon", "satisfy", "amusing", "dispensable", "agreeable", "spade", "luxuriant", "join", "utter", "park", "used", "innocent", "intelligent", "woozy", "lowly", "ultra", "develop", "fear", "hysterical", "probable", "elastic", "thing", "touch", "scorch", "room", "jeans", "rot", "fork", "adaptable", "disturbed", "lying", "shivering", "file", "celery", "radiate", "anxious", "beds", "puny", "grandmother", "river", "spooky", "pink", "red", "scissors", "grab", "travel", "fire", "zoo", "friends", "industrious", "flesh", "playground", "reproduce", "borrow", "versed", "good", "supply", "wealth", "channel", "slimy", "plant", "whip", "calculate", "deep", "greet", "sable", "correct", "giraffe", "light", "treatment", "parsimonious", "fearless", "stain", "van", "absent", "scattered", "tearful", "juicy", "fantastic", "stale", "chase", "ruin", "telephone", "squeeze", "short", "questionable", "waste", "yarn", "friction", "release", "please", "screeching", "breathe", "fruit", "occur", "eminent", "royal", "rhythm", "breakable", "habitual", "observe", "share", "employ", "unnatural", "grandfather", "disgusting", "man", "pinch", "pine", "dam", "psychedelic", "glistening", "surprise", "dock", "receipt", "boundless", "scale", "optimal", "draconian", "trust", "happy", "size", "juice", "uncle", "hapless", "broad", "paste", "changeable", "pushy", "reason", "lick", "cable", "insidious", "treat", "able", "line", "exercise", "spring", "call", "wriggle", "far", "plan", "joyous", "beautiful", "anger", "scarecrow", "piquant", "tiny", "makeshift", "trashy", "aloof", "word"];
let words4 = ["judicious", "swanky", "hideous", "miscreant", "shape", "race", "magenta", "nasty", "heavy", "alleged", "clammy", "cheap", "paper", "chess", "cellar", "standing", "damage", "song", "zinc", "income", "blue-eyed", "ground", "chunky", "wiggly", "worthless", "school", "roof", "stupendous", "offbeat", "delirious", "quarter", "tumble", "mindless", "tank", "deserted", "zebra", "stereotyped", "whine", "fence", "knotty", "breezy", "horn", "somber", "science", "history", "escape", "tangible", "circle", "whistle", "erect", "periodic", "windy", "carry", "kiss", "loaf", "bump", "balance", "carve", "parallel", "top", "secret", "car", "wood", "thick", "horses", "rock", "naive", "lovely", "ashamed", "humdrum", "curve", "irritating", "drown", "abaft", "yoke", "punishment", "wonder", "apologise", "big", "pretend", "children", "believe", "fierce", "yummy", "regret", "industry", "houses", "invite", "flaky", "jumbled", "bury", "front", "cry", "harbor", "laughable", "warlike", "tip", "lacking", "torpid", "mellow", "sulky", "amusement", "parcel", "macabre", "peck", "purpose", "soggy", "raise", "glove", "distance", "tedious", "bikes", "high", "uppity", "possessive", "consist", "flood", "wilderness", "freezing", "frail", "slave", "wheel", "shame", "jar", "challenge", "list", "gun", "whisper", "yellow", "needle", "found", "respect", "wander", "vulgar", "fish", "skin", "calm", "person", "death", "salty", "undress", "cats", "egg", "tempt", "noxious", "steel", "kneel", "free", "invention", "whispering", "zipper", "well-off", "stop", "dependent", "chickens", "show", "wrench", "pat", "cushion", "pretty", "doubtful", "pigs", "ear", "direful", "effect", "gorgeous", "afford", "abortive", "chop", "nappy", "ablaze", "concerned", "rifle", "grubby", "energetic", "tendency", "moor", "seat", "hard", "enchanted", "allow", "writing", "miss", "system", "reflect", "interest", "explain", "advice", "shrug", "sneeze", "surround", "general", "peaceful", "curved", "bounce", "arrange", "hot", "furtive", "bare", "belong", "subtract", "pipe", "harm"];
let words5 = ["imminent", "lighten", "crooked", "squash", "month", "time", "stitch", "waiting", "instinctive", "fortunate", "spot", "accurate", "brash", "high-pitched", "natural", "fluffy", "quickest", "wicked", "pricey", "alcoholic", "wing", "toothbrush", "gray", "idiotic", "dreary", "license", "snobbish", "punish", "cup", "land", "three", "letter", "nine", "magical", "hurt", "hesitant", "current", "elderly", "false", "unarmed", "raspy", "explode", "exuberant", "slip", "healthy", "hands", "rice", "harass", "airplane", "monkey", "repair", "exchange", "lumpy", "halting", "trace", "sturdy", "pets", "bike", "easy", "plain", "nut", "unknown", "fertile", "amazing", "jumpy", "pet", "club", "tenuous", "rightful", "abounding", "gate", "juggle", "concentrate", "jittery", "mint", "harmonious", "throat", "suffer", "place", "lie", "sip", "damaging", "downtown", "wide-eyed", "scientific", "quicksand", "argument", "drum", "receive", "woman", "bushes", "overconfident", "answer", "dizzy", "magnificent", "cooing", "queue", "follow", "dolls", "sand", "sugar", "identify", "violent", "soak", "desert", "island", "encourage", "group", "giants", "bubble", "resolute", "experience", "blind", "holiday", "dear", "unbecoming", "future", "coil", "boundary", "tidy", "illustrious", "marble", "women", "behave", "milky", "onerous", "embarrass", "year", "responsible", "thinkable", "muscle", "powerful", "linen", "ahead", "crush", "trite", "laborer", "abandoned", "pollution", "matter", "bloody", "impress", "educated", "can", "lush", "callous", "silky", "imagine", "flashy", "summer", "messy", "volatile", "spoil", "confused", "soothe", "alert", "lewd", "foot", "film", "handsome", "abashed", "tricky", "squeak", "equable", "spotty", "chief", "cloistered", "x-ray", "prose", "useless", "thread", "tight", "proud", "paddle", "ceaseless", "bolt", "substantial", "accidental", "tree", "trade", "cattle", "rhetorical", "promise", "ocean", "precious", "attempt", "melt"];
let allWords = words1.concat(words2, words3, words4, words5);
let displayedWords = [];
let indexCtr = 0;
let charIndex = -1;
let correct = false;
let activeWord = "";
let correctChar = 0;
let wrongWords = 0;
let wrongArr = [];


input.addEventListener("keyup", function (key) {
    if (key.code === "Space") {
        charIndex = -1;
    } else if (key.code === "Backspace") {
        charIndex > 0 ? charIndex-- : charIndex = -1;
        compareType();
    } else {
        charIndex++;
        compareType();
    }
});

input.addEventListener("keydown", function (key) {
    startTimer();
    if (key.code === "Space") {
        if (input.value === "") {
            correct = false;
            changeColor();
        }
        key.preventDefault();
        console.log("spaced");
        input.value = "";
        indexCtr++;
        charIndex = -1;
        if(correct){
            console.log("entered correct")
        } else{
            console.log("wrong");
            recordWrong();
            wrongWords++;
        }
        changeActiveWord();
    }
});

function compareType() {
    if (input.value[charIndex] === displayedWords[indexCtr][charIndex]) {
        console.log("correct!");
        correct = true;
        correctChar++;
        changeColor();
    } else {
        console.log("wrong");
        correct = false;
        changeColor();
    }
};

function recordWrong(){
    wrongArr.push(input.value);
    console.log(wrongArr);
    
};





generateWords();

function generateWords() {
    for (let i = 0; i <= 300; i++) {
        let random = Math.floor(Math.random() * Math.floor(1000));
        if(!displayedWords.includes(allWords[random])){
            displayedWords.push(allWords[random]);
        };
    }
    displayedWords.forEach((element, index) => {
        toType.innerHTML += `<span id="word${index}">${element} </span>`;
    });
    activeWord = document.querySelector(`#word${indexCtr}`);
    changeActiveWord();
};

btnStart.addEventListener("click", function () {
    if (this.innerText === "RESET") {
        resetUI();
        generateWords();
    } 
});

function resetUI() {
    btnStart.style.backgroundColor = "white";
    btnStart.innerText = "Start";
    toType.innerHTML = "";
    input.disabled = false;
    indexCtr = 0;
    displayedWords.splice(0, displayedWords.length);
}

function changeColor(){
    if(correct){
        activeWord.style.color = "black";
    }else{
        activeWord.style.color = "red";
    }
}


function changeActiveWord(){
    activeWord.style.fontWeight = "normal";
    activeWord.style.display = "none";
    activeWord = document.querySelector(`#word${indexCtr}`);
    activeWord.style.opacity = 1;
    activeWord.style.display = "inline";
    activeWord.style.fontWeight = "900";
}


function startTimer() {
    if(!running){
        running = true;
        let timer = setInterval(() => {
            if (time >= 0) {
                time < 10 ? btnStart.innerText = `:0${time}` : btnStart.innerText = `:${time}`;
                console.log(time);
                time--;
            } else {
                input.value = "";
                btnStart.innerText = "RESET";
                btnStart.style.backgroundColor = "#fbbfc4";
                input.disabled = true;
                clearInterval(timer);
                calculateWPM();
                time = 60;
                running = false;
            }
        }, 1000);
    }
}
//pleaseupdate
function calculateWPM(){
    charTyped.textContent = String(correctChar);
    errors.textContent = String(wrongWords);
    wpm.textContent = Math.floor(((correctChar/5)-wrongWords)/1);
};