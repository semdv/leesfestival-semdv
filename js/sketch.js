let data;
let mijnData;
let scene = 0;
const categories = ["Game sessie", "Filmvoorstelling", "Lezing"];

function preload(){
    data = loadJSON("https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    for (let i = 0; i < data.locations.length; i++) {
        console.log(data.categories[i].name);
        console.log(data.locations[i].ID);
        console.log(data.workshops[i].name);
}
}

function draw(){
    if(scene == 0){
        background(240);
        //alle categories namen uit array
        for (let i = 0; i < categories.length; i++) { 
            let x = width / 3 + i * 200;
            let y = 10;
            let w = 200;
            let h = 200;

            //blokjes om de categories heen
            rect(x-100, y, w, h);
            textAlign(CENTER, CENTER);
            fill(0);
            textSize(20);
            text(categories[i], x, 100);
            fill(255);
            // zo verandert de scene per blokje
            if(mouseIsPressed && mouseX > x-100 && mouseX < x + 100 && mouseY > 10 && mouseY < 200){
                scene = i+1;
            }
        }
        }

    if(scene > 0){
        background(100);

        for (let i = 0; i < data.workshops.length; i++) {
            fill(0);
            text(data.workshops[i].name,20,20);
        }
        fill(255);
        rect(10, 10, 100, 50);
        fill(0);
        textSize(20);
        text("Terug", 10, 10, 100, 50);
        fill(255);
        if (mouseIsPressed && mouseX > 10 && mouseX < 110 && mouseY > 10 && mouseY < 60){
            scene = 0;
        }

    }    
    console.log(scene);

    
}
function finishedLoadingData(data) {
        mijnData = data;
      }

