import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onUpdated}) {
  console.log(questions);
const arrQuestions=questions.map(question=>{
  return <QuestionItem key={question.id} question={question} onUpdated={onUpdated} />
})
useEffect(()=>{

})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{arrQuestions}</ul>
    </section>
  );
}

export default QuestionList;
