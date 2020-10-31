import React, {useState} from 'react'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'

function Terms() {
    const [submitAnswers, setSubmitAnswers] = useState(false)
    
    return (
        <div className="classroom-desktop examination">
            <Navigation />
            
            <div className="main-content">
                <section style={{marginBottom:`5vh`}}>
                    <div className="head">
                        <span className="main">First Term Examination:</span> Test Score and Corrections
                    </div>

                    <div style={{marginBottom:`5vh`}}></div>
                    <div></div>
                </section>

                <div className="score-projection">
                    <div className="incline-decline">
                        <img src={calender} alt="incline" />
                        <br />
                        36 wrong answers
                    </div>
                    <div className="percentage">
                        <div className="bold">40%</div>
                        answered correctly
                    </div>
                    <div className="incline-decline">
                        <img src={calender} alt="decline" />
                        <br />
                        16 correct answers
                    </div>
                </div>
                
                <div className="test-questions">
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer wrong-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-selection">
                            <div>
                                <div className="answer">
                                    Correct Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer correct-answer">
                                    Your Answer: <b>A</b>
                                </div>
                            </div>

                            <div></div>

                            <div>
                                <div className="answer view-correction" onClick={() => setSubmitAnswers(!submitAnswers)}>
                                    View Correction
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

                <Footer />
            </div>
            
            <div className={submitAnswers ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setSubmitAnswers(!submitAnswers)}></div>
                <div className="corrections-inner">
                    <div className="navigation">
                        <span onClick={() => setSubmitAnswers(!submitAnswers)}>close &times;</span>
                    </div>

                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                    </div>

                    <div className="media"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Terms