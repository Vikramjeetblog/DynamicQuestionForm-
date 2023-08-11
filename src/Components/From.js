import React, { useState } from 'react';
import data from './data.json';
import './Form.css'; // Import your CSS file for styling

function Form() {
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const currentQuestion = data[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    const newResponses = { ...responses, [currentQuestion.id]: optionId };
    setResponses(newResponses);
    setValidationErrors({ ...validationErrors, [currentQuestion.id]: false });

    // Show popup if user selects 'no' for the first question
    if (currentQuestionIndex === 0 && optionId === 'no') {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleAnswerSubmit = () => {
    if (!responses[currentQuestion.id]) {
      setValidationErrors({ ...validationErrors, [currentQuestion.id]: true });
      return;
    }

    if (currentQuestionIndex < data.length - 1) {
      const nextQuestionIndex = getNextQuestionIndex();
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsSubmitted(true);
    }
  };

  const getNextQuestionIndex = () => {
    const nextIndex = currentQuestionIndex + 1;

    const selectedOptionId = responses[currentQuestion.id];
    const followUpQuestionId = currentQuestion.options.find(option => option.id === selectedOptionId)?.followUpQuestions;

    if (followUpQuestionId) {
      const followUpQuestionIndex = data.findIndex(question => question.id === followUpQuestionId[0]);
      if (followUpQuestionIndex !== -1) {
        return followUpQuestionIndex;
      }
    }

    return nextIndex;
  };

  return (
    <div className="App">
      <h1>Question Form</h1>
      {showPopup && (
        <div className="popup">
          <p>Please select "Yes" for the first question to proceed.</p>
        </div>
      )}
      <div className="card">
        <div className="question-container">
          {currentQuestion && (
            <div>
              <h2>Question {currentQuestionIndex + 1}</h2>
              <p className="question-text">{currentQuestion.text}</p>
              {currentQuestion.type === 'radio' && (
                <div className="options-container">
                  {currentQuestion.options.map((option) => (
                    <label className="option-label" key={option.id}>
                      <input
                        type="radio"
                        name={`question_${currentQuestion.id}`}
                        value={option.id}
                        onChange={() => handleOptionSelect(option.id)}
                        checked={responses[currentQuestion.id] === option.id}
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              )}
              {currentQuestion.type === 'checkbox' && (
                <div className="options-container">
                  {currentQuestion.options.map((option) => (
                    <label className="option-label" key={option.id}>
                      <input
                        type="checkbox"
                        name={`question_${currentQuestion.id}_${option.id}`}
                        value={option.id}
                        onChange={() => handleOptionSelect(option.id)}
                        checked={responses[currentQuestion.id]?.includes(option.id)}
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              )}
              {validationErrors[currentQuestion.id] && (
                <p className="error-message">This question is required.</p>
              )}
            </div>
          )}
        </div>
      </div>
      {!isSubmitted && currentQuestionIndex !== data.length - 1 && (
        <button className="submit-button" onClick={handleAnswerSubmit}>
          Next
        </button>
      )}
      {!isSubmitted && currentQuestionIndex === data.length - 1 && (
        <button className="submit-button" onClick={handleAnswerSubmit}>
          Submit
        </button>
      )}
      {isSubmitted && <p className="success-message">Answers submitted successfully!</p>}
    </div>
  );
}

export default Form;
