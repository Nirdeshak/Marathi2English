// src/Data/simpleFutureData.js
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const SimpleFutureData = {
  positive: [
    { question: "मी उद्या शाळेत जाईन.", correctAnswer: "I will go to school tomorrow.", options: shuffleArray(["I","will","go","to","school","tomorrow","play"]) },
    { question: "तू उद्या कामाला जाशील.", correctAnswer: "You will go to work tomorrow.", options: shuffleArray(["You","will","go","to","work","tomorrow","study"]) },
    { question: "आम्ही उद्या पुस्तक वाचू.", correctAnswer: "We will read a book tomorrow.", options: shuffleArray(["We","will","read","a","book","tomorrow","play"]) },
    { question: "ती उद्या व्यायाम करेल.", correctAnswer: "She will exercise tomorrow.", options: shuffleArray(["She","will","exercise","tomorrow","play"]) },
    { question: "तो उद्या बाजारात जाईल.", correctAnswer: "He will go to the market tomorrow.", options: shuffleArray(["He","will","go","to","the","market","tomorrow"]) },
    { question: "त्याच्याकडे नवीन पेन असेल.", correctAnswer: "He will have a new pen.", options: shuffleArray(["He","will","have","a","new","pen","book"]) },
    { question: "माझ्याकडे नवीन सायकल असेल.", correctAnswer: "I will have a new bicycle.", options: shuffleArray(["I","will","have","a","new","bicycle","car"]) },
    { question: "तिच्याकडे सुंदर ड्रेस असेल.", correctAnswer: "She will have a beautiful dress.", options: shuffleArray(["She","will","have","a","beautiful","dress","bag"]) },
    { question: "ते उद्या खेळतील.", correctAnswer: "They will play tomorrow.", options: shuffleArray(["They","will","play","tomorrow","study"]) },
    { question: "तो पाणी पिणार आहे.", correctAnswer: "He will drink water.", options: shuffleArray(["He","will","drink","water","milk"]) },
    { question: "आम्ही टीव्ही पाहू.", correctAnswer: "We will watch TV.", options: shuffleArray(["We","will","watch","TV","read"]) },
    { question: "तू गाणे ऐकशील.", correctAnswer: "You will listen to music.", options: shuffleArray(["You","will","listen","to","music"]) },
    { question: "आकाशात सूर्य असेल.", correctAnswer: "There will be sun in the sky.", options: shuffleArray(["There","will","be","sun","in","the","sky"]) },
    { question: "खिडकीजवळ फुल असेल.", correctAnswer: "There will be a flower near the window.", options: shuffleArray(["There","will","be","a","flower","near","the","window"]) },
    { question: "मी जेवीन.", correctAnswer: "I will eat lunch.", options: shuffleArray(["I","will","eat","lunch","dinner"]) },
    { question: "तो खेळायला जाईल.", correctAnswer: "He will go to play.", options: shuffleArray(["He","will","go","to","play"]) },
    { question: "आम्ही चालू.", correctAnswer: "We will walk.", options: shuffleArray(["We","will","walk"]) },
    { question: "ती गाणे गायेल.", correctAnswer: "She will sing a song.", options: shuffleArray(["She","will","sing","a","song"]) },
    { question: "तो बागेत झाडे लावेल.", correctAnswer: "He will plant trees in the garden.", options: shuffleArray(["He","will","plant","trees","in","the","garden"]) },
    { question: "ते काम करतील.", correctAnswer: "They will work.", options: shuffleArray(["They","will","work"]) }
  ],

  negative: [
    { question: "मी टीव्ही पाहणार नाही.", correctAnswer: "I will not watch TV.", options: shuffleArray(["I","will","not","watch","TV"]) },
    { question: "तू शाळेत जाणार नाहीस.", correctAnswer: "You will not go to school.", options: shuffleArray(["You","will","not","go","to","school"]) },
    { question: "तो पाणी पिणार नाही.", correctAnswer: "He will not drink water.", options: shuffleArray(["He","will","not","drink","water"]) },
    { question: "आम्ही पुस्तक वाचणार नाही.", correctAnswer: "We will not read a book.", options: shuffleArray(["We","will","not","read","a","book"]) },
    { question: "ते खेळणार नाहीत.", correctAnswer: "They will not play.", options: shuffleArray(["They","will","not","play"]) },
    { question: "ती व्यायाम करणार नाही.", correctAnswer: "She will not exercise.", options: shuffleArray(["She","will","not","exercise"]) },
    { question: "तो कामाला जाणार नाही.", correctAnswer: "He will not go to work.", options: shuffleArray(["He","will","not","go","to","work"]) },
    { question: "माझ्याकडे कार असेल नाही.", correctAnswer: "I will not have a car.", options: shuffleArray(["I","will","not","have","a","car"]) },
    { question: "तिच्याकडे पेन असेल नाही.", correctAnswer: "She will not have a pen.", options: shuffleArray(["She","will","not","have","a","pen"]) },
    { question: "आकाशात ढग असणार नाहीत.", correctAnswer: "There will be no clouds in the sky.", options: shuffleArray(["There","will","be","no","clouds","in","the","sky"]) },
    { question: "मी जेवणार नाही.", correctAnswer: "I will not eat food.", options: shuffleArray(["I","will","not","eat","food"]) },
    { question: "तो गाणे गायणार नाही.", correctAnswer: "He will not sing a song.", options: shuffleArray(["He","will","not","sing","a","song"]) },
    { question: "आम्ही चालणार नाही.", correctAnswer: "We will not walk.", options: shuffleArray(["We","will","not","walk"]) },
    { question: "तू खेळणार नाहीस.", correctAnswer: "You will not play.", options: shuffleArray(["You","will","not","play"]) },
    { question: "ते झाडे लावणार नाहीत.", correctAnswer: "They will not plant trees.", options: shuffleArray(["They","will","not","plant","trees"]) },
    { question: "मी पुस्तक वाचणार नाही.", correctAnswer: "I will not read a book.", options: shuffleArray(["I","will","not","read","a","book"]) },
    { question: "तो खेळायला जाणार नाही.", correctAnswer: "He will not go to play.", options: shuffleArray(["He","will","not","go","to","play"]) },
    { question: "ती गाणे गायणार नाही.", correctAnswer: "She will not sing a song.", options: shuffleArray(["She","will","not","sing","a","song"]) },
    { question: "आम्ही टीव्ही पाहणार नाही.", correctAnswer: "We will not watch TV.", options: shuffleArray(["We","will","not","watch","TV"]) },
    { question: "तुमच्याकडे बॅग असेल नाही.", correctAnswer: "You will not have a bag.", options: shuffleArray(["You","will","not","have","a","bag"]) }
  ],

  verbal: [
    { question: "तू उद्या शाळेत जाशील का?", correctAnswer: "Will you go to school tomorrow?", options: shuffleArray(["Will","you","go","to","school","tomorrow"]) },
    { question: "तो पाणी पिणार का?", correctAnswer: "Will he drink water?", options: shuffleArray(["Will","he","drink","water"]) },
    { question: "ती व्यायाम करणार का?", correctAnswer: "Will she exercise?", options: shuffleArray(["Will","she","exercise"]) },
    { question: "आम्ही पुस्तक वाचणार का?", correctAnswer: "Will we read a book?", options: shuffleArray(["Will","we","read","a","book"]) },
    { question: "ते खेळणार का?", correctAnswer: "Will they play?", options: shuffleArray(["Will","they","play"]) },
    { question: "मी चालणार का?", correctAnswer: "Will I walk?", options: shuffleArray(["Will","I","walk"]) },
    { question: "तू गाणे ऐकशील का?", correctAnswer: "Will you listen to music?", options: shuffleArray(["Will","you","listen","to","music"]) },
    { question: "तो कामाला जाईल का?", correctAnswer: "Will he go to work?", options: shuffleArray(["Will","he","go","to","work"]) },
    { question: "ती बॅग घेईल का?", correctAnswer: "Will she take the bag?", options: shuffleArray(["Will","she","take","the","bag"]) },
    { question: "आम्ही चालणार का?", correctAnswer: "Will we walk?", options: shuffleArray(["Will","we","walk"]) },
    { question: "तो झाडे लावेल का?", correctAnswer: "Will he plant trees?", options: shuffleArray(["Will","he","plant","trees"]) },
    { question: "ते टीव्ही पाहतील का?", correctAnswer: "Will they watch TV?", options: shuffleArray(["Will","they","watch","TV"]) },
    { question: "मी जेवीन का?", correctAnswer: "Will I eat food?", options: shuffleArray(["Will","I","eat","food"]) },
    { question: "तू खेळणार का?", correctAnswer: "Will you play?", options: shuffleArray(["Will","you","play"]) },
    { question: "तो गाणे गायेल का?", correctAnswer: "Will he sing a song?", options: shuffleArray(["Will","he","sing","a","song"]) },
    { question: "ती व्यायाम करेल का?", correctAnswer: "Will she exercise?", options: shuffleArray(["Will","she","exercise"]) },
    { question: "आम्ही पुस्तक वाचू का?", correctAnswer: "Will we read a book?", options: shuffleArray(["Will","we","read","a","book"]) },
    { question: "तुमच्याकडे पेन असेल का?", correctAnswer: "Will you have a pen?", options: shuffleArray(["Will","you","have","a","pen"]) },
    { question: "तो बागेत झाडे लावेल का?", correctAnswer: "Will he plant trees in the garden?", options: shuffleArray(["Will","he","plant","trees","in","the","garden"]) },
    { question: "ते खेळणार का?", correctAnswer: "Will they play?", options: shuffleArray(["Will","they","play"]) }
  ],

  wh: [
    { question: "तू काय करशील?", correctAnswer: "What will you do?", options: shuffleArray(["What","will","you","do"]) },
    { question: "तो काय करेल?", correctAnswer: "What will he do?", options: shuffleArray(["What","will","he","do"]) },
    { question: "ती काय करेल?", correctAnswer: "What will she do?", options: shuffleArray(["What","will","she","do"]) },
    { question: "आम्ही काय वाचू?", correctAnswer: "What will we read?", options: shuffleArray(["What","will","we","read"]) },
    { question: "ते काय खेळतील?", correctAnswer: "What will they play?", options: shuffleArray(["What","will","they","play"]) },
    { question: "मी काय खाईन?", correctAnswer: "What will I eat?", options: shuffleArray(["What","will","I","eat"]) },
    { question: "तू कुठे जाशील?", correctAnswer: "Where will you go?", options: shuffleArray(["Where","will","you","go"]) },
    { question: "तो कुठे जाईल?", correctAnswer: "Where will he go?", options: shuffleArray(["Where","will","he","go"]) },
    { question: "ती कुठे जाईल?", correctAnswer: "Where will she go?", options: shuffleArray(["Where","will","she","go"]) },
    { question: "आम्ही कुठे जाऊ?", correctAnswer: "Where will we go?", options: shuffleArray(["Where","will","we","go"]) },
    { question: "ते कुठे जातील?", correctAnswer: "Where will they go?", options: shuffleArray(["Where","will","they","go"]) },
    { question: "मी कधी जेवीन?", correctAnswer: "When will I eat?", options: shuffleArray(["When","will","I","eat"]) },
    { question: "तू कधी खेळशील?", correctAnswer: "When will you play?", options: shuffleArray(["When","will","you","play"]) },
    { question: "तो कधी काम करेल?", correctAnswer: "When will he work?", options: shuffleArray(["When","will","he","work"]) },
    { question: "ती कधी गाणे गायेल?", correctAnswer: "When will she sing a song?", options: shuffleArray(["When","will","she","sing","a","song"]) },
    { question: "आम्ही कधी पुस्तक वाचू?", correctAnswer: "When will we read a book?", options: shuffleArray(["When","will","we","read","a","book"]) },
    { question: "ते कधी खेळतील?", correctAnswer: "When will they play?", options: shuffleArray(["When","will","they","play"]) },
    { question: "माझ्याकडे काय असेल?", correctAnswer: "What will I have?", options: shuffleArray(["What","will","I","have"]) },
    { question: "तुझ्याकडे काय असेल?", correctAnswer: "What will you have?", options: shuffleArray(["What","will","you","have"]) },
    { question: "त्याच्याकडे काय असेल?", correctAnswer: "What will he have?", options: shuffleArray(["What","will","he","have"]) },
    { question: "तिच्याकडे काय असेल?", correctAnswer: "What will she have?", options: shuffleArray(["What","will","she","have"]) }
  ]
};
