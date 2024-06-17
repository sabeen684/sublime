import { FUQs } from "@/lib/fuq";
import React from "react";

interface FQU {
  id:number,
  question:string;
  answer:string;

}



export const Question:React.FC<FQU> = ({id,question,answer}) => {
  return (
    <>
    
    <div className="faq" key={id}>
      
      <div className="faq-question">
        <div className="faq-question--q">Q|</div>
        <div className="faq-question--qa">{question}</div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer--a">A|</div>
        <div className="faq-answer--an">{answer}</div>
      </div>
    </div>
    
    </>
  )
}

