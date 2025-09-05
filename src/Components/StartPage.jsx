// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IoCheckmarkCircle } from "react-icons/io5";

// export default function StartPage() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ Categories with sentence types
//   const CATEGORIES = {
//     "To Be Sentences Quiz": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Present Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Present continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Past Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//   };

//   // ✅ Labels for display
//   const TYPE_LABELS = {
//     Positive: "Positive",
//     Negative: "Negative",
//     Verbal: "Verbal",
//     Wh: "WH Question",
//   };

//   // ✅ Load completed data from localStorage
//   const [completedData, setCompletedData] = useState(() => {
//     const stored = localStorage.getItem("completedData");
//     return stored ? JSON.parse(stored) : {};
//   });

//   // ✅ Diamond count
//   const [diamonds, setDiamonds] = useState(() => {
//     const stored = localStorage.getItem("diamonds");
//     return stored ? JSON.parse(stored) : 0;
//   });

//   // ✅ Update completedData + diamonds when returning from quiz
//   useEffect(() => {
//     const scoreData = location.state;
//     if (scoreData?.completedType && scoreData?.category) {
//       const normalizedType =
//         scoreData.completedType.toLowerCase() === "wh question" ||
//         scoreData.completedType.toLowerCase() === "wh"
//           ? "Wh"
//           : scoreData.completedType;

//       setCompletedData((prev) => {
//         const prevCategory = prev[scoreData.category] || [];
//         if (!prevCategory.includes(normalizedType)) {
//           const updatedCategory = [...prevCategory, normalizedType];
//           const updatedData = {
//             ...prev,
//             [scoreData.category]: updatedCategory,
//           };
//           localStorage.setItem("completedData", JSON.stringify(updatedData));
//           return updatedData;
//         }
//         return prev;
//       });
//     }

//     // ✅ Refresh diamond count
//     const stored = localStorage.getItem("diamonds");
//     if (stored) setDiamonds(JSON.parse(stored));
//   }, [location.state]);

//   // ✅ Quiz button component
//   const QuizButton = ({ category, type, index }) => {
//     const completedList = completedData[category] || [];
//     const isCompleted = completedList.includes(type);

//     // ✅ Unlock Logic: पहिला question नेहमी unlocked, बाकी मागचा complete झाल्यावर
//     const isUnlocked =
//       index === 0 || completedList.includes(CATEGORIES[category][index - 1]);

//     // ✅ Route handling
//     const path =
//       category === "To Be Past Sentences"
//         ? `/past/${type.toLowerCase()}`
//         : category === "To Be Future Sentences"
//         ? `/future/${type.toLowerCase()}`
//         : category === "Have/Has Sentences"
//         ? `/have/${type.toLowerCase()}`
//         : category === "Have/Has Past Sentences"
//         ? `/have/past/${type.toLowerCase()}`
//         : category === "Have/Has Future Sentences"
//         ? `/have/future/${type.toLowerCase()}`
//         : category === "There Is/Are Sentences"
//         ? `/thereis/${type.toLowerCase()}`
//         : category === "There Is/Are Past Sentences"
//         ? `/thereis/past/${type.toLowerCase()}`
//         : category === "There Is/Are Future Sentences"
//         ? `/thereis/future/${type.toLowerCase()}`
//         : category === "Simple Present Sentences"
//         ? `/simplepresent/${type.toLowerCase()}`
//         : category === "Simple Past Sentences"
//         ? `/simplepast/${type.toLowerCase()}`
//         : category === "Simple Future Sentences"
//         ? `/simplefuture/${type.toLowerCase()}`
//         : category === "Present continuous Sentences"
//         ? `/presentcontinuous/${type.toLowerCase()}`
//         : category === "Past Continuous Sentences"
//         ? `/pastcontinuous/${type.toLowerCase()}`
//         : `/quiz/${type.toLowerCase()}`;

//     return (
//       <button
//         onClick={() => isUnlocked && navigate(path, { state: { category } })}
//         disabled={!isUnlocked}
//         className={`w-full py-4 rounded-full flex items-center px-4 gap-3 transition 
//           ${
//             isCompleted
//               ? "bg-green-700"
//               : isUnlocked
//               ? "bg-blue-500 hover:bg-blue-600"
//               : "bg-gray-600 opacity-50 cursor-not-allowed"
//           }
//         `}
//       >
//         {isCompleted && <IoCheckmarkCircle className="text-white" size={20} />}
//         <span>{TYPE_LABELS[type] || type}</span>
//       </button>
//     );
//   };

//   return (
//     <>
//       <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 pt-10 gap-8">
//         {/* ✅ Diamonds display */}
// <div className="fixed top-4 right-4 flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg z-50">
//   💎 <span className="font-bold">{diamonds}</span>
// </div>

//         <h1 className="text-3xl font-bold">Quiz Categories</h1>

//         {/* ✅ Detailed Categories with progress */}
//         <div className="flex flex-col text-2xl px-5 w-full max-w-md gap-8 mt-6">
//           {Object.keys(CATEGORIES).map((category) => (
//             <div key={category}>
//               <h2 className="text-xl font-semibold mb-3">{category}</h2>
//               <div className="flex flex-col gap-4 ">
//                 {CATEGORIES[category].map((type, idx) => (
//                   <QuizButton
//                     key={`${category}-${type}`}
//                     category={category}
//                     type={type}
//                     index={idx}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function StartPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Categories with sentence types
  const CATEGORIES = {
    "To Be Sentences Quiz": ["Positive", "Negative", "Verbal", "Wh"],
    "To Be Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "To Be Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Have/Has Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Have/Has Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Have/Has Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "There Is/Are Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "There Is/Are Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "There Is/Are Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Simple Present Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Simple Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Simple Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Present Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
    "Past Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
  };

  // ✅ Labels for display
  const TYPE_LABELS = {
    Positive: "Positive",
    Negative: "Negative",
    Verbal: "Verbal",
    Wh: "WH Question",
  };

  // ✅ Load completed data
  const [completedData, setCompletedData] = useState(() => {
    const stored = localStorage.getItem("completedData");
    return stored ? JSON.parse(stored) : {};
  });

  const [diamonds, setDiamonds] = useState(() => {
    const stored = localStorage.getItem("diamonds");
    return stored ? JSON.parse(stored) : 0;
  });

  // ✅ Normalize
  const normalizeType = (type) => {
    const t = type.toLowerCase();
    if (t === "wh question" || t === "wh") return "wh";
    return t;
  };

  // ✅ Save completed data when quiz finishes
  useEffect(() => {
    const scoreData = location.state;
    if (scoreData?.completedType && scoreData?.category) {
      const normalizedType = normalizeType(scoreData.completedType);

      setCompletedData((prev) => {
        const prevCategory = prev[scoreData.category] || [];
        if (!prevCategory.includes(normalizedType)) {
          const updatedCategory = [...prevCategory, normalizedType];
          const updatedData = {
            ...prev,
            [scoreData.category]: updatedCategory,
          };
          localStorage.setItem("completedData", JSON.stringify(updatedData));
          return updatedData;
        }
        return prev;
      });
    }

    const stored = localStorage.getItem("diamonds");
    if (stored) setDiamonds(JSON.parse(stored));
  }, [location.state]);

  // ✅ QuizButton
  const QuizButton = ({ category, type, index }) => {
    const completedList = (completedData[category] || []).map((t) =>
      t.toLowerCase()
    );
    const currentType = normalizeType(type);

    const isCompleted = completedList.includes(currentType);

    // ✅ Unlock fix: मागचा complete झाला का?
    const prevType =
      index > 0 ? normalizeType(CATEGORIES[category][index - 1]) : null;
    const isUnlocked = index === 0 || completedList.includes(prevType);

    // ✅ Routes
    const path =
      category === "To Be Past Sentences"
        ? `/past/${type.toLowerCase()}`
        : category === "To Be Future Sentences"
        ? `/future/${type.toLowerCase()}`
        : category === "Have/Has Sentences"
        ? `/have/${type.toLowerCase()}`
        : category === "Have/Has Past Sentences"
        ? `/have/past/${type.toLowerCase()}`
        : category === "Have/Has Future Sentences"
        ? `/have/future/${type.toLowerCase()}`
        : category === "There Is/Are Sentences"
        ? `/thereis/${type.toLowerCase()}`
        : category === "There Is/Are Past Sentences"
        ? `/thereis/past/${type.toLowerCase()}`
        : category === "There Is/Are Future Sentences"
        ? `/thereis/future/${type.toLowerCase()}`
        : category === "Simple Present Sentences"
        ? `/simplepresent/${type.toLowerCase()}`
        : category === "Simple Past Sentences"
        ? `/simplepast/${type.toLowerCase()}`
        : category === "Simple Future Sentences"
        ? `/simplefuture/${type.toLowerCase()}`
        : category === "Present Continuous Sentences"
        ? `/presentcontinuous/${type.toLowerCase()}`
        : category === "Past Continuous Sentences"
        ? `/pastcontinuous/${type.toLowerCase()}`
        : `/quiz/${type.toLowerCase()}`;

    return (
      <button
        onClick={() => isUnlocked && navigate(path, { state: { category } })}
        disabled={!isUnlocked}
        className={`w-full py-4 rounded-full flex items-center px-4 gap-3 transition 
          ${
            isCompleted
              ? "bg-green-700"
              : isUnlocked
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600 opacity-50 cursor-not-allowed"
          }
        `}
      >
        {isCompleted && <IoCheckmarkCircle className="text-white" size={20} />}
        <span>{TYPE_LABELS[type] || type}</span>
      </button>
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 pt-10 gap-8">
      {/* Diamonds */}
      <div className="fixed top-4 right-4 flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg z-50">
        💎 <span className="font-bold">{diamonds}</span>
      </div>

      <h1 className="text-3xl font-bold">Quiz Categories</h1>

      <div className="flex flex-col text-2xl px-5 w-full max-w-md gap-8 mt-6">
        {Object.keys(CATEGORIES).map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-3">{category}</h2>
            <div className="flex flex-col gap-4 ">
              {CATEGORIES[category].map((type, idx) => (
                <QuizButton
                  key={`${category}-${type}`}
                  category={category}
                  type={type}
                  index={idx}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}









// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IoCheckmarkCircle } from "react-icons/io5";

// export default function StartPage() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const CATEGORIES = {
//     "To Be Sentences Quiz": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Present Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Present continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Past Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//   };

//   const TYPE_LABELS = {
//     Positive: "Positive",
//     Negative: "Negative",
//     Verbal: "Verbal",
//     Wh: "WH Question",
//   };

//   const [completedData, setCompletedData] = useState(() => {
//     const stored = localStorage.getItem("completedData");
//     return stored ? JSON.parse(stored) : {};
//   });

//   const [diamonds, setDiamonds] = useState(() => {
//     const stored = localStorage.getItem("diamonds");
//     return stored ? JSON.parse(stored) : 0;
//   });

//   useEffect(() => {
//     const scoreData = location.state;
//     if (scoreData?.completedType && scoreData?.category) {
//       const normalizedType =
//         scoreData.completedType.toLowerCase().includes("wh") ? "Wh" : scoreData.completedType;

//       setCompletedData((prev) => {
//         const prevCategory = prev[scoreData.category] || [];
//         if (!prevCategory.includes(normalizedType)) {
//           const updatedCategory = [...prevCategory, normalizedType];
//           const updatedData = {
//             ...prev,
//             [scoreData.category]: updatedCategory,
//           };
//           localStorage.setItem("completedData", JSON.stringify(updatedData));
//           return updatedData;
//         }
//         return prev;
//       });
//     }

//     const stored = localStorage.getItem("diamonds");
//     if (stored) setDiamonds(JSON.parse(stored));
//   }, [location.state]);

//   const QuizButton = ({ category, type, index }) => {
//     const completedList = completedData[category] || [];
//     const isCompleted = completedList.includes(type);
//     const isUnlocked =
//       index === 0 || completedList.includes(CATEGORIES[category][index - 1]);

//     // const path = `/${category
//     //   .toLowerCase()
//     //   .replace(/\s+/g, "")}/${type.toLowerCase()}`;

//     return (
//       <button
//         onClick={() => isUnlocked && navigate(path, { state: { category } })}
//         disabled={!isUnlocked}
//         title={!isUnlocked ? "Complete previous task to unlock" : ""}
//         className={`w-full py-4 rounded-full flex items-center px-4 gap-3 transition 
//           ${
//             isCompleted
//               ? "bg-green-700"
//               : isUnlocked
//               ? "bg-blue-500 hover:bg-blue-600"
//               : "bg-gray-600 opacity-50 cursor-not-allowed"
//           }
//         `}
//       >
//         {isCompleted && <IoCheckmarkCircle className="text-white" size={20} />}
//         <span>{TYPE_LABELS[type] || type}</span>
//       </button>
//     );
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 pt-10 gap-8">
//       <div className="fixed top-4 right-4 flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg z-50">
//         💎 <span className="font-bold">{diamonds}</span>
//       </div>

//       <h1 className="text-3xl font-bold">Quiz Categories</h1>

//       <div className="flex flex-col text-2xl px-5 w-full max-w-md gap-8 mt-6">
//         {Object.keys(CATEGORIES).map((category) => (
//           <div key={category}>
//             <h2 className="text-xl font-semibold mb-3">{category}</h2>
//             <div className="flex flex-col gap-4 ">
//               {CATEGORIES[category].map((type, idx) => (
//                 <QuizButton
//                   key={`${category}-${type}`}
//                   category={category}
//                   type={type}
//                   index={idx}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoCheckmarkCircle } from "react-icons/io5";

// export default function StartPage() {
//   const navigate = useNavigate();

//   const CATEGORIES = ["Positive", "Negative", "Verbal", "WH"];

//   // Completed categories
//   const [completed, setCompleted] = useState(() => {
//     try {
//       const saved = localStorage.getItem("completedData");
//       return saved ? JSON.parse(saved) : [];
//     } catch (e) {
//       console.error("Error parsing completedData from localStorage:", e);
//       return [];
//     }
//   });

//   // Diamonds
//   const [diamonds, setDiamonds] = useState(() => {
//     try {
//       const saved = localStorage.getItem("diamonds");
//       return saved ? Number(JSON.parse(saved)) : 0;
//     } catch (e) {
//       return 0;
//     }
//   });

//   // Save completed categories to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("completedData", JSON.stringify(completed));
//   }, [completed]);

//   // Save diamonds to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("diamonds", JSON.stringify(diamonds));
//   }, [diamonds]);

//   // Navigate to quiz page
//   const handleClick = (type, index) => {
//     const isUnlocked = index === 0 || completed.includes(CATEGORIES[index - 1]);
//     if (isUnlocked) {
//       navigate(`/quiz/${type.toLowerCase()}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 gap-8">
//       {/* Diamonds display */}
//       <div className="fixed top-4 right-4 flex items-center gap-2 bg-pink-500 px-4 py-2 rounded-full">
//         💎 <span className="font-bold">{diamonds}</span>
//       </div>

//       <h1 className="text-3xl font-bold mb-6">Quiz Categories</h1>

//       <div className="flex flex-col gap-4 w-full max-w-md">
//         {CATEGORIES.map((cat, idx) => {
//           const isCompleted = Array.isArray(completed) && completed.includes(cat);
//           const isUnlocked = idx === 0 || (Array.isArray(completed) && completed.includes(CATEGORIES[idx - 1]));

//           return (
//             <button
//               key={cat}
//               disabled={!isUnlocked}
//               onClick={() => handleClick(cat, idx)}
//               className={`w-full py-3 rounded-full flex items-center gap-3 justify-center
//                 ${
//                   isCompleted
//                     ? "bg-green-700"
//                     : isUnlocked
//                     ? "bg-blue-500 hover:bg-blue-600"
//                     : "bg-gray-600 opacity-50 cursor-not-allowed"
//                 }`}
//             >
//               {isCompleted && <IoCheckmarkCircle size={20} />}
//               {cat}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }









// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IoCheckmarkCircle } from "react-icons/io5";

// export default function StartPage() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const CATEGORIES = {
//     "To Be Sentences Quiz": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "To Be Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Have/Has Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "There Is/Are Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Present Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Past Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Simple Future Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Present Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//     "Past Continuous Sentences": ["Positive", "Negative", "Verbal", "Wh"],
//   };

//   const TYPE_LABELS = {
//     Positive: "Positive",
//     Negative: "Negative",
//     Verbal: "Verbal",
//     Wh: "WH Question",
//   };

//   // Correctly initialize completedData with try-catch
//   const [completedData, setCompletedData] = useState(() => {
//     try {
//       const saved = localStorage.getItem("completedData");
//       return saved ? JSON.parse(saved) : {};
//     } catch (e) {
//       console.error("Error parsing completedData from localStorage:", e);
//       return {};
//     }
//   });

//   const [diamonds, setDiamonds] = useState(() => {
//     try {
//       const saved = localStorage.getItem("diamonds");
//       return saved ? Number(saved) : 0;
//     } catch (e) {
//       console.error("Error parsing diamonds from localStorage:", e);
//       return 0;
//     }
//   });

//   // Update completed data if coming from quiz result
//   useEffect(() => {
//     const scoreData = location.state;
//     if (scoreData?.completedType && scoreData?.category) {
//       const normalizedType =
//         scoreData.completedType.toLowerCase() === "wh" ? "Wh" : scoreData.completedType;

//       setCompletedData((prev) => {
//         const prevCategory = prev[scoreData.category] || [];
//         if (!prevCategory.includes(normalizedType)) {
//           const updatedCategory = [...prevCategory, normalizedType];
//           const updatedData = {
//             ...prev,
//             [scoreData.category]: updatedCategory,
//           };
//           localStorage.setItem("completedData", JSON.stringify(updatedData));
//           return updatedData;
//         }
//         return prev;
//       });
//     }
//   }, [location.state]);

//   // Save diamonds whenever it changes
//   useEffect(() => {
//     localStorage.setItem("diamonds", diamonds);
//   }, [diamonds]);

//   const QuizButton = ({ category, type, index }) => {
//     const completedList = completedData[category] || [];
//     const isCompleted = completedList.includes(type);
//     const isUnlocked = index === 0 || completedList.includes(CATEGORIES[category][index - 1]);

//     const path = `/quiz/${category.toLowerCase().replace(/\s+/g, "")}/${type.toLowerCase()}`;
//     const path1 = `/quiz/past/${category.toLowerCase().replace(/\s+/g, "")}/${type.toLowerCase()}`;


//     return (
//       <button
//         onClick={() => isUnlocked && navigate(path, { state: { category } })}
//         disabled={!isUnlocked}
//         title={!isUnlocked ? "Complete previous task to unlock" : ""}
//         className={`w-full py-4 rounded-full flex items-center px-4 gap-3 transition 
//           ${
//             isCompleted
//               ? "bg-green-700"
//               : isUnlocked
//               ? "bg-blue-500 hover:bg-blue-600"
//               : "bg-gray-600 opacity-50 cursor-not-allowed"
//           }`}
//       >
//         {isCompleted && <IoCheckmarkCircle className="text-white" size={20} />}
//         <span>{TYPE_LABELS[type] || type}</span>
//       </button>
//     );
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 pt-10 gap-8">
//       <div className="fixed top-4 right-4 flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg z-50">
//         💎 <span className="font-bold">{diamonds}</span>
//       </div>

//       <h1 className="text-3xl font-bold">Quiz Categories</h1>

//       <div className="flex flex-col text-2xl px-5 w-full max-w-md gap-8 mt-6">
//         {Object.keys(CATEGORIES).map((category) => (
//           <div key={category}>
//             <h2 className="text-xl font-semibold mb-3">{category}</h2>
//             <div className="flex flex-col gap-4 ">
//               {CATEGORIES[category].map((type, idx) => (
//                 <QuizButton
//                   key={`${category}-${type}`}
//                   category={category}
//                   type={type}
//                   index={idx}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
