function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const PresentContinuousData = {
  positive: [
    { question: "मी सध्या शिकत आहे.", correctAnswer: "I am studying now.", options: shuffleArray(["I","am","studying","now","you","he","she"]) },
    { question: "तू सध्या गाणे ऐकत आहेस.", correctAnswer: "You are listening to music now.", options: shuffleArray(["You","are","listening","to","music","now","I"]) },
    { question: "तो सध्या काम करत आहे.", correctAnswer: "He is working now.", options: shuffleArray(["He","is","working","now","she","I"]) },
    { question: "ती सध्या गाणे गाते आहे.", correctAnswer: "She is singing now.", options: shuffleArray(["She","is","singing","now","he","they"]) },
    { question: "आम्ही सध्या पुस्तक वाचत आहोत.", correctAnswer: "We are reading a book now.", options: shuffleArray(["We","are","reading","a","book","now","they"]) },
    { question: "ते सध्या खेळत आहेत.", correctAnswer: "They are playing now.", options: shuffleArray(["They","are","playing","now","we","I"]) },
    { question: "तो सध्या झाडे लावत आहे.", correctAnswer: "He is planting trees now.", options: shuffleArray(["He","is","planting","trees","now","she","they"]) },
    { question: "मी सध्या जेवत आहे.", correctAnswer: "I am eating now.", options: shuffleArray(["I","am","eating","now","you","they"]) },
    { question: "तू सध्या चालत आहेस.", correctAnswer: "You are walking now.", options: shuffleArray(["You","are","walking","now","he","she"]) },
    { question: "ती सध्या खेळते आहे.", correctAnswer: "She is playing now.", options: shuffleArray(["She","is","playing","now","we","they"]) },
    { question: "आम्ही सध्या गाणे ऐकत आहोत.", correctAnswer: "We are listening to music now.", options: shuffleArray(["We","are","listening","to","music","now","I"]) },
    { question: "ते सध्या काम करत आहेत.", correctAnswer: "They are working now.", options: shuffleArray(["They","are","working","now","he","she"]) },
    { question: "तो सध्या पुस्तक वाचत आहे.", correctAnswer: "He is reading a book now.", options: shuffleArray(["He","is","reading","a","book","now","I"]) },
    { question: "मी सध्या टीव्ही पाहत आहे.", correctAnswer: "I am watching TV now.", options: shuffleArray(["I","am","watching","TV","now","they","she"]) },
    { question: "तू सध्या अभ्यास करत आहेस.", correctAnswer: "You are studying now.", options: shuffleArray(["You","are","studying","now","he","we"]) },
    { question: "ती सध्या व्यायाम करत आहे.", correctAnswer: "She is exercising now.", options: shuffleArray(["She","is","exercising","now","I","they"]) },
    { question: "आम्ही सध्या शाळेत जात आहोत.", correctAnswer: "We are going to school now.", options: shuffleArray(["We","are","going","to","school","now","he"]) },
    { question: "ते सध्या बागेत काम करत आहेत.", correctAnswer: "They are working in the garden now.", options: shuffleArray(["They","are","working","in","the","garden","now"]) },
    { question: "तो सध्या झोपत आहे.", correctAnswer: "He is sleeping now.", options: shuffleArray(["He","is","sleeping","now","we","I"]) },
    { question: "मी सध्या मोबाइल वापरत आहे.", correctAnswer: "I am using my mobile now.", options: shuffleArray(["I","am","using","my","mobile","now","she"]) }
  ],

  negative: [
    { question: "मी सध्या शिकत नाही आहे.", correctAnswer: "I am not studying now.", options: shuffleArray(["I","am","not","studying","now","you"]) },
    { question: "तू सध्या गाणे ऐकत नाही आहेस.", correctAnswer: "You are not listening to music now.", options: shuffleArray(["You","are","not","listening","to","music","now"]) },
    { question: "तो सध्या काम करत नाही आहे.", correctAnswer: "He is not working now.", options: shuffleArray(["He","is","not","working","now"]) },
    { question: "ती सध्या गाणे गात नाही आहे.", correctAnswer: "She is not singing now.", options: shuffleArray(["She","is","not","singing","now"]) },
    { question: "आम्ही सध्या पुस्तक वाचत नाही आहोत.", correctAnswer: "We are not reading a book now.", options: shuffleArray(["We","are","not","reading","a","book","now"]) },
    { question: "ते सध्या खेळत नाही आहेत.", correctAnswer: "They are not playing now.", options: shuffleArray(["They","are","not","playing","now"]) },
    { question: "तो सध्या झाडे लावत नाही आहे.", correctAnswer: "He is not planting trees now.", options: shuffleArray(["He","is","not","planting","trees","now"]) },
    { question: "मी सध्या जेवत नाही आहे.", correctAnswer: "I am not eating now.", options: shuffleArray(["I","am","not","eating","now"]) },
    { question: "तू सध्या चालत नाही आहेस.", correctAnswer: "You are not walking now.", options: shuffleArray(["You","are","not","walking","now"]) },
    { question: "ती सध्या खेळत नाही आहे.", correctAnswer: "She is not playing now.", options: shuffleArray(["She","is","not","playing","now"]) },
    { question: "आम्ही सध्या गाणे ऐकत नाही आहोत.", correctAnswer: "We are not listening to music now.", options: shuffleArray(["We","are","not","listening","to","music","now"]) },
    { question: "ते सध्या काम करत नाही आहेत.", correctAnswer: "They are not working now.", options: shuffleArray(["They","are","not","working","now"]) },
    { question: "तो सध्या पुस्तक वाचत नाही आहे.", correctAnswer: "He is not reading a book now.", options: shuffleArray(["He","is","not","reading","a","book","now"]) },
    { question: "मी सध्या टीव्ही पाहत नाही आहे.", correctAnswer: "I am not watching TV now.", options: shuffleArray(["I","am","not","watching","TV","now"]) },
    { question: "तू सध्या अभ्यास करत नाही आहेस.", correctAnswer: "You are not studying now.", options: shuffleArray(["You","are","not","studying","now"]) },
    { question: "ती सध्या व्यायाम करत नाही आहे.", correctAnswer: "She is not exercising now.", options: shuffleArray(["She","is","not","exercising","now"]) },
    { question: "आम्ही सध्या शाळेत जात नाही आहोत.", correctAnswer: "We are not going to school now.", options: shuffleArray(["We","are","not","going","to","school","now"]) },
    { question: "ते सध्या बागेत काम करत नाही आहेत.", correctAnswer: "They are not working in the garden now.", options: shuffleArray(["They","are","not","working","in","the","garden","now"]) },
    { question: "तो सध्या झोपत नाही आहे.", correctAnswer: "He is not sleeping now.", options: shuffleArray(["He","is","not","sleeping","now"]) },
    { question: "मी सध्या मोबाइल वापरत नाही आहे.", correctAnswer: "I am not using my mobile now.", options: shuffleArray(["I","am","not","using","my","mobile","now"]) }
  ],

  verbal: [
    { question: "मी सध्या शिकत आहे का?", correctAnswer: "Am I studying now?", options: shuffleArray(["Am","I","studying","now"]) },
    { question: "तू सध्या गाणे ऐकत आहेस का?", correctAnswer: "Are you listening to music now?", options: shuffleArray(["Are","you","listening","to","music","now"]) },
    { question: "तो सध्या काम करत आहे का?", correctAnswer: "Is he working now?", options: shuffleArray(["Is","he","working","now"]) },
    { question: "ती सध्या गाणे गाते आहे का?", correctAnswer: "Is she singing now?", options: shuffleArray(["Is","she","singing","now"]) },
    { question: "आम्ही सध्या पुस्तक वाचत आहोत का?", correctAnswer: "Are we reading a book now?", options: shuffleArray(["Are","we","reading","a","book","now"]) },
    { question: "ते सध्या खेळत आहेत का?", correctAnswer: "Are they playing now?", options: shuffleArray(["Are","they","playing","now"]) },
    { question: "तो सध्या झाडे लावत आहे का?", correctAnswer: "Is he planting trees now?", options: shuffleArray(["Is","he","planting","trees","now"]) },
    { question: "मी सध्या जेवत आहे का?", correctAnswer: "Am I eating now?", options: shuffleArray(["Am","I","eating","now"]) },
    { question: "तू सध्या चालत आहेस का?", correctAnswer: "Are you walking now?", options: shuffleArray(["Are","you","walking","now"]) },
    { question: "ती सध्या खेळते आहे का?", correctAnswer: "Is she playing now?", options: shuffleArray(["Is","she","playing","now"]) },
    { question: "आम्ही सध्या गाणे ऐकत आहोत का?", correctAnswer: "Are we listening to music now?", options: shuffleArray(["Are","we","listening","to","music","now"]) },
    { question: "ते सध्या काम करत आहेत का?", correctAnswer: "Are they working now?", options: shuffleArray(["Are","they","working","now"]) },
    { question: "तो सध्या पुस्तक वाचत आहे का?", correctAnswer: "Is he reading a book now?", options: shuffleArray(["Is","he","reading","a","book","now"]) },
    { question: "मी सध्या टीव्ही पाहत आहे का?", correctAnswer: "Am I watching TV now?", options: shuffleArray(["Am","I","watching","TV","now"]) },
    { question: "तू सध्या अभ्यास करत आहेस का?", correctAnswer: "Are you studying now?", options: shuffleArray(["Are","you","studying","now"]) },
    { question: "ती सध्या व्यायाम करत आहे का?", correctAnswer: "Is she exercising now?", options: shuffleArray(["Is","she","exercising","now"]) },
    { question: "आम्ही सध्या शाळेत जात आहोत का?", correctAnswer: "Are we going to school now?", options: shuffleArray(["Are","we","going","to","school","now"]) },
    { question: "ते सध्या बागेत काम करत आहेत का?", correctAnswer: "Are they working in the garden now?", options: shuffleArray(["Are","they","working","in","the","garden","now"]) },
    { question: "तो सध्या झोपत आहे का?", correctAnswer: "Is he sleeping now?", options: shuffleArray(["Is","he","sleeping","now"]) },
    { question: "मी सध्या मोबाइल वापरत आहे का?", correctAnswer: "Am I using my mobile now?", options: shuffleArray(["Am","I","using","my","mobile","now"]) }
  ],

  wh: [
    { question: "मी सध्या काय करत आहे?", correctAnswer: "What am I doing now?", options: shuffleArray(["What","am","I","doing","now"]) },
    { question: "तू सध्या काय करत आहेस?", correctAnswer: "What are you doing now?", options: shuffleArray(["What","are","you","doing","now"]) },
    { question: "तो सध्या काय करत आहे?", correctAnswer: "What is he doing now?", options: shuffleArray(["What","is","he","doing","now"]) },
    { question: "ती सध्या काय करत आहे?", correctAnswer: "What is she doing now?", options: shuffleArray(["What","is","she","doing","now"]) },
    { question: "आम्ही सध्या काय करत आहोत?", correctAnswer: "What are we doing now?", options: shuffleArray(["What","are","we","doing","now"]) },
    { question: "ते सध्या काय करत आहेत?", correctAnswer: "What are they doing now?", options: shuffleArray(["What","are","they","doing","now"]) },
    { question: "मी सध्या कुठे जात आहे?", correctAnswer: "Where am I going now?", options: shuffleArray(["Where","am","I","going","now"]) },
    { question: "तू सध्या कुठे चालत आहेस?", correctAnswer: "Where are you walking now?", options: shuffleArray(["Where","are","you","walking","now"]) },
    { question: "तो सध्या कुठे काम करत आहे?", correctAnswer: "Where is he working now?", options: shuffleArray(["Where","is","he","working","now"]) },
    { question: "ती सध्या कुठे जात आहे?", correctAnswer: "Where is she going now?", options: shuffleArray(["Where","is","she","going","now"]) },
    { question: "आम्ही सध्या कुठे जात आहोत?", correctAnswer: "Where are we going now?", options: shuffleArray(["Where","are","we","going","now"]) },
    { question: "ते सध्या कुठे खेळत आहेत?", correctAnswer: "Where are they playing now?", options: shuffleArray(["Where","are","they","playing","now"]) },
    { question: "मी सध्या काय पाहत आहे?", correctAnswer: "What am I watching now?", options: shuffleArray(["What","am","I","watching","now"]) },
    { question: "तू सध्या काय वाचत आहेस?", correctAnswer: "What are you reading now?", options: shuffleArray(["What","are","you","reading","now"]) },
    { question: "तो सध्या काय खाता आहे?", correctAnswer: "What is he eating now?", options: shuffleArray(["What","is","he","eating","now"]) },
    { question: "ती सध्या काय शिकत आहे?", correctAnswer: "What is she learning now?", options: shuffleArray(["What","is","she","learning","now"]) },
    { question: "आम्ही सध्या काय करीत आहोत?", correctAnswer: "What are we doing now?", options: shuffleArray(["What","are","we","doing","now"]) },
    { question: "ते सध्या काय करत आहेत?", correctAnswer: "What are they doing now?", options: shuffleArray(["What","are","they","doing","now"]) },
    { question: "मी सध्या कुठे झोपत आहे?", correctAnswer: "Where am I sleeping now?", options: shuffleArray(["Where","am","I","sleeping","now"]) },
    { question: "तो सध्या कुठे बसला आहे?", correctAnswer: "Where is he sitting now?", options: shuffleArray(["Where","is","he","sitting","now"]) }
  ]
};
