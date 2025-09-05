
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { ToBePresentData } from "../Data/ToBePresentData"; 


export default function ToBeSentencesQuiz() {
  const [sentences, setSentences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const { type } = useParams();
  const navigate = useNavigate();

  const fetchSentences = () => {
    setLoading(true);
      try {
      let parsed = ToBePresentData;

      // console.log("Fetched Data:", parsed);
      

      if (parsed) {
        // console.log(type);
        
        let categoryData = [];
        if (type === "all") {
          categoryData = [
            ...parsed.positive,
            ...parsed.negative,
            ...parsed.verbal,
            ...parsed.wh,
          ];
        } else {
          categoryData = parsed[type] || [];
        }
        // console.log("Category Data:", categoryData);
        

        //  options + correctAnswer clean 
        const fixedData = categoryData.map((q) => {
          let optionsArray = [];
          if (Array.isArray(q.options)) {
            optionsArray = q.options;
          } else if (typeof q.options === "string") {
            try {
              optionsArray = JSON.parse(q.options);
            } catch {
              const cleaned = q.options
                .replace(/^\[|\]$/g, "")
                .replace(/"/g, "")
                .trim();
              optionsArray = cleaned
                ? cleaned.split(",").map((o) => o.trim())
                : [];
            }
          }

          //  Removes the "?" at the end from options
          const cleanedOptions = optionsArray.map((o) =>
            o.trim().replace(/\?$/, "")
          );

          // Clears the Correct Answer (removes the ? at the end if there is one)
          let cleanedAnswer = q.correctAnswer ? q.correctAnswer.trim() : "";
          cleanedAnswer = cleanedAnswer.replace(/\?$/, "");

          return { ...q, options: cleanedOptions, correctAnswer: cleanedAnswer };
        });

        setSentences(fixedData);
        setCurrentIndex(0);
        setSelectedWords([]);
        setShowResult(false);
        setIsCorrect(false);
        setScore(0);
        setQuizCompleted(false);
      }
    } catch (e) {
      console.error("Error loading sentences from localStorage:", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSentences();
  }, [type]);

  const handleWordClick = (word) => {
    setSelectedWords((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const handleCheck = () => {
    let userAnswer = selectedWords.join(" ").trim();

    // If there is a ? at the end, remove it.
    userAnswer = userAnswer.replace(/\?$/, "");
    let correctAnswer = sentences[currentIndex].correctAnswer.trim();
    correctAnswer = correctAnswer.replace(/\?$/, "");

    // If there is no dot at the end, add a dot.
    if (!userAnswer.endsWith(".")) {
      userAnswer += ".";
    }
    if (!correctAnswer.endsWith(".")) {
      correctAnswer += ".";
    }

    const correct = userAnswer === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore((p) => p + 1);
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setSelectedWords([]);
      setShowResult(false);
      setIsCorrect(false);
      setCurrentIndex((p) => p + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  //  Save completed data + diamonds
  const goBackWithScore = () => {
    const category = "To Be Sentences Quiz";

    const saved = JSON.parse(localStorage.getItem("completedData")) || {};
    const prevCategory = saved[category] || [];

    // Save by capitalizing the type.
    const formattedType =
      type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    if (!prevCategory.includes(formattedType)) {
      const updated = { ...saved, [category]: [...prevCategory, formattedType] };
      localStorage.setItem("completedData", JSON.stringify(updated));
    }

    //  Diamonds save 
    const diamonds = JSON.parse(localStorage.getItem("diamonds")) || 0;
    localStorage.setItem("diamonds", diamonds + score);

    navigate("/start", {
      replace: true,
      state: {
        score,
        total: sentences.length,
        completedType: formattedType,
        category,
      },
    });
  };

  if (loading)
    return <div className="text-gray-400 text-center p-6">Loading...</div>;
  if (!sentences.length)
    return (
      <div className="text-gray-400 text-center p-6">
        No questions available.
      </div>
    );

  if (quizCompleted) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Quiz complete!</h2>
          <p className="text-lg mb-4">
            Your Score:{" "}
            <span className="text-green-400 font-bold">
              {score} / {sentences.length}
            </span>
          </p>
          <button
            onClick={goBackWithScore}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
          >
            ⬅ Return to the start page.
          </button>
        </div>
      </div>
    );
  }

  const currentSentence = sentences[currentIndex];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start text-white px-3 py-6">
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-1 text-center">
          {type === "all" ? "All Questions" : `${type} Question`}
        </h2>
        <p className="text-sm text-gray-300 mb-4 text-center">
          Question {currentIndex + 1} / {sentences.length}
        </p>

        <div className="flex items-center bg-gray-700 p-3 rounded mb-4">
          <span className="text-blue-400 text-lg mr-2">🔊</span>
          <span className="text-white text-base">
            {currentSentence.question}
          </span>
        </div>

        {/* Selected Words */}
        <div className="min-h-[48px] border border-dashed border-gray-500 rounded p-2 mb-4 flex flex-wrap gap-2 bg-gray-900">
          {selectedWords.length > 0 ? (
            selectedWords.map((word, i) => (
              <button
                key={`${word}-${i}`}
                onClick={() => handleWordClick(word)}
                className="py-1 px-2 bg-green-700 text-white rounded hover:bg-green-800 text-sm"
              >
                {word}
              </button>
            ))
          ) : (
            <span className="text-gray-500 text-sm">Choose The Word...</span>
          )}
        </div>

        {/* Word Options */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {currentSentence.options.map((word, i) => (
            <button
              key={`${word}-${i}`}
              onClick={() => handleWordClick(word)}
              className={`py-2 px-3 rounded-md text-sm w-full ${
                selectedWords.includes(word)
                  ? "bg-green-400 text-black font-semibold"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {!showResult ? (
          <button
            onClick={handleCheck}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
          >
            Check
          </button>
        ) : (
          <div className="mt-4 p-3 rounded bg-gray-700 text-center">
            <p
              className={`text-lg font-bold mb-2 ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? (
                <span className="flex justify-center items-center">
                  <IoCheckmarkCircle
                    size={24}
                    className="mr-2 text-green-400"
                  />
                  Correct Answer
                </span>
              ) : (
                <span className="flex justify-center items-center">
                  <IoCloseCircle size={24} className="mr-2 text-red-400" />
                  Wrong Answer
                </span>
              )}
            </p>
            {!isCorrect && (
              <p className="text-red-300 text-sm mb-3">
                <span className="font-bold">Correct Answer:</span> <br />
                {currentSentence.correctAnswer.endsWith(".")
                  ? currentSentence.correctAnswer
                  : currentSentence.correctAnswer + "."}
              </p>
            )}
            <button
              onClick={handleNext}
              className={`w-full mt-2 ${
                isCorrect
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } py-2 rounded text-white font-semibold`}
            >
              {currentIndex === sentences.length - 1
                ? "Complete The Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate("/start")}
        className="mt-6 text-blue-400 hover:underline"
      >
        ⬅ Go Back
      </button>
    </div>
  );
}












// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
// import { ToBePresentData } from "../Data/ToBePresentData"; 


// export default function ToBeSentencesQuiz() {
//   const [sentences, setSentences] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedWords, setSelectedWords] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const { type } = useParams();
//   const navigate = useNavigate();

//   const fetchSentences = () => {
//     setLoading(true);
//     try {
//       let parsed = JSON.parse(localStorage.getItem("ToBePresentData"));
//       if (!parsed) {
//         localStorage.setItem("ToBePresentData", JSON.stringify(ToBePresentData));
//         parsed = ToBePresentData;
//       }

//       let categoryData = [];
//       if (type === "all") {
//         categoryData = [
//           ...parsed.positive,
//           ...parsed.negative,
//           ...parsed.verbal,
//           ...parsed.wh,
//         ];
//       } else {
//         categoryData = parsed[type] || [];
//       }

//       const fixedData = categoryData.map((q) => {
//         // options clean
//         let optionsArray = [];
//         if (Array.isArray(q.options)) {
//           optionsArray = q.options;
//         } else if (typeof q.options === "string") {
//           try {
//             optionsArray = JSON.parse(q.options);
//           } catch {
//             optionsArray = q.options
//               .replace(/^\[|\]$/g, "")
//               .replace(/"/g, "")
//               .split(",")
//               .map((o) => o.trim());
//           }
//         }
//         const cleanedOptions = optionsArray.map((o) => o.trim().replace(/\?$/, ""));

//         // correctAnswer clean
//         let cleanedAnswer = q.correctAnswer ? q.correctAnswer.trim() : "";
//         cleanedAnswer = cleanedAnswer.replace(/\?$/, "");

//         return { ...q, options: cleanedOptions, correctAnswer: cleanedAnswer };
//       });

//       setSentences(fixedData);
//       setCurrentIndex(0);
//       setSelectedWords([]);
//       setShowResult(false);
//       setIsCorrect(false);
//       setScore(0);
//       setQuizCompleted(false);
//     } catch (e) {
//       console.error("Error loading sentences from localStorage:", e);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchSentences();
//   }, [type]);

//   const handleWordClick = (word) => {
//     setSelectedWords((prev) =>
//       prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
//     );
//   };

//   const handleCheck = () => {
//     let userAnswer = selectedWords.join(" ").trim().replace(/\?$/, "");
//     let correctAnswer = sentences[currentIndex].correctAnswer.trim().replace(/\?$/, "");

//     if (!userAnswer.endsWith(".")) userAnswer += ".";
//     if (!correctAnswer.endsWith(".")) correctAnswer += ".";

//     const correct = userAnswer === correctAnswer;
//     setIsCorrect(correct);
//     setShowResult(true);
//     if (correct) setScore((p) => p + 1);
//   };

//   const handleNext = () => {
//     if (currentIndex < sentences.length - 1) {
//       setSelectedWords([]);
//       setShowResult(false);
//       setIsCorrect(false);
//       setCurrentIndex((p) => p + 1);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   const goBackWithScore = () => {
//     const category = "To Be Sentences Quiz";
//     const saved = JSON.parse(localStorage.getItem("completedData")) || {};
//     const prevCategory = saved[category] || [];

//     const formattedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
//     if (!prevCategory.includes(formattedType)) {
//       const updated = { ...saved, [category]: [...prevCategory, formattedType] };
//       localStorage.setItem("completedData", JSON.stringify(updated));
//     }

//     const diamonds = JSON.parse(localStorage.getItem("diamonds")) || 0;
//     localStorage.setItem("diamonds", diamonds + score);

//     navigate("/start", {
//       replace: true,
//       state: {
//         score,
//         total: sentences.length,
//         completedType: formattedType,
//         category,
//       },
//     });
//   };

//   if (loading)
//     return <div className="text-gray-400 text-center p-6">Loading...</div>;

//   if (!sentences.length)
//     return <div className="text-gray-400 text-center p-6">No questions available.</div>;

//   if (quizCompleted) {
//     return (
//       <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
//           <h2 className="text-2xl font-bold mb-4">🎉 Quiz complete!</h2>
//           <p className="text-lg mb-4">
//             Your Score:{" "}
//             <span className="text-green-400 font-bold">
//               {score} / {sentences.length}
//             </span>
//           </p>
//           <button
//             onClick={goBackWithScore}
//             className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
//           >
//             ⬅ Return to the start page.
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentSentence = sentences[currentIndex];

//   return (
//     <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start text-white px-3 py-6">
//       <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold mb-1 text-center">
//           {type === "all" ? "All Questions" : `${type} Question`}
//         </h2>
//         <p className="text-sm text-gray-300 mb-4 text-center">
//           Question {currentIndex + 1} / {sentences.length}
//         </p>

//         <div className="flex items-center bg-gray-700 p-3 rounded mb-4">
//           <span className="text-blue-400 text-lg mr-2">🔊</span>
//           <span className="text-white text-base">{currentSentence.question}</span>
//         </div>

//         <div className="min-h-[48px] border border-dashed border-gray-500 rounded p-2 mb-4 flex flex-wrap gap-2 bg-gray-900">
//           {selectedWords.length > 0 ? (
//             selectedWords.map((word, i) => (
//               <button
//                 key={`${word}-${i}`}
//                 onClick={() => handleWordClick(word)}
//                 className="py-1 px-2 bg-green-700 text-white rounded hover:bg-green-800 text-sm"
//               >
//                 {word}
//               </button>
//             ))
//           ) : (
//             <span className="text-gray-500 text-sm">Choose The Word...</span>
//           )}
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
//           {currentSentence.options.map((word, i) => (
//             <button
//               key={`${word}-${i}`}
//               onClick={() => handleWordClick(word)}
//               className={`py-2 px-3 rounded-md text-sm w-full ${
//                 selectedWords.includes(word)
//                   ? "bg-green-400 text-black font-semibold"
//                   : "bg-gray-600 hover:bg-gray-500"
//               }`}
//             >
//               {word}
//             </button>
//           ))}
//         </div>

//         {!showResult ? (
//           <button
//             onClick={handleCheck}
//             className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
//           >
//             Check
//           </button>
//         ) : (
//           <div className="mt-4 p-3 rounded bg-gray-700 text-center">
//             <p
//               className={`text-lg font-bold mb-2 ${
//                 isCorrect ? "text-green-400" : "text-red-400"
//               }`}
//             >
//               {isCorrect ? (
//                 <span className="flex justify-center items-center">
//                   <IoCheckmarkCircle size={24} className="mr-2 text-green-400" />
//                   Correct Answer
//                 </span>
//               ) : (
//                 <span className="flex justify-center items-center">
//                   <IoCloseCircle size={24} className="mr-2 text-red-400" />
//                   Wrong Answer
//                 </span>
//               )}
//             </p>
//             {!isCorrect && (
//               <p className="text-red-300 text-sm mb-3">
//                 <span className="font-bold">Correct Answer:</span> <br />
//                 {currentSentence.correctAnswer.endsWith(".")
//                   ? currentSentence.correctAnswer
//                   : currentSentence.correctAnswer + "."}
//               </p>
//             )}
//             <button
//               onClick={handleNext}
//               className={`w-full mt-2 ${
//                 isCorrect
//                   ? "bg-green-500 hover:bg-green-600"
//                   : "bg-red-500 hover:bg-red-600"
//               } py-2 rounded text-white font-semibold`}
//             >
//               {currentIndex === sentences.length - 1 ? "Complete The Quiz" : "Next Question"}
//             </button>
//           </div>
//         )}
//       </div>

//       <button
//         onClick={() => navigate("/start")}
//         className="mt-6 text-blue-400 hover:underline"
//       >
//         ⬅ Go Back
//       </button>
//     </div>
//   );
// }










// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
// import { ToBePresentData } from "../Data/ToBePresentData";

// export default function ToBeSentencesQuiz() {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   const [sentences, setSentences] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedWord, setSelectedWord] = useState("");
//   const [showResult, setShowResult] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     let data = ToBePresentData[type] || [];
//     setSentences(data);
//   }, [type]);

//   const handleSelect = (word) => {
//     setSelectedWord(word);
//   };

//   const handleSubmit = () => {
//     if (!selectedWord) return;

//     if (selectedWord === sentences[currentIndex].correctAnswer) {
//       setIsCorrect(true);
//       setScore((prev) => prev + 1);
//     } else {
//       setIsCorrect(false);
//     }
//     setShowResult(true);
//   };

//   const handleNext = () => {
//     if (currentIndex + 1 < sentences.length) {
//       setCurrentIndex(currentIndex + 1);
//       setSelectedWord("");
//       setShowResult(false);
//       setIsCorrect(false);
//     } else {
//       const diamonds = JSON.parse(localStorage.getItem("diamonds") || "0") + score;
//       localStorage.setItem("diamonds", JSON.stringify(diamonds));

//       const completed = JSON.parse(localStorage.getItem("completedData") || "[]");
//       if (!completed.includes(type)) completed.push(type);
//       localStorage.setItem("completedData", JSON.stringify(completed));

//       navigate("/start");
//     }
//   };

//   if (!sentences.length) return <div className="p-6">No questions available.</div>;

//   const currentQ = sentences[currentIndex];

//   return (
//     <div className="min-h-screen bg-gray-800 text-white p-6 flex flex-col gap-6 items-center">
//       <h2 className="text-2xl font-bold">{type.toUpperCase()} Quiz</h2>
//       <div className="text-xl">{currentQ.question}</div>

//       <div className="flex flex-wrap gap-4 mt-4">
//         {currentQ.options.map((word) => (
//           <button
//             key={word}
//             onClick={() => handleSelect(word)}
//             className={`px-4 py-2 rounded-full ${
//               selectedWord === word ? "bg-blue-500" : "bg-gray-600"
//             }`}
//           >
//             {word}
//           </button>
//         ))}
//       </div>

//       {showResult && (
//         <div className="mt-4 text-xl">
//           {isCorrect ? (
//             <span className="text-green-400">Correct ✅</span>
//           ) : (
//             <span className="text-red-400">Wrong ❌ Answer: {currentQ.correctAnswer}</span>
//           )}
//         </div>
//       )}

//       {!showResult ? (
//         <button
//           onClick={handleSubmit}
//           className="mt-6 px-6 py-3 bg-blue-600 rounded-full"
//         >
//           Submit
//         </button>
//       ) : (
//         <button
//           onClick={handleNext}
//           className="mt-6 px-6 py-3 bg-green-600 rounded-full"
//         >
//           Next
//         </button>
//       )}

//       <div className="fixed top-4 right-4 bg-pink-500 px-4 py-2 rounded-full">
//         💎 {JSON.parse(localStorage.getItem("diamonds") || "0")}
//       </div>
//     </div>
//   );
// }
