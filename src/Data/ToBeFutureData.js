// ✅ To Be - Future Tense Quiz Data (Positive / Negative / Verbal / WH)
// Marathi -> English

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const ToBeFutureData = {
  positive: [
    { question: "मी विद्यार्थी असेन.", correctAnswer: "I will be a student.", options: shuffleArray(["I","will","be","a","student","teacher","home","garden"]) },
    { question: "तू शिक्षक असेस.", correctAnswer: "You will be a teacher.", options: shuffleArray(["You","will","be","a","teacher","student","room","class"]) },
    { question: "आपण मित्र असू.", correctAnswer: "We will be friends.", options: shuffleArray(["We","will","be","friends","happy","garden","class","home"]) },
    { question: "ती परिचारिका असेल.", correctAnswer: "She will be a nurse.", options: shuffleArray(["She","will","be","a","nurse","doctor","room","school"]) },
    { question: "तो डॉक्टर असेल.", correctAnswer: "He will be a doctor.", options: shuffleArray(["He","will","be","a","doctor","teacher","home","garden"]) },
    { question: "ते विद्यार्थी असतील.", correctAnswer: "They will be students.", options: shuffleArray(["They","will","be","students","garden","room","school","happy"]) },
    { question: "ते मांजर असेल.", correctAnswer: "It will be a cat.", options: shuffleArray(["It","will","be","a","cat","dog","small","house"]) },
    { question: "मी आनंदी असेन.", correctAnswer: "I will be happy.", options: shuffleArray(["I","will","be","happy","ready","garden","class","tree"]) },
    { question: "तू तयार असेस.", correctAnswer: "You will be ready.", options: shuffleArray(["You","will","be","ready","happy","school","room","flower"]) },
    { question: "आपण व्यस्त असू.", correctAnswer: "We will be busy.", options: shuffleArray(["We","will","be","busy","garden","room","home","tree"]) },
    { question: "ती सुंदर असेल.", correctAnswer: "She will be beautiful.", options: shuffleArray(["She","will","be","beautiful","happy","school","room","flower"]) },
    { question: "तो हुशार असेल.", correctAnswer: "He will be clever.", options: shuffleArray(["He","will","be","clever","smart","garden","home","tree"]) },
    { question: "ते आनंदी असतील.", correctAnswer: "They will be happy.", options: shuffleArray(["They","will","be","happy","room","school","garden","flower"]) },
    { question: "ते मोठे असेल.", correctAnswer: "It will be big.", options: shuffleArray(["It","will","be","big","small","tree","class","garden"]) },
    { question: "मी ऑफिसमध्ये असेन.", correctAnswer: "I will be at the office.", options: shuffleArray(["I","will","be","at","the","office","school","home"]) },
    { question: "तू शाळेत असेस.", correctAnswer: "You will be at school.", options: shuffleArray(["You","will","be","at","school","garden","room","tree"]) },
    { question: "आपण वर्गात असू.", correctAnswer: "We will be in the class.", options: shuffleArray(["We","will","be","in","the","class","room","school","garden"]) },
    { question: "ती खोलीत असेल.", correctAnswer: "She will be in the room.", options: shuffleArray(["She","will","be","in","the","room","school","garden","home"]) },
    { question: "तो बाजारात असेल.", correctAnswer: "He will be at the market.", options: shuffleArray(["He","will","be","at","the","market","garden","room","school"]) },
    { question: "ते बागेत असतील.", correctAnswer: "They will be in the garden.", options: shuffleArray(["They","will","be","in","the","garden","room","school","home"]) },
  ],

  negative: [
    { question: "मी रागावलेला नसेन.", correctAnswer: "I will not be angry.", options: shuffleArray(["I","will","not","be","angry","happy","garden","big"]) },
    { question: "तू व्यस्त नसेस.", correctAnswer: "You will not be busy.", options: shuffleArray(["You","will","not","be","busy","school","garden","tree"]) },
    { question: "आपण उशीर केलेला नसेल.", correctAnswer: "We will not be late.", options: shuffleArray(["We","will","not","be","late","home","ready","happy"]) },
    { question: "ती आजारी नसेल.", correctAnswer: "She will not be sick.", options: shuffleArray(["She","will","not","be","sick","room","flower","garden"]) },
    { question: "तो घरी नसेल.", correctAnswer: "He will not be at home.", options: shuffleArray(["He","will","not","be","at","home","school","room","garden"]) },
    { question: "ते आनंदी नसतील.", correctAnswer: "They will not be happy.", options: shuffleArray(["They","will","not","be","happy","garden","room","school","class"]) },
    { question: "ते मांजर नसेल.", correctAnswer: "It will not be a cat.", options: shuffleArray(["It","will","not","be","a","cat","dog","small"]) },
    { question: "मी शाळेत नसेन.", correctAnswer: "I will not be at school.", options: shuffleArray(["I","will","not","be","at","school","garden","home","tree"]) },
    { question: "तू तयार नसेस.", correctAnswer: "You will not be ready.", options: shuffleArray(["You","will","not","be","ready","room","garden","happy"]) },
    { question: "आपण मित्र नसेल.", correctAnswer: "We will not be friends.", options: shuffleArray(["We","will","not","be","friends","class","garden","home"]) },
    { question: "ती सुंदर नसेल.", correctAnswer: "She will not be beautiful.", options: shuffleArray(["She","will","not","be","beautiful","home","garden","room"]) },
    { question: "तो हुशार नसेल.", correctAnswer: "He will not be clever.", options: shuffleArray(["He","will","not","be","clever","home","tree","garden"]) },
    { question: "ते व्यस्त नसतील.", correctAnswer: "They will not be busy.", options: shuffleArray(["They","will","not","be","busy","garden","room","school"]) },
    { question: "ते मोठे नसेल.", correctAnswer: "It will not be big.", options: shuffleArray(["It","will","not","be","big","small","tree","garden"]) },
    { question: "मी ऑफिसमध्ये नसेन.", correctAnswer: "I will not be at the office.", options: shuffleArray(["I","will","not","be","at","the","office","room","school"]) },
    { question: "तू बाजारात नसेस.", correctAnswer: "You will not be at the market.", options: shuffleArray(["You","will","not","be","at","the","market","room","garden"]) },
    { question: "आपण वर्गात नसेल.", correctAnswer: "We will not be in the class.", options: shuffleArray(["We","will","not","be","in","the","class","room","garden"]) },
    { question: "ती खोलीत नसेल.", correctAnswer: "She will not be in the room.", options: shuffleArray(["She","will","not","be","in","the","room","garden","home"]) },
    { question: "तो शाळेत नसेल.", correctAnswer: "He will not be at school.", options: shuffleArray(["He","will","not","be","at","school","room","garden"]) },
    { question: "ते बागेत नसतील.", correctAnswer: "They will not be in the garden.", options: shuffleArray(["They","will","not","be","in","the","garden","school","room","home"]) },
  ],

  verbal: [
    { question: "मी बरोबर असेन का?", correctAnswer: "Will I be right?", options: shuffleArray(["Will","I","be","right","Are","happy","home","ready"]) },
    { question: "तू तयार असेस का?", correctAnswer: "Will you be ready?", options: shuffleArray(["Will","you","be","ready","Am","happy","school","garden"]) },
    { question: "आपण मित्र असू का?", correctAnswer: "Will we be friends?", options: shuffleArray(["Will","we","be","friends","Are","happy","room","school"]) },
    { question: "ती शाळेत असेल का?", correctAnswer: "Will she be at school?", options: shuffleArray(["Will","she","be","at","school","room","garden","tree"]) },
    { question: "तो घरी असेल का?", correctAnswer: "Will he be at home?", options: shuffleArray(["Will","he","be","at","home","garden","room","school"]) },
    { question: "ते आनंदी असतील का?", correctAnswer: "Will they be happy?", options: shuffleArray(["Will","they","be","happy","Are","school","garden","room"]) },
    { question: "ते मांजर असेल का?", correctAnswer: "Will it be a cat?", options: shuffleArray(["Will","it","be","a","cat","dog","small","home"]) },
    { question: "मी उशीर केला असेल का?", correctAnswer: "Will I be late?", options: shuffleArray(["Will","I","be","late","Am","home","school","garden"]) },
    { question: "तू व्यस्त असेस का?", correctAnswer: "Will you be busy?", options: shuffleArray(["Will","you","be","busy","Are","garden","room","tree"]) },
    { question: "आपण आनंदी असू का?", correctAnswer: "Will we be happy?", options: shuffleArray(["Will","we","be","happy","Are","school","room","garden"]) },
    { question: "ती खोलीत असेल का?", correctAnswer: "Will she be in the room?", options: shuffleArray(["Will","she","be","in","the","room","garden","school","home"]) },
    { question: "तो बाजारात असेल का?", correctAnswer: "Will he be at the market?", options: shuffleArray(["Will","he","be","at","the","market","garden","room","school"]) },
    { question: "ते बागेत असतील का?", correctAnswer: "Will they be in the garden?", options: shuffleArray(["Will","they","be","in","the","garden","room","school","home"]) },
    { question: "ते मोठे असेल का?", correctAnswer: "Will it be big?", options: shuffleArray(["Will","it","be","big","small","room","garden","tree"]) },
    { question: "मी ऑफिसमध्ये असेन का?", correctAnswer: "Will I be at the office?", options: shuffleArray(["Will","I","be","at","the","office","room","school","home"]) },
    { question: "तू शाळेत असेस का?", correctAnswer: "Will you be at school?", options: shuffleArray(["Will","you","be","at","school","room","garden","tree"]) },
    { question: "आपण वर्गात असू का?", correctAnswer: "Will we be in the class?", options: shuffleArray(["Will","we","be","in","the","class","room","school","garden"]) },
    { question: "ती सुंदर असेल का?", correctAnswer: "Will she be beautiful?", options: shuffleArray(["Will","she","be","beautiful","home","garden","room","tree"]) },
    { question: "तो हुशार असेल का?", correctAnswer: "Will he be clever?", options: shuffleArray(["Will","he","be","clever","room","garden","school","tree"]) },
    { question: "ते व्यस्त असतील का?", correctAnswer: "Will they be busy?", options: shuffleArray(["Will","they","be","busy","garden","room","school","home"]) },
  ],

  wh: [
    { question: "तू कुठे असेस?", correctAnswer: "Where will you be?", options: shuffleArray(["Where","will","you","be","When","school","room","home"]) },
    { question: "तो कधी घरी असेल?", correctAnswer: "When will he be at home?", options: shuffleArray(["When","will","he","be","at","home","school","garden","room"]) },
    { question: "ती कोण असेल?", correctAnswer: "Who will she be?", options: shuffleArray(["Who","will","she","be","What","garden","room","school"]) },
    { question: "तो कसा असेल?", correctAnswer: "How will he be?", options: shuffleArray(["How","will","he","be","Where","school","home","garden"]) },
    { question: "ते कुठे असतील?", correctAnswer: "Where will they be?", options: shuffleArray(["Where","will","they","be","When","room","school","home"]) },
    { question: "ते काय असेल?", correctAnswer: "What will it be?", options: shuffleArray(["What","will","it","be","Where","garden","home","room"]) },
    { question: "मी का उशीर केला असेल?", correctAnswer: "Why will I be late?", options: shuffleArray(["Why","will","I","be","late","home","school","garden"]) },
    { question: "तू कोण असेस?", correctAnswer: "Who will you be?", options: shuffleArray(["Who","will","you","be","What","room","garden","tree"]) },
    { question: "आपण कुठे असू?", correctAnswer: "Where will we be?", options: shuffleArray(["Where","will","we","be","When","school","room","garden"]) },
    { question: "ती कधी शाळेत असेल?", correctAnswer: "When will she be at school?", options: shuffleArray(["When","will","she","be","at","school","room","garden"]) },
    { question: "तो का आनंदी असेल?", correctAnswer: "Why will he be happy?", options: shuffleArray(["Why","will","he","be","happy","school","room","garden"]) },
    { question: "ते कधी तयार असतील?", correctAnswer: "When will they be ready?", options: shuffleArray(["When","will","they","be","ready","garden","room","school"]) },
    { question: "ते कसे मोठे असेल?", correctAnswer: "How will it be big?", options: shuffleArray(["How","will","it","be","big","small","room","garden"]) },
    { question: "मी कोण असेन?", correctAnswer: "Who will I be?", options: shuffleArray(["Who","will","I","be","What","garden","school","room"]) },
    { question: "तू का व्यस्त असेस?", correctAnswer: "Why will you be busy?", options: shuffleArray(["Why","will","you","be","busy","school","garden","room"]) },
    { question: "आपण कोण असू?", correctAnswer: "Who will we be?", options: shuffleArray(["Who","will","we","be","What","school","room","garden"]) },
    { question: "ती का सुंदर असेल?", correctAnswer: "Why will she be beautiful?", options: shuffleArray(["Why","will","she","be","beautiful","room","garden","school"]) },
    { question: "तो कुठे असेल?", correctAnswer: "Where will he be?", options: shuffleArray(["Where","will","he","be","When","room","school","garden"]) },
    { question: "ते कोण असतील?", correctAnswer: "Who will they be?", options: shuffleArray(["Who","will","they","be","What","school","garden","room"]) },
    { question: "ते कधी बागेत असतील?", correctAnswer: "When will they be in the garden?", options: shuffleArray(["When","will","they","be","in","the","garden","school","room"]) },
  ]
};

