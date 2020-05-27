import React from "react";

class TextQuestion extends React.Component {
  render() {
    return (
      <>
        <div className="list-group-item card-question">
          <div className="question">{this.props.data.title}</div>
          <input
            questionid={this.props.data.id}
            id={this.props.data.p_answer[0].id}
            type="text"
            placeholder={this.props.data.p_answer[0].text}
            required={true}
          ></input>
          {this.props.data.required && <label>required</label>}
        </div>
      </>
    );
  }
}

export default TextQuestion;
