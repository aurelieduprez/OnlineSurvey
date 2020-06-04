import React from "react";

class TextQuestion extends React.Component {
  render() {
    return (
      <>
        <div className="list-group-item card-question">
          <div className="question">{this.props.data.title}</div>
          {this.props.data.required ? (
            <span className="text-required">*</span>
          ) : null}
          <input
            className="text-input"
            questionid={this.props.data.id}
            id={this.props.data.p_answer.id}
            type="text"
            placeholder="Réponse libre"
            autocomplete="off"
            required={true}
          ></input>
        </div>
      </>
    );
  }
}

export default TextQuestion;
