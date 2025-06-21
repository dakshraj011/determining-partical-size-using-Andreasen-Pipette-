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





