// ✅ To Be - Present Tense Quiz Data (Positive / Negative / Verbal / WH)
// Marathi -> English

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const ToBePresentData = {

  positive: [
    { question: "मी विद्यार्थी आहे.", correctAnswer: "I am a student.", options: shuffleArray(["I","am","a","student","teacher","school","big","village"]) },
    { question: "तू शिक्षक आहेस.", correctAnswer: "You are a teacher.", options: shuffleArray(["You","are","a","teacher","student","ready","house","class"]) },
    { question: "आपण मित्र आहोत.", correctAnswer: "We are friends.", options: shuffleArray(["We","are","friends","happy","busy","garden","big","home"]) },
    { question: "ती परिचारिका आहे.", correctAnswer: "She is a nurse.", options: shuffleArray(["She","is","a","nurse","doctor","school","room","flower"]) },
    { question: "तो डॉक्टर आहे.", correctAnswer: "He is a doctor.", options: shuffleArray(["He","is","a","doctor","teacher","class","happy","village"]) },
    { question: "ते विद्यार्थी आहेत.", correctAnswer: "They are students.", options: shuffleArray(["They","are","students","ready","garden","room","school","big"]) },
    { question: "ते मांजर आहे.", correctAnswer: "It is a cat.", options: shuffleArray(["It","is","a","cat","dog","happy","small","village"]) },
    { question: "मी आनंदी आहे.", correctAnswer: "I am happy.", options: shuffleArray(["I","am","happy","ready","busy","school","garden","tree"]) },
    { question: "तू तयार आहेस.", correctAnswer: "You are ready.", options: shuffleArray(["You","are","ready","happy","flower","big","class","room"]) },
    { question: "आपण व्यस्त आहोत.", correctAnswer: "We are busy.", options: shuffleArray(["We","are","busy","market","garden","happy","home","tree"]) },
    { question: "ती सुंदर आहे.", correctAnswer: "She is beautiful.", options: shuffleArray(["She","is","beautiful","happy","ready","school","room","flower"]) },
    { question: "तो हुशार आहे.", correctAnswer: "He is clever.", options: shuffleArray(["He","is","clever","smart","happy","tree","garden","class"]) },
    { question: "ते आनंदी आहेत.", correctAnswer: "They are happy.", options: shuffleArray(["They","are","happy","ready","busy","garden","room","school"]) },
    { question: "ते मोठे आहे.", correctAnswer: "It is big.", options: shuffleArray(["It","is","big","small","tree","school","garden","ready"]) },
    { question: "मी ऑफिसमध्ये आहे.", correctAnswer: "I am at the office.", options: shuffleArray(["I","am","at","the","office","school","garden","home"]) },
    { question: "तू शाळेत आहेस.", correctAnswer: "You are at school.", options: shuffleArray(["You","are","at","school","room","garden","big","class"]) },
    { question: "आपण वर्गात आहोत.", correctAnswer: "We are in the class.", options: shuffleArray(["We","are","in","the","class","garden","school","happy"]) },
    { question: "ती खोलीत आहे.", correctAnswer: "She is in the room.", options: shuffleArray(["She","is","in","the","room","school","garden","ready"]) },
    { question: "तो बाजारात आहे.", correctAnswer: "He is at the market.", options: shuffleArray(["He","is","at","the","market","garden","tree","school"]) },
    { question: "ते बागेत आहेत.", correctAnswer: "They are in the garden.", options: shuffleArray(["They","are","in","the","garden","school","home","room"]) },
  ],

  negative: [
    { question: "मी रागावलेलो नाही.", correctAnswer: "I am not angry.", options: shuffleArray(["I","am","not","angry","happy","big","garden","ready"]) },
    { question: "तू व्यस्त नाहीस.", correctAnswer: "You are not busy.", options: shuffleArray(["You","are","not","busy","school","tree","happy","village"]) },
    { question: "आपण उशीर केलेला नाही.", correctAnswer: "We are not late.", options: shuffleArray(["We","are","not","late","ready","garden","happy","market"]) },
    { question: "ती आजारी नाही.", correctAnswer: "She is not sick.", options: shuffleArray(["She","is","not","sick","home","flower","garden","room"]) },
    { question: "तो घरी नाही.", correctAnswer: "He is not at home.", options: shuffleArray(["He","is","not","at","home","school","garden","room"]) },
    { question: "ते आनंदी नाहीत.", correctAnswer: "They are not happy.", options: shuffleArray(["They","are","not","happy","school","ready","garden","class"]) },
    { question: "ते मांजर नाही.", correctAnswer: "It is not a cat.", options: shuffleArray(["It","is","not","a","cat","dog","small","village"]) },
    { question: "मी शाळेत नाही.", correctAnswer: "I am not at school.", options: shuffleArray(["I","am","not","at","school","garden","happy","tree"]) },
    { question: "तू तयार नाहीस.", correctAnswer: "You are not ready.", options: shuffleArray(["You","are","not","ready","room","happy","garden","flower"]) },
    { question: "आपण मित्र नाही.", correctAnswer: "We are not friends.", options: shuffleArray(["We","are","not","friends","happy","garden","tree","class"]) },
    { question: "ती सुंदर नाही.", correctAnswer: "She is not beautiful.", options: shuffleArray(["She","is","not","beautiful","home","class","garden","tree"]) },
    { question: "तो हुशार नाही.", correctAnswer: "He is not clever.", options: shuffleArray(["He","is","not","clever","happy","home","garden","flower"]) },
    { question: "ते व्यस्त नाहीत.", correctAnswer: "They are not busy.", options: shuffleArray(["They","are","not","busy","school","garden","ready","tree"]) },
    { question: "ते मोठे नाही.", correctAnswer: "It is not big.", options: shuffleArray(["It","is","not","big","small","garden","school","class"]) },
    { question: "मी ऑफिसमध्ये नाही.", correctAnswer: "I am not at the office.", options: shuffleArray(["I","am","not","at","the","office","room","school"]) },
    { question: "तू बाजारात नाहीस.", correctAnswer: "You are not at the market.", options: shuffleArray(["You","are","not","at","the","market","garden","room","flower"]) },
    { question: "आपण वर्गात नाही.", correctAnswer: "We are not in the class.", options: shuffleArray(["We","are","not","in","the","class","garden","tree","room"]) },
    { question: "ती खोलीत नाही.", correctAnswer: "She is not in the room.", options: shuffleArray(["She","is","not","in","the","room","school","garden","happy"]) },
    { question: "तो शाळेत नाही.", correctAnswer: "He is not at school.", options: shuffleArray(["He","is","not","at","school","garden","room","tree"]) },
    { question: "ते बागेत नाहीत.", correctAnswer: "They are not in the garden.", options: shuffleArray(["They","are","not","in","the","garden","school","home","room"]) },
  ],

  verbal: [
    { question: "मी बरोबर आहे का?", correctAnswer: "Am I right?", options: shuffleArray(["Am","I","right","Are","Was","home","happy","ready"]) },
    { question: "तू तयार आहेस का?", correctAnswer: "Are you ready?", options: shuffleArray(["Are","you","ready","Am","happy","school","garden","room"]) },
    { question: "आपण मित्र आहोत का?", correctAnswer: "Are we friends?", options: shuffleArray(["Are","we","friends","Am","happy","school","tree","class"]) },
    { question: "ती शाळेत आहे का?", correctAnswer: "Is she at school?", options: shuffleArray(["Is","she","at","school","room","garden","tree","happy"]) },
    { question: "तो घरी आहे का?", correctAnswer: "Is he at home?", options: shuffleArray(["Is","he","at","home","garden","room","school","ready"]) },
    { question: "ते आनंदी आहेत का?", correctAnswer: "Are they happy?", options: shuffleArray(["Are","they","happy","Is","room","school","garden","flower"]) },
    { question: "ते मांजर आहे का?", correctAnswer: "Is it a cat?", options: shuffleArray(["Is","it","a","cat","dog","tree","happy","small"]) },
    { question: "मी उशीर केला का?", correctAnswer: "Am I late?", options: shuffleArray(["Am","I","late","Are","school","garden","home","ready"]) },
    { question: "तू व्यस्त आहेस का?", correctAnswer: "Are you busy?", options: shuffleArray(["Are","you","busy","Is","school","tree","garden","flower"]) },
    { question: "आपण आनंदी आहोत का?", correctAnswer: "Are we happy?", options: shuffleArray(["Are","we","happy","Is","class","school","room","garden"]) },
    { question: "ती खोलीत आहे का?", correctAnswer: "Is she in the room?", options: shuffleArray(["Is","she","in","the","room","school","tree","happy"]) },
    { question: "तो बाजारात आहे का?", correctAnswer: "Is he at the market?", options: shuffleArray(["Is","he","at","the","market","home","garden","room"]) },
    { question: "ते बागेत आहेत का?", correctAnswer: "Are they in the garden?", options: shuffleArray(["Are","they","in","the","garden","school","home","room"]) },
    { question: "ते मोठे आहे का?", correctAnswer: "Is it big?", options: shuffleArray(["Is","it","big","Are","small","school","garden","ready"]) },
    { question: "मी ऑफिसमध्ये आहे का?", correctAnswer: "Am I at the office?", options: shuffleArray(["Am","I","at","the","office","room","school","happy"]) },
    { question: "तू शाळेत आहेस का?", correctAnswer: "Are you at school?", options: shuffleArray(["Are","you","at","school","room","garden","flower","tree"]) },
    { question: "आपण वर्गात आहोत का?", correctAnswer: "Are we in the class?", options: shuffleArray(["Are","we","in","the","class","home","school","garden"]) },
    { question: "ती सुंदर आहे का?", correctAnswer: "Is she beautiful?", options: shuffleArray(["Is","she","beautiful","Are","happy","room","garden","tree"]) },
    { question: "तो हुशार आहे का?", correctAnswer: "Is he clever?", options: shuffleArray(["Is","he","clever","Are","room","happy","school","flower"]) },
    { question: "ते व्यस्त आहेत का?", correctAnswer: "Are they busy?", options: shuffleArray(["Are","they","busy","Is","garden","flower","school","ready"]) },
  ],

  wh: [
    { question: "तू कुठे आहेस?", correctAnswer: "Where are you?", options: shuffleArray(["Where","are","you","When","Is","school","room","home"]) },
    { question: "तो कधी घरी आहे?", correctAnswer: "When is he at home?", options: shuffleArray(["When","is","he","at","home","school","garden","room"]) },
    { question: "ती कोण आहे?", correctAnswer: "Who is she?", options: shuffleArray(["Who","is","she","What","Are","happy","room","ready"]) },
    { question: "तो कसा आहे?", correctAnswer: "How is he?", options: shuffleArray(["How","is","he","Where","Are","happy","garden","flower"]) },
    { question: "ते कुठे आहेत?", correctAnswer: "Where are they?", options: shuffleArray(["Where","are","they","When","Is","room","home","garden"]) },
    { question: "ते काय आहे?", correctAnswer: "What is it?", options: shuffleArray(["What","is","it","Where","Are","big","ready","school"]) },
    { question: "मी का उशीर केला?", correctAnswer: "Why am I late?", options: shuffleArray(["Why","am","I","late","Are","school","home","garden"]) },
    { question: "तू कोण आहेस?", correctAnswer: "Who are you?", options: shuffleArray(["Who","are","you","What","Is","happy","tree","flower"]) },
    { question: "आपण कुठे आहोत?", correctAnswer: "Where are we?", options: shuffleArray(["Where","are","we","When","Is","garden","school","home"]) },
    { question: "ती कधी शाळेत आहे?", correctAnswer: "When is she at school?", options: shuffleArray(["When","is","she","at","school","garden","room","flower"]) },
    { question: "तो का आनंदी आहे?", correctAnswer: "Why is he happy?", options: shuffleArray(["Why","is","he","happy","Are","class","garden","ready"]) },
    { question: "ते कधी तयार आहेत?", correctAnswer: "When are they ready?", options: shuffleArray(["When","are","they","ready","Is","school","tree","room"]) },
    { question: "ते कसे मोठे आहे?", correctAnswer: "How is it big?", options: shuffleArray(["How","is","it","big","Are","small","happy","tree"]) },
    { question: "मी कोण आहे?", correctAnswer: "Who am I?", options: shuffleArray(["Who","am","I","What","Are","room","tree","happy"]) },
    { question: "तू का व्यस्त आहेस?", correctAnswer: "Why are you busy?", options: shuffleArray(["Why","are","you","busy","Is","school","garden","flower"]) },
    { question: "आपण कोण आहोत?", correctAnswer: "Who are we?", options: shuffleArray(["Who","are","we","What","Is","room","school","tree"]) },
    { question: "ती का सुंदर आहे?", correctAnswer: "Why is she beautiful?", options: shuffleArray(["Why","is","she","beautiful","Are","garden","room","flower"]) },
    { question: "तो कुठे आहे?", correctAnswer: "Where is he?", options: shuffleArray(["Where","is","he","When","Are","school","tree","home"]) },
    { question: "ते कोण आहेत?", correctAnswer: "Who are they?", options: shuffleArray(["Who","are","they","What","Is","garden","school","flower"]) },
    { question: "ते कधी बागेत आहेत?", correctAnswer: "When are they in the garden?", options: shuffleArray(["When","are","they","in","the","garden","room","school"]) },
  ]
};


