// src/Data/haveHasPastData.js

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const HaveHasPastData = {
  positive: [
    { question: "माझ्याकडे एक पुस्तक होते.", correctAnswer: "I had a book.", options: shuffleArray(["I","had","a","book","pen","bag","car","dog"]) },
    { question: "तुझ्याकडे पेन होते.", correctAnswer: "You had a pen.", options: shuffleArray(["You","had","a","pen","book","toy","car","key"]) },
    { question: "आपल्याकडे एक घर होते.", correctAnswer: "We had a house.", options: shuffleArray(["We","had","a","house","bag","money","plan","dog"]) },
    { question: "त्यांच्याकडे एक कार होती.", correctAnswer: "They had a car.", options: shuffleArray(["They","had","a","car","house","mobile","toy","bag"]) },
    { question: "त्याच्याकडे एक मित्र होता.", correctAnswer: "He had a friend.", options: shuffleArray(["He","had","a","friend","money","dog","plan","cycle"]) },
    { question: "तिच्याकडे एक बॅग होती.", correctAnswer: "She had a bag.", options: shuffleArray(["She","had","a","bag","pen","garden","book","cycle"]) },
    { question: "त्याच्याकडे एक खेळणे होते.", correctAnswer: "It had a toy.", options: shuffleArray(["It","had","a","toy","dog","cat","bag","book"]) },
    { question: "माझ्याकडे वेळ होता.", correctAnswer: "I had time.", options: shuffleArray(["I","had","time","money","car","pen","dog","plan"]) },
    { question: "तुझ्याकडे संगणक होता.", correctAnswer: "You had a computer.", options: shuffleArray(["You","had","a","computer","mobile","key","toy","garden"]) },
    { question: "आपल्याकडे योजना होती.", correctAnswer: "We had a plan.", options: shuffleArray(["We","had","a","plan","house","time","friend","bag"]) },
    { question: "त्यांच्याकडे बाग होती.", correctAnswer: "They had a garden.", options: shuffleArray(["They","had","a","garden","mobile","dog","cycle","money"]) },
    { question: "तिच्याकडे मोबाइल होता.", correctAnswer: "She had a mobile.", options: shuffleArray(["She","had","a","mobile","computer","key","book","toy"]) },
    { question: "त्याच्याकडे पैसे होते.", correctAnswer: "He had money.", options: shuffleArray(["He","had","money","time","friend","garden","dog","pen"]) },
    { question: "त्याच्याकडे सायकल होती.", correctAnswer: "It had a bicycle.", options: shuffleArray(["It","had","a","bicycle","dog","cat","plan","pen"]) },
    { question: "माझ्याकडे चावी होती.", correctAnswer: "I had a key.", options: shuffleArray(["I","had","a","key","bag","dog","cycle","pen"]) },
    { question: "तुझ्याकडे गाडी होती.", correctAnswer: "You had a car.", options: shuffleArray(["You","had","a","car","mobile","toy","bag","plan"]) },
    { question: "आपल्याकडे मित्र होता.", correctAnswer: "We had a friend.", options: shuffleArray(["We","had","a","friend","house","dog","book","plan"]) },
    { question: "त्यांच्याकडे काम होते.", correctAnswer: "They had work.", options: shuffleArray(["They","had","work","time","money","book","pen","toy"]) },
    { question: "त्याच्याकडे पुस्तक होते.", correctAnswer: "He had a book.", options: shuffleArray(["He","had","a","book","friend","key","cycle","garden"]) },
    { question: "तिच्याकडे कार होती.", correctAnswer: "She had a car.", options: shuffleArray(["She","had","a","car","bag","dog","mobile","plan"]) }
  ],

  negative: [
    { question: "माझ्याकडे पुस्तक नव्हते.", correctAnswer: "I did not have a book.", options: shuffleArray(["I","did","not","have","a","book","pen","bag"]) },
    { question: "तुझ्याकडे पेन नव्हते.", correctAnswer: "You did not have a pen.", options: shuffleArray(["You","did","not","have","a","pen","car","toy"]) },
    { question: "आपल्याकडे घर नव्हते.", correctAnswer: "We did not have a house.", options: shuffleArray(["We","did","not","have","a","house","money","plan"]) },
    { question: "त्यांच्याकडे कार नव्हती.", correctAnswer: "They did not have a car.", options: shuffleArray(["They","did","not","have","a","car","dog","garden"]) },
    { question: "त्याच्याकडे मित्र नव्हता.", correctAnswer: "He did not have a friend.", options: shuffleArray(["He","did","not","have","a","friend","money","cycle"]) },
    { question: "तिच्याकडे बॅग नव्हती.", correctAnswer: "She did not have a bag.", options: shuffleArray(["She","did","not","have","a","bag","book","pen"]) },
    { question: "त्याच्याकडे खेळणे नव्हते.", correctAnswer: "It did not have a toy.", options: shuffleArray(["It","did","not","have","a","toy","dog","cat"]) },
    { question: "माझ्याकडे वेळ नव्हता.", correctAnswer: "I did not have time.", options: shuffleArray(["I","did","not","have","time","money","car"]) },
    { question: "तुझ्याकडे संगणक नव्हता.", correctAnswer: "You did not have a computer.", options: shuffleArray(["You","did","not","have","a","computer","mobile","pen"]) },
    { question: "आपल्याकडे योजना नव्हती.", correctAnswer: "We did not have a plan.", options: shuffleArray(["We","did","not","have","a","plan","friend","dog"]) },
    { question: "त्यांच्याकडे बाग नव्हती.", correctAnswer: "They did not have a garden.", options: shuffleArray(["They","did","not","have","a","garden","mobile","book"]) },
    { question: "तिच्याकडे मोबाइल नव्हता.", correctAnswer: "She did not have a mobile.", options: shuffleArray(["She","did","not","have","a","mobile","key","toy"]) },
    { question: "त्याच्याकडे पैसे नव्हते.", correctAnswer: "He did not have money.", options: shuffleArray(["He","did","not","have","money","pen","car"]) },
    { question: "त्याच्याकडे सायकल नव्हती.", correctAnswer: "It did not have a bicycle.", options: shuffleArray(["It","did","not","have","a","bicycle","dog","toy"]) },
    { question: "माझ्याकडे चावी नव्हती.", correctAnswer: "I did not have a key.", options: shuffleArray(["I","did","not","have","a","key","book","cycle"]) },
    { question: "तुझ्याकडे गाडी नव्हती.", correctAnswer: "You did not have a car.", options: shuffleArray(["You","did","not","have","a","car","bag","plan"]) },
    { question: "आपल्याकडे मित्र नव्हता.", correctAnswer: "We did not have a friend.", options: shuffleArray(["We","did","not","have","a","friend","house","pen"]) },
    { question: "त्यांच्याकडे काम नव्हते.", correctAnswer: "They did not have work.", options: shuffleArray(["They","did","not","have","work","mobile","money"]) },
    { question: "तिच्याकडे कार नव्हती.", correctAnswer: "She did not have a car.", options: shuffleArray(["She","did","not","have","a","car","bag","plan"]) },
    { question: "त्याच्याकडे पुस्तक नव्हते.", correctAnswer: "He did not have a book.", options: shuffleArray(["He","did","not","have","a","book","friend","toy"]) }
  ],

  verbal: [
    { question: "तुझ्याकडे पुस्तक होते का?", correctAnswer: "Did you have a book?", options: shuffleArray(["Did","you","have","a","book","pen","car","time"]) },
    { question: "माझ्याकडे पेन होते का?", correctAnswer: "Did I have a pen?", options: shuffleArray(["Did","I","have","a","pen","book","toy","dog"]) },
    { question: "आपल्याकडे कार होती का?", correctAnswer: "Did we have a car?", options: shuffleArray(["Did","we","have","a","car","money","plan","key"]) },
    { question: "त्यांच्याकडे घर होते का?", correctAnswer: "Did they have a house?", options: shuffleArray(["Did","they","have","a","house","dog","bag","time"]) },
    { question: "त्याच्याकडे मित्र होता का?", correctAnswer: "Did he have a friend?", options: shuffleArray(["Did","he","have","a","friend","pen","car","book"]) },
    { question: "तिच्याकडे बॅग होती का?", correctAnswer: "Did she have a bag?", options: shuffleArray(["Did","she","have","a","bag","toy","dog","mobile"]) },
    { question: "त्याच्याकडे खेळणे होते का?", correctAnswer: "Did it have a toy?", options: shuffleArray(["Did","it","have","a","toy","dog","book","plan"]) },
    { question: "माझ्याकडे वेळ होता का?", correctAnswer: "Did I have time?", options: shuffleArray(["Did","I","have","time","money","key","pen"]) },
    { question: "तुझ्याकडे संगणक होता का?", correctAnswer: "Did you have a computer?", options: shuffleArray(["Did","you","have","a","computer","mobile","car","book"]) },
    { question: "आपल्याकडे योजना होती का?", correctAnswer: "Did we have a plan?", options: shuffleArray(["Did","we","have","a","plan","time","dog","toy"]) },
    { question: "त्यांच्याकडे बाग होती का?", correctAnswer: "Did they have a garden?", options: shuffleArray(["Did","they","have","a","garden","friend","pen","cycle"]) },
    { question: "त्याच्याकडे पैसे होते का?", correctAnswer: "Did he have money?", options: shuffleArray(["Did","he","have","money","car","dog","plan"]) },
    { question: "तिच्याकडे मोबाइल होता का?", correctAnswer: "Did she have a mobile?", options: shuffleArray(["Did","she","have","a","mobile","computer","key","bag"]) },
    { question: "त्याच्याकडे सायकल होती का?", correctAnswer: "Did it have a bicycle?", options: shuffleArray(["Did","it","have","a","bicycle","dog","toy","book"]) },
    { question: "माझ्याकडे घर होते का?", correctAnswer: "Did I have a house?", options: shuffleArray(["Did","I","have","a","house","car","friend","pen"]) },
    { question: "तुझ्याकडे चावी होती का?", correctAnswer: "Did you have a key?", options: shuffleArray(["Did","you","have","a","key","plan","dog","cycle"]) },
    { question: "आपल्याकडे काम होते का?", correctAnswer: "Did we have work?", options: shuffleArray(["Did","we","have","work","friend","mobile","money"]) },
    { question: "त्यांच्याकडे वेळ होता का?", correctAnswer: "Did they have time?", options: shuffleArray(["Did","they","have","time","book","dog","garden"]) },
    { question: "तिच्याकडे कार होती का?", correctAnswer: "Did she have a car?", options: shuffleArray(["Did","she","have","a","car","bag","plan","mobile"]) },
    { question: "त्याच्याकडे पुस्तक होते का?", correctAnswer: "Did he have a book?", options: shuffleArray(["Did","he","have","a","book","pen","friend","toy"]) }
  ],

  wh: [
    { question: "तुझ्याकडे काय होते?", correctAnswer: "What did you have?", options: shuffleArray(["What","did","you","have","book","pen","toy","car"]) },
    { question: "त्याच्याकडे काय होते?", correctAnswer: "What did he have?", options: shuffleArray(["What","did","he","have","money","dog","plan","time"]) },
    { question: "तिच्याकडे काय होते?", correctAnswer: "What did she have?", options: shuffleArray(["What","did","she","have","bag","mobile","toy","book"]) },
    { question: "त्याच्याकडे काय होते?", correctAnswer: "What did it have?", options: shuffleArray(["What","did","it","have","toy","dog","cycle","car"]) },
    { question: "माझ्याकडे काय होते?", correctAnswer: "What did I have?", options: shuffleArray(["What","did","I","have","book","pen","car","bag"]) },
    { question: "आपल्याकडे काय होते?", correctAnswer: "What did we have?", options: shuffleArray(["What","did","we","have","plan","time","money","garden"]) },
    { question: "त्यांच्याकडे काय होते?", correctAnswer: "What did they have?", options: shuffleArray(["What","did","they","have","house","car","book","toy"]) },
    { question: "तुझ्याकडे कोणते पुस्तक होते?", correctAnswer: "Which book did you have?", options: shuffleArray(["Which","book","did","you","have","pen","car","toy"]) },
    { question: "त्याच्याकडे कोणता मित्र होता?", correctAnswer: "Who did he have as a friend?", options: shuffleArray(["Who","did","he","have","as","a","friend","plan"]) },
    { question: "तिच्याकडे कोणता मोबाइल होता?", correctAnswer: "Which mobile did she have?", options: shuffleArray(["Which","mobile","did","she","have","toy","bag","plan"]) },
    { question: "त्याच्याकडे कोणते खेळणे होते?", correctAnswer: "Which toy did it have?", options: shuffleArray(["Which","toy","did","it","have","dog","bag","book"]) },
    { question: "माझ्याकडे कोणती कार होती?", correctAnswer: "Which car did I have?", options: shuffleArray(["Which","car","did","I","have","book","toy","plan"]) },
    { question: "आपल्याकडे कोणते काम होते?", correctAnswer: "What work did we have?", options: shuffleArray(["What","work","did","we","have","money","plan","key"]) },
    { question: "त्यांच्याकडे कोणते घर होते?", correctAnswer: "Which house did they have?", options: shuffleArray(["Which","house","did","they","have","toy","bag","cycle"]) },
    { question: "तुझ्याकडे किती पैसे होते?", correctAnswer: "How much money did you have?", options: shuffleArray(["How","much","money","did","you","have","plan","pen"]) },
    { question: "त्याच्याकडे किती मित्र होते?", correctAnswer: "How many friends did he have?", options: shuffleArray(["How","many","friends","did","he","have","toy","bag"]) },
    { question: "तिच्याकडे किती पुस्तके होती?", correctAnswer: "How many books did she have?", options: shuffleArray(["How","many","books","did","she","have","pen","dog","plan"]) },
    { question: "त्याच्याकडे किती गाड्या होत्या?", correctAnswer: "How many cars did it have?", options: shuffleArray(["How","many","cars","did","it","have","toy","plan","bag"]) },
    { question: "आपल्याकडे किती वेळ होता?", correctAnswer: "How much time did we have?", options: shuffleArray(["How","much","time","did","we","have","dog","pen","plan"]) },
    { question: "त्यांच्याकडे किती बागा होत्या?", correctAnswer: "How many gardens did they have?", options: shuffleArray(["How","many","gardens","did","they","have","toy","plan","car"]) }
  ]
};


