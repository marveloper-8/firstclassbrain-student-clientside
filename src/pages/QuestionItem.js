import React from 'react'

const Question = ({
    questions, 
    isRunning, 
    handleChange
}) => {
    return (
        <>
            {/* <div className="number">Question <span className="digits">{id + 1}</span></div> */}
            <div className="question">
                {questions.question}
            </div>
            <div className="answer-options">
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={questions._id}
                            value={"answerA" === questions.correctAnswer ? "correct" : "wrong"}
                            className="radio"
                            onChange={handleChange}
                            // disabled = {
                            //     isRunning
                            //     ?
                            //     false
                            //     :
                            //     true
                            // }
                        />
                        <span className={
                            isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            <span className="desktop">Option</span> A
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {questions.answerA}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={questions._id}
                            value={"answerB" === questions.correctAnswer ? "correct" : "wrong"}
                            className="radio"
                            onChange={handleChange}
                            // disabled = {
                            //     isRunning
                            //     ?
                            //     false
                            //     :
                            //     true
                            // }
                        />
                        <span className={
                            isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            <span className="desktop">Option</span> B
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {questions.answerB}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={questions._id}
                            value={"answerC" === questions.correctAnswer ? "correct" : "wrong"}
                            className="radio"
                            onChange={handleChange}
                            // disabled = {
                            //     isRunning
                            //     ?
                            //     false
                            //     :
                            //     true
                            // }
                        />
                        <span className={
                            isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            <span className="desktop">Option</span> C
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {questions.answerC}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={questions._id}
                            value={"answerD" === questions.correctAnswer ? "correct" : "wrong"}
                            className="radio"
                            onChange={handleChange}
                            // disabled = {
                            //     isRunning
                            //     ?
                            //     false
                            //     :
                            //     true
                            // }
                        />
                        <span className={
                            isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            <span className="desktop">Option</span> D
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {questions.answerD}
                    </div>
                </div>
            </div>
        </>
    
    )
}

export default Question
