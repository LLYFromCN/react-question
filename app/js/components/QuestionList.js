var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({

  render: function(){ 
    var questions = this.props.questions;
    var onVote = this.props.onVote;
    if(!Array.isArray(questions)){
      throw new Error('not a Array');
    }

    var questionMap = questions.map(function(question){
      return <QuestionItem 
        mainkey={question.key} //this.props.key是关键字，所以使用这个来代替key
        key={question.key}
        title={question.title}
        description={question.description}
        voteCount={question.voteCount}
        onVote={onVote} />
    } );

    return (
      <div id="questions" className="">
        {questionMap}
      </div>
    );
  }
});