import React, {useState} from 'react'

const Correction = ({
    questions
}) => {
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const answer = () => {
        if(questions.correctAnswer === "answerA"){
            return questions.answerA
        }else if(questions.correctAnswer === "answerB"){
            return questions.answerB
        }else if(questions.correctAnswer === "answerC"){
            return questions.answerC
        }else if(questions.correctAnswer === "answerD"){
            return questions.answerD
        }
    }
    return (
        <>
            <div className="question">
                {questions.question}
            </div>
            <div className="answer-selection">
                <div>
                    <div className={questions.score === "correct" ? "answer correct-answer" : "answer wrong-answer"}>
                        You {questions.score === "correct" ? "passed" : "failed"} this question. The answer is: <b>{answer()}</b>
                    </div>
                </div>

                <div></div>

                <div>
                    <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                        View Correction
                    </div>
                </div>
            </div>

            <div className={submitAnswers ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setSubmitAnswers(!submitAnswers)}></div>
                <div className="corrections-inner">
                    <div className="navigation">
                        <span onClick={() => setSubmitAnswers(!submitAnswers)}>close &times;</span>
                    </div>

                    <div className="text">
                        {questions.correction}
                    </div>

                    <div className="media"></div>
                </div>
            </div>
            
        </>
    )
}

export default Correction
