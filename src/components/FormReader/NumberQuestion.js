import React from "react";

class NumberQuestion extends React.Component {
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
            id={this.props.data.p_answer[0].id}
            type="number"
            placeholder="Réponse libre contenant uniquement un nombre"
            autoComplete="off"
            required={this.props.data.required}
          ></input>
        </div>
      </>
    );
  }
}

export default NumberQuestion;
