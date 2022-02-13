import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref,
  } from "firebase/database";
  import { useEffect } from "react";
  import { useState } from "react/cjs/react.development";
  
  export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      //  databased related work
      async function fetchQuestions() {
        const db = getDatabase();
        const quizRef = ref(db, "quiz/" + videoID +"/questions");
        const quizQuery = query(
          quizRef,
          orderByKey(),
        );
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(quizQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setQuestions((preQuestions) => {
              return [...preQuestions, ...Object.values(snapshot.val())];
            });
          } 
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
      setTimeout(() => {
        fetchQuestions();
      }, 2000);
    }, [videoID]);
  
    return {
      loading,
      error,
      questions,
    };
  }
  