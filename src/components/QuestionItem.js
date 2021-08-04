import React from "react";

function QuestionItem({ question,onUpdated }) {
  console.log(question);
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleClick=(e)=>{
   fetch(`http://localhost:4000/questions/${e.target.id}`,{
     method: "delete",
     headers: {},

   });
   onUpdated(prev=>prev+1);

  }


  const handleChange=(e)=>{
    e.preventDefault();
    console.log(Number(correctIndex));
   fetch(`http://localhost:4000/questions/${e.target.id}`,{
     method:"PATCH",
     headers:{ "Content-Type": "application/json" },
     body:JSON.stringify({"correctIndex": Number(e.target.value)})
   })
   onUpdated(prev=>prev+1);
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select id={id} onChange={handleChange} defaultValue={correctIndex} >{options}</select>
      </label>
      <button id={id} onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
