import React, {useState} from 'react'

const Question = props => {
    
    // const [state, setState] = useState({
    //     answer: "answerA"
    // })

    // const onChangeEvent = e => {
    //     setState({...state, [e.target.name]: e.target.value})
    // }

    const [state, setState] = useState({
        answers: [{answerElected: "answerA"}]
    })

    const onChangeEvent = idx => e => {
        const newAnswers = state.answers.map((shareholder, idxx) => {
            if(idx !== idxx) return shareholder;
            return { ...shareholder, answerElected: e.target.value}
        })
        setState({...state, answers: newAnswers})
    }

    console.log(state.answers)

    return (
        <div className="item">
            <input 
                type="text"
                name={props.questionsItem._id}
                value={props.questionsItem.answerElected}
                className="radio"
                onChange={onChangeEvent(props.idx)}
            />

            <div className="number">Question<li className="digits">&nbsp;</li></div>
            <div className="question">
                {props.questionsItem.question}
            </div>
            <div className="answer-options">
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={props.questionsItem._id}
                            value="answerA"
                            className="radio"
                            onChange={onChangeEvent(props.idx)}
                            disabled = {
                                props.isRunning
                                ?
                                false
                                :
                                true
                            }
                        />
                        <span className={
                            props.isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            Option A
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {props.questionsItem.answerA}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={props.questionsItem._id}
                            value="answerB"
                            className="radio"
                            onChange={onChangeEvent(props.idx)}
                            disabled = {
                                props.isRunning
                                ?
                                false
                                :
                                true
                            }
                        />
                        <span className={
                            props.isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            Option B
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {props.questionsItem.answerB}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={props.questionsItem._id}
                            value="answerC"
                            className="radio"
                            onChange={onChangeEvent(props.idx)}
                            disabled = {
                                props.isRunning
                                ?
                                false
                                :
                                true
                            }
                        />
                        <span className={
                            props.isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            Option C
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {props.questionsItem.answerC}
                    </div>
                </div>
                <div className="tab">
                    <div className="select">
                        <input 
                            type="radio"
                            name={props.questionsItem._id}
                            value="answerD"
                            className="radio"
                            onChange={onChangeEvent(props.idx)}
                            disabled = {
                                props.isRunning
                                ?
                                false
                                :
                                true
                            }
                        />
                        <span className={
                            props.isRunning 
                            ? 
                            "checkmark" 
                            : 
                            "checkmark select-background-change"
                        }></span>
                        <span className="text">
                            Option D
                        </span>
                    </div>
                    <div></div>
                    <div className="label">
                        {props.questionsItem.answerD}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
