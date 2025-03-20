const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');



let storyText = "It was temperature outside, so ${insertX} went for a walk. When they got to ${insertY}, they stared in horror for a few moments, then ${insertZ}. Bob saw the whole thing, but was not surprised — ${insertX} weighs weight, and it was a hot day."


let insertX = ["Barrack Obama", "Morty Smith", "jason Statham"];
let insertY = ["Mount Rushmore", "Coach Prime's closet", "President Xi Jinping's Wonderland"];
let insertZ = ["slipped on a banana", "fell into the eternal depths of the underworld", "transmuted into cthulhu and devoured the every living being in sight"];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  randomize.addEventListener('click', result);


function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    console.log(xItem);
    

    newStory = newStory.replaceAll("${insertX}", xItem);
    newStory = newStory.replace("${insertY}", yItem);
    newStory = newStory.replace("${insertZ}", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }
    else{
        newStory = newStory.replace("Bob", "JayZ's goons");
    }




    
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.453592);
        const temperature =  Math.round(94 * (9/5) + 32);
        newStory = newStory.replaceAll("temperature", temperature + " Celsius");
        newStory = newStory.replaceAll("weight", weight + " kilograms");
    }
    else {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
        newStory = newStory.replaceAll("temperature", temperature + " Fahrenheit");
        newStory = newStory.replaceAll("weight", weight + " pounds");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}








