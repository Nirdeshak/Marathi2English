// src/Data/simplePastData.js
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const SimplePastData = {
  positive: [
    { question: "मी काल शाळेत गेलो.", correctAnswer: "I went to school yesterday.", options: shuffleArray(["I","went","to","school","yesterday","play","eat"]) },
    { question: "तू काल कामाला गेला.", correctAnswer: "You went to work yesterday.", options: shuffleArray(["You","went","to","work","yesterday","play","read"]) },
    { question: "आम्ही काल पुस्तक वाचले.", correctAnswer: "We read a book yesterday.", options: shuffleArray(["We","read","a","book","yesterday","write","play"]) },
    { question: "ती काल व्यायाम करत होती.", correctAnswer: "She exercised yesterday.", options: shuffleArray(["She","exercised","yesterday","play","sleep"]) },
    { question: "तो काल बाजारात गेला.", correctAnswer: "He went to the market yesterday.", options: shuffleArray(["He","went","to","the","market","yesterday","shop"]) },
    { question: "त्याच्याकडे काल पेन होता.", correctAnswer: "He had a pen yesterday.", options: shuffleArray(["He","had","a","pen","yesterday","book"]) },
    { question: "माझ्याकडे काल सायकल होती.", correctAnswer: "I had a bicycle yesterday.", options: shuffleArray(["I","had","a","bicycle","yesterday","car"]) },
    { question: "तिच्याकडे काल सुंदर ड्रेस होती.", correctAnswer: "She had a beautiful dress yesterday.", options: shuffleArray(["She","had","a","beautiful","dress","yesterday"]) },
    { question: "ते काल खेळले.", correctAnswer: "They played yesterday.", options: shuffleArray(["They","played","yesterday","worked"]) },
    { question: "तो काल पाणी पित होता.", correctAnswer: "He drank water yesterday.", options: shuffleArray(["He","drank","water","yesterday","milk"]) },
    { question: "आम्ही टीव्ही पाहिले.", correctAnswer: "We watched TV.", options: shuffleArray(["We","watched","TV","read"]) },
    { question: "तू गाणे ऐकलास.", correctAnswer: "You listened to music.", options: shuffleArray(["You","listened","to","music","read"]) },
    { question: "आकाशात सूर्य होता.", correctAnswer: "There was the sun in the sky.", options: shuffleArray(["There","was","the","sun","in","the","sky","moon"]) },
    { question: "खिडकीजवळ फुल होते.", correctAnswer: "There was a flower near the window.", options: shuffleArray(["There","was","a","flower","near","the","window","plant"]) },
    { question: "मी जेवले.", correctAnswer: "I ate lunch.", options: shuffleArray(["I","ate","lunch","dinner","breakfast"]) },
    { question: "तो खेळायला गेला.", correctAnswer: "He went to play.", options: shuffleArray(["He","went","to","play","work"]) },
    { question: "आम्ही चाललो.", correctAnswer: "We walked.", options: shuffleArray(["We","walked","ran"]) },
    { question: "ती गाणे गायली.", correctAnswer: "She sang a song.", options: shuffleArray(["She","sang","a","song","played"]) },
    { question: "तो बागेत झाडे लावला.", correctAnswer: "He planted trees in the garden.", options: shuffleArray(["He","planted","trees","in","the","garden","flowers"]) },
    { question: "ते काल काम केले.", correctAnswer: "They worked yesterday.", options: shuffleArray(["They","worked","yesterday","played"]) }
  ],

  negative: [
    { question: "मी टीव्ही पाहिले नाही.", correctAnswer: "I did not watch TV.", options: shuffleArray(["I","did","not","watch","TV","read"]) },
    { question: "तू शाळेत गेलास नाही.", correctAnswer: "You did not go to school.", options: shuffleArray(["You","did","not","go","to","school"]) },
    { question: "तो पाणी पित नव्हता.", correctAnswer: "He did not drink water.", options: shuffleArray(["He","did","not","drink","water"]) },
    { question: "आम्ही गाणी ऐकल्या नाहीत.", correctAnswer: "We did not listen to music.", options: shuffleArray(["We","did","not","listen","to","music"]) },
    { question: "ते खेळले नाहीत.", correctAnswer: "They did not play.", options: shuffleArray(["They","did","not","play"]) },
    { question: "ती व्यायाम करत नव्हती.", correctAnswer: "She did not exercise.", options: shuffleArray(["She","did","not","exercise"]) },
    { question: "तो कामाला गेला नाही.", correctAnswer: "He did not go to work.", options: shuffleArray(["He","did","not","go","to","work"]) },
    { question: "माझ्याकडे कार नव्हती.", correctAnswer: "I did not have a car.", options: shuffleArray(["I","did","not","have","a","car"]) },
    { question: "तिच्याकडे पेन नव्हता.", correctAnswer: "She did not have a pen.", options: shuffleArray(["She","did","not","have","a","pen"]) },
    { question: "आकाशात ढग नव्हते.", correctAnswer: "There were no clouds in the sky.", options: shuffleArray(["There","were","no","clouds","in","the","sky"]) },
    { question: "मी जेवले नाही.", correctAnswer: "I did not eat food.", options: shuffleArray(["I","did","not","eat","food"]) },
    { question: "तो गाणे गायले नाही.", correctAnswer: "He did not sing a song.", options: shuffleArray(["He","did","not","sing","a","song"]) },
    { question: "आम्ही पुस्तक वाचले नाही.", correctAnswer: "We did not read a book.", options: shuffleArray(["We","did","not","read","a","book"]) },
    { question: "तू खेळला नाहीस.", correctAnswer: "You did not play.", options: shuffleArray(["You","did","not","play"]) },
    { question: "ते झाडे लावले नाहीत.", correctAnswer: "They did not plant trees.", options: shuffleArray(["They","did","not","plant","trees"]) },
    { question: "मी चाललो नाही.", correctAnswer: "I did not walk.", options: shuffleArray(["I","did","not","walk"]) },
    { question: "तो पुस्तक वाचला नाही.", correctAnswer: "He did not read a book.", options: shuffleArray(["He","did","not","read","a","book"]) },
    { question: "ती व्यायाम करत नव्हती.", correctAnswer: "She did not exercise.", options: shuffleArray(["She","did","not","exercise"]) },
    { question: "आम्ही गाणे ऐकले नाही.", correctAnswer: "We did not listen to music.", options: shuffleArray(["We","did","not","listen","to","music"]) },
    { question: "तुमच्याकडे बॅग नव्हती.", correctAnswer: "You did not have a bag.", options: shuffleArray(["You","did","not","have","a","bag"]) }
  ],

  verbal: [
    { question: "तू काल शाळेत गेलास का?", correctAnswer: "Did you go to school yesterday?", options: shuffleArray(["Did","you","go","to","school","yesterday"]) },
    { question: "तो पाणी पित होता का?", correctAnswer: "Did he drink water?", options: shuffleArray(["Did","he","drink","water"]) },
    { question: "ती व्यायाम करत होती का?", correctAnswer: "Did she exercise?", options: shuffleArray(["Did","she","exercise"]) },
    { question: "आम्ही पुस्तक वाचले का?", correctAnswer: "Did we read a book?", options: shuffleArray(["Did","we","read","a","book"]) },
    { question: "ते खेळले का?", correctAnswer: "Did they play?", options: shuffleArray(["Did","they","play"]) },
    { question: "मी चाललो का?", correctAnswer: "Did I walk?", options: shuffleArray(["Did","I","walk"]) },
    { question: "तू गाणे ऐकलास का?", correctAnswer: "Did you listen to music?", options: shuffleArray(["Did","you","listen","to","music"]) },
    { question: "तो कामाला गेला का?", correctAnswer: "Did he go to work?", options: shuffleArray(["Did","he","go","to","work"]) },
    { question: "ती व्यायाम करते का?", correctAnswer: "Did she exercise?", options: shuffleArray(["Did","she","exercise"]) },
    { question: "आम्ही टीव्ही पाहिलो का?", correctAnswer: "Did we watch TV?", options: shuffleArray(["Did","we","watch","TV"]) },
    { question: "ते झाडे लावले का?", correctAnswer: "Did they plant trees?", options: shuffleArray(["Did","they","plant","trees"]) },
    { question: "मी जेवले का?", correctAnswer: "Did I eat food?", options: shuffleArray(["Did","I","eat","food"]) },
    { question: "तू खेळला का?", correctAnswer: "Did you play?", options: shuffleArray(["Did","you","play"]) },
    { question: "तो पुस्तक वाचला का?", correctAnswer: "Did he read a book?", options: shuffleArray(["Did","he","read","a","book"]) },
    { question: "ती गाणे गायली का?", correctAnswer: "Did she sing a song?", options: shuffleArray(["Did","she","sing","a","song"]) },
    { question: "आम्ही चाललो का?", correctAnswer: "Did we walk?", options: shuffleArray(["Did","we","walk"]) },
    { question: "त्यांच्याकडे बॅग होती का?", correctAnswer: "Did they have a bag?", options: shuffleArray(["Did","they","have","a","bag"]) },
    { question: "तो बागेत गेला का?", correctAnswer: "Did he go to the garden?", options: shuffleArray(["Did","he","go","to","the","garden"]) },
    { question: "मी झोपलो का?", correctAnswer: "Did I sleep?", options: shuffleArray(["Did","I","sleep"]) },
    { question: "ते रोज काम करतात का?", correctAnswer: "Did they work every day?", options: shuffleArray(["Did","they","work","every","day"]) }
  ],

  wh: [
    { question: "तू काय केलंस?", correctAnswer: "What did you do?", options: shuffleArray(["What","did","you","do"]) },
    { question: "तो काय करत होता?", correctAnswer: "What did he do?", options: shuffleArray(["What","did","he","do"]) },
    { question: "ती काय करत होती?", correctAnswer: "What did she do?", options: shuffleArray(["What","did","she","do"]) },
    { question: "आम्ही काय वाचले?", correctAnswer: "What did we read?", options: shuffleArray(["What","did","we","read"]) },
    { question: "ते काय खेळले?", correctAnswer: "What did they play?", options: shuffleArray(["What","did","they","play"]) },
    { question: "मी काय खात होतो?", correctAnswer: "What did I eat?", options: shuffleArray(["What","did","I","eat"]) },
    { question: "तू कोणाला भेटलास?", correctAnswer: "Who did you meet?", options: shuffleArray(["Who","did","you","meet"]) },
    { question: "तो कोणाला भेटला?", correctAnswer: "Who did he meet?", options: shuffleArray(["Who","did","he","meet"]) },
    { question: "तिच्याकडे काय होते?", correctAnswer: "What did she have?", options: shuffleArray(["What","did","she","have"]) },
    { question: "आपल्याकडे काय होते?", correctAnswer: "What did we have?", options: shuffleArray(["What","did","we","have"]) },
    { question: "ते कोण होते?", correctAnswer: "Who were they?", options: shuffleArray(["Who","were","they"]) },
    { question: "मी कुठे गेलो?", correctAnswer: "Where did I go?", options: shuffleArray(["Where","did","I","go"]) },
    { question: "तू कुठे गेला?", correctAnswer: "Where did you go?", options: shuffleArray(["Where","did","you","go"]) },
    { question: "तो कुठे गेला?", correctAnswer: "Where did he go?", options: shuffleArray(["Where","did","he","go"]) },
    { question: "ती कुठे गेली?", correctAnswer: "Where did she go?", options: shuffleArray(["Where","did","she","go"]) },
    { question: "आपण कुठे गेलो?", correctAnswer: "Where did we go?", options: shuffleArray(["Where","did","we","go"]) },
    { question: "ते कुठे गेले?", correctAnswer: "Where did they go?", options: shuffleArray(["Where","did","they","go"]) },
    { question: "मी किती पाणी पिलं?", correctAnswer: "How much water did I drink?", options: shuffleArray(["How","much","water","did","I","drink"]) },
    { question: "तू किती वेळ चाललास?", correctAnswer: "How long did you walk?", options: shuffleArray(["How","long","did","you","walk"]) },
    { question: "तो किती वेळ काम केला?", correctAnswer: "How long did he work?", options: shuffleArray(["How","long","did","he","work"]) },
    { question: "ती किती वेळ व्यायाम केली?", correctAnswer: "How long did she exercise?", options: shuffleArray(["How","long","did","she","exercise"]) }
  ]
};
