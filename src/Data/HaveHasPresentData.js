// src/Data/haveHasPresentData.js

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const HaveHasPresentData = {
  positive: [
    { question: "माझ्याकडे एक पुस्तक आहे.", correctAnswer: "I have a book.", options: shuffleArray(["I","have","a","book","pen","car","dog","bag"]) },
    { question: "तुझ्याकडे एक पेन आहे.", correctAnswer: "You have a pen.", options: shuffleArray(["You","have","a","pen","book","bag","garden","time","toy"]) },
    { question: "आपल्याकडे एक घर आहे.", correctAnswer: "We have a house.", options: shuffleArray(["We","have","a","house","car","money","key","friend"]) },
    { question: "त्यांच्याकडे एक कार आहे.", correctAnswer: "They have a car.", options: shuffleArray(["They","have","a","car","house","mobile","toy","plan"]) },
    { question: "तिच्याकडे एक बॅग आहे.", correctAnswer: "She has a bag.", options: shuffleArray(["She","has","a","bag","pen","garden","book","cycle"]) },
    { question: "त्याच्याकडे एक मित्र आहे.", correctAnswer: "He has a friend.", options: shuffleArray(["He","has","a","friend","money","dog","car","plan"]) },
    { question: "त्याच्याकडे एक कुत्रा आहे.", correctAnswer: "It has a dog.", options: shuffleArray(["It","has","a","dog","toy","cat","bag","book"]) },
    { question: "माझ्याकडे वेळ आहे.", correctAnswer: "I have time.", options: shuffleArray(["I","have","time","money","car","pen","dog","plan"]) },
    { question: "तुझ्याकडे संगणक आहे.", correctAnswer: "You have a computer.", options: shuffleArray(["You","have","a","computer","mobile","key","toy","garden"]) },
    { question: "आपल्याकडे योजना आहे.", correctAnswer: "We have a plan.", options: shuffleArray(["We","have","a","plan","house","time","friend","bag"]) },
    { question: "त्यांच्याकडे बाग आहे.", correctAnswer: "They have a garden.", options: shuffleArray(["They","have","a","garden","mobile","dog","cycle","money"]) },
    { question: "तिच्याकडे मोबाइल आहे.", correctAnswer: "She has a mobile.", options: shuffleArray(["She","has","a","mobile","computer","key","book","toy"]) },
    { question: "त्याच्याकडे पैसे आहेत.", correctAnswer: "He has money.", options: shuffleArray(["He","has","money","time","friend","garden","dog","pen"]) },
    { question: "त्याच्याकडे खेळणे आहे.", correctAnswer: "It has a toy.", options: shuffleArray(["It","has","a","toy","dog","cat","mobile","plan"]) },
    { question: "माझ्याकडे सायकल आहे.", correctAnswer: "I have a bicycle.", options: shuffleArray(["I","have","a","bicycle","car","house","friend","pen"]) },
    { question: "तुझ्याकडे चावी आहे.", correctAnswer: "You have a key.", options: shuffleArray(["You","have","a","key","book","dog","garden","cycle"]) },
    { question: "आपल्याकडे काम आहे.", correctAnswer: "We have work.", options: shuffleArray(["We","have","work","plan","mobile","money","house","toy"]) },
    { question: "त्यांच्याकडे वेळ आहे.", correctAnswer: "They have time.", options: shuffleArray(["They","have","time","money","book","pen","garden","cycle"]) },
    { question: "तिच्याकडे गाडी आहे.", correctAnswer: "She has a car.", options: shuffleArray(["She","has","a","car","bag","dog","mobile","plan"]) },
    { question: "त्याच्याकडे पुस्तक आहे.", correctAnswer: "He has a book.", options: shuffleArray(["He","has","a","book","friend","key","cycle","garden"]) }
  ],

  negative: [
    { question: "माझ्याकडे पुस्तक नाही.", correctAnswer: "I do not have a book.", options: shuffleArray(["I","do","not","have","a","book","pen","bag"]) },
    { question: "तुझ्याकडे पेन नाही.", correctAnswer: "You do not have a pen.", options: shuffleArray(["You","do","not","have","a","pen","car","toy"]) },
    { question: "आपल्याकडे घर नाही.", correctAnswer: "We do not have a house.", options: shuffleArray(["We","do","not","have","a","house","money","plan"]) },
    { question: "त्यांच्याकडे कार नाही.", correctAnswer: "They do not have a car.", options: shuffleArray(["They","do","not","have","a","car","dog","garden"]) },
    { question: "तिच्याकडे बॅग नाही.", correctAnswer: "She does not have a bag.", options: shuffleArray(["She","does","not","have","a","bag","book","pen"]) },
    { question: "त्याच्याकडे मित्र नाही.", correctAnswer: "He does not have a friend.", options: shuffleArray(["He","does","not","have","a","friend","money","cycle"]) },
    { question: "त्याच्याकडे कुत्रा नाही.", correctAnswer: "It does not have a dog.", options: shuffleArray(["It","does","not","have","a","dog","toy","cat"]) },
    { question: "माझ्याकडे वेळ नाही.", correctAnswer: "I do not have time.", options: shuffleArray(["I","do","not","have","time","money","car"]) },
    { question: "तुझ्याकडे संगणक नाही.", correctAnswer: "You do not have a computer.", options: shuffleArray(["You","do","not","have","a","computer","mobile","pen"]) },
    { question: "आपल्याकडे योजना नाही.", correctAnswer: "We do not have a plan.", options: shuffleArray(["We","do","not","have","a","plan","friend","dog"]) },
    { question: "त्यांच्याकडे बाग नाही.", correctAnswer: "They do not have a garden.", options: shuffleArray(["They","do","not","have","a","garden","mobile","book"]) },
    { question: "तिच्याकडे मोबाइल नाही.", correctAnswer: "She does not have a mobile.", options: shuffleArray(["She","does","not","have","a","mobile","key","toy"]) },
    { question: "त्याच्याकडे पैसे नाहीत.", correctAnswer: "He does not have money.", options: shuffleArray(["He","does","not","have","money","pen","car"]) },
    { question: "त्याच्याकडे खेळणे नाही.", correctAnswer: "It does not have a toy.", options: shuffleArray(["It","does","not","have","a","toy","dog","bag"]) },
    { question: "माझ्याकडे सायकल नाही.", correctAnswer: "I do not have a bicycle.", options: shuffleArray(["I","do","not","have","a","bicycle","car","pen"]) },
    { question: "तुझ्याकडे चावी नाही.", correctAnswer: "You do not have a key.", options: shuffleArray(["You","do","not","have","a","key","book","cycle"]) },
    { question: "आपल्याकडे काम नाही.", correctAnswer: "We do not have work.", options: shuffleArray(["We","do","not","have","work","mobile","money"]) },
    { question: "त्यांच्याकडे वेळ नाही.", correctAnswer: "They do not have time.", options: shuffleArray(["They","do","not","have","time","book","garden"]) },
    { question: "तिच्याकडे गाडी नाही.", correctAnswer: "She does not have a car.", options: shuffleArray(["She","does","not","have","a","car","bag","plan"]) },
    { question: "त्याच्याकडे पुस्तक नाही.", correctAnswer: "He does not have a book.", options: shuffleArray(["He","does","not","have","a","book","friend","toy"]) }
  ],

  verbal: [
    { question: "तुझ्याकडे पुस्तक आहे का?", correctAnswer: "Do you have a book?", options: shuffleArray(["Do","you","have","a","book","pen","car","time"]) },
    { question: "माझ्याकडे पेन आहे का?", correctAnswer: "Do I have a pen?", options: shuffleArray(["Do","I","have","a","pen","book","toy","dog"]) },
    { question: "आपल्याकडे कार आहे का?", correctAnswer: "Do we have a car?", options: shuffleArray(["Do","we","have","a","car","money","plan","key"]) },
    { question: "त्यांच्याकडे घर आहे का?", correctAnswer: "Do they have a house?", options: shuffleArray(["Do","they","have","a","house","dog","bag","time"]) },
    { question: "त्याच्याकडे मित्र आहे का?", correctAnswer: "Does he have a friend?", options: shuffleArray(["Does","he","have","a","friend","pen","car","book"]) },
    { question: "तिच्याकडे बॅग आहे का?", correctAnswer: "Does she have a bag?", options: shuffleArray(["Does","she","have","a","bag","toy","dog","mobile"]) },
    { question: "त्याच्याकडे खेळणे आहे का?", correctAnswer: "Does it have a toy?", options: shuffleArray(["Does","it","have","a","toy","dog","book","plan"]) },
    { question: "माझ्याकडे वेळ आहे का?", correctAnswer: "Do I have time?", options: shuffleArray(["Do","I","have","time","money","key","pen"]) },
    { question: "तुझ्याकडे संगणक आहे का?", correctAnswer: "Do you have a computer?", options: shuffleArray(["Do","you","have","a","computer","mobile","car","book"]) },
    { question: "आपल्याकडे योजना आहे का?", correctAnswer: "Do we have a plan?", options: shuffleArray(["Do","we","have","a","plan","time","dog","toy"]) },
    { question: "त्यांच्याकडे बाग आहे का?", correctAnswer: "Do they have a garden?", options: shuffleArray(["Do","they","have","a","garden","friend","pen","cycle"]) },
    { question: "त्याच्याकडे पैसे आहेत का?", correctAnswer: "Does he have money?", options: shuffleArray(["Does","he","have","money","car","dog","plan"]) },
    { question: "तिच्याकडे मोबाइल आहे का?", correctAnswer: "Does she have a mobile?", options: shuffleArray(["Does","she","have","a","mobile","computer","key","bag"]) },
    { question: "त्याच्याकडे सायकल आहे का?", correctAnswer: "Does it have a bicycle?", options: shuffleArray(["Does","it","have","a","bicycle","dog","toy","book"]) },
    { question: "माझ्याकडे घर आहे का?", correctAnswer: "Do I have a house?", options: shuffleArray(["Do","I","have","a","house","car","friend","pen"]) },
    { question: "तुझ्याकडे चावी आहे का?", correctAnswer: "Do you have a key?", options: shuffleArray(["Do","you","have","a","key","plan","dog","cycle"]) },
    { question: "आपल्याकडे काम आहे का?", correctAnswer: "Do we have work?", options: shuffleArray(["Do","we","have","work","friend","mobile","money"]) },
    { question: "त्यांच्याकडे वेळ आहे का?", correctAnswer: "Do they have time?", options: shuffleArray(["Do","they","have","time","book","dog","garden"]) },
    { question: "तिच्याकडे गाडी आहे का?", correctAnswer: "Does she have a car?", options: shuffleArray(["Does","she","have","a","car","bag","plan","mobile"]) },
    { question: "त्याच्याकडे पुस्तक आहे का?", correctAnswer: "Does he have a book?", options: shuffleArray(["Does","he","have","a","book","pen","friend","toy"]) }
  ],

  wh: [
    { question: "तुझ्याकडे काय आहे?", correctAnswer: "What do you have?", options: shuffleArray(["What","do","you","have","book","pen","toy","car"]) },
    { question: "त्याच्याकडे काय आहे?", correctAnswer: "What does he have?", options: shuffleArray(["What","does","he","have","money","dog","plan","time"]) },
    { question: "तिच्याकडे काय आहे?", correctAnswer: "What does she have?", options: shuffleArray(["What","does","she","have","bag","mobile","toy","book"]) },
    { question: "त्याच्याकडे काय आहे?", correctAnswer: "What does it have?", options: shuffleArray(["What","does","it","have","toy","dog","cycle","car"]) },
    { question: "माझ्याकडे काय आहे?", correctAnswer: "What do I have?", options: shuffleArray(["What","do","I","have","book","pen","car","bag"]) },
    { question: "आपल्याकडे काय आहे?", correctAnswer: "What do we have?", options: shuffleArray(["What","do","we","have","plan","time","money","garden"]) },
    { question: "त्यांच्याकडे काय आहे?", correctAnswer: "What do they have?", options: shuffleArray(["What","do","they","have","house","car","book","toy"]) },
    { question: "तुझ्याकडे पुस्तक कोणते आहे?", correctAnswer: "Which book do you have?", options: shuffleArray(["Which","book","do","you","have","pen","car","toy"]) },
    { question: "त्याच्याकडे मित्र कोण आहे?", correctAnswer: "Who does he have as a friend?", options: shuffleArray(["Who","does","he","have","as","a","friend","plan"]) },
    { question: "तिच्याकडे कोणता मोबाइल आहे?", correctAnswer: "Which mobile does she have?", options: shuffleArray(["Which","mobile","does","she","have","toy","bag","plan"]) },
    { question: "त्याच्याकडे कोणते खेळणे आहे?", correctAnswer: "Which toy does it have?", options: shuffleArray(["Which","toy","does","it","have","dog","bag","book"]) },
    { question: "माझ्याकडे कोणती कार आहे?", correctAnswer: "Which car do I have?", options: shuffleArray(["Which","car","do","I","have","book","toy","plan"]) },
    { question: "आपल्याकडे कोणते काम आहे?", correctAnswer: "What work do we have?", options: shuffleArray(["What","work","do","we","have","money","plan","key"]) },
    { question: "त्यांच्याकडे कोणते घर आहे?", correctAnswer: "Which house do they have?", options: shuffleArray(["Which","house","do","they","have","toy","bag","cycle"]) },
    { question: "तुझ्याकडे किती पैसे आहेत?", correctAnswer: "How much money do you have?", options: shuffleArray(["How","much","money","do","you","have","plan","pen"]) },
    { question: "त्याच्याकडे किती मित्र आहेत?", correctAnswer: "How many friends does he have?", options: shuffleArray(["How","many","friends","does","he","have","toy","bag"]) },
    { question: "तिच्याकडे किती पुस्तके आहेत?", correctAnswer: "How many books does she have?", options: shuffleArray(["How","many","books","does","she","have","pen","dog","plan"]) },
    { question: "त्याच्याकडे किती गाड्या आहेत?", correctAnswer: "How many cars does it have?", options: shuffleArray(["How","many","cars","does","it","have","toy","plan","bag"]) },
    { question: "आपल्याकडे किती वेळ आहे?", correctAnswer: "How much time do we have?", options: shuffleArray(["How","much","time","do","we","have","dog","pen","plan"]) },
    { question: "त्यांच्याकडे किती बागा आहेत?", correctAnswer: "How many gardens do they have?", options: shuffleArray(["How","many","gardens","do","they","have","toy","plan","car"]) }
  ]

};