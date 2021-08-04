import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions]=useState([]);
  const [updated,setUpdated]=useState(0);



function handleUpdated(){
  setUpdated(prev=>prev+1);
}



  useEffect(()=>{
    fetch("http://localhost:4000/questions").then(res=>res.json()).then(data=>{
      setQuestions(data);
    })
  },[updated])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onUpdated={handleUpdated} /> : <QuestionList questions={questions} onUpdated={handleUpdated} />}
    </main>
  );
}

export default App;
