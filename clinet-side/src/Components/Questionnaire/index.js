import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/index.js";
import {
  Body,
  Textbox,
  Form,
  Banner,
  Span,
  Button,
  BtnBlock,
  Container,
  Question,
  AnswerOption,
  RadioInput,
  FormHeader,
  Button2,
  Button3,
} from "./Style.js";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  const [showForm, setShowForm] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubbmitMassage = () => {
    setShowForm(false);
  };

  const Form2 = () => {
    const [view, setview] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSubbmitMassage(view);
      window.location.reload();
    };

    return (
      <Form show={showForm}>
        <FormHeader>
          <i className="fa fa-child"></i> {result}
        </FormHeader>
        <br />
        <Button2 type="submit" onClick={handleSubmit}>
          close
        </Button2>
        <Link to="/appointment">
          <Button3 type="submit">See Specialists</Button3>
        </Link>
      </Form>
    );
  };

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionId, optionId) => {
    console.log(questionId, optionId);
    const newAnswers = [...answers];
    const index = newAnswers.findIndex((a) => a.questionId === questionId);

    if (questionId < 15) {
      if (index === -1) {
        optionId = optionId === 1 ? true : false;
        newAnswers.push({ questionId, optionId });
      } else {
        let myA = optionId === 1 ? true : false;
        newAnswers[index].optionId = myA;
      }
    } else {
      if (index === -1) {
        newAnswers.push({ questionId, optionId });
      } else {
        newAnswers[index].optionId = optionId;
      }
    }

    console.log("Answers", answers);
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var send = {};
    const totalQuestions = questions.length;
    const answeredQuestions = answers.length;

    if (answeredQuestions < totalQuestions) {
      alert("Please answer all the questions");
    } else {
      for (var i = 0; i < 10; i++) {
        send["q" + answers[i].questionId] = answers[i].optionId;
      }
      send["jaundice"] = answers[10].optionId;
      send["family_member_with_pdd"] = answers[11].optionId;
      send["used_before"] = answers[12].optionId;
      send["gender"] = answers[13].optionId;
      send["age"] = answers[14].optionId;
      send["ethnicity"] = answers[15].optionId;
      send["language"] = answers[16].optionId;
      send["tester"] = answers[17].optionId;
    }

    console.log("Answers:", send);
    // Send answers to server, etc.
    try {
      const response = await axios.post("http://localhost:8000/detect", send);
      console.log(response.data);
      setResult(
        response.data ? "The child is atuiastic" : "The child is not atuiastic"
      );
      setShowForm(true);
    } catch (error) {
      alert("fuk data");
      console.error(error);
    }
  };

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setQuestions(res.data.questions);
    });
  }, []);

  const autismQuestions = questions.map((questionItem) => {
    return (
      <fieldset>
        <legend>Questions</legend>

        <Container>
          {questionItem.id < 15 ? (
            <div key={questionItem.id}>
              <Question>{questionItem.question}</Question>

              {questionItem.options.map((o) => (
                <AnswerOption key={o.id}>
                  <RadioInput
                    type="radio"
                    name={`question-${questionItem.id}`}
                    value={o.id}
                    checked={
                      answers.find((a) => a.questionId === questionItem.id)
                        ?.optionId === (o.id === 1 ? true : false)
                    }
                    onChange={() => handleAnswerChange(questionItem.id, o.id)}
                  />
                  <Span>{o.text}</Span>
                </AnswerOption>
              ))}
            </div>
          ) : (
            <div key={questionItem.id}>
              <Question>{questionItem.question}</Question>
              <AnswerOption>
                <RadioInput
                  type="text"
                  name={`question-${questionItem.id}`}
                  onChange={(e) =>
                    handleAnswerChange(questionItem.id, e.target.value)
                  }
                />
              </AnswerOption>
            </div>
          )}
        </Container>
      </fieldset>
    );
  });

  return (
    <React.Fragment>
      <Body>
        <Textbox>
          <Form>
            <Banner></Banner>
            <br />
            {autismQuestions}
            <BtnBlock>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              {showForm && <Form2 />}
            </BtnBlock>
          </Form>
        </Textbox>
      </Body>
      <Footer />
    </React.Fragment>
  );
};

export default Questionnaire;

/**
 *  const autismQuestions = questions.map( (questionItem) => {
    return(
      <fieldset>
          <legend>Questions</legend>
     
          <div className="question"  key={questionItem.id}>
            <Question>{questionItem.question}</Question>
            {questionItem.options.map((o) => (
              <div className="question-answer" key={o.id}>
                <div>
                  <InputRadio type="radio" name="physician" id={o.id} value="none"
                    checked={
                      answers.find((a) => a.questionId === questionItem.id)?.optionId === o.id
                    }
                    onChange={() => handleAnswerChange(questionItem.id, o.id)}
                  />
                  <LabelRadio htmlFor={o.id} ><Span>{o.text}</Span></LabelRadio>
                </div>
              </div>
            ))}
          </div>
          
        </fieldset>
    )
  } )
 */
