// src/Data/thereIsAreFutureData.js

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const ThereIsAreFutureData = {
  positive: [
    { question: "टेबलवर उद्या पुस्तक असेल.", correctAnswer: "There will be a book on the table tomorrow.", options: shuffleArray(["There","will","be","a","book","on","the","table","tomorrow","pen"]) },
    { question: "बागेत झाडे असतील.", correctAnswer: "There will be trees in the garden.", options: shuffleArray(["There","will","be","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध असेल.", correctAnswer: "There will be milk in the fridge.", options: shuffleArray(["There","will","be","milk","in","the","fridge","bread","water"]) },
    { question: "रस्त्यावर कार असेल.", correctAnswer: "There will be a car on the road.", options: shuffleArray(["There","will","be","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या असतील.", correctAnswer: "There will be three rooms in the house.", options: shuffleArray(["There","will","be","three","rooms","in","the","house","kitchen"]) },
    { question: "बॅगेत पेन असेल.", correctAnswer: "There will be a pen in the bag.", options: shuffleArray(["There","will","be","a","pen","in","the","bag","book","toy"]) },
    { question: "शेतात गायी असतील.", correctAnswer: "There will be cows in the field.", options: shuffleArray(["There","will","be","cows","in","the","field","trees","dogs"]) },
    { question: "पुस्तकात गोष्ट असेल.", correctAnswer: "There will be a story in the book.", options: shuffleArray(["There","will","be","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी असेल.", correctAnswer: "There will be a window in the room.", options: shuffleArray(["There","will","be","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले असतील.", correctAnswer: "There will be children in the school.", options: shuffleArray(["There","will","be","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे असेल.", correctAnswer: "There will be a toy in the box.", options: shuffleArray(["There","will","be","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी असेल.", correctAnswer: "There will be a river in the village.", options: shuffleArray(["There","will","be","a","river","in","the","village","tree","house"]) },
    { question: "उद्यानात बाके असतील.", correctAnswer: "There will be benches in the park.", options: shuffleArray(["There","will","be","benches","in","the","park","trees","flowers"]) },
    { question: "स्वयंपाकघरात भांडी असतील.", correctAnswer: "There will be utensils in the kitchen.", options: shuffleArray(["There","will","be","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर असेल.", correctAnswer: "There will be a blanket on the bed.", options: shuffleArray(["There","will","be","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक असतील.", correctAnswer: "There will be people in the market.", options: shuffleArray(["There","will","be","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी असेल.", correctAnswer: "There will be a vase near the window.", options: shuffleArray(["There","will","be","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस असेल.", correctAnswer: "There will be a bus at the bus stop.", options: shuffleArray(["There","will","be","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग असतील.", correctAnswer: "There will be clouds in the sky.", options: shuffleArray(["There","will","be","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही असेल.", correctAnswer: "There will be a TV in the hall.", options: shuffleArray(["There","will","be","a","TV","in","the","hall","fan","chair"]) }
  ],

  negative: [
    { question: "टेबलावर पुस्तक नसेल.", correctAnswer: "There will not be a book on the table.", options: shuffleArray(["There","will","not","be","a","book","on","the","table","pen"]) },
    { question: "बागेत झाडे नसतील.", correctAnswer: "There will not be trees in the garden.", options: shuffleArray(["There","will","not","be","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध नसेल.", correctAnswer: "There will not be milk in the fridge.", options: shuffleArray(["There","will","not","be","milk","in","the","fridge","bread","water"]) },
    { question: "रस्त्यावर कार नसेल.", correctAnswer: "There will not be a car on the road.", options: shuffleArray(["There","will","not","be","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या नसतील.", correctAnswer: "There will not be three rooms in the house.", options: shuffleArray(["There","will","not","be","three","rooms","in","the","house","kitchen"]) },
    { question: "बॅगेत पेन नसेल.", correctAnswer: "There will not be a pen in the bag.", options: shuffleArray(["There","will","not","be","a","pen","in","the","bag","book","toy"]) },
    { question: "शेतात गायी नसतील.", correctAnswer: "There will not be cows in the field.", options: shuffleArray(["There","will","not","be","cows","in","the","field","trees","dogs"]) },
    { question: "पुस्तकात गोष्ट नसेल.", correctAnswer: "There will not be a story in the book.", options: shuffleArray(["There","will","not","be","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी नसेल.", correctAnswer: "There will not be a window in the room.", options: shuffleArray(["There","will","not","be","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले नसतील.", correctAnswer: "There will not be children in the school.", options: shuffleArray(["There","will","not","be","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे नसेल.", correctAnswer: "There will not be a toy in the box.", options: shuffleArray(["There","will","not","be","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी नसेल.", correctAnswer: "There will not be a river in the village.", options: shuffleArray(["There","will","not","be","a","river","in","the","village","tree","house"]) },
    { question: "उद्यानात बाके नसतील.", correctAnswer: "There will not be benches in the park.", options: shuffleArray(["There","will","not","be","benches","in","the","park","trees","flowers"]) },
    { question: "स्वयंपाकघरात भांडी नसतील.", correctAnswer: "There will not be utensils in the kitchen.", options: shuffleArray(["There","will","not","be","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर नसेल.", correctAnswer: "There will not be a blanket on the bed.", options: shuffleArray(["There","will","not","be","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक नसतील.", correctAnswer: "There will not be people in the market.", options: shuffleArray(["There","will","not","be","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी नसेल.", correctAnswer: "There will not be a vase near the window.", options: shuffleArray(["There","will","not","be","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस नसेल.", correctAnswer: "There will not be a bus at the bus stop.", options: shuffleArray(["There","will","not","be","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग नसतील.", correctAnswer: "There will not be clouds in the sky.", options: shuffleArray(["There","will","not","be","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही नसेल.", correctAnswer: "There will not be a TV in the hall.", options: shuffleArray(["There","will","not","be","a","TV","in","the","hall","fan","chair"]) }
  ],

  verbal: [
    { question: "टेबलावर पुस्तक असेल का?", correctAnswer: "Will there be a book on the table?", options: shuffleArray(["Will","there","be","a","book","on","the","table","pen"]) },
    { question: "बागेत झाडे असतील का?", correctAnswer: "Will there be trees in the garden?", options: shuffleArray(["Will","there","be","trees","in","the","garden","flowers"]) },
    { question: "फ्रीजमध्ये दूध असेल का?", correctAnswer: "Will there be milk in the fridge?", options: shuffleArray(["Will","there","be","milk","in","the","fridge","bread"]) },
    { question: "रस्त्यावर कार असेल का?", correctAnswer: "Will there be a car on the road?", options: shuffleArray(["Will","there","be","a","car","on","the","road","bus"]) },
    { question: "घरात तीन खोल्या असतील का?", correctAnswer: "Will there be three rooms in the house?", options: shuffleArray(["Will","there","be","three","rooms","in","the","house","kitchen"]) },
    { question: "बॅगेत पेन असेल का?", correctAnswer: "Will there be a pen in the bag?", options: shuffleArray(["Will","there","be","a","pen","in","the","bag","book"]) },
    { question: "शेतात गायी असतील का?", correctAnswer: "Will there be cows in the field?", options: shuffleArray(["Will","there","be","cows","in","the","field","trees"]) },
    { question: "पुस्तकात गोष्ट असेल का?", correctAnswer: "Will there be a story in the book?", options: shuffleArray(["Will","there","be","a","story","in","the","book"]) },
    { question: "खोलीत खिडकी असेल का?", correctAnswer: "Will there be a window in the room?", options: shuffleArray(["Will","there","be","a","window","in","the","room"]) },
    { question: "शाळेत मुले असतील का?", correctAnswer: "Will there be children in the school?", options: shuffleArray(["Will","there","be","children","in","the","school"]) },
    { question: "बॉक्समध्ये खेळणे असेल का?", correctAnswer: "Will there be a toy in the box?", options: shuffleArray(["Will","there","be","a","toy","in","the","box"]) },
    { question: "गावात नदी असेल का?", correctAnswer: "Will there be a river in the village?", options: shuffleArray(["Will","there","be","a","river","in","the","village"]) },
    { question: "उद्यानात बाके असतील का?", correctAnswer: "Will there be benches in the park?", options: shuffleArray(["Will","there","be","benches","in","the","park"]) },
    { question: "स्वयंपाकघरात भांडी असतील का?", correctAnswer: "Will there be utensils in the kitchen?", options: shuffleArray(["Will","there","be","utensils","in","the","kitchen"]) },
    { question: "पलंगावर चादर असेल का?", correctAnswer: "Will there be a blanket on the bed?", options: shuffleArray(["Will","there","be","a","blanket","on","the","bed"]) },
    { question: "बाजारात लोक असतील का?", correctAnswer: "Will there be people in the market?", options: shuffleArray(["Will","there","be","people","in","the","market"]) },
    { question: "खिडकीजवळ फुलदाणी असेल का?", correctAnswer: "Will there be a vase near the window?", options: shuffleArray(["Will","there","be","a","vase","near","the","window"]) },
    { question: "बसस्टॉपवर बस असेल का?", correctAnswer: "Will there be a bus at the bus stop?", options: shuffleArray(["Will","there","be","a","bus","at","the","stop"]) },
    { question: "आकाशात ढग असतील का?", correctAnswer: "Will there be clouds in the sky?", options: shuffleArray(["Will","there","be","clouds","in","the","sky"]) },
    { question: "हॉलमध्ये टीव्ही असेल का?", correctAnswer: "Will there be a TV in the hall?", options: shuffleArray(["Will","there","be","a","TV","in","the","hall"]) }
  ],

  wh: [
    { question: "टेबलावर काय असेल?", correctAnswer: "What will be on the table?", options: shuffleArray(["What","will","be","on","the","table","book","pen"]) },
    { question: "बागेत काय असेल?", correctAnswer: "What will be in the garden?", options: shuffleArray(["What","will","be","in","the","garden","tree","flower"]) },
    { question: "फ्रीजमध्ये काय असेल?", correctAnswer: "What will be in the fridge?", options: shuffleArray(["What","will","be","in","the","fridge","milk","bread"]) },
    { question: "रस्त्यावर काय असेल?", correctAnswer: "What will be on the road?", options: shuffleArray(["What","will","be","on","the","road","car","bus"]) },
    { question: "घरात किती खोल्या असतील?", correctAnswer: "How many rooms will be in the house?", options: shuffleArray(["How","many","rooms","will","be","in","the","house"]) },
    { question: "बॅगेत काय असेल?", correctAnswer: "What will be in the bag?", options: shuffleArray(["What","will","be","in","the","bag","pen","book"]) },
    { question: "शेतात काय असेल?", correctAnswer: "What will be in the field?", options: shuffleArray(["What","will","be","in","the","field","cows","trees"]) },
    { question: "पुस्तकात काय असेल?", correctAnswer: "What will be in the book?", options: shuffleArray(["What","will","be","in","the","book","story","page"]) },
    { question: "खोलीत काय असेल?", correctAnswer: "What will be in the room?", options: shuffleArray(["What","will","be","in","the","room","window","door"]) },
    { question: "शाळेत कोण असेल?", correctAnswer: "Who will be in the school?", options: shuffleArray(["Who","will","be","in","the","school","children","teachers"]) },
    { question: "बॉक्समध्ये काय असेल?", correctAnswer: "What will be in the box?", options: shuffleArray(["What","will","be","in","the","box","toy","ball"]) },
    { question: "गावात काय असेल?", correctAnswer: "What will be in the village?", options: shuffleArray(["What","will","be","in","the","village","river","tree"]) },
    { question: "उद्यानात काय असेल?", correctAnswer: "What will be in the park?", options: shuffleArray(["What","will","be","in","the","park","benches","trees"]) },
    { question: "स्वयंपाकघरात काय असेल?", correctAnswer: "What will be in the kitchen?", options: shuffleArray(["What","will","be","in","the","kitchen","utensils","food"]) },
    { question: "पलंगावर काय असेल?", correctAnswer: "What will be on the bed?", options: shuffleArray(["What","will","be","on","the","bed","blanket","pillow"]) },
    { question: "बाजारात कोण असेल?", correctAnswer: "Who will be in the market?", options: shuffleArray(["Who","will","be","in","the","market","people","shops"]) },
    { question: "खिडकीजवळ काय असेल?", correctAnswer: "What will be near the window?", options: shuffleArray(["What","will","be","near","the","window","vase","plant"]) },
    { question: "बसस्टॉपवर काय असेल?", correctAnswer: "What will be at the bus stop?", options: shuffleArray(["What","will","be","at","the","bus","stop","bus"]) },
    { question: "आकाशात काय असेल?", correctAnswer: "What will be in the sky?", options: shuffleArray(["What","will","be","in","the","sky","clouds","stars"]) },
    { question: "हॉलमध्ये काय असेल?", correctAnswer: "What will be in the hall?", options: shuffleArray(["What","will","be","in","the","hall","TV","fan"]) }
  ]
};
