function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const ThereIsArePastData = {
  positive: [
    { question: "टेबलावर पुस्तक होते.", correctAnswer: "There was a book on the table.", options: shuffleArray(["There","was","a","book","on","the","table","pen","bag"]) },
    { question: "बागेत झाडे होती.", correctAnswer: "There were trees in the garden.", options: shuffleArray(["There","were","trees","in","the","garden","flowers","house","car"]) },
    { question: "फ्रीजमध्ये दूध होते.", correctAnswer: "There was milk in the fridge.", options: shuffleArray(["There","was","milk","in","the","fridge","water","bread"]) },
    { question: "रस्त्यावर कार होती.", correctAnswer: "There was a car on the road.", options: shuffleArray(["There","was","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या होत्या.", correctAnswer: "There were three rooms in the house.", options: shuffleArray(["There","were","three","rooms","in","the","house","kitchen","garden"]) },
    { question: "बॅगेत पेन होता.", correctAnswer: "There was a pen in the bag.", options: shuffleArray(["There","was","a","pen","in","the","bag","book","pencil"]) },
    { question: "शेतात गायी होत्या.", correctAnswer: "There were cows in the field.", options: shuffleArray(["There","were","cows","in","the","field","trees","dogs"]) },
    { question: "पुस्तकात गोष्ट होती.", correctAnswer: "There was a story in the book.", options: shuffleArray(["There","was","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी होती.", correctAnswer: "There was a window in the room.", options: shuffleArray(["There","was","a","window","in","the","room","door","table"]) },
    { question: "शाळेत मुले होती.", correctAnswer: "There were children in the school.", options: shuffleArray(["There","were","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे होते.", correctAnswer: "There was a toy in the box.", options: shuffleArray(["There","was","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी होती.", correctAnswer: "There was a river in the village.", options: shuffleArray(["There","was","a","river","in","the","village","tree","house"]) },
    { question: "उद्यानात बाके होत्या.", correctAnswer: "There were benches in the park.", options: shuffleArray(["There","were","benches","in","the","park","trees","flowers"]) },
    { question: "स्वयंपाकघरात भांडी होती.", correctAnswer: "There were utensils in the kitchen.", options: shuffleArray(["There","were","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर होती.", correctAnswer: "There was a blanket on the bed.", options: shuffleArray(["There","was","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक होते.", correctAnswer: "There were people in the market.", options: shuffleArray(["There","were","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी होती.", correctAnswer: "There was a vase near the window.", options: shuffleArray(["There","was","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस होती.", correctAnswer: "There was a bus at the bus stop.", options: shuffleArray(["There","was","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग होते.", correctAnswer: "There were clouds in the sky.", options: shuffleArray(["There","were","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही होता.", correctAnswer: "There was a TV in the hall.", options: shuffleArray(["There","was","a","TV","in","the","hall","fan","chair"]) }
  ],

  negative: [
    { question: "टेबलावर पुस्तक नव्हते.", correctAnswer: "There was not a book on the table.", options: shuffleArray(["There","was","not","a","book","on","the","table","pen"]) },
    { question: "बागेत झाडे नव्हती.", correctAnswer: "There were not trees in the garden.", options: shuffleArray(["There","were","not","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध नव्हते.", correctAnswer: "There was not milk in the fridge.", options: shuffleArray(["There","was","not","milk","in","the","fridge","bread","water"]) },
    { question: "रस्त्यावर कार नव्हती.", correctAnswer: "There was not a car on the road.", options: shuffleArray(["There","was","not","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या नव्हत्या.", correctAnswer: "There were not three rooms in the house.", options: shuffleArray(["There","were","not","three","rooms","in","the","house","garden"]) },
    { question: "बॅगेत पेन नव्हता.", correctAnswer: "There was not a pen in the bag.", options: shuffleArray(["There","was","not","a","pen","in","the","bag","book","toy"]) },
    { question: "शेतात गायी नव्हत्या.", correctAnswer: "There were not cows in the field.", options: shuffleArray(["There","were","not","cows","in","the","field","dogs","trees"]) },
    { question: "पुस्तकात गोष्ट नव्हती.", correctAnswer: "There was not a story in the book.", options: shuffleArray(["There","was","not","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी नव्हती.", correctAnswer: "There was not a window in the room.", options: shuffleArray(["There","was","not","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले नव्हती.", correctAnswer: "There were not children in the school.", options: shuffleArray(["There","were","not","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे नव्हते.", correctAnswer: "There was not a toy in the box.", options: shuffleArray(["There","was","not","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी नव्हती.", correctAnswer: "There was not a river in the village.", options: shuffleArray(["There","was","not","a","river","in","the","village","house","tree"]) },
    { question: "उद्यानात बाके नव्हत्या.", correctAnswer: "There were not benches in the park.", options: shuffleArray(["There","were","not","benches","in","the","park","flowers","trees"]) },
    { question: "स्वयंपाकघरात भांडी नव्हती.", correctAnswer: "There were not utensils in the kitchen.", options: shuffleArray(["There","were","not","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर नव्हती.", correctAnswer: "There was not a blanket on the bed.", options: shuffleArray(["There","was","not","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक नव्हते.", correctAnswer: "There were not people in the market.", options: shuffleArray(["There","were","not","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी नव्हती.", correctAnswer: "There was not a vase near the window.", options: shuffleArray(["There","was","not","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस नव्हती.", correctAnswer: "There was not a bus at the bus stop.", options: shuffleArray(["There","was","not","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग नव्हते.", correctAnswer: "There were not clouds in the sky.", options: shuffleArray(["There","were","not","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही नव्हता.", correctAnswer: "There was not a TV in the hall.", options: shuffleArray(["There","was","not","a","TV","in","the","hall","fan","chair"]) }
  ],

  verbal: [
    { question: "टेबलावर पुस्तक होते का?", correctAnswer: "Was there a book on the table?", options: shuffleArray(["Was","there","a","book","on","the","table","pen"]) },
    { question: "बागेत झाडे होती का?", correctAnswer: "Were there trees in the garden?", options: shuffleArray(["Were","there","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध होते का?", correctAnswer: "Was there milk in the fridge?", options: shuffleArray(["Was","there","milk","in","the","fridge","bread","water"]) },
    { question: "रस्त्यावर कार होती का?", correctAnswer: "Was there a car on the road?", options: shuffleArray(["Was","there","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या होत्या का?", correctAnswer: "Were there three rooms in the house?", options: shuffleArray(["Were","there","three","rooms","in","the","house","kitchen"]) },
    { question: "बॅगेत पेन होता का?", correctAnswer: "Was there a pen in the bag?", options: shuffleArray(["Was","there","a","pen","in","the","bag","book","toy"]) },
    { question: "शेतात गायी होत्या का?", correctAnswer: "Were there cows in the field?", options: shuffleArray(["Were","there","cows","in","the","field","trees","dogs"]) },
    { question: "पुस्तकात गोष्ट होती का?", correctAnswer: "Was there a story in the book?", options: shuffleArray(["Was","there","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी होती का?", correctAnswer: "Was there a window in the room?", options: shuffleArray(["Was","there","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले होती का?", correctAnswer: "Were there children in the school?", options: shuffleArray(["Were","there","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे होते का?", correctAnswer: "Was there a toy in the box?", options: shuffleArray(["Was","there","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी होती का?", correctAnswer: "Was there a river in the village?", options: shuffleArray(["Was","there","a","river","in","the","village","tree","house"]) },
    { question: "उद्यानात बाके होत्या का?", correctAnswer: "Were there benches in the park?", options: shuffleArray(["Were","there","benches","in","the","park","trees","flowers"]) },
    { question: "स्वयंपाकघरात भांडी होती का?", correctAnswer: "Were there utensils in the kitchen?", options: shuffleArray(["Were","there","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर होती का?", correctAnswer: "Was there a blanket on the bed?", options: shuffleArray(["Was","there","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक होते का?", correctAnswer: "Were there people in the market?", options: shuffleArray(["Were","there","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी होती का?", correctAnswer: "Was there a vase near the window?", options: shuffleArray(["Was","there","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस होती का?", correctAnswer: "Was there a bus at the bus stop?", options: shuffleArray(["Was","there","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग होते का?", correctAnswer: "Were there clouds in the sky?", options: shuffleArray(["Were","there","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही होता का?", correctAnswer: "Was there a TV in the hall?", options: shuffleArray(["Was","there","a","TV","in","the","hall","fan","chair"]) }
  ],

  wh: [
    { question: "टेबलावर काय होते?", correctAnswer: "What was on the table?", options: shuffleArray(["What","was","on","the","table","book","pen","bag"]) },
    { question: "बागेत काय होती?", correctAnswer: "What were in the garden?", options: shuffleArray(["What","were","in","the","garden","trees","flowers"]) },
    { question: "फ्रीजमध्ये काय होते?", correctAnswer: "What was in the fridge?", options: shuffleArray(["What","was","in","the","fridge","milk","bread"]) },
    { question: "रस्त्यावर काय होती?", correctAnswer: "What was on the road?", options: shuffleArray(["What","was","on","the","road","car","bus"]) },
    { question: "घरात किती खोल्या होत्या?", correctAnswer: "How many rooms were in the house?", options: shuffleArray(["How","many","rooms","were","in","the","house","bedroom","kitchen"]) },
    { question: "बॅगेत काय होते?", correctAnswer: "What was in the bag?", options: shuffleArray(["What","was","in","the","bag","pen","book"]) },
    { question: "शेतात काय होती?", correctAnswer: "What were in the field?", options: shuffleArray(["What","were","in","the","field","cows","trees"]) },
    { question: "पुस्तकात काय होते?", correctAnswer: "What was in the book?", options: shuffleArray(["What","was","in","the","book","story","page"]) },
    { question: "खोलीत काय होती?", correctAnswer: "What was in the room?", options: shuffleArray(["What","was","in","the","room","window","door"]) },
    { question: "शाळेत कोण होते?", correctAnswer: "Who were in the school?", options: shuffleArray(["Who","were","in","the","school","children","teachers"]) },
    { question: "बॉक्समध्ये काय होते?", correctAnswer: "What was in the box?", options: shuffleArray(["What","was","in","the","box","toy","ball"]) },
    { question: "गावात काय होती?", correctAnswer: "What was in the village?", options: shuffleArray(["What","was","in","the","village","river","house"]) },
    { question: "उद्यानात काय होती?", correctAnswer: "What were in the park?", options: shuffleArray(["What","were","in","the","park","benches","trees"]) },
    { question: "स्वयंपाकघरात काय होते?", correctAnswer: "What were in the kitchen?", options: shuffleArray(["What","were","in","the","kitchen","utensils","food"]) },
    { question: "पलंगावर काय होती?", correctAnswer: "What was on the bed?", options: shuffleArray(["What","was","on","the","bed","blanket","pillow"]) },
    { question: "बाजारात कोण होते?", correctAnswer: "Who were in the market?", options: shuffleArray(["Who","were","in","the","market","people","shops"]) },
    { question: "खिडकीजवळ काय होती?", correctAnswer: "What was near the window?", options: shuffleArray(["What","was","near","the","window","vase","flower"]) },
    { question: "बसस्टॉपवर काय होती?", correctAnswer: "What was at the bus stop?", options: shuffleArray(["What","was","at","the","bus","stop","car"]) },
    { question: "आकाशात काय होते?", correctAnswer: "What were in the sky?", options: shuffleArray(["What","were","in","the","sky","clouds","stars"]) },
    { question: "हॉलमध्ये काय होते?", correctAnswer: "What was in the hall?", options: shuffleArray(["What","was","in","the","hall","TV","fan"]) }
  ]
};
