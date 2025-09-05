function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const PastContinuousData = {
  positive: [
    { question: "मी काल शिकत होतो.", correctAnswer: "I was studying yesterday.", options: shuffleArray(["I","was","studying","yesterday","you","he"]) },
    { question: "तू काल गाणे ऐकत होतास.", correctAnswer: "You were listening to music yesterday.", options: shuffleArray(["You","were","listening","to","music","yesterday"]) },
    { question: "तो काल काम करत होता.", correctAnswer: "He was working yesterday.", options: shuffleArray(["He","was","working","yesterday","she","they"]) },
    { question: "ती काल गाणे गात होती.", correctAnswer: "She was singing yesterday.", options: shuffleArray(["She","was","singing","yesterday","he","I"]) },
    { question: "आम्ही काल पुस्तक वाचत होतो.", correctAnswer: "We were reading a book yesterday.", options: shuffleArray(["We","were","reading","a","book","yesterday"]) },
    { question: "ते काल खेळत होते.", correctAnswer: "They were playing yesterday.", options: shuffleArray(["They","were","playing","yesterday","we","I"]) },
    { question: "तो काल झाडे लावत होता.", correctAnswer: "He was planting trees yesterday.", options: shuffleArray(["He","was","planting","trees","yesterday"]) },
    { question: "मी काल जेवत होतो.", correctAnswer: "I was eating yesterday.", options: shuffleArray(["I","was","eating","yesterday"]) },
    { question: "तू काल चालत होतास.", correctAnswer: "You were walking yesterday.", options: shuffleArray(["You","were","walking","yesterday"]) },
    { question: "ती काल खेळत होती.", correctAnswer: "She was playing yesterday.", options: shuffleArray(["She","was","playing","yesterday"]) },
    { question: "आम्ही काल गाणे ऐकत होतो.", correctAnswer: "We were listening to music yesterday.", options: shuffleArray(["We","were","listening","to","music","yesterday"]) },
    { question: "ते काल काम करत होते.", correctAnswer: "They were working yesterday.", options: shuffleArray(["They","were","working","yesterday"]) },
    { question: "तो काल पुस्तक वाचत होता.", correctAnswer: "He was reading a book yesterday.", options: shuffleArray(["He","was","reading","a","book","yesterday"]) },
    { question: "मी काल टीव्ही पाहत होतो.", correctAnswer: "I was watching TV yesterday.", options: shuffleArray(["I","was","watching","TV","yesterday"]) },
    { question: "तू काल अभ्यास करत होतास.", correctAnswer: "You were studying yesterday.", options: shuffleArray(["You","were","studying","yesterday"]) },
    { question: "ती काल व्यायाम करत होती.", correctAnswer: "She was exercising yesterday.", options: shuffleArray(["She","was","exercising","yesterday"]) },
    { question: "आम्ही काल शाळेत जात होतो.", correctAnswer: "We were going to school yesterday.", options: shuffleArray(["We","were","going","to","school","yesterday"]) },
    { question: "ते काल बागेत काम करत होते.", correctAnswer: "They were working in the garden yesterday.", options: shuffleArray(["They","were","working","in","the","garden","yesterday"]) },
    { question: "तो काल झोपत होता.", correctAnswer: "He was sleeping yesterday.", options: shuffleArray(["He","was","sleeping","yesterday"]) },
    { question: "मी काल मोबाइल वापरत होतो.", correctAnswer: "I was using my mobile yesterday.", options: shuffleArray(["I","was","using","my","mobile","yesterday"]) }
  ],

  negative: [
    { question: "मी काल शिकत नव्हतो.", correctAnswer: "I was not studying yesterday.", options: shuffleArray(["I","was","not","studying","yesterday"]) },
    { question: "तू काल गाणे ऐकत नव्हता.", correctAnswer: "You were not listening to music yesterday.", options: shuffleArray(["You","were","not","listening","to","music","yesterday"]) },
    { question: "तो काल काम करत नव्हता.", correctAnswer: "He was not working yesterday.", options: shuffleArray(["He","was","not","working","yesterday"]) },
    { question: "ती काल गाणे गात नव्हती.", correctAnswer: "She was not singing yesterday.", options: shuffleArray(["She","was","not","singing","yesterday"]) },
    { question: "आम्ही काल पुस्तक वाचत नव्हतो.", correctAnswer: "We were not reading a book yesterday.", options: shuffleArray(["We","were","not","reading","a","book","yesterday"]) },
    { question: "ते काल खेळत नव्हते.", correctAnswer: "They were not playing yesterday.", options: shuffleArray(["They","were","not","playing","yesterday"]) },
    { question: "तो काल झाडे लावत नव्हता.", correctAnswer: "He was not planting trees yesterday.", options: shuffleArray(["He","was","not","planting","trees","yesterday"]) },
    { question: "मी काल जेवत नव्हतो.", correctAnswer: "I was not eating yesterday.", options: shuffleArray(["I","was","not","eating","yesterday"]) },
    { question: "तू काल चालत नव्हता.", correctAnswer: "You were not walking yesterday.", options: shuffleArray(["You","were","not","walking","yesterday"]) },
    { question: "ती काल खेळत नव्हती.", correctAnswer: "She was not playing yesterday.", options: shuffleArray(["She","was","not","playing","yesterday"]) },
    { question: "आम्ही काल गाणे ऐकत नव्हतो.", correctAnswer: "We were not listening to music yesterday.", options: shuffleArray(["We","were","not","listening","to","music","yesterday"]) },
    { question: "ते काल काम करत नव्हते.", correctAnswer: "They were not working yesterday.", options: shuffleArray(["They","were","not","working","yesterday"]) },
    { question: "तो काल पुस्तक वाचत नव्हता.", correctAnswer: "He was not reading a book yesterday.", options: shuffleArray(["He","was","not","reading","a","book","yesterday"]) },
    { question: "मी काल टीव्ही पाहत नव्हतो.", correctAnswer: "I was not watching TV yesterday.", options: shuffleArray(["I","was","not","watching","TV","yesterday"]) },
    { question: "तू काल अभ्यास करत नव्हता.", correctAnswer: "You were not studying yesterday.", options: shuffleArray(["You","were","not","studying","yesterday"]) },
    { question: "ती काल व्यायाम करत नव्हती.", correctAnswer: "She was not exercising yesterday.", options: shuffleArray(["She","was","not","exercising","yesterday"]) },
    { question: "आम्ही काल शाळेत जात नव्हतो.", correctAnswer: "We were not going to school yesterday.", options: shuffleArray(["We","were","not","going","to","school","yesterday"]) },
    { question: "ते काल बागेत काम करत नव्हते.", correctAnswer: "They were not working in the garden yesterday.", options: shuffleArray(["They","were","not","working","in","the","garden","yesterday"]) },
    { question: "तो काल झोपत नव्हता.", correctAnswer: "He was not sleeping yesterday.", options: shuffleArray(["He","was","not","sleeping","yesterday"]) },
    { question: "मी काल मोबाइल वापरत नव्हतो.", correctAnswer: "I was not using my mobile yesterday.", options: shuffleArray(["I","was","not","using","my","mobile","yesterday"]) }
  ],

  verbal: [
    { question: "मी काल शिकत होतो का?", correctAnswer: "Was I studying yesterday?", options: shuffleArray(["Was","I","studying","yesterday"]) },
    { question: "तू काल गाणे ऐकत होता का?", correctAnswer: "Were you listening to music yesterday?", options: shuffleArray(["Were","you","listening","to","music","yesterday"]) },
    { question: "तो काल काम करत होता का?", correctAnswer: "Was he working yesterday?", options: shuffleArray(["Was","he","working","yesterday"]) },
    { question: "ती काल गाणे गात होती का?", correctAnswer: "Was she singing yesterday?", options: shuffleArray(["Was","she","singing","yesterday"]) },
    { question: "आम्ही काल पुस्तक वाचत होतो का?", correctAnswer: "Were we reading a book yesterday?", options: shuffleArray(["Were","we","reading","a","book","yesterday"]) },
    { question: "ते काल खेळत होते का?", correctAnswer: "Were they playing yesterday?", options: shuffleArray(["Were","they","playing","yesterday"]) },
    { question: "तो काल झाडे लावत होता का?", correctAnswer: "Was he planting trees yesterday?", options: shuffleArray(["Was","he","planting","trees","yesterday"]) },
    { question: "मी काल जेवत होतो का?", correctAnswer: "Was I eating yesterday?", options: shuffleArray(["Was","I","eating","yesterday"]) },
    { question: "तू काल चालत होता का?", correctAnswer: "Were you walking yesterday?", options: shuffleArray(["Were","you","walking","yesterday"]) },
    { question: "ती काल खेळत होती का?", correctAnswer: "Was she playing yesterday?", options: shuffleArray(["Was","she","playing","yesterday"]) },
    { question: "आम्ही काल गाणे ऐकत होतो का?", correctAnswer: "Were we listening to music yesterday?", options: shuffleArray(["Were","we","listening","to","music","yesterday"]) },
    { question: "ते काल काम करत होते का?", correctAnswer: "Were they working yesterday?", options: shuffleArray(["Were","they","working","yesterday"]) },
    { question: "तो काल पुस्तक वाचत होता का?", correctAnswer: "Was he reading a book yesterday?", options: shuffleArray(["Was","he","reading","a","book","yesterday"]) },
    { question: "मी काल टीव्ही पाहत होतो का?", correctAnswer: "Was I watching TV yesterday?", options: shuffleArray(["Was","I","watching","TV","yesterday"]) },
    { question: "तू काल अभ्यास करत होता का?", correctAnswer: "Were you studying yesterday?", options: shuffleArray(["Were","you","studying","yesterday"]) },
    { question: "ती काल व्यायाम करत होती का?", correctAnswer: "Was she exercising yesterday?", options: shuffleArray(["Was","she","exercising","yesterday"]) },
    { question: "आम्ही काल शाळेत जात होतो का?", correctAnswer: "Were we going to school yesterday?", options: shuffleArray(["Were","we","going","to","school","yesterday"]) },
    { question: "ते काल बागेत काम करत होते का?", correctAnswer: "Were they working in the garden yesterday?", options: shuffleArray(["Were","they","working","in","the","garden","yesterday"]) },
    { question: "तो काल झोपत होता का?", correctAnswer: "Was he sleeping yesterday?", options: shuffleArray(["Was","he","sleeping","yesterday"]) },
    { question: "मी काल मोबाइल वापरत होतो का?", correctAnswer: "Was I using my mobile yesterday?", options: shuffleArray(["Was","I","using","my","mobile","yesterday"]) }
  ],

  wh: [
    { question: "मी काल काय करत होतो?", correctAnswer: "What was I doing yesterday?", options: shuffleArray(["What","was","I","doing","yesterday"]) },
    { question: "तू काल काय करत होता?", correctAnswer: "What were you doing yesterday?", options: shuffleArray(["What","were","you","doing","yesterday"]) },
    { question: "तो काल काय करत होता?", correctAnswer: "What was he doing yesterday?", options: shuffleArray(["What","was","he","doing","yesterday"]) },
    { question: "ती काल काय करत होती?", correctAnswer: "What was she doing yesterday?", options: shuffleArray(["What","was","she","doing","yesterday"]) },
    { question: "आम्ही काल काय करत होतो?", correctAnswer: "What were we doing yesterday?", options: shuffleArray(["What","were","we","doing","yesterday"]) },
    { question: "ते काल काय करत होते?", correctAnswer: "What were they doing yesterday?", options: shuffleArray(["What","were","they","doing","yesterday"]) },
    { question: "मी काल कुठे जात होतो?", correctAnswer: "Where was I going yesterday?", options: shuffleArray(["Where","was","I","going","yesterday"]) },
    { question: "तू काल कुठे चालत होता?", correctAnswer: "Where were you walking yesterday?", options: shuffleArray(["Where","were","you","walking","yesterday"]) },
    { question: "तो काल कुठे काम करत होता?", correctAnswer: "Where was he working yesterday?", options: shuffleArray(["Where","was","he","working","yesterday"]) },
    { question: "ती काल कुठे जात होती?", correctAnswer: "Where was she going yesterday?", options: shuffleArray(["Where","was","she","going","yesterday"]) },
    { question: "आम्ही काल कुठे जात होतो?", correctAnswer: "Where were we going yesterday?", options: shuffleArray(["Where","were","we","going","yesterday"]) },
    { question: "ते काल कुठे खेळत होते?", correctAnswer: "Where were they playing yesterday?", options: shuffleArray(["Where","were","they","playing","yesterday"]) },
    { question: "मी काल काय पाहत होतो?", correctAnswer: "What was I watching yesterday?", options: shuffleArray(["What","was","I","watching","yesterday"]) },
    { question: "तू काल काय वाचत होता?", correctAnswer: "What were you reading yesterday?", options: shuffleArray(["What","were","you","reading","yesterday"]) },
    { question: "तो काल काय खाता होता?", correctAnswer: "What was he eating yesterday?", options: shuffleArray(["What","was","he","eating","yesterday"]) },
    { question: "ती काल काय शिकत होती?", correctAnswer: "What was she learning yesterday?", options: shuffleArray(["What","was","she","learning","yesterday"]) },
    { question: "आम्ही काल काय करत होतो?", correctAnswer: "What were we doing yesterday?", options: shuffleArray(["What","were","we","doing","yesterday"]) },
    { question: "ते काल काय करत होते?", correctAnswer: "What were they doing yesterday?", options: shuffleArray(["What","were","they","doing","yesterday"]) },
    { question: "मी काल कुठे झोपत होतो?", correctAnswer: "Where was I sleeping yesterday?", options: shuffleArray(["Where","was","I","sleeping","yesterday"]) },
    { question: "तो काल कुठे बसला होता?", correctAnswer: "Where was he sitting yesterday?", options: shuffleArray(["Where","was","he","sitting","yesterday"]) }
  ]
};
