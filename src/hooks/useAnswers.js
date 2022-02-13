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
    const [answers, setAnswers] = useState([]);
  
    useEffect(() => {
      //  databased related work
      async function fetchAnswers() {
        const db = getDatabase();
        const answerRef = ref(db, "answers/" + videoID +"/questions");
        const answerQuery = query(
          answerRef,
          orderByKey(),
        );
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(answerQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setAnswers((preAnswers) => {
              return [...preAnswers, ...Object.values(snapshot.val())];
            });
          } 
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
      setTimeout(() => {
        fetchAnswers();
      }, 2000);
    }, [videoID]);
  
    return {
      loading,
      error,
      answers,
    };
  }
  