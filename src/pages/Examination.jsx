import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

function Classroom() {
    const [submitAnswers, setSubmitAnswers] = useState(false)
    
    return (
        <div className="classroom-desktop examination">
            <Navigation />

            <div className="main-content">
                <section style={{marginBottom:`5vh`}}>
                    <div className="head">
                        <span className="main">Examination:</span> First Term (60 Questions)
                    </div>

                    <div className="navigation">
                        {/* <Link className="link" to='/weeks'>
                            <span className="back">{`<`} Back</span>
                        </Link> */}
                    </div>

                    <div style={{marginBottom:`5vh`}}></div>
                    <div></div>

                    <div className="time">
                        Time Limit: 60 minutes
                    </div>

                    <div className="time time-remaining">
                        38 minutes remaining
                    </div>
                </section>
                
                <div className="test-questions">
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 1</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 2</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 3</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 4</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 5</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 6</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 7</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 8</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 9</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <div className="number">Question 10</div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                        </div>
                        <div className="answer-options">
                            <div className="tab">
                                <div className="select">
                                    Option A
                                </div>
                                <div></div>
                                <div className="label">
                                    Option A Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select correct-answer">
                                    Option B
                                </div>
                                <div></div>
                                <div className="label">
                                    Option B Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option C
                                </div>
                                <div></div>
                                <div className="label">
                                    Option C Answer
                                </div>
                            </div>
                            <div className="tab">
                                <div className="select">
                                    Option D
                                </div>
                                <div></div>
                                <div className="label">
                                    Option D Answer
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <button className="submit" onClick={() => setSubmitAnswers(!submitAnswers)}>SUBMIT ANSWERS</button>
                </div>
            </div>
            
            <div className={submitAnswers ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setSubmitAnswers(!submitAnswers)}></div>
                <div className="submit-answers-inner">
                    <div className="text">
                        Do you want to submit?
                    </div>

                    <div className="buttons">
                        <button className="no" onClick={() => setSubmitAnswers(!submitAnswers)}>No</button>

                        <Link className="link" to='/examination-score'>
                            <button className="yes">Yes</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Classroom
