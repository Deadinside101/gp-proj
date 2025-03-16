
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Question = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const AnswerOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const questions = [
  {
    id: 1,
    text: "What's your favorite color?",
    options: [
      { id: 1, text: 'Red' },
      { id: 2, text: 'Blue' },
      { id: 3, text: 'Green' },
    ],
  },
  {
    id: 2,
    text: 'What kind of music do you like?',
    options: [
      { id: 1, text: 'Rock' },
      { id: 2, text: 'Pop' },
      { id: 3, text: 'Hip Hop' },
    ],
  },
];

function Questionnaire() {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionId, optionId) => {
    const newAnswers = [...answers];
    const index = newAnswers.findIndex((a) => a.questionId === questionId);
    if (index === -1) {
      newAnswers.push({ questionId, optionId });
    } else {
      newAnswers[index].optionId = optionId;
    }
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    // Send answers to server, etc.
  };

  return (
    <Container>
      {questions.map((q) => (
        <div key={q.id}>
          <Question>{q.text}</Question>
          {q.options.map((o) => (
            <AnswerOption key={o.id}>
              <RadioInput
                type="radio"
                name={`question-${q.id}`}
                value={o.id}
                checked={
                  answers.find((a) => a.questionId === q.id)?.optionId === o.id
                }
                onChange={() => handleAnswerChange(q.id, o.id)}
              />
              {o.text}
            </AnswerOption>
          ))}
        </div>
      ))}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
}
export default Questionnaire;

