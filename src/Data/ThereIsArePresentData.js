function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const ThereIsArePresentData = {
  positive: [
    { question: "टेबलावर एक पुस्तक आहे.", correctAnswer: "There is a book on the table.", options: shuffleArray(["There","is","a","book","on","the","table","pen","bag"]) },
    { question: "बागेत झाडे आहेत.", correctAnswer: "There are trees in the garden.", options: shuffleArray(["There","are","trees","in","the","garden","flowers","house","car"]) },
    { question: "फ्रीजमध्ये दूध आहे.", correctAnswer: "There is milk in the fridge.", options: shuffleArray(["There","is","milk","in","the","fridge","water","bread"]) },
    { question: "रस्त्यावर कार आहे.", correctAnswer: "There is a car on the road.", options: shuffleArray(["There","is","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या आहेत.", correctAnswer: "There are three rooms in the house.", options: shuffleArray(["There","are","three","rooms","in","the","house","kitchen","garden"]) },
    { question: "बॅगेत पेन आहे.", correctAnswer: "There is a pen in the bag.", options: shuffleArray(["There","is","a","pen","in","the","bag","book","pencil"]) },
    { question: "शेतात गायी आहेत.", correctAnswer: "There are cows in the field.", options: shuffleArray(["There","are","cows","in","the","field","trees","dogs"]) },
    { question: "पुस्तकात एक गोष्ट आहे.", correctAnswer: "There is a story in the book.", options: shuffleArray(["There","is","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी आहे.", correctAnswer: "There is a window in the room.", options: shuffleArray(["There","is","a","window","in","the","room","door","table"]) },
    { question: "शाळेत बरीच मुले आहेत.", correctAnswer: "There are many children in the school.", options: shuffleArray(["There","are","many","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे आहे.", correctAnswer: "There is a toy in the box.", options: shuffleArray(["There","is","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी आहे.", correctAnswer: "There is a river in the village.", options: shuffleArray(["There","is","a","river","in","the","village","tree","house"]) },
    { question: "उद्यानात बाके आहेत.", correctAnswer: "There are benches in the park.", options: shuffleArray(["There","are","benches","in","the","park","trees","flowers"]) },
    { question: "स्वयंपाकघरात भांडी आहेत.", correctAnswer: "There are utensils in the kitchen.", options: shuffleArray(["There","are","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर आहे.", correctAnswer: "There is a blanket on the bed.", options: shuffleArray(["There","is","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक आहेत.", correctAnswer: "There are people in the market.", options: shuffleArray(["There","are","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी आहे.", correctAnswer: "There is a vase near the window.", options: shuffleArray(["There","is","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस आहे.", correctAnswer: "There is a bus at the bus stop.", options: shuffleArray(["There","is","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग आहेत.", correctAnswer: "There are clouds in the sky.", options: shuffleArray(["There","are","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही आहे.", correctAnswer: "There is a TV in the hall.", options: shuffleArray(["There","is","a","TV","in","the","hall","fan","chair"]) }
  ],

  negative: [
    { question: "टेबलावर पुस्तक नाही.", correctAnswer: "There is not a book on the table.", options: shuffleArray(["There","is","not","a","book","on","the","table","pen"]) },
    { question: "बागेत झाडे नाहीत.", correctAnswer: "There are not trees in the garden.", options: shuffleArray(["There","are","not","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध नाही.", correctAnswer: "There is not milk in the fridge.", options: shuffleArray(["There","is","not","milk","in","the","fridge","bread","water"]) },
    { question: "रस्त्यावर कार नाही.", correctAnswer: "There is not a car on the road.", options: shuffleArray(["There","is","not","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या नाहीत.", correctAnswer: "There are not three rooms in the house.", options: shuffleArray(["There","are","not","three","rooms","in","the","house","garden"]) },
    { question: "बॅगेत पेन नाही.", correctAnswer: "There is not a pen in the bag.", options: shuffleArray(["There","is","not","a","pen","in","the","bag","book","toy"]) },
    { question: "शेतात गायी नाहीत.", correctAnswer: "There are not cows in the field.", options: shuffleArray(["There","are","not","cows","in","the","field","dogs","trees"]) },
    { question: "पुस्तकात गोष्ट नाही.", correctAnswer: "There is not a story in the book.", options: shuffleArray(["There","is","not","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी नाही.", correctAnswer: "There is not a window in the room.", options: shuffleArray(["There","is","not","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले नाहीत.", correctAnswer: "There are not children in the school.", options: shuffleArray(["There","are","not","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे नाही.", correctAnswer: "There is not a toy in the box.", options: shuffleArray(["There","is","not","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी नाही.", correctAnswer: "There is not a river in the village.", options: shuffleArray(["There","is","not","a","river","in","the","village","house","tree"]) },
    { question: "उद्यानात बाके नाहीत.", correctAnswer: "There are not benches in the park.", options: shuffleArray(["There","are","not","benches","in","the","park","flowers","trees"]) },
    { question: "स्वयंपाकघरात भांडी नाहीत.", correctAnswer: "There are not utensils in the kitchen.", options: shuffleArray(["There","are","not","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर नाही.", correctAnswer: "There is not a blanket on the bed.", options: shuffleArray(["There","is","not","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक नाहीत.", correctAnswer: "There are not people in the market.", options: shuffleArray(["There","are","not","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी नाही.", correctAnswer: "There is not a vase near the window.", options: shuffleArray(["There","is","not","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस नाही.", correctAnswer: "There is not a bus at the bus stop.", options: shuffleArray(["There","is","not","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग नाहीत.", correctAnswer: "There are not clouds in the sky.", options: shuffleArray(["There","are","not","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही नाही.", correctAnswer: "There is not a TV in the hall.", options: shuffleArray(["There","is","not","a","TV","in","the","hall","fan","chair"]) }
  ],

  verbal: [
    { question: "टेबलावर पुस्तक आहे का?", correctAnswer: "Is there a book on the table?", options: shuffleArray(["Is","there","a","book","on","the","table","pen","bag"]) },
    { question: "बागेत झाडे आहेत का?", correctAnswer: "Are there trees in the garden?", options: shuffleArray(["Are","there","trees","in","the","garden","flowers","car"]) },
    { question: "फ्रीजमध्ये दूध आहे का?", correctAnswer: "Is there milk in the fridge?", options: shuffleArray(["Is","there","milk","in","the","fridge","water","bread"]) },
    { question: "रस्त्यावर कार आहे का?", correctAnswer: "Is there a car on the road?", options: shuffleArray(["Is","there","a","car","on","the","road","bus","cycle"]) },
    { question: "घरात तीन खोल्या आहेत का?", correctAnswer: "Are there three rooms in the house?", options: shuffleArray(["Are","there","three","rooms","in","the","house","garden"]) },
    { question: "बॅगेत पेन आहे का?", correctAnswer: "Is there a pen in the bag?", options: shuffleArray(["Is","there","a","pen","in","the","bag","book","pencil"]) },
    { question: "शेतात गायी आहेत का?", correctAnswer: "Are there cows in the field?", options: shuffleArray(["Are","there","cows","in","the","field","dogs","trees"]) },
    { question: "पुस्तकात गोष्ट आहे का?", correctAnswer: "Is there a story in the book?", options: shuffleArray(["Is","there","a","story","in","the","book","page","lesson"]) },
    { question: "खोलीत खिडकी आहे का?", correctAnswer: "Is there a window in the room?", options: shuffleArray(["Is","there","a","window","in","the","room","door","chair"]) },
    { question: "शाळेत मुले आहेत का?", correctAnswer: "Are there children in the school?", options: shuffleArray(["Are","there","children","in","the","school","teachers","class"]) },
    { question: "बॉक्समध्ये खेळणे आहे का?", correctAnswer: "Is there a toy in the box?", options: shuffleArray(["Is","there","a","toy","in","the","box","ball","pen"]) },
    { question: "गावात नदी आहे का?", correctAnswer: "Is there a river in the village?", options: shuffleArray(["Is","there","a","river","in","the","village","house","tree"]) },
    { question: "उद्यानात बाके आहेत का?", correctAnswer: "Are there benches in the park?", options: shuffleArray(["Are","there","benches","in","the","park","flowers","trees"]) },
    { question: "स्वयंपाकघरात भांडी आहेत का?", correctAnswer: "Are there utensils in the kitchen?", options: shuffleArray(["Are","there","utensils","in","the","kitchen","food","cup"]) },
    { question: "पलंगावर चादर आहे का?", correctAnswer: "Is there a blanket on the bed?", options: shuffleArray(["Is","there","a","blanket","on","the","bed","pillow","sheet"]) },
    { question: "बाजारात लोक आहेत का?", correctAnswer: "Are there people in the market?", options: shuffleArray(["Are","there","people","in","the","market","shops","cars"]) },
    { question: "खिडकीजवळ फुलदाणी आहे का?", correctAnswer: "Is there a vase near the window?", options: shuffleArray(["Is","there","a","vase","near","the","window","flower","plant"]) },
    { question: "बसस्टॉपवर बस आहे का?", correctAnswer: "Is there a bus at the bus stop?", options: shuffleArray(["Is","there","a","bus","at","the","stop","car","cycle"]) },
    { question: "आकाशात ढग आहेत का?", correctAnswer: "Are there clouds in the sky?", options: shuffleArray(["Are","there","clouds","in","the","sky","stars","moon"]) },
    { question: "हॉलमध्ये टीव्ही आहे का?", correctAnswer: "Is there a TV in the hall?", options: shuffleArray(["Is","there","a","TV","in","the","hall","fan","chair"]) }
  ],

  wh: [
    { question: "टेबलावर काय आहे?", correctAnswer: "What is there on the table?", options: shuffleArray(["What","is","there","on","the","table","book","pen"]) },
    { question: "बागेत काय आहे?", correctAnswer: "What is there in the garden?", options: shuffleArray(["What","is","there","in","the","garden","trees","flowers"]) },
    { question: "फ्रीजमध्ये काय आहे?", correctAnswer: "What is there in the fridge?", options: shuffleArray(["What","is","there","in","the","fridge","milk","water"]) },
    { question: "रस्त्यावर काय आहे?", correctAnswer: "What is there on the road?", options: shuffleArray(["What","is","there","on","the","road","car","bus"]) },
    { question: "घरात काय आहे?", correctAnswer: "What is there in the house?", options: shuffleArray(["What","is","there","in","the","house","room","kitchen"]) },
    { question: "बॅगेत काय आहे?", correctAnswer: "What is there in the bag?", options: shuffleArray(["What","is","there","in","the","bag","pen","book"]) },
    { question: "शेतात काय आहे?", correctAnswer: "What is there in the field?", options: shuffleArray(["What","is","there","in","the","field","cow","tree"]) },
    { question: "पुस्तकात काय आहे?", correctAnswer: "What is there in the book?", options: shuffleArray(["What","is","there","in","the","book","story","lesson"]) },
    { question: "खोलीत काय आहे?", correctAnswer: "What is there in the room?", options: shuffleArray(["What","is","there","in","the","room","window","table"]) },
    { question: "शाळेत काय आहे?", correctAnswer: "What is there in the school?", options: shuffleArray(["What","is","there","in","the","school","children","teachers"]) },
    { question: "बॉक्समध्ये काय आहे?", correctAnswer: "What is there in the box?", options: shuffleArray(["What","is","there","in","the","box","toy","pen"]) },
    { question: "गावात काय आहे?", correctAnswer: "What is there in the village?", options: shuffleArray(["What","is","there","in","the","village","river","house"]) },
    { question: "उद्यानात काय आहे?", correctAnswer: "What is there in the park?", options: shuffleArray(["What","is","there","in","the","park","bench","tree"]) },
    { question: "स्वयंपाकघरात काय आहे?", correctAnswer: "What is there in the kitchen?", options: shuffleArray(["What","is","there","in","the","kitchen","utensils","food"]) },
    { question: "पलंगावर काय आहे?", correctAnswer: "What is there on the bed?", options: shuffleArray(["What","is","there","on","the","bed","blanket","pillow"]) },
    { question: "बाजारात काय आहे?", correctAnswer: "What is there in the market?", options: shuffleArray(["What","is","there","in","the","market","people","shops"]) },
    { question: "खिडकीजवळ काय आहे?", correctAnswer: "What is there near the window?", options: shuffleArray(["What","is","there","near","the","window","vase","plant"]) },
    { question: "बसस्टॉपवर काय आहे?", correctAnswer: "What is there at the bus stop?", options: shuffleArray(["What","is","there","at","the","bus","stop","bus","car"]) },
    { question: "आकाशात काय आहे?", correctAnswer: "What is there in the sky?", options: shuffleArray(["What","is","there","in","the","sky","clouds","moon"]) },
    { question: "हॉलमध्ये काय आहे?", correctAnswer: "What is there in the hall?", options: shuffleArray(["What","is","there","in","the","hall","TV","fan"]) }
  ]
};
