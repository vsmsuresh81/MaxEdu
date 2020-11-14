import React, { Component } from "react";
import Checkbox from "./Checkbox";

class questionComponent extends Component {
  state = {
    progressInfo: {
      numberOfQuestion: 5,
      ProgressBarUpperLimit: 4,
      questionAttended: 0,
      numberOfQuestionMarkedForReview: 0,
      questionNumberCompletedPercentage: 0,
    },
    examInfo: {
      numberOfQuestion: 5,
      examId: 1,
      examType: "quiz",
    },
    Result: {
      Marks: 0,
    },
    questionIndex: 0,
    questions: [
      {
        question: "Who is making the Web standards?",
        Answers: [
          {
            id: 1,
            AnswerText: "Microsoft",
            isSelected: false,
          },
          {
            id: 2,
            AnswerText: "Google",
            isSelected: false,
          },
          {
            id: 3,
            AnswerText: "Moozila",
            isSelected: false,
          },
          {
            id: 4,
            AnswerText: "The World Web Consortium",
            isSelected: false,
          },
        ],
      },
      {
        question: "Question 2",
        Answers: [
          {
            id: 1,
            AnswerText: "Answer 21",
            isSelected: false,
          },
          {
            id: 2,
            AnswerText: "Answer 22",
            isSelected: false,
          },
          {
            id: 3,
            AnswerText: "Answer 23",
            isSelected: false,
          },
          {
            id: 4,
            AnswerText: "Answer 24",
            isSelected: false,
          },
        ],
      },

      {
        question: "Question 3",
        Answers: [
          {
            id: 1,
            AnswerText: "Answer 1",
            isSelected: false,
          },
          {
            id: 2,
            AnswerText: "Answer 2",
            isSelected: false,
          },
          {
            id: 3,
            AnswerText: "Answer 3",
            isSelected: false,
          },
          {
            id: 4,
            AnswerText: "Answer 4",
            isSelected: false,
          },
        ],
      },

      {
        question: "Question 4",
        Answers: [
          {
            id: 1,
            AnswerText: "Answer 1",
            isSelected: false,
          },
          {
            id: 2,
            AnswerText: "Answer 2",
            isSelected: false,
          },
          {
            id: 3,
            AnswerText: "Answer 3",
            isSelected: false,
          },
          {
            id: 4,
            AnswerText: "Answer 4",
            isSelected: false,
          },
        ],
      },
      {
        question: "Question 5",
        Answers: [
          {
            id: 1,
            AnswerText: "Answer 1",
            isSelected: false,
          },
          {
            id: 2,
            AnswerText: "Answer 2",
            isSelected: false,
          },
          {
            id: 3,
            AnswerText: "Answer 3",
            isSelected: false,
          },
          {
            id: 4,
            AnswerText: "Answer 4",
            isSelected: false,
          },
        ],
      },
    ],

    Time: "",
    Section: "",
    CompletionPercentage: "25%",
  };

  createCheckbox = (Answers) => (
    <div className="list-group-item list-group-item-action " key={Answers.id}>
      <Checkbox
        label={Answers.AnswerText}
        onCheckboxChange={this.handleChange}
        id={Answers.id}
        isSelected={Answers.isSelected}
      />
    </div>
  );

  createCheckboxes = (questionId) =>
    this.state.questions[questionId].Answers.map(this.createCheckbox);

  handleNextQuestion = () => {
    if (this.state.questionIndex < this.state.examInfo.numberOfQuestion - 1)
      this.setState({ questionIndex: this.state.questionIndex + 1 });
  };

  handlePreviousQuestion = () => {
    if (this.state.questionIndex > 0)
      this.setState({ questionIndex: this.state.questionIndex - 1 });
  };

  handleSumit = () => {
    this.setState({ Result: { Marks: 100 } });
  };

  handleChange = (e) => {
    let target = e.target;

    this.setState({ Result: { Marks: 100 } });

    var item = this.state.questions;

    item[this.state.questionIndex].Answers[target.id - 1].isSelected =
      target.checked;

    this.setState({ questions: item });
  };

  render() {
    //Dynamic class rendering for the progress bar
    let classes = "progress-bar w-";
    let {
      questionAttended,
      numberOfQuestion,
      ProgressBarUpperLimit,
    } = this.state.progressInfo;
    questionAttended = this.state.questionIndex; // Need to refactor
    let completedPercentage = (questionAttended / ProgressBarUpperLimit) * 100;

    classes += completedPercentage;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="list-group">
              <div className="list-group-item list-group-item-action ">
                <div className="progress">
                  <div
                    className={classes}
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {completedPercentage}%
                  </div>
                </div>
              </div>
              <div className="list-group-item list-group-item-action ">
                <p>Time :2:00:222</p>
                <p>Section : A </p>
                <p>
                  Question: {this.state.questionIndex + 1} of{" "}
                  {this.state.progressInfo.numberOfQuestion}
                </p>
                <p>Marks: {this.state.Result.Marks}</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div></div>
            <div>
              <div className="list-group">
                <div className="list-group-item list-group-item-action ">
                  <p>
                    {this.state.questionIndex + 1}.{" "}
                    {this.state.questions[this.state.questionIndex].question}
                  </p>
                </div>
                {this.createCheckboxes(this.state.questionIndex)}
                <div className="px-3"></div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              className="btn btn-primary rounded-pill"
              onClick={this.handlePreviousQuestion}
            >
              Previous
            </button>
            <button
              className="btn btn-primary rounded-pill"
              onClick={this.handleNextQuestion}
            >
              Next
            </button>
            <button
              className="btn btn-primary rounded-pill"
              onClick={this.handleSumit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default questionComponent;
