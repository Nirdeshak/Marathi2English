// src/Data/simplePresentData.js
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const SimplePresentData = {
  positive: [
    { question: "मी रोज सकाळी उठतो.", correctAnswer: "I get up every morning.", options: shuffleArray(["I","get","up","every","morning","eat","play"]) },
    { question: "तू रोज शाळेत जातोस.", correctAnswer: "You go to school every day.", options: shuffleArray(["You","go","to","school","every","day","play","eat"]) },
    { question: "आपण पुस्तक वाचतो.", correctAnswer: "We read a book.", options: shuffleArray(["We","read","a","book","write","play"]) },
    { question: "ती प्रत्येक दिवशी व्यायाम करते.", correctAnswer: "She exercises every day.", options: shuffleArray(["She","exercises","every","day","sleep","eat"]) },
    { question: "तो रोज कामाला जातो.", correctAnswer: "He goes to work every day.", options: shuffleArray(["He","goes","to","work","every","day","play","sleep"]) },
    { question: "त्याच्याकडे एक पेन आहे.", correctAnswer: "He has a pen.", options: shuffleArray(["He","has","a","pen","book","toy"]) },
    { question: "माझ्याकडे एक सायकल आहे.", correctAnswer: "I have a bicycle.", options: shuffleArray(["I","have","a","bicycle","car","pen"]) },
    { question: "तिच्याकडे सुंदर ड्रेस आहे.", correctAnswer: "She has a beautiful dress.", options: shuffleArray(["She","has","a","beautiful","dress","car","bag"]) },
    { question: "ते खेळतात.", correctAnswer: "They play.", options: shuffleArray(["They","play","run","eat"]) },
    { question: "तो रोज पाणी पीतो.", correctAnswer: "He drinks water every day.", options: shuffleArray(["He","drinks","water","every","day","milk","tea"]) },
    { question: "आम्ही टीव्ही पाहतो.", correctAnswer: "We watch TV.", options: shuffleArray(["We","watch","TV","read","book"]) },
    { question: "तू गाणे ऐकतोस.", correctAnswer: "You listen to music.", options: shuffleArray(["You","listen","to","music","play","game"]) },
    { question: "आकाशात सूर्य आहे.", correctAnswer: "There is the sun in the sky.", options: shuffleArray(["There","is","the","sun","in","the","sky","moon"]) },
    { question: "खिडकीजवळ फुल आहे.", correctAnswer: "There is a flower near the window.", options: shuffleArray(["There","is","a","flower","near","the","window","plant"]) },
    { question: "मी लंच खातो.", correctAnswer: "I eat lunch.", options: shuffleArray(["I","eat","lunch","dinner","breakfast"]) },
    { question: "तो खेळायला जातो.", correctAnswer: "He goes to play.", options: shuffleArray(["He","goes","to","play","work","school"]) },
    { question: "आम्ही रोज चालतो.", correctAnswer: "We walk every day.", options: shuffleArray(["We","walk","every","day","run","play"]) },
    { question: "ती गाणे गायते.", correctAnswer: "She sings a song.", options: shuffleArray(["She","sings","a","song","plays","game"]) },
    { question: "तो बागेत झाडे लावतो.", correctAnswer: "He plants trees in the garden.", options: shuffleArray(["He","plants","trees","in","the","garden","flowers","grass"]) },
    { question: "ते रोज काम करतात.", correctAnswer: "They work every day.", options: shuffleArray(["They","work","every","day","play","study"]) }
  ],

  negative: [
    { question: "मी टीव्ही पाहत नाही.", correctAnswer: "I do not watch TV.", options: shuffleArray(["I","do","not","watch","TV","read","book"]) },
    { question: "तू शाळेत जात नाहीस.", correctAnswer: "You do not go to school.", options: shuffleArray(["You","do","not","go","to","school","play","eat"]) },
    { question: "तो पाणी पित नाही.", correctAnswer: "He does not drink water.", options: shuffleArray(["He","does","not","drink","water","milk","tea"]) },
    { question: "आम्ही गाणी ऐकत नाही.", correctAnswer: "We do not listen to music.", options: shuffleArray(["We","do","not","listen","to","music","play","game"]) },
    { question: "ते रोज खेळत नाहीत.", correctAnswer: "They do not play every day.", options: shuffleArray(["They","do","not","play","every","day","study"]) },
    { question: "ती व्यायाम करत नाही.", correctAnswer: "She does not exercise.", options: shuffleArray(["She","does","not","exercise","play","sleep"]) },
    { question: "तो कामाला जात नाही.", correctAnswer: "He does not go to work.", options: shuffleArray(["He","does","not","go","to","work","school"]) },
    { question: "माझ्याकडे कार नाही.", correctAnswer: "I do not have a car.", options: shuffleArray(["I","do","not","have","a","car","bicycle"]) },
    { question: "तिच्याकडे पेन नाही.", correctAnswer: "She does not have a pen.", options: shuffleArray(["She","does","not","have","a","pen","book"]) },
    { question: "आकाशात ढग नाहीत.", correctAnswer: "There are no clouds in the sky.", options: shuffleArray(["There","are","no","clouds","in","the","sky","sun"]) },
    { question: "मी जेवण खात नाही.", correctAnswer: "I do not eat food.", options: shuffleArray(["I","do","not","eat","food","drink","water"]) },
    { question: "तो गाणे गात नाही.", correctAnswer: "He does not sing a song.", options: shuffleArray(["He","does","not","sing","a","song","play"]) },
    { question: "आम्ही पुस्तक वाचत नाही.", correctAnswer: "We do not read a book.", options: shuffleArray(["We","do","not","read","a","book","write"]) },
    { question: "तू खेळत नाहीस.", correctAnswer: "You do not play.", options: shuffleArray(["You","do","not","play","study","run"]) },
    { question: "ते झाडे लावत नाहीत.", correctAnswer: "They do not plant trees.", options: shuffleArray(["They","do","not","plant","trees","flowers"]) },
    { question: "मी चालत नाही.", correctAnswer: "I do not walk.", options: shuffleArray(["I","do","not","walk","run","play"]) },
    { question: "तो पुस्तक वाचत नाही.", correctAnswer: "He does not read a book.", options: shuffleArray(["He","does","not","read","a","book","write"]) },
    { question: "ती व्यायाम करत नाही.", correctAnswer: "She does not exercise.", options: shuffleArray(["She","does","not","exercise","sleep"]) },
    { question: "आम्ही गाणे ऐकत नाही.", correctAnswer: "We do not listen to music.", options: shuffleArray(["We","do","not","listen","to","music","play"]) },
    { question: "तुमच्याकडे बॅग नाही.", correctAnswer: "You do not have a bag.", options: shuffleArray(["You","do","not","have","a","bag","book"]) }
  ],

  verbal: [
    { question: "तू शाळेत जातोस का?", correctAnswer: "Do you go to school?", options: shuffleArray(["Do","you","go","to","school","play"]) },
    { question: "तो पाणी पीतो का?", correctAnswer: "Does he drink water?", options: shuffleArray(["Does","he","drink","water","milk"]) },
    { question: "तिच्याकडे पेन आहे का?", correctAnswer: "Does she have a pen?", options: shuffleArray(["Does","she","have","a","pen","book"]) },
    { question: "आम्ही पुस्तक वाचतो का?", correctAnswer: "Do we read a book?", options: shuffleArray(["Do","we","read","a","book","write"]) },
    { question: "ते खेळतात का?", correctAnswer: "Do they play?", options: shuffleArray(["Do","they","play","study"]) },
    { question: "मी चालतो का?", correctAnswer: "Do I walk?", options: shuffleArray(["Do","I","walk","run"]) },
    { question: "तू गाणे ऐकतोस का?", correctAnswer: "Do you listen to music?", options: shuffleArray(["Do","you","listen","to","music"]) },
    { question: "तो कामाला जातो का?", correctAnswer: "Does he go to work?", options: shuffleArray(["Does","he","go","to","work"]) },
    { question: "ती व्यायाम करते का?", correctAnswer: "Does she exercise?", options: shuffleArray(["Does","she","exercise","play"]) },
    { question: "आम्ही टीव्ही पाहतो का?", correctAnswer: "Do we watch TV?", options: shuffleArray(["Do","we","watch","TV"]) },
    { question: "ते झाडे लावतात का?", correctAnswer: "Do they plant trees?", options: shuffleArray(["Do","they","plant","trees"]) },
    { question: "मी जेवण खातो का?", correctAnswer: "Do I eat food?", options: shuffleArray(["Do","I","eat","food"]) },
    { question: "तू खेळतोस का?", correctAnswer: "Do you play?", options: shuffleArray(["Do","you","play"]) },
    { question: "तो पुस्तक वाचतो का?", correctAnswer: "Does he read a book?", options: shuffleArray(["Does","he","read","a","book"]) },
    { question: "ती गाणे गायते का?", correctAnswer: "Does she sing a song?", options: shuffleArray(["Does","she","sing","a","song"]) },
    { question: "आम्ही चालतो का?", correctAnswer: "Do we walk?", options: shuffleArray(["Do","we","walk"]) },
    { question: "त्यांच्याकडे बॅग आहे का?", correctAnswer: "Do they have a bag?", options: shuffleArray(["Do","they","have","a","bag"]) },
    { question: "तो बागेत जातो का?", correctAnswer: "Does he go to the garden?", options: shuffleArray(["Does","he","go","to","the","garden"]) },
    { question: "मी झोपतो का?", correctAnswer: "Do I sleep?", options: shuffleArray(["Do","I","sleep"]) },
    { question: "ते रोज काम करतात का?", correctAnswer: "Do they work every day?", options: shuffleArray(["Do","they","work","every","day"]) }
  ],

  wh: [
    { question: "तू काय खातोस?", correctAnswer: "What do you eat?", options: shuffleArray(["What","do","you","eat","drink"]) },
    { question: "तो काय करतो?", correctAnswer: "What does he do?", options: shuffleArray(["What","does","he","do","play"]) },
    { question: "ती काय करते?", correctAnswer: "What does she do?", options: shuffleArray(["What","does","she","do","exercise"]) },
    { question: "आपण काय वाचतो?", correctAnswer: "What do we read?", options: shuffleArray(["What","do","we","read","write"]) },
    { question: "ते काय करतात?", correctAnswer: "What do they do?", options: shuffleArray(["What","do","they","do","play"]) },
    { question: "मी काय खातो?", correctAnswer: "What do I eat?", options: shuffleArray(["What","do","I","eat"]) },
    { question: "तू कोणाला भेटतोस?", correctAnswer: "Who do you meet?", options: shuffleArray(["Who","do","you","meet"]) },
    { question: "तो कोणाला भेटतो?", correctAnswer: "Who does he meet?", options: shuffleArray(["Who","does","he","meet"]) },
    { question: "तिच्याकडे काय आहे?", correctAnswer: "What does she have?", options: shuffleArray(["What","does","she","have"]) },
    { question: "आपल्याकडे काय आहे?", correctAnswer: "What do we have?", options: shuffleArray(["What","do","we","have"]) },
    { question: "ते कोण आहे?", correctAnswer: "Who are they?", options: shuffleArray(["Who","are","they"]) },
    { question: "मी कुठे जातो?", correctAnswer: "Where do I go?", options: shuffleArray(["Where","do","I","go"]) },
    { question: "तू कुठे जातोस?", correctAnswer: "Where do you go?", options: shuffleArray(["Where","do","you","go"]) },
    { question: "तो कुठे जातो?", correctAnswer: "Where does he go?", options: shuffleArray(["Where","does","he","go"]) },
    { question: "ती कुठे जाते?", correctAnswer: "Where does she go?", options: shuffleArray(["Where","does","she","go"]) },
    { question: "आपण कुठे जातो?", correctAnswer: "Where do we go?", options: shuffleArray(["Where","do","we","go"]) },
    { question: "ते कुठे जातात?", correctAnswer: "Where do they go?", options: shuffleArray(["Where","do","they","go"]) },
    { question: "मी किती पाणी पीतो?", correctAnswer: "How much water do I drink?", options: shuffleArray(["How","much","water","do","I","drink"]) },
    { question: "तू किती वेळ चालतोस?", correctAnswer: "How long do you walk?", options: shuffleArray(["How","long","do","you","walk"]) },
    { question: "तो किती वेळ काम करतो?", correctAnswer: "How long does he work?", options: shuffleArray(["How","long","does","he","work"]) },
    { question: "ती किती वेळ व्यायाम करते?", correctAnswer: "How long does she exercise?", options: shuffleArray(["How","long","does","she","exercise"]) }
  ]
};
