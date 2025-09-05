// src/Data/haveHasFutureData.js
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const HaveHasFutureData = {
  positive: [
    { question: "माझ्याकडे उद्या एक पुस्तक असेल.", correctAnswer: "I will have a book tomorrow.", options: shuffleArray(["I","will","have","a","book","tomorrow","pen","car"]) },
    { question: "तुझ्याकडे नवीन पेन असेल.", correctAnswer: "You will have a new pen.", options: shuffleArray(["You","will","have","a","new","pen","book","toy"]) },
    { question: "आपल्याकडे एक मोठं घर असेल.", correctAnswer: "We will have a big house.", options: shuffleArray(["We","will","have","a","big","house","plan","garden"]) },
    { question: "त्यांच्याकडे एक गाडी असेल.", correctAnswer: "They will have a car.", options: shuffleArray(["They","will","have","a","car","book","toy","money"]) },
    { question: "तिच्याकडे सुंदर ड्रेस असेल.", correctAnswer: "She will have a beautiful dress.", options: shuffleArray(["She","will","have","a","beautiful","dress","car","mobile"]) },
    { question: "त्याच्याकडे चांगला मित्र असेल.", correctAnswer: "He will have a good friend.", options: shuffleArray(["He","will","have","a","good","friend","time","money"]) },
    { question: "त्याच्याकडे नवा खेळणा असेल.", correctAnswer: "It will have a new toy.", options: shuffleArray(["It","will","have","a","new","toy","dog","pen"]) },
    { question: "माझ्याकडे वेळ असेल.", correctAnswer: "I will have time.", options: shuffleArray(["I","will","have","time","book","money","friend","bag"]) },
    { question: "तुझ्याकडे संगणक असेल.", correctAnswer: "You will have a computer.", options: shuffleArray(["You","will","have","a","computer","mobile","plan","toy"]) },
    { question: "आपल्याकडे योजना असेल.", correctAnswer: "We will have a plan.", options: shuffleArray(["We","will","have","a","plan","house","garden","pen"]) },
    { question: "त्यांच्याकडे बाग असेल.", correctAnswer: "They will have a garden.", options: shuffleArray(["They","will","have","a","garden","mobile","dog","cycle"]) },
    { question: "तिच्याकडे मोबाइल असेल.", correctAnswer: "She will have a mobile.", options: shuffleArray(["She","will","have","a","mobile","computer","key","bag"]) },
    { question: "त्याच्याकडे पैसे असतील.", correctAnswer: "He will have money.", options: shuffleArray(["He","will","have","money","time","car","friend","pen"]) },
    { question: "त्याच्याकडे खेळणी असतील.", correctAnswer: "It will have toys.", options: shuffleArray(["It","will","have","toys","dog","bag","mobile","plan"]) },
    { question: "माझ्याकडे नवी सायकल असेल.", correctAnswer: "I will have a new bicycle.", options: shuffleArray(["I","will","have","a","new","bicycle","car","pen"]) },
    { question: "तुझ्याकडे चावी असेल.", correctAnswer: "You will have a key.", options: shuffleArray(["You","will","have","a","key","book","cycle","toy"]) },
    { question: "आपल्याकडे काम असेल.", correctAnswer: "We will have work.", options: shuffleArray(["We","will","have","work","plan","mobile","money","time"]) },
    { question: "त्यांच्याकडे वेळ असेल.", correctAnswer: "They will have time.", options: shuffleArray(["They","will","have","time","money","book","garden","pen"]) },
    { question: "तिच्याकडे कार असेल.", correctAnswer: "She will have a car.", options: shuffleArray(["She","will","have","a","car","bag","mobile","plan"]) },
    { question: "त्याच्याकडे पुस्तक असेल.", correctAnswer: "He will have a book.", options: shuffleArray(["He","will","have","a","book","friend","key","cycle"]) }
  ],

  negative: [
    { question: "माझ्याकडे उद्या पुस्तक नसेल.", correctAnswer: "I will not have a book tomorrow.", options: shuffleArray(["I","will","not","have","a","book","tomorrow","pen"]) },
    { question: "तुझ्याकडे पेन नसेल.", correctAnswer: "You will not have a pen.", options: shuffleArray(["You","will","not","have","a","pen","book","car","time"]) },
    { question: "आपल्याकडे घर नसेल.", correctAnswer: "We will not have a house.", options: shuffleArray(["We","will","not","have","a","house","money","bag","plan"]) },
    { question: "त्यांच्याकडे कार नसेल.", correctAnswer: "They will not have a car.", options: shuffleArray(["They","will","not","have","a","car","dog","book","cycle"]) },
    { question: "तिच्याकडे ड्रेस नसेल.", correctAnswer: "She will not have a dress.", options: shuffleArray(["She","will","not","have","a","dress","pen","friend","key"]) },
    { question: "त्याच्याकडे मित्र नसेल.", correctAnswer: "He will not have a friend.", options: shuffleArray(["He","will","not","have","a","friend","money","bag","cycle"]) },
    { question: "त्याच्याकडे खेळणे नसेल.", correctAnswer: "It will not have a toy.", options: shuffleArray(["It","will","not","have","a","toy","book","pen","dog"]) },
    { question: "माझ्याकडे वेळ नसेल.", correctAnswer: "I will not have time.", options: shuffleArray(["I","will","not","have","time","money","pen","car"]) },
    { question: "तुझ्याकडे संगणक नसेल.", correctAnswer: "You will not have a computer.", options: shuffleArray(["You","will","not","have","a","computer","plan","toy","pen"]) },
    { question: "आपल्याकडे योजना नसेल.", correctAnswer: "We will not have a plan.", options: shuffleArray(["We","will","not","have","a","plan","bag","house","key"]) },
    { question: "त्यांच्याकडे बाग नसेल.", correctAnswer: "They will not have a garden.", options: shuffleArray(["They","will","not","have","a","garden","cycle","time","dog"]) },
    { question: "तिच्याकडे मोबाइल नसेल.", correctAnswer: "She will not have a mobile.", options: shuffleArray(["She","will","not","have","a","mobile","pen","car","plan"]) },
    { question: "त्याच्याकडे पैसे नसतील.", correctAnswer: "He will not have money.", options: shuffleArray(["He","will","not","have","money","book","friend","cycle"]) },
    { question: "त्याच्याकडे खेळणी नसतील.", correctAnswer: "It will not have toys.", options: shuffleArray(["It","will","not","have","toys","dog","pen","mobile"]) },
    { question: "माझ्याकडे सायकल नसेल.", correctAnswer: "I will not have a bicycle.", options: shuffleArray(["I","will","not","have","a","bicycle","car","bag","toy"]) },
    { question: "तुझ्याकडे चावी नसेल.", correctAnswer: "You will not have a key.", options: shuffleArray(["You","will","not","have","a","key","book","pen","cycle"]) },
    { question: "आपल्याकडे काम नसेल.", correctAnswer: "We will not have work.", options: shuffleArray(["We","will","not","have","work","plan","toy","money"]) },
    { question: "त्यांच्याकडे वेळ नसेल.", correctAnswer: "They will not have time.", options: shuffleArray(["They","will","not","have","time","car","pen","bag"]) },
    { question: "तिच्याकडे कार नसेल.", correctAnswer: "She will not have a car.", options: shuffleArray(["She","will","not","have","a","car","plan","mobile","key"]) },
    { question: "त्याच्याकडे पुस्तक नसेल.", correctAnswer: "He will not have a book.", options: shuffleArray(["He","will","not","have","a","book","toy","cycle","pen"]) }
  ],

  verbal: [
    { question: "माझ्याकडे उद्या पुस्तक असेल का?", correctAnswer: "Will I have a book tomorrow?", options: shuffleArray(["Will","I","have","a","book","tomorrow","pen","car"]) },
    { question: "तुझ्याकडे पेन असेल का?", correctAnswer: "Will you have a pen?", options: shuffleArray(["Will","you","have","a","pen","book","car","toy"]) },
    { question: "आपल्याकडे घर असेल का?", correctAnswer: "Will we have a house?", options: shuffleArray(["Will","we","have","a","house","plan","money","bag"]) },
    { question: "त्यांच्याकडे कार असेल का?", correctAnswer: "Will they have a car?", options: shuffleArray(["Will","they","have","a","car","pen","toy","book"]) },
    { question: "तिच्याकडे ड्रेस असेल का?", correctAnswer: "Will she have a dress?", options: shuffleArray(["Will","she","have","a","dress","mobile","pen","car"]) },
    { question: "त्याच्याकडे मित्र असेल का?", correctAnswer: "Will he have a friend?", options: shuffleArray(["Will","he","have","a","friend","book","plan","toy"]) },
    { question: "त्याच्याकडे खेळणे असेल का?", correctAnswer: "Will it have a toy?", options: shuffleArray(["Will","it","have","a","toy","dog","pen","bag"]) },
    { question: "माझ्याकडे वेळ असेल का?", correctAnswer: "Will I have time?", options: shuffleArray(["Will","I","have","time","book","pen","money","toy"]) },
    { question: "तुझ्याकडे संगणक असेल का?", correctAnswer: "Will you have a computer?", options: shuffleArray(["Will","you","have","a","computer","plan","book","toy"]) },
    { question: "आपल्याकडे योजना असेल का?", correctAnswer: "Will we have a plan?", options: shuffleArray(["Will","we","have","a","plan","pen","house","money"]) },
    { question: "त्यांच्याकडे बाग असेल का?", correctAnswer: "Will they have a garden?", options: shuffleArray(["Will","they","have","a","garden","book","cycle","time"]) },
    { question: "तिच्याकडे मोबाइल असेल का?", correctAnswer: "Will she have a mobile?", options: shuffleArray(["Will","she","have","a","mobile","pen","car","toy"]) },
    { question: "त्याच्याकडे पैसे असतील का?", correctAnswer: "Will he have money?", options: shuffleArray(["Will","he","have","money","book","friend","pen"]) },
    { question: "त्याच्याकडे खेळणी असतील का?", correctAnswer: "Will it have toys?", options: shuffleArray(["Will","it","have","toys","dog","pen","plan"]) },
    { question: "माझ्याकडे सायकल असेल का?", correctAnswer: "Will I have a bicycle?", options: shuffleArray(["Will","I","have","a","bicycle","car","pen","toy"]) },
    { question: "तुझ्याकडे चावी असेल का?", correctAnswer: "Will you have a key?", options: shuffleArray(["Will","you","have","a","key","book","toy","cycle"]) },
    { question: "आपल्याकडे काम असेल का?", correctAnswer: "Will we have work?", options: shuffleArray(["Will","we","have","work","plan","money","pen"]) },
    { question: "त्यांच्याकडे वेळ असेल का?", correctAnswer: "Will they have time?", options: shuffleArray(["Will","they","have","time","book","money","toy"]) },
    { question: "तिच्याकडे कार असेल का?", correctAnswer: "Will she have a car?", options: shuffleArray(["Will","she","have","a","car","plan","bag","pen"]) },
    { question: "त्याच्याकडे पुस्तक असेल का?", correctAnswer: "Will he have a book?", options: shuffleArray(["Will","he","have","a","book","cycle","pen","bag"]) }
  ],

  wh: [
    { question: "माझ्याकडे काय असेल?", correctAnswer: "What will I have?", options: shuffleArray(["What","will","I","have","book","pen","car","time"]) },
    { question: "तुझ्याकडे काय असेल?", correctAnswer: "What will you have?", options: shuffleArray(["What","will","you","have","pen","toy","book","money"]) },
    { question: "आपल्याकडे काय असेल?", correctAnswer: "What will we have?", options: shuffleArray(["What","will","we","have","plan","money","car","bag"]) },
    { question: "त्यांच्याकडे काय असेल?", correctAnswer: "What will they have?", options: shuffleArray(["What","will","they","have","garden","car","book","pen"]) },
    { question: "तिच्याकडे काय असेल?", correctAnswer: "What will she have?", options: shuffleArray(["What","will","she","have","dress","mobile","car","toy"]) },
    { question: "त्याच्याकडे काय असेल?", correctAnswer: "What will he have?", options: shuffleArray(["What","will","he","have","friend","money","time","book"]) },
    { question: "त्याच्याकडे काय असेल?", correctAnswer: "What will it have?", options: shuffleArray(["What","will","it","have","toy","dog","bag","pen"]) },
    { question: "माझ्याकडे वेळ कधी असेल?", correctAnswer: "When will I have time?", options: shuffleArray(["When","will","I","have","time","book","pen","car"]) },
    { question: "तुझ्याकडे पेन कधी असेल?", correctAnswer: "When will you have a pen?", options: shuffleArray(["When","will","you","have","a","pen","book","toy"]) },
    { question: "आपल्याकडे घर कधी असेल?", correctAnswer: "When will we have a house?", options: shuffleArray(["When","will","we","have","a","house","plan","garden"]) },
    { question: "त्यांच्याकडे कार कधी असेल?", correctAnswer: "When will they have a car?", options: shuffleArray(["When","will","they","have","a","car","toy","money"]) },
    { question: "तिच्याकडे मोबाइल कधी असेल?", correctAnswer: "When will she have a mobile?", options: shuffleArray(["When","will","she","have","a","mobile","book","pen","cycle"]) },
    { question: "त्याच्याकडे पैसे कधी असतील?", correctAnswer: "When will he have money?", options: shuffleArray(["When","will","he","have","money","time","friend","pen"]) },
    { question: "त्याच्याकडे खेळणे कधी असेल?", correctAnswer: "When will it have a toy?", options: shuffleArray(["When","will","it","have","a","toy","dog","car","pen"]) },
    { question: "माझ्याकडे सायकल कुठे असेल?", correctAnswer: "Where will I have a bicycle?", options: shuffleArray(["Where","will","I","have","a","bicycle","car","pen","toy"]) },
    { question: "तुझ्याकडे चावी कुठे असेल?", correctAnswer: "Where will you have a key?", options: shuffleArray(["Where","will","you","have","a","key","book","pen","cycle"]) },
    { question: "आपल्याकडे काम कुठे असेल?", correctAnswer: "Where will we have work?", options: shuffleArray(["Where","will","we","have","work","plan","money","pen"]) },
    { question: "त्यांच्याकडे बाग कुठे असेल?", correctAnswer: "Where will they have a garden?", options: shuffleArray(["Where","will","they","have","a","garden","time","car","book"]) },
    { question: "तिच्याकडे कार कुठे असेल?", correctAnswer: "Where will she have a car?", options: shuffleArray(["Where","will","she","have","a","car","plan","bag","pen"]) },
    { question: "त्याच्याकडे पुस्तक कुठे असेल?", correctAnswer: "Where will he have a book?", options: shuffleArray(["Where","will","he","have","a","book","cycle","pen","bag"]) }
  ]
};

