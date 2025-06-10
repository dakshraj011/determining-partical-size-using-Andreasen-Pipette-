let currentLanguage = 'en';
let step = 1;

const languageMap = {
  en: {
    instruction: "Instructions -- this is the first step (typing animation)",
    sample: "sample size",
    bulk: "bulk density",
    tapped: "tapped density",
    measure: "Measurements",

    step: "step counter",
    lang: "language ❤️"
  },
  hi: {
    instruction: "निर्देश -- यह पहला चरण है (टाइपिंग एनिमेशन)",
    sample: "नमूना आकार",
    bulk: "बल्क घनत्व",
    tapped: "टैप्ड घनत्व",
    measure: "माप",
    bgText: "यहाँ पृष्ठभूमि छवि होगी",
    step: "चरण काउंटर",
    lang: "भाषा ❤️"
  },
  bn: {
    instruction: "নির্দেশাবলী -- এটি প্রথম ধাপ (টাইপিং অ্যানিমেশন)",
    sample: "নমুনা আকার",
    bulk: "বাল্ক ঘনত্ব",
    tapped: "ট্যাপড ঘনত্ব",
    measure: "মাপ",
    bgText: "এখানে ব্যাকগ্রাউন্ড ইমেজ থাকবে",
    step: "ধাপ কাউন্টার",
    lang: "ভাষা ❤️"
  },
  gu: {
    instruction: "સૂચનાઓ -- આ પ્રથમ પગલું છે (ટાઈપિંગ એનિમેશન)",
    sample: "નમૂના કદ",
    bulk: "બલ્ક ઘનતા",
    tapped: "ટેપ્ડ ઘનતા",
    measure: "માપ",
    bgText: "અહીં પૃષ્ઠભૂમિ છબી હશે",
    step: "પગલું કાઉન્ટર",
    lang: "ભાષા ❤️"
  },
  ml: {
    instruction: "നിർദ്ദേശങ്ങൾ -- ഇത് ആദ്യ ചുവടാണ് (ടൈപ്പിംഗ് ആനിമേഷൻ)",
    sample: "സാംപിള്‍ വലുപ്പം",
    bulk: "ബള്‍ക്ക് സാന്ദ്രത",
    tapped: "ടാപ്പ്ഡ് സാന്ദ്രത",
    measure: "അളവുകള്‍",
    bgText: "ഇവിടെ പശ്ചാത്തല ചിത്രം ഉണ്ടാകും",
    step: "പടി കൌണ്ടര്‍",
    lang: "ഭാഷ ❤️"
  },
  ta: {
    instruction: "வழிமுறைகள் -- இது முதல் படி (தட்டச்சு அனிமேஷன்)",
    sample: "மாதிரி அளவு",
    bulk: "தொகுதி அடர்த்தி",
    tapped: "அடிக்கப்பட்ட அடர்த்தி",
    measure: "அளவீடுகள்",
    bgText: "இங்கே பின்னணிப் படம் இருக்கும்",
    step: "படி கவுண்டர்",
    lang: "மொழி ❤️"
  }
};

function toggleLanguagePanel() {
  const panel = document.getElementById("languagePanel");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}

function changeLanguage(lang) {
  currentLanguage = lang;
  const dict = languageMap[lang];

  document.getElementById("instructionText").innerText = dict.instruction;
  document.getElementById("sampleLabel").innerText = dict.sample;
  document.getElementById("bulkLabel").innerText = dict.bulk;
  document.getElementById("tappedLabel").innerText = dict.tapped;
  document.getElementById("measurementTitle").innerText = dict.measure;
  document.getElementById("bgText").innerText = dict.bgText;
  document.getElementById("stepCounter").innerText = dict.step;
  document.getElementById("languageButtonText").innerText = dict.lang;

  toggleLanguagePanel();
}

function nextStep() {
  step++;
  document.getElementById("instructionText").innerText = languageMap[currentLanguage].instruction.replace("first", `step ${step}`);
  document.getElementById("stepCounter").innerText = `Step ${step}`;
}

let isWeighingMachineOn = false;
let currentWeight = 0;
let tareWeight = 0;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const onButton = document.getElementById('onButton');
    const display = document.getElementById('weightDisplay');

    // Add click event listener to ON button
    onButton.addEventListener('click', function() {
        if (!isWeighingMachineOn) {
            // Turn on with blinking effect
            isWeighingMachineOn = true;
            this.innerText = "OFF";

            // First remove the class if it exists (to restart animation)
            display.classList.remove('active');

            // Force a reflow to restart the animation
            void display.offsetWidth;

            // Show display with blinking effect
            display.style.display = 'block';
            display.classList.add('active');
            display.textContent = '0.00';
            display.style.color= ' #ff0000';
            this.style.background = '#238f85';
            console.log(currentWeight);
          } else {
            // Turn off
            isWeighingMachineOn = false;
            this.innerText = 'ON';
            display.classList.remove('active');
            // display.style.display = 'none';
            display.textContent = '0.00';
            display.style.color= ' #737171';
            tareWeight = 0;
            currentWeight = 0;
            this.style.background = '#2ec4b6';
        }
    });
});

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for tare button if it exists
    const tareButton = document.getElementById('tareButton');
    if (tareButton) {
        tareButton.addEventListener('click', function() {
            if (isWeighingMachineOn) {
                tareWeight = currentWeight;
                updateDisplay();
            }
        });
    }
});

// Function to update the display
function updateDisplay() {
    if (isWeighingMachineOn) {
        const displayWeight = (currentWeight - tareWeight).toFixed(2);
        document.getElementById('weightDisplay').textContent = displayWeight;
    }
}

// Example function to simulate adding weight (you can call this when needed)
function addWeight(weight) {
    if (isWeighingMachineOn) {
        currentWeight = weight;
        updateDisplay();
    }
}
let ispowderInFlask=0;
//Add Event Listener to disk

//Add Event Listener to disk1
let count=0;
 const display = document.getElementById('weightDisplay');
document.getElementById('disk1').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
    count++;
    document.getElementById('disk1').style.bottom="95px";
    document.getElementById('disk1').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk1').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
  else if(currentWeight==10 && (display.textContent!=0.00)) //Add Event Listener To Disks When the powder has measured
    {
      document.getElementById('disk1').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk1').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk1').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk1').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk1').style.left="46%";
     document.getElementById('disk1').style.animation= " Disk1 2s linear .5s 1  forwards";
     ispowderInFlask=1;
      // document.getElementById('powder').style.top="52%";
    }
  }
})

//Add Event Listener to disk2
document.getElementById('disk2').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
    count++;
    document.getElementById('disk2').style.bottom="95px";
    document.getElementById('disk2').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk2').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
   else if(currentWeight==10)//Add Event Listener To Disks When the powder has measured
    {
      document.getElementById('disk2').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk2').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk2').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk2').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk2').style.left="46%";
     document.getElementById('disk2').style.animation= " Disk2 2s linear .5s 1  forwards";
      // document.getElementById('powder').style.top="52%";
      ispowderInFlask=1;
    }
  }
})

//Add Event Listener to disk3
document.getElementById('disk3').addEventListener("click",async function () {
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
    console.log("I am clicked");
    console.log(currentWeight);
    count++;
    document.getElementById('disk3').style.bottom="95px";
    document.getElementById('disk3').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk3').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
      {
    
      document.getElementById('disk3').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk3').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk3').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk3').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk3').style.left="46%";
     document.getElementById('disk3').style.animation= " Disk3 2s linear .5s 1  forwards";
      // document.getElementById('powder').style.top="52%";
      ispowderInFlask=1;
  }
}
})

//Add Event Listener to disk4
document.getElementById('disk4').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){

    count++;
    document.getElementById('disk4').style.bottom="95px";
    document.getElementById('disk4').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk4').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      document.getElementById('disk4').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk4').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk4').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk4').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk4').style.left="46%";
     document.getElementById('disk4').style.animation= " Disk4 2s linear .5s 1  forwards";
      // document.getElementById('powder').style.top="52%";
      ispowderInFlask=1;
    }
}
})

//Add Event Listener to disk5
document.getElementById('disk5').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
count++;
    document.getElementById('disk5').style.bottom="95px";
    document.getElementById('disk5').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk5').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      document.getElementById('disk5').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk5').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk5').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk5').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk5').style.left="46%";
     document.getElementById('disk5').style.animation= " Disk5 2s linear .5s 1  forwards";
      // document.getElementById('powder').style.top="52%";
      ispowderInFlask=1;
    }
}
})

//Add Event Listener to disk6
document.getElementById('disk6').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if(currentWeight==0 && count==0){
    count++;
    document.getElementById('disk6').style.bottom="95px";
    document.getElementById('disk6').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk6').addEventListener('animationend', resolve, { once: true });
    });
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight = 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
       display.textContent = '0.00';
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      document.getElementById('disk6').style.left="25%";
      document.getElementById('powder').style.animation= " PowderToFlask 10s linear .5s 1  forwards";
      document.getElementById('disk6').style.animation= " DiskToFlask 10s linear .5s 1  forwards";
      const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight-=50;
     display.textContent = '-50.00';
      await new Promise(resolve => {
      document.getElementById('disk6').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
      document.getElementById('disk6').style.transform="skewY(-24deg)";
      document.getElementById('powder').style.animation= " PowderIntoFlask 2s linear .5s 1  forwards";
      document.getElementById('powder').addEventListener('animationend', resolve, { once: true });
    });
    // currentWeight+=50;
    // display.textContent = '0.00';
    document.getElementById('disk6').style.left="46%";
     document.getElementById('disk6').style.animation= " Disk6 2s linear .5s 1  forwards";
      // document.getElementById('powder').style.top="52%";
      ispowderInFlask=1;
    }
}
})



//Add Event Listener to Chemical Box
document.getElementById('cap').addEventListener('click',async function(){
if(isWeighingMachineOn && currentWeight==0){
  document.getElementById('cap').style.bottom="190%"
  document.getElementById('cap').style.animation= " openCap 2s linear .5s 1  forwards";
   await new Promise(resolve => {
      document.getElementById('cap').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('spatula').addEventListener('click', async function () {
      document.getElementById('spatula').style.animation= " Spatula 10s linear .5s 1  forwards";
      document.getElementById('powder').style.animation= " Powder 10s linear .5s 1  forwards";
   await new Promise(resolve => {
      document.getElementById('spatula').addEventListener('animationend', resolve, { once: true });
    });
  const display = document.getElementById('weightDisplay');
   display.classList.add('active');
    currentWeight+=10;
    console.log(currentWeight);
    display.textContent = '10.00';
    });
}
})


//Add Event Listener To Flask
let isMixed=0;
let isDropIntoCylinder =0;
document.getElementById('flask').addEventListener("click",async function () {
  if(isWaterInFlask &&(!isMixed))
  {
     document.getElementById('flask').style.animation= " MoveFlask .5s linear .5s 3";
     document.getElementById('powder').style.animation= " MovePowderIntoFlask .5s linear .5s 3";
     isMixed=1
     console.log(isMixed);
  }
  else if(isMixed){
    console.log("hi")
     await new Promise(resolve => {
     document.getElementById('flask').style.animation= " MoveToCylinder 2s linear .5s 1 forwards";

       document.getElementById('flask').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
    document.getElementById('drop').style.zIndex="15";
    document.getElementById('drop').style.left="41%";
     document.getElementById('drop').style.animation= " DropMoveToCylinder .5s linear .5s 10 ";
     document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
     await new Promise(resolve => {
     document.getElementById('drop').style.zIndex="-1";
     document.getElementById('flask').style.left="72%;";
     const images = document.querySelectorAll('img.ChemicalWater');
    images.forEach(img => {
     img.style.opacity = '1';
    });


      document.getElementById('flask').style.animation= "FlaskToPlace 2s linear .5s 1 forwards";
    document.getElementById('flask').addEventListener('animationend', resolve, { once: true });
    });
     isDropIntoCylinder=1;
    console.log("Hello Drop")
  }
})
let isWaterInFlask=0;
//Add Event Listener To Water bottle
document.getElementById('water').addEventListener("click",async function () {
  if(ispowderInFlask)
  {
  await new Promise(resolve => {
    document.getElementById('water').style.animation= " WaterIntoFlask 2s linear .5s 1 forwards";
      document.getElementById('water').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoFlask .5s linear .5s 10 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    isWaterInFlask=1;
    document.getElementById('water').style.left="46%";
    document.getElementById('water').style.bottom="21%";
    document.getElementById('water').style.animation= " WaterToPlace 2s linear .5s 1 forwards";
  }
})
let countSampleDisk=0;
let SampleTime1=0;
let SampleTime2=0;
let SampleTime3=0;
let SampleTime4=0;
let SampleTime5=0;
let SampleTime6=0;
//Add Event Listner to Andresen-lower For Disk 
document.getElementById('andresen-lower').addEventListener('click',async function () {
    if(totalSeconds>0 && timer == false && countSampleDisk==0){ //For Disk 1
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk1 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater12').style.opacity="0";
    document.getElementById('chemicalWater11').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk1 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop1').style.opacity="1";
   SampleTime1=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder1 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  
  }
  else if(countSampleDisk==1 && totalSeconds>SampleTime1 && timer == false){ //For Disk 2
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk2 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater10').style.opacity="0";
    document.getElementById('chemicalWater9').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk2 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop2').style.opacity="1";
   SampleTime2=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder2 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  }
  else if(countSampleDisk==2 && totalSeconds>SampleTime2 && timer == false){ //For Disk 3
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk3 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater8').style.opacity="0";
    document.getElementById('chemicalWater7').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk3 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop3').style.opacity="1";
   SampleTime3=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder3 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  }
  else if(countSampleDisk==3 && totalSeconds>SampleTime3 && timer == false){ //For Disk 4
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk4 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater6').style.opacity="0";
    document.getElementById('chemicalWater5').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk4 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop4').style.opacity="1";
   SampleTime4=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder4 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  }
  else if(countSampleDisk==4 && totalSeconds>SampleTime4 && timer == false){ //For Disk 5
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk5 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater4').style.opacity="0";
    document.getElementById('chemicalWater3').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk5 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop5').style.opacity="1";
   SampleTime5=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder5 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  }
  else if(countSampleDisk==5 && totalSeconds>SampleTime5 && timer == false){ //For Disk 6
  await new Promise(resolve => {

   document.getElementById('andresen-lower').style.animation= "MovePipetteToDisk6 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater2').style.opacity="0";
    document.getElementById('chemicalWater1').style.opacity="0";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk6 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop6').style.opacity="1";
   SampleTime6=totalSeconds;
  await new Promise(resolve => {
   document.getElementById('andresen-lower').style.animation= "MovePipetteToCylinder4 4s linear .5s 1 forwards";
    document.getElementById('andresen-lower').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
  }
})






//Add Event Listener to Disk To Move To Oven
//Add In Disk1
document.getElementById('disk1').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime1<SampleTime2 )
  {
      
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk1').style.animation= "DiskToOven1 3s linear .5s 1 forwards";
   document.getElementById('drop1').style.animation= "DropToOven1 3s linear .5s 1 forwards";
 document.getElementById('drop1').addEventListener('animationend', resolve, { once: true });
    });

    // document.getElementById('disk1').removeEventListener("animationend", handler);


    document.getElementById('disk1').style.opacity="0";
    document.getElementById('drop1').style.opacity="0";  


  // Apply final state of move1 manually

  setTimeout(() => {
document.getElementById('disk1').style.transform="skewY(0deg)";
document.getElementById('disk1').style.left="15%";
document.getElementById('disk1').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk1').style.opacity = "1";
  document.getElementById('powder1').style.opacity = "1";

document.getElementById('disk1').style.animation= "OvenToDisk1 3s linear .5s 1 forwards";
   document.getElementById('powder1').style.animation= "OvenToPowder1 3s linear .5s 1 forwards";
  },20000)
  }
})

//Add In Disk2
document.getElementById('disk2').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime2<SampleTime3)
  {
      
    // document.getElementById('drop2').style.left="49.15%";
    // document.getElementById('disk2').style.transform="skewY(0deg);";
      await new Promise(resolve => {
    document.getElementById('disk2').style.animation= "DiskToOven2 3s linear .5s 1 forwards";
   document.getElementById('drop2').style.animation= "DropToOven2 3s linear .5s 1 forwards";
    document.getElementById('drop2').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('disk2').style.opacity="0";
    document.getElementById('drop2').style.opacity="0";

 setTimeout(() => {
    document.getElementById('disk2').style.transform="skewY(0deg)";
document.getElementById('disk2').style.left="15%";
document.getElementById('disk2').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk2').style.opacity = "1";
 document.getElementById('powder2').style.opacity = "1";
document.getElementById('disk2').style.animation= "OvenToDisk2 3s linear .5s 1 forwards";
   document.getElementById('powder2').style.animation= "OvenToPowder2 3s linear .5s 1 forwards";
   },20000)
  }
})

//Add In Disk3
document.getElementById('disk3').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime2<SampleTime3)
  {
      
    // document.getElementById('drop3').style.left="49.15%";
    // document.getElementById('disk3').style.transform="skewY(0deg);";
      await new Promise(resolve => {
    document.getElementById('disk3').style.animation= "DiskToOven3 3s linear .5s 1 forwards";
   document.getElementById('drop3').style.animation= "DropToOven3 3s linear .5s 1 forwards";
   document.getElementById('drop3').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('disk3').style.opacity="0";
    document.getElementById('drop3').style.opacity="0";
 setTimeout(() => {
    document.getElementById('disk3').style.transform="skewY(0deg)";
document.getElementById('disk3').style.left="15%";
document.getElementById('disk3').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk3').style.opacity = "1";
 document.getElementById('powder3').style.opacity = "1";
document.getElementById('disk3').style.animation= "OvenToDisk3 3s linear .5s 1 forwards";
   document.getElementById('powder3').style.animation= "OvenToPowder3 3s linear .5s 1 forwards";
  
   },20000)
  }
})

//Add In Disk4
document.getElementById('disk4').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime3<SampleTime4)
  {
      
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk4').style.animation= "DiskToOven4 3s linear .5s 1 forwards";
   document.getElementById('drop4').style.animation= "DropToOven4 3s linear .5s 1 forwards";
   document.getElementById('drop4').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('disk4').style.opacity="0";
    document.getElementById('drop4').style.opacity="0";
 setTimeout(() => {
    document.getElementById('disk4').style.transform="skewY(0deg)";
document.getElementById('disk4').style.left="15%";
document.getElementById('disk4').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk4').style.opacity = "1";
 document.getElementById('powder4').style.opacity = "1";
document.getElementById('disk4').style.animation= "OvenToDisk4 3s linear .5s 1 forwards";
   document.getElementById('powder4').style.animation= "OvenToPowder4 3s linear .5s 1 forwards";
    },20000)
  }
})

//Add In Disk5
document.getElementById('disk5').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime4<SampleTime5)
  {
      
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk5').style.animation= "DiskToOven5 3s linear .5s 1 forwards";
   document.getElementById('drop5').style.animation= "DropToOven5 3s linear .5s 1 forwards";
     document.getElementById('drop5').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('disk5').style.opacity="0";
    document.getElementById('drop5').style.opacity="0";
 setTimeout(() => {
    document.getElementById('disk5').style.transform="skewY(0deg)";
document.getElementById('disk5').style.left="15%";
document.getElementById('disk5').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk5').style.opacity = "1";
 document.getElementById('powder5').style.opacity = "1";
document.getElementById('disk5').style.animation= "OvenToDisk5 3s linear .5s 1 forwards";
   document.getElementById('powder5').style.animation= "OvenToPowder5 3s linear .5s 1 forwards";
    },20000)
  }
})

//Add In Disk6
document.getElementById('disk6').addEventListener('click',async function () {
  if(SampleTime6!=0 && SampleTime5<SampleTime6)
  {
      
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk6').style.animation= "DiskToOven6 3s linear .5s 1 forwards";
   document.getElementById('drop6').style.animation= "DropToOven6 3s linear .5s 1 forwards";
   document.getElementById('drop6').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('disk6').style.opacity="0";
    document.getElementById('drop6').style.opacity="0";
 setTimeout(() => {
    document.getElementById('disk6').style.transform="skewY(0deg)";
document.getElementById('disk6').style.left="15%";
document.getElementById('disk6').style.top="57.5%";
// Wait 10 seconds
  // await new Promise(resolve => setTimeout(resolve, 20000));
  // Set opacity back to 1
  document.getElementById('disk6').style.opacity = "1";
 document.getElementById('powder6').style.opacity = "1";
document.getElementById('disk6').style.animation= "OvenToDisk6 3s linear .5s 1 forwards";
   document.getElementById('powder6').style.animation= "OvenToPowder6 3s linear .5s 1 forwards";
    },20000)
  }
})
















//Code For StopWatch
 let hr = 0, min = 0, sec = 0;
    let timer = false;
    let interval;
    let totalSeconds = hr * 3600 + min * 60 + sec;

    function updateStopwatch() {
      let h = hr < 10 ? "0" + hr : hr;
      let m = min < 10 ? "0" + min : min;
      let s = sec < 10 ? "0" + sec : sec;
      document.getElementById("stopwatchDisplay").innerText = `${h}:${m}:${s}`;
      totalSeconds = hr * 3600 + min * 60 + sec;
      console.log(totalSeconds);
    }

    document.getElementById("startStopBtn").addEventListener("click", function () {
     
      if(isDropIntoCylinder){
      if (!timer) {
        interval = setInterval(() => {
          sec++;
          if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
              min = 0;
              hr++;
            }
          }
          updateStopwatch();
        }, 1000);
        this.innerText = "Pause";
        timer = true;
      } else {
        clearInterval(interval);
        this.innerText = "Start";
        timer = false;
      }
    }
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
      clearInterval(interval);
      hr = 0; min = 0; sec = 0;
      timer = false;
      updateStopwatch();
      document.getElementById("startStopBtn").innerText = "Start";
    });

    updateStopwatch(); // Initialize display