let currentLanguage = 'en';
let step = 1;

// Store all steps and current index
let currentStepIndex = 0;

// Instruction data
const languageMap = {
  en: {
    instruction: [
      "Instructions --To Start Simulation Click On Start Simulation.",
      "Instructions --Please Press  'ON' Button .",
      "Instructions --Please Click On Any Disk.",
      "Instructions --Please Wait your request is processing.",
      "Instructions --Please Press 'TARE' Button.",
      "Instructions --Please Click On cap of Chemical Powder Box To Open it.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please Click On Spetulla.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please click on Powder Disk.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please click on Water bottle to fill water in flask.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please Click On Flask To Shake The Flask.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please Click On Flask To Move The Flask.",
      "Instructions -- Please Wait your request is processing.",
      "Instructions -- Please  Click on 'START' Button Of Stopwatch.",


      "Instructions --When you want to take Sample, Please Click on First Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --When you want to take Sample, Please Click on Second Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --When you want to take Sample, Please Click on Third Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --When you want to take Sample, Please Click on Fourth Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --When you want to take Sample, Please Click on Fifth Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --When you want to take Sample, Please Click on 'PAUSE' Button Of StopWatch.",




      "Instructions --Please Click on Sixth Disk.",
      "Instructions --Please Wait your request is processing.....",
      "Instructions --Please Click On First Disk To Move it to Oven.",
      "Instructions --Please Click On Second Disk To Move it to Oven.",
      "Instructions --Please Click On Third Disk To Move it to Oven.",
      "Instructions --Please Click On Fourth Disk To Move it to Oven.",
      "Instructions --Please Click On Fifth Disk To Move it to Oven.",
      "Instructions --Please Click On Sixth Disk To Move it to Oven.",
      "Instructions --Please Wait Samples are heating in Oven.",
      "Instructions --Please Click On First Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",



      "Instructions --Please Click On Second Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Third Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Fourth Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",


      "Instructions --Please Click On Fifth Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Sixth Disk For Weighting its Sample .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On Disk To Move its Place .",
      "Instructions --Please Wait your request is processing......",
      "Instructions --Please Click On 'View Result' To See the Result Of Samples"


      

    ]
    
  },
  hi: {
    instruction: [
     "निर्देश --सिमुलेशन शुरू करने के लिए सिमुलेशन शुरू करें पर क्लिक करें।",
"निर्देश --कृपया 'चालू' बटन दबाएँ।",
"निर्देश --कृपया किसी भी डिस्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश --कृपया 'TARE' बटन दबाएँ।",
"निर्देश --कृपया इसे खोलने के लिए रासायनिक पाउडर बॉक्स की टोपी पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है ...",
"निर्देश - कृपया स्पेटुल्ला पर क्लिक करें।",
"निर्देश - कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश - कृपया पाउडर डिस्क पर क्लिक करें।",
"निर्देश - कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश --फ्लास्क में पानी भरने के लिए पानी की बोतल पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश --फ्लास्क को हिलाने के लिए कृपया फ्लास्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश - कृपया फ्लास्क को स्थानांतरित करने के लिए फ्लास्क पर क्लिक करें।",
"निर्देश - कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है।",
"निर्देश - कृपया स्टॉपवॉच के 'स्टार्ट' बटन पर क्लिक करें।",

"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया पहली डिस्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",
"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया दूसरी डिस्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",
"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया तीसरी डिस्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",
"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया चौथी डिस्क पर क्लिक करें।।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",
"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया पाँचवीं डिस्क पर क्लिक करें।",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",
"निर्देश --जब आप नमूना लेना चाहते हैं, तो कृपया स्टॉपवॉच के 'पॉज़' बटन पर क्लिक करें।",


"निर्देश --कृपया छठी डिस्क पर क्लिक करें।",

"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है.....",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए पहली डिस्क पर क्लिक करें।",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए दूसरी डिस्क पर क्लिक करें।",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए तीसरी डिस्क पर क्लिक करें।",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए चौथी डिस्क पर क्लिक करें।",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए पाँचवीं डिस्क पर क्लिक करें।",

"निर्देश --कृपया इसे ओवन में ले जाने के लिए छठी डिस्क पर क्लिक करें।",

"निर्देश --कृपया प्रतीक्षा करें नमूने ओवन में गर्म हो रहे हैं।",

"निर्देश --कृपया इसके नमूने का वजन करने के लिए पहली डिस्क पर क्लिक करें।",

"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",

"निर्देश --कृपया इसे अपने स्थान पर ले जाने के लिए डिस्क पर क्लिक करें .",
"निर्देश --कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",

"निर्देश -- कृपया इसके नमूने का वजन करने के लिए दूसरी डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया इसके स्थान को स्थानांतरित करने के लिए डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया इसके स्थान को स्थानांतरित करने के लिए तीसरी डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया इसके स्थान को स्थानांतरित करने के लिए डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया इसके स्थान को स्थानांतरित करने के लिए चौथी डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया इसके स्थान को स्थानांतरित करने के लिए डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",



"निर्देश -- कृपया अपने नमूने का वजन करने के लिए पाँचवीं डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया अपने स्थान को स्थानांतरित करने के लिए डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया अपने नमूने का वजन करने के लिए छठी डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया अपने स्थान को स्थानांतरित करने के लिए डिस्क पर क्लिक करें।",
"निर्देश -- कृपया प्रतीक्षा करें आपका अनुरोध संसाधित हो रहा है......",
"निर्देश -- कृपया नमूनों के परिणाम देखने के लिए 'परिणाम देखें' पर क्लिक करें"
    ]
  },
  bn: {
    instruction: [
      "নির্দেশাবলী -- সিমুলেশন শুরু করতে স্টার্ট সিমুলেশনে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে 'চালু' বোতাম টিপুন।",
"নির্দেশাবলী -- অনুগ্রহ করে যেকোনো ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে 'TARE' বোতাম টিপুন।",
"নির্দেশাবলী -- অনুগ্রহ করে রাসায়নিক পাউডার বাক্সের ক্যাপটি খুলতে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে স্পেটুলায় ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে পাউডার ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে জলের বোতলে জল ভর্তি করার জন্য ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য ফ্লাস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য ফ্লাস্কে ক্লিক করুন ' ফ্লাস্ক'|" ,
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণ হচ্ছে।",
"নির্দেশাবলী -- অনুগ্রহ করে স্টপওয়াচের 'স্টার্ট' বোতামে ক্লিক করুন।",


"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন।",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন।",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন.....",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন।",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন.....",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন.....",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন.....",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন।",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে অপেক্ষা করুন.....",
"নির্দেশাবলী --যখন আপনি নমুনা নিতে চান, অনুগ্রহ করে স্টপওয়াচের 'PAUSE' বোতামে ক্লিক করুন।",

"নির্দেশাবলী --অনুগ্রহ করে অ্যান্ডারসন -পিপেটে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াজাত হচ্ছে.....",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে প্রথম ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে দ্বিতীয় ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে তৃতীয় ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে চতুর্থ ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে পঞ্চম ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে ওভেনে স্থানান্তর করতে ষষ্ঠ ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে অপেক্ষা করুন নমুনা ওভেনে গরম হচ্ছে।",
"নির্দেশাবলী --অনুগ্রহ করে নমুনা ওজন করার জন্য প্রথম ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী --অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াজাত হচ্ছে......",
"নির্দেশাবলী --অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াজাত হচ্ছে......",


"নির্দেশাবলী -- নমুনা ওজন করার জন্য অনুগ্রহ করে দ্বিতীয় ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে স্থান পরিবর্তন করার জন্য ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে নমুনা ওজন করার জন্য তৃতীয় ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে স্থান পরিবর্তন করার জন্য ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে নমুনা ওজন করার জন্য চতুর্থ ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে স্থান পরিবর্তন করার জন্য ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",


"নির্দেশাবলী -- নমুনা ওজন করার জন্য অনুগ্রহ করে পঞ্চম ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে স্থান পরিবর্তন করার জন্য ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে নমুনা ওজন করার জন্য ষষ্ঠ ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- অনুগ্রহ করে স্থান পরিবর্তন করার জন্য ডিস্কে ক্লিক করুন।",
"নির্দেশাবলী -- অনুগ্রহ করে অপেক্ষা করুন আপনার অনুরোধ প্রক্রিয়াকরণের জন্য......",
"নির্দেশাবলী -- নমুনা ফলাফল দেখতে অনুগ্রহ করে 'ফলাফল দেখুন' এ ক্লিক করুন"

    ]
  },
  ta: {
    instruction: [

      "உருவகப்படுத்துதலைத் தொடங்குவதற்கு, தொடக்க உருவகப்படுத்துதலைக் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து 'ஆன்' பொத்தானை அழுத்தவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து எந்த வட்டிலும் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து 'TARE' பொத்தானை அழுத்தவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து ரசாயனப் பொடி பெட்டியைத் திறக்க அதன் மூடியைக் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து தூள் வட்டில் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து பிளாஸ்கில் தண்ணீரை நிரப்ப தண்ணீர் பாட்டிலில் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து பிளாஸ்க்கை அசைக்க பிளாஸ்க்கைக் கிளிக் செய்யவும்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"அறிவுறுத்தல்கள் - தயவுசெய்து நகர்த்த பிளாஸ்க்கைக் கிளிக் செய்யவும் 'பிளாஸ்க்'.",
"வழிமுறைகள் -- உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.",
"வழிமுறைகள் -- ஸ்டாப்வாட்சின் 'ஸ்டார்ட்' பொத்தானைக் கிளிக் செய்யவும்.",


"வழிமுறைகள் --நீங்கள் மாதிரியை எடுக்க விரும்பும் போது, ​​ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",
"வழிமுறைகள் --தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.....",
"வழிமுறைகள் --நீங்கள் மாதிரியை எடுக்க விரும்பும் போது, ​​ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",
"வழிமுறைகள் --தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.....",
"வழிமுறைகள் --நீங்கள் மாதிரியை எடுக்க விரும்பும் போது, ​​ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",
"வழிமுறைகள் --தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.....",
"வழிமுறைகள் --நீங்கள் மாதிரியை எடுக்க விரும்பும் போது, ​​ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",
"வழிமுறைகள் --தயவுசெய்து உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.....",
"வழிமுறைகள் --நீங்கள் மாதிரியை எடுக்க விரும்பும் போது, ​​ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",


"வழிமுறைகள் --ஆண்டர்சன் -பிப்பெட்டைக் கிளிக் செய்யவும்.",
"வழிமுறைகள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்.....",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த முதல் வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த இரண்டாவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த மூன்றாவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த நான்காவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த ஐந்தாவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த ஆறாவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பிற்கு நகர்த்த ஆறாவது வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --அடுப்பில் மாதிரிகள் சூடாகின்றன.",
"வழிமுறைகள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்...",
"வழிமுறைகள் --அதன் மாதிரியை எடைபோட முதல் வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"வழிமுறைகள் --அதன் இடத்தை நகர்த்த வட்டில் கிளிக் செய்யவும்.",
"வழிமுறைகள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",


"அறிவுறுத்தல்கள் --அதன் மாதிரியை எடைபோட இரண்டாவது வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் இடத்தை நகர்த்த வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் மாதிரியை எடைபோட மூன்றாவது வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் இடத்தை நகர்த்த வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் மாதிரியை எடைபோட நான்காவது வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் இடத்தை நகர்த்த வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",


"அறிவுறுத்தல்கள் --அதன் மாதிரியை எடைபோட ஐந்தாவது வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் இடத்தை நகர்த்த வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் மாதிரியை எடைபோட ஆறாவது வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --அதன் இடத்தை நகர்த்த வட்டில் சொடுக்கவும்.",
"அறிவுறுத்தல்கள் --உங்கள் கோரிக்கை செயலாக்கப்படும் வரை காத்திருங்கள்......",
"அறிவுறுத்தல்கள் --மாதிரிகளின் முடிவைக் காண 'முடிவைக் காண்க' என்பதைக் கிளிக் செய்யவும்"
    ]
},
gu:{
  instruction: [
    "સૂચનો -- સિમ્યુલેશન શરૂ કરવા માટે સ્ટાર્ટ સિમ્યુલેશન પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને 'ચાલુ' બટન દબાવો.",
"સૂચનો -- કૃપા કરીને કોઈપણ ડિસ્ક પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને 'TARE' બટન દબાવો.",
"સૂચનો -- કૃપા કરીને કેમિકલ પાવડર બોક્સ ખોલવા માટે તેના ટોપી પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને સ્પેટુલા પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને પાવડર ડિસ્ક પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને ફ્લાસ્કમાં પાણી ભરવા માટે પાણીની બોટલ પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને ફ્લાસ્કને હલાવવા માટે ફ્લાસ્ક પર ક્લિક કરો.",
"સૂચનો -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનો -- કૃપા કરીને ફ્લાસ્ક ખસેડવા માટે ફ્લાસ્ક પર ક્લિક કરો ફ્લાસ્ક.",
"સૂચનાઓ -- કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.",
"સૂચનાઓ -- કૃપા કરીને સ્ટોપવોચના 'સ્ટાર્ટ' બટન પર ક્લિક કરો.",


"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને એન્ડરસન -પિપેટ પર ક્લિક કરો.....",
"સૂચનો --જ્યારે તમે નમૂના લેવા માંગતા હો, ત્યારે કૃપા કરીને સ્ટોપવોચના 'થોભો' બટન પર ક્લિક કરો.",


"સૂચનો --કૃપા કરીને એન્ડરસન -પીપેટ પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે.....",
"સૂચનો --કૃપા કરીને તેને ઓવનમાં ખસેડવા માટે પ્રથમ ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને તેને ઓવનમાં ખસેડવા માટે બીજી ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને તેને ઓવનમાં ખસેડવા માટે ચોથી ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને તેને ઓવનમાં ખસેડવા માટે પાંચમી ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને તેને ઓવનમાં ખસેડવા માટે છઠ્ઠી ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને રાહ જુઓ નમૂનાઓ ઓવનમાં ગરમ ​​થઈ રહ્યા છે.",
"સૂચનો --કૃપા કરીને તેના નમૂનાનું વજન કરવા માટે પ્રથમ ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને તેની જગ્યાએ ખસેડવા માટે ડિસ્ક પર ક્લિક કરો.",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",


"સૂચનો --કૃપા કરીને નમૂનાનું વજન કરવા માટે બીજી ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને ડિસ્ક પર ક્લિક કરો તેના સ્થાનને ખસેડવા માટે .",
"સૂચનો --કૃપા કરીને તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને નમૂનાનું વજન કરવા માટે ત્રીજી ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને ડિસ્ક પર ક્લિક કરો તેના સ્થાનને ખસેડવા માટે .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને નમૂનાનું વજન કરવા માટે ચોથી ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને તેનું સ્થાન ખસેડવા માટે ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",


"સૂચનો --કૃપા કરીને નમૂનાનું વજન કરવા માટે પાંચમી ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને ડિસ્ક પર ક્લિક કરો તેના સ્થાનને ખસેડવા માટે .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને નમૂનાનું વજન કરવા માટે છઠ્ઠી ડિસ્ક પર ક્લિક કરો .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને ડિસ્ક પર ક્લિક કરો તેના સ્થાનને ખસેડવા માટે .",
"સૂચનો --કૃપા કરીને રાહ જુઓ તમારી વિનંતી પ્રક્રિયા થઈ રહી છે......",
"સૂચનો --કૃપા કરીને નમૂનાનું પરિણામ જોવા માટે 'પરિણામ જુઓ' પર ક્લિક કરો"
  ]
},
ml:{
   instruction: [
    "നിർദ്ദേശങ്ങൾ --സിമുലേഷൻ ആരംഭിക്കാൻ സ്റ്റാർട്ട് സിമുലേഷനിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി 'ഓൺ' ബട്ടൺ അമർത്തുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി ഏതെങ്കിലും ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി 'TARE' ബട്ടൺ അമർത്തുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി കെമിക്കൽ പൗഡർ ബോക്സ് തുറക്കാൻ അതിന്റെ തൊപ്പിയിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി ഫ്ലാസ്കിൽ ക്ലിക്ക് ചെയ്യുക, ഫ്ലാസ്കിൽ വെള്ളം നിറയ്ക്കാൻ വാട്ടർ ബോട്ടിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി ഫ്ലാസ്കിൽ ക്ലിക്ക് ചെയ്യുക, ഫ്ലാസ്ക് കുലുക്കാൻ ഫ്ലാസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതുവരെ കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി ഫ്ലാസ്കിൽ ക്ലിക്ക് ചെയ്യുക, ഫ്ലാസ്ക്.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നത് കാത്തിരിക്കുക.",
"നിർദ്ദേശങ്ങൾ -- ദയവായി സ്റ്റോപ്പ്‌വാച്ചിന്റെ 'സ്റ്റാർട്ട്' ബട്ടണിൽ ക്ലിക്കുചെയ്യുക.",

"നിർദ്ദേശങ്ങൾ --സാമ്പിൾ എടുക്കാൻ താൽപ്പര്യപ്പെടുമ്പോൾ, ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുമെന്ന് കാത്തിരിക്കുക.....",
"നിർദ്ദേശങ്ങൾ --സാമ്പിൾ എടുക്കാൻ താൽപ്പര്യപ്പെടുമ്പോൾ, ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുമെന്ന് കാത്തിരിക്കുക.....",
"നിർദ്ദേശങ്ങൾ --സാമ്പിൾ എടുക്കാൻ താൽപ്പര്യപ്പെടുമ്പോൾ, ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുമെന്ന് കാത്തിരിക്കുക.....",
"നിർദ്ദേശങ്ങൾ --സാമ്പിൾ എടുക്കാൻ താൽപ്പര്യപ്പെടുമ്പോൾ, ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുമെന്ന് കാത്തിരിക്കുക.....",
"നിർദ്ദേശങ്ങൾ --സാമ്പിൾ എടുക്കാൻ താൽപ്പര്യപ്പെടുമ്പോൾ, ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്കുചെയ്യുക.",


"നിർദ്ദേശങ്ങൾ --ദയവായി ആൻഡേഴ്‌സൺ -പിപ്പെറ്റിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നത് കാത്തിരിക്കുക.....",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ ആദ്യ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ രണ്ടാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ മൂന്നാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ ദയവായി നാലാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ ദയവായി അഞ്ചാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ ദയവായി ആറാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --അത് ഓവനിലേക്ക് നീക്കാൻ ദയവായി ആറാമത്തെ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി കാത്തിരിക്കുക സാമ്പിളുകൾ ഓവനിൽ ചൂടാക്കുന്നു.",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റിംഗ് ചെയ്യുന്നതിന് ദയവായി ആദ്യ ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നത് കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം നീക്കാൻ ദയവായി ഡിസ്കിൽ ക്ലിക്ക് ചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നത് കാത്തിരിക്കുക......",


"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റ് ചെയ്യുന്നതിന് രണ്ടാമത്തെ ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം മാറ്റുന്നതിന് ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റ് ചെയ്യുന്നതിന് മൂന്നാമത്തെ ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം മാറ്റുന്നതിന് ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റ് ചെയ്യുന്നതിന് നാലാമത്തെ ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം മാറ്റുന്നതിന് ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",


"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റ് ചെയ്യുന്നതിന് അഞ്ചാമത്തെ ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം മാറ്റുന്നതിന് ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സാമ്പിൾ വെയ്റ്റ് ചെയ്യുന്നതിന് ആറാമത്തെ ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --അതിന്റെ സ്ഥലം മാറ്റുന്നതിന് ഡിസ്കിൽ ക്ലിക്കുചെയ്യുക.",
"നിർദ്ദേശങ്ങൾ --ദയവായി നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതിനായി കാത്തിരിക്കുക......",
"നിർദ്ദേശങ്ങൾ --സാമ്പിളുകളുടെ ഫലം കാണുന്നതിന് 'ഫലം കാണുക' എന്നതിൽ ക്ലിക്കുചെയ്യുക"
   ]
}
}
// Change language
function changeLanguage() {
  currentLanguage = document.getElementById("languagePanel").value;
  updateInstruction(); // Keep current step visible
}

// Show only current step
function updateInstruction() {
  const steps = languageMap[currentLanguage].instruction;
  document.getElementById("instructionText").innerText = steps[currentStepIndex];
}

// Move to next step
function currentInstruction() {
  const steps = languageMap[currentLanguage].instruction;
  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
    updateInstruction();
  }
}

// Initialize on load
window.onload = () => {
  updateInstruction(); // show first step
};





//TogglePanel
function toggleLanguagePanel() {
  const panel = document.getElementById("languagePanel");
  if (!panel) return; // Exit if element is not found
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
  console.log("I am applying visiblity")
}



//Add Event Listener To Start Simulation Button
let isStart=0;
document.getElementById('StartButton').addEventListener('click',async function  () {
  document.getElementById('StartButton').style.opacity=0;
  isStart=1;
  console.log("This is Step 1 of Start");
  step++;  //2
  currentInstruction();
})

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
        if (!isWeighingMachineOn && isStart) {
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
            step++;  //3
            currentInstruction();
            console.log(currentWeight);
            // nextStep("Please Click On any Disk");
          } else if(isWeighingMachineOn) {
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
    step++; //4
    currentInstruction();
    count++;
    document.getElementById('disk1').style.bottom="95px";
    document.getElementById('disk1').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk1').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight += 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
      
       step++;  //6
    currentInstruction(); 
    })
  }
  else if(currentWeight==10 && (display.textContent!=0.00)) //Add Event Listener To Disks When the powder has measured
    {
       step++;  //11
    currentInstruction();
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
     step++;  //12
    currentInstruction();
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
    step++;  //4
    currentInstruction();
    document.getElementById('disk2').style.bottom="95px";
    document.getElementById('disk2').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk2').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight += 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
        step++;  //6
    currentInstruction();
    })
  }
   else if(currentWeight==10)//Add Event Listener To Disks When the powder has measured
    {
      step++;  //11
    currentInstruction();
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
      step++;  //12
    currentInstruction();
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
    step++; //4
    currentInstruction();
    document.getElementById('disk3').style.bottom="95px";
    document.getElementById('disk3').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk3').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight += 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
        step++;  //6
    currentInstruction();
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
      {
    step++;  //11
    currentInstruction();
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
      step++;  //12
    currentInstruction();
  }
}
})

//Add Event Listener to disk4
document.getElementById('disk4').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
    step++;  //4
    currentInstruction();
    count++;
    document.getElementById('disk4').style.bottom="95px";
    document.getElementById('disk4').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk4').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight += 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
        step++;  //6
    currentInstruction();
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      step++;  //12
    currentInstruction();
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
      step++;  //12
    currentInstruction();
    }
}
})

//Add Event Listener to disk5
document.getElementById('disk5').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if (currentWeight==0 && count==0){
    count++;
    step++;  //4
    currentInstruction();
    document.getElementById('disk5').style.bottom="95px";
    document.getElementById('disk5').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk5').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight += 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
        step++;  //6
    currentInstruction();
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      step++;  //11
    currentInstruction();
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
      step++;  //12
    currentInstruction();
    }
}
})

//Add Event Listener to disk6
document.getElementById('disk6').addEventListener("click",async function () {
  console.log("I am clicked");
  if (isWeighingMachineOn){
  if(currentWeight==0 && count==0){
    count++;
    step++;  //4
    currentInstruction();
    document.getElementById('disk6').style.bottom="95px";
    document.getElementById('disk6').style.animation= " Disk 3s ease-in-out .5s 1  forwards";
    await new Promise(resolve => {
      document.getElementById('disk6').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //5
    currentInstruction();
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
    currentWeight+= 50;
    display.textContent = '50.00';
    //Add EventListener to Tare Button
      document.getElementById('tareButton').addEventListener("click",()=>{
      currentWeight = 0;
      tareWeight=-50;
       display.textContent = '0.00';
        step++;  //6
    currentInstruction();
    })
  }
  else if(currentWeight==10) //Add Event Listener To Disks When the powder has measured
    {
      step++;  //11
    currentInstruction();
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
      step++;  //12
    currentInstruction();
    }
}
})



//Add Event Listener to Chemical Box
document.getElementById('cap').addEventListener('click',async function(){
if(isWeighingMachineOn && tareWeight==-50){
   step++;  //7
    currentInstruction();
  document.getElementById('cap').style.bottom="190%"
  document.getElementById('cap').style.animation= " openCap 2s linear .5s 1  forwards";
   await new Promise(resolve => {
      document.getElementById('cap').addEventListener('animationend', resolve, { once: true });
    });
     step++;  //8
    currentInstruction();
    document.getElementById('spatula').addEventListener('click', async function () {
      document.getElementById('spatula').style.animation= " Spatula 10s linear .5s 1  forwards";
      document.getElementById('powder').style.animation= " Powder 10s linear .5s 1  forwards";
       step++;  //9
    currentInstruction();
   await new Promise(resolve => {
      document.getElementById('spatula').addEventListener('animationend', resolve, { once: true });
    });
  const display = document.getElementById('weightDisplay');
   display.classList.add('active');
    currentWeight+=10;
    console.log(currentWeight);
    display.textContent = '10.00';
     step++;  //10
    currentInstruction();
    });
}
})


//Add Event Listener To Flask
let isMixed=0;
 let atDisk6=0;

let isDone =0;
let isDropIntoCylinder =0;
document.getElementById('flask').addEventListener("click",async function () {
  if(isWaterInFlask &&(!isMixed))
  {
    step++;  //15
    currentInstruction();
     document.getElementById('flask').style.animation= " MoveFlask .5s linear .5s 3";
     document.getElementById('WaterInFlask').style.animation= " MoveWater .5s linear .5s 3";
     document.getElementById('powder').style.animation= " MovePowderIntoFlask .5s linear .5s 3";
     await new Promise(resolve => {
      document.getElementById('flask').addEventListener('animationend', resolve, { once: true });
    });
     isMixed=1
     console.log(isMixed);
     step++;  //16
    currentInstruction();
  }
  else if(isMixed && (!isDone)){
    console.log("hi")
    isDone=1;
    step++;  //17
    currentInstruction();
     await new Promise(resolve => {
       document.getElementById('flask').style.animation= " MoveToCylinder 2s linear .5s 1 forwards";
       document.getElementById('WaterInFlask').style.animation= " WaterWithFlask 2s linear .5s 1 forwards";
      

       document.getElementById('flask').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('WaterInFlask').style.opacity='0';
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
     step++;  //18
    currentInstruction();
     isDropIntoCylinder=1;
    console.log("Hello Drop")
  }
})
let isWaterInFlask=0;
//Add Event Listener To Water bottle
document.getElementById('water').addEventListener("click",async function () {
  if(ispowderInFlask && !(isWaterInFlask))
  {
    step++;  //13
    currentInstruction();
  await new Promise(resolve => {
    document.getElementById('water').style.animation= " WaterIntoFlask 2s linear .5s 1 forwards";
      document.getElementById('water').addEventListener('animationend', resolve, { once: true });
    });
    await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoFlask .5s linear .5s 10 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //14
    currentInstruction();
    isWaterInFlask=1;
    document.getElementById('WaterInFlask').style.opacity="1";
    document.getElementById('water').style.left="46%";
    document.getElementById('water').style.bottom="21%";
    document.getElementById('water').style.animation= " WaterToPlace 2s linear .5s 1 forwards";
  }
})
const times=[];
let countSampleDisk=0;

//Add Event Listner to Andresen-lower For Disk 
document.getElementById('disk1').addEventListener('click',async function () {
    if(totalSeconds>0 && timer == true && countSampleDisk==0){ //For Disk 1
       step++;  //20
       currentInstruction();
  await new Promise(resolve => {
    document.getElementById('disk1').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk1').style.animation= "MovePipetteToDisk1 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater12').style.opacity="0";
    document.getElementById('chemicalWater11').style.opacity="0";
    times[0]=totalSeconds;
    document.getElementById('disk1').addEventListener('animationend', resolve, { once: true });
  },100);
});
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk1 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop1').style.opacity="1";
   
  await new Promise(resolve => {
   document.getElementById('disk1').style.animation= "MovePipetteToCylinder1 4s linear .5s 1 forwards";
   document.getElementById('drop1').style.animation= "MoveDropWithDisk1 4s linear .5s 1 forwards";

    document.getElementById('disk1').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //21
       currentInstruction();
    countSampleDisk++;
  
  }

})
document.getElementById('disk2').addEventListener('click',async function () {
  if(countSampleDisk==1 && totalSeconds>times[0] && timer == true){ //For Disk 2
  await new Promise(resolve => {
    step++;  //22
       currentInstruction();
         document.getElementById('disk2').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk2').style.animation= "MovePipetteToDisk2 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater10').style.opacity="0";
    document.getElementById('chemicalWater9').style.opacity="0";
    times[1]=totalSeconds;
    document.getElementById('disk2').addEventListener('animationend', resolve, { once: true });
    },100);
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk2 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop2').style.opacity="1";
   
  await new Promise(resolve => {
   document.getElementById('disk2').style.animation= "MovePipetteToCylinder2 4s linear .5s 1 forwards";
   document.getElementById('drop2').style.animation= "MoveDropWithDisk2 4s linear .5s 1 forwards";
    document.getElementById('disk2').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //23
       currentInstruction();
    countSampleDisk++;
  }
  })

  document.getElementById('disk3').addEventListener('click',async function () {
  if(countSampleDisk==2 && totalSeconds>times[1] && timer == true){ //For Disk 3
  await new Promise(resolve => {
step++;  //24
       currentInstruction();
        document.getElementById('disk3').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk3').style.animation= "MovePipetteToDisk3 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater8').style.opacity="0";
    document.getElementById('chemicalWater7').style.opacity="0";
    times[2]=totalSeconds;
    document.getElementById('disk3').addEventListener('animationend', resolve, { once: true });
},100);
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk3 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop3').style.opacity="1";
   
  await new Promise(resolve => {
   document.getElementById('disk3').style.animation= "MovePipetteToCylinder3 4s linear .5s 1 forwards";
   document.getElementById('drop3').style.animation= "MoveDropWithDisk3 4s linear .5s 1 forwards";

    document.getElementById('disk3').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
    step++;  //25
       currentInstruction();
  }
})
document.getElementById('disk4').addEventListener('click',async function () {
  if(countSampleDisk==3 && totalSeconds>times[2] && timer == true){ //For Disk 4
  await new Promise(resolve => {
      step++;  //26
       currentInstruction();
        document.getElementById('disk4').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk4').style.animation= "MovePipetteToDisk4 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater6').style.opacity="0";
    document.getElementById('chemicalWater5').style.opacity="0";
     times[3]=totalSeconds;
    document.getElementById('disk4').addEventListener('animationend', resolve, { once: true });
},100);
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk4 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop4').style.opacity="1";
  
  await new Promise(resolve => {
   document.getElementById('disk4').style.animation= "MovePipetteToCylinder4 4s linear .5s 1 forwards";
   document.getElementById('drop4').style.animation= "MoveDropWithDisk4 4s linear .5s 1 forwards";
    document.getElementById('disk4').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
    step++;  //27
       currentInstruction();
  }
})
document.getElementById('disk5').addEventListener('click',async function () {
  if(countSampleDisk==4 && totalSeconds>times[3] && timer == true){ //For Disk 5
  await new Promise(resolve => {
step++;  //28
       currentInstruction();
         document.getElementById('disk5').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk5').style.animation= "MovePipetteToDisk5 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater4').style.opacity="0";
    document.getElementById('chemicalWater3').style.opacity="0";
      times[4]=totalSeconds;
    document.getElementById('disk5').addEventListener('animationend', resolve, { once: true });
},100);
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk5 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop5').style.opacity="1";
 
  await new Promise(resolve => {
   document.getElementById('disk5').style.animation= "MovePipetteToCylinder5 4s linear .5s 1 forwards";
   document.getElementById('drop5').style.animation= "MoveDropWithDisk5 4s linear .5s 1 forwards";
    document.getElementById('disk5').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
    step++;  //29
       currentInstruction();
    atDisk6=1;
  }
})
document.getElementById('disk6').addEventListener('click',async function () {
   if(countSampleDisk==5 && totalSeconds>times[4] && timer == false){ //For Disk 6
  await new Promise(resolve => {
step++;  //31
       currentInstruction();
        document.getElementById('disk6').style.transform='skewY(odeg)'
setTimeout(() => {
   document.getElementById('disk6').style.animation= "MovePipetteToDisk6 4s linear .5s 1 forwards";
    document.getElementById('chemicalWater2').style.opacity="0";
    document.getElementById('chemicalWater1').style.opacity="0";
     times[5]=totalSeconds;
    document.getElementById('disk6').addEventListener('animationend', resolve, { once: true });
},100);
    });
      await new Promise(resolve => {
 document.getElementById('drop').style.animation= " DropIntoDisk6 .5s linear .5s 5 ";
  document.getElementById('drop').style.zIndex="-1";
   document.getElementById('drop').addEventListener('animationend', resolve, { once: true });
    });
    document.getElementById('drop6').style.opacity="1";
  
  await new Promise(resolve => {
   document.getElementById('disk6').style.animation= "MovePipetteToCylinder6 4s linear .5s 1 forwards";
   document.getElementById('drop6').style.animation= "MoveDropWithDisk6 4s linear .5s 1 forwards";
    document.getElementById('disk6').addEventListener('animationend', resolve, { once: true });
    });
    countSampleDisk++;
    step++;  //32
       currentInstruction();
  }
})





let isDry=0;
let isWeighted=0;
let isWeighting=false;
const percentages=[];
//Add Event Listener to Disk To Move To Oven
//Add In Disk1
document.getElementById('disk1').addEventListener('click',async function () {
  if(times[5]!=0 && times[0]<times[1] )
  {
      if(isDry==0){
        step++;  //33
       currentInstruction();
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk1').style.animation= "DiskToOven1 3s linear 0s 1 forwards";
   document.getElementById('drop1').style.animation= "DropToOven1 3s linear 0s 1 forwards";
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
   isDry=1;
  },10000)
}
  if(isDry){
    if(!isWeighting){
      step++;  //40
      console.log("Step:40");
       currentInstruction();
     document.getElementById('disk1').style.left = "46%";
  document.getElementById('powder1').style.left = "48%";
  console.log("I am going");
  await new Promise(resolve => {
     document.getElementById('disk1').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder1').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     
      document.getElementById('powder1').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //41
    console.log("Step:41");
       currentInstruction();
    document.getElementById('disk1').style.left = "22%";
    document.getElementById('powder1').style.left = "25%";
     console.log("i have reached");
     isWeighting=true;
     isWeighted++;
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[0];
     display.textContent = weights[0];
     percentages[0]=((weights[0] / 10)*100).toFixed(2);
       console.log(percentages[0]);
     console.log("1st Disk Weight : ",currentWeight);
  }
  else if(isWeighted==1){
    step++;  //42
    console.log("Step:42");
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk1').style.left = "22%";
  document.getElementById('powder1').style.left = "25%";
   await new Promise(resolve => {
    document.getElementById('disk1').style.animation= "WeighingToDisk1  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder1').style.animation= " WeighingToPowder1 3s ease-in-out .5s 1  forwards";
       document.getElementById('powder1').addEventListener('animationend', resolve, { once: true });
    });
     const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
     isWeighting=false;
     step++;  //43
    console.log("Step:43");
     currentInstruction();
  }
  }
}
})

//Add In Disk2
document.getElementById('disk2').addEventListener('click',async function () {
  if(times[5]!=0 && times[1]<times[2])
  {
      if(isDry==0){
        step++;  //34
       currentInstruction();
    // document.getElementById('drop2').style.left="49.15%";
    // document.getElementById('disk2').style.transform="skewY(0deg);";
      await new Promise(resolve => {
    document.getElementById('disk2').style.animation= "DiskToOven2 3s linear 0s 1 forwards";
   document.getElementById('drop2').style.animation= "DropToOven2 3s linear 0s 1 forwards";
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
   isDry=1;
   },10000)
  }
    if(isDry){
      if(!isWeighting){
        step++;  //44
       currentInstruction();
     document.getElementById('disk2').style.left = "52%";
  document.getElementById('powder2').style.left = "54%";
  console.log("I am going");
   await new Promise(resolve => {
     document.getElementById('disk2').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder2').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     console.log("i have reached");
     document.getElementById('powder2').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //45
       currentInstruction();
    document.getElementById('disk2').style.left = "22%";
    document.getElementById('powder2').style.left = "25%";
     isWeighting=true;
    isWeighted++;
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[1];
     display.textContent = weights[1];
     percentages[1]=((weights[1] / 10)*100).toFixed(2);
       console.log(percentages[1]);
     console.log("2nd Disk Weight : ",currentWeight);
  }
  else if(isWeighted==2){
    step++;  //46
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk2').style.left = "22%";
  document.getElementById('powder2').style.left = "25%";
  await new Promise(resolve => {
    document.getElementById('disk2').style.animation= "WeighingToDisk2  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder2').style.animation= " WeighingToPowder2 3s ease-in-out .5s 1  forwards";
      document.getElementById('powder2').addEventListener('animationend', resolve, { once: true });
    });
      const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
      isWeighting=false;
        step++;  //47
    console.log("Step:47");
     currentInstruction();
  }
  }
  }
})

//Add In Disk3
document.getElementById('disk3').addEventListener('click',async function () {
  if(times[5]!=0 && times[1]<times[2])
  {
      if(isDry==0){
        step++;  //35
       currentInstruction();
    // document.getElementById('drop3').style.left="49.15%";
    // document.getElementById('disk3').style.transform="skewY(0deg);";
      await new Promise(resolve => {
    document.getElementById('disk3').style.animation= "DiskToOven3 3s linear 0s 1 forwards";
   document.getElementById('drop3').style.animation= "DropToOven3 3s linear 0s 1 forwards";
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
   isDry=1;
  
   },10000)
  }
    if(isDry){
      if(!isWeighting){
        step++;  //47
       currentInstruction();
     document.getElementById('disk3').style.left = "57%";
  document.getElementById('powder3').style.left = "59%";
  console.log("I am going");
    await new Promise(resolve => {
     document.getElementById('disk3').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder3').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     console.log("i have reached");
       document.getElementById('powder3').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //48
       currentInstruction();
    document.getElementById('disk3').style.left = "22%";
    document.getElementById('powder3').style.left = "25%";
     isWeighting=true;
    isWeighted++;
     const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[2];
     display.textContent = weights[2];
     percentages[2]=((weights[2] / 10)*100).toFixed(2);
       console.log(percentages[2]);
     console.log("3rd Disk Weight : ",currentWeight);
  }
  else if(isWeighted==3){
    step++;  //49
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk3').style.left = "22%";
  document.getElementById('powder3').style.left = "25%";
    await new Promise(resolve => {
    document.getElementById('disk3').style.animation= "WeighingToDisk3  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder3').style.animation= " WeighingToPowder3 3s ease-in-out .5s 1  forwards";
      document.getElementById('powder3').addEventListener('animationend', resolve, { once: true });
    });
     const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
      isWeighting=false;
       step++;  //47
     currentInstruction();
  }
  
  }
  }
})

//Add In Disk4
document.getElementById('disk4').addEventListener('click',async function () {
  if(times[5]!=0 && times[2]<times[3])
  {
      if(isDry==0){
        step++;  //36
       currentInstruction();
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk4').style.animation= "DiskToOven4 3s linear 0s 1 forwards";
   document.getElementById('drop4').style.animation= "DropToOven4 3s linear 0s 1 forwards";
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
   isDry=1;
    },10000)
  }
     if(isDry){
      if(!isWeighting){
        step++;  //50
       currentInstruction();
     document.getElementById('disk4').style.left = "62%";
  document.getElementById('powder4').style.left = "64%";
  console.log("I am going");
  await new Promise(resolve => {
     document.getElementById('disk4').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder4').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     console.log("i have reached");
      document.getElementById('powder4').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //51
       currentInstruction();
    document.getElementById('disk4').style.left = "22%";
    document.getElementById('powder4').style.left = "25%";
     isWeighting=true;
    isWeighted++;
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[3];
     display.textContent = weights[3];
     percentages[3]=((weights[3] / 10)*100).toFixed(2);
       console.log(percentages[3]);
     console.log("4th Disk Weight : ",currentWeight);
  }
  else if(isWeighted==4){
    step++;  //52
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk4').style.left = "22%";
  document.getElementById('powder4').style.left = "25%";
  await new Promise(resolve => {
    document.getElementById('disk4').style.animation= "WeighingToDisk4  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder4').style.animation= " WeighingToPowder4 3s ease-in-out .5s 1  forwards";
     document.getElementById('powder4').addEventListener('animationend', resolve, { once: true });
    });
     const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
      isWeighting=false;
      step++;  //47
     currentInstruction();
  }
  }
  }
})

//Add In Disk5
document.getElementById('disk5').addEventListener('click',async function () {
  if(times[6]!=0 && times[3]<times[4])
  {
      if(isDry==0){
        step++;  //37
       currentInstruction();
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk5').style.animation= "DiskToOven5 3s linear 0s 1 forwards";
   document.getElementById('drop5').style.animation= "DropToOven5 3s linear 0s 1 forwards";
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
   isDry=1;
    },10000)
  }
     if(isDry){
       if(!isWeighting){
        step++;  //53
       currentInstruction();
     document.getElementById('disk5').style.left = "67%";
  document.getElementById('powder5').style.left = "69%";
  console.log("I am going");
   await new Promise(resolve => {
     document.getElementById('disk5').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder5').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     console.log("i have reached");
       document.getElementById('powder5').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //54
       currentInstruction();
    document.getElementById('disk5').style.left = "22%";
    document.getElementById('powder5').style.left = "25%";
     isWeighting=true;
    isWeighted++;
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[4];
     display.textContent = weights[4];
     percentages[4]=((weights[4] / 10)*100).toFixed(2);
     console.log(percentages[4]);
     console.log("5th Disk Weight : ",currentWeight);
  }
  else if(isWeighted==5){
    step++;  //55
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk5').style.left = "22%";
  document.getElementById('powder5').style.left = "25%";
   await new Promise(resolve => {
    document.getElementById('disk5').style.animation= "WeighingToDisk5  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder5').style.animation= " WeighingToPowder5 3s ease-in-out .5s 1  forwards";
       document.getElementById('powder5').addEventListener('animationend', resolve, { once: true });
    });
     const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
      isWeighting=false;
        step++;  //55
       currentInstruction();
  }
  }
  }
})
let isClick=false;
//Add In Disk6
document.getElementById('disk6').addEventListener('click',async function () {
  if(times[6]!=0 && times[4]<times[5])
  {
      if(isDry==0){
        step++;  //38
       currentInstruction();
    // document.getElementById('drop1').style.left="49.15%";
    // document.getElementById('disk1').style.transform="skewY(0deg);";
    await new Promise(resolve => {
    document.getElementById('disk6').style.animation= "DiskToOven6 3s linear 0s 1 forwards";
   document.getElementById('drop6').style.animation= "DropToOven6 3s linear 0s 1 forwards";
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
   isDry=1;
   step++;  //39
      currentInstruction();
    },10000)
  }
     if(isDry){
        if( !isWeighting){
          step++;  //56
       currentInstruction();
     document.getElementById('disk6').style.left = "72%";
  document.getElementById('powder6').style.left = "75%";
  console.log("I am going");
  await new Promise(resolve => {
     document.getElementById('disk6').style.animation= "SampleDiskToWeighing  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder6').style.animation= " SamplePowderToWeighing 3s ease-in-out .5s 1  forwards";
     console.log("i have reached");
         document.getElementById('powder6').addEventListener('animationend', resolve, { once: true });
    });
    step++;  //57
       currentInstruction();
    document.getElementById('disk6').style.left = "22%";
    document.getElementById('powder6').style.left = "25%";
     isWeighting=true;
    isWeighted++;
    const display = document.getElementById('weightDisplay');
    display.classList.add('active');
     currentWeight=weights[5];
     display.textContent = weights[5];
     percentages[5]=((weights[5] / 10)*100).toFixed(2);
     console.log(percentages[5]);
     console.log("6th Disk Weight : ",currentWeight);
  }
  else if(isWeighted==6){
    step++;  //58
       currentInstruction();
    console.log("I am working");
     document.getElementById('disk6').style.left = "22%";
  document.getElementById('powder6').style.left = "25%";
    await new Promise(resolve => {
    document.getElementById('disk6').style.animation= "WeighingToDisk6  3s ease-in-out .5s 1  forwards";
     document.getElementById('powder6').style.animation= " WeighingToPowder6 3s ease-in-out .5s 1  forwards";
       document.getElementById('powder6').addEventListener('animationend', resolve, { once: true });
    });
     step++;  //59
       currentInstruction();
     const display = document.getElementById('weightDisplay');
     display.classList.add('active');
     display.textContent = '-50.00';
      isWeighting=false;
      document.getElementById('displayTable').style.opacity="1";
      document.getElementById('displayTable').addEventListener('click',async function () {
        if(!isClick){
        isClick=true
        document.getElementById('resultsTable').style.opacity="1";
        document.getElementById('TableHeading').style.opacity="1";
        document.getElementById('displayTable').innerHTML="Hide Result"
      }
      else if(isClick){
        isClick=false
        document.getElementById('resultsTable').style.opacity="0";
        document.getElementById('TableHeading').style.opacity="0";
        document.getElementById('displayTable').innerHTML="View Result"
      }
      })
      TableDetails();
  }
  }
  }
})






//Generate Sample Weight

function generateSedimentationWeights(totalWeight, samplesCount) {
  let randomWeights = [];

  // Step 1: Generate decreasing random values
  let base = 100;
  for (let i = 0; i < samplesCount; i++) {
    // Random portion with decreasing range
    let val = Math.random() * (base / (i + 1));
    randomWeights.push(val);
  }

  // Step 2: Sort in descending order
  randomWeights.sort((a, b) => b - a);

  // Step 3: Normalize to make sum = totalWeight (10g)
  const sum = randomWeights.reduce((a, b) => a + b, 0);
  const normalized = randomWeights.map(v => parseFloat(((v / sum) * totalWeight).toFixed(3)));

  return normalized;
}

const weights = generateSedimentationWeights(10, 6);
console.log(weights); // Array of 6 decreasing values adding to ~10g





//List Of Sample Weights
// 📋 Fill the table
function TableDetails(){
  const table = document.getElementById("resultsTable");
  for (let i = 0; i < weights.length; i++) {
    const row = table.insertRow(-1);
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${times[i]}</td>
      <td>${weights[i]}</td>
      <td>${percentages[i]}%</td>
    `;
  }
}

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
         step++;  //19
         currentInstruction();
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
      } else if(countSampleDisk==5 && atDisk6) {
        step++; //30
        currentInstruction();
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
