var React = require('react');

module.exports = React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault();

    if(!this.refs.title.value && !this.refs.description.value){
      return;
    }
    
    var newQuestion = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      voteCount: 0
    }

    this.refs.addForm.reset();

    this.props.addNewQuestion(newQuestion);

  },

  render: function(){
    // console.log('----' + this.props.formDisplay);
    var styleObj = {
      display: this.props.formDisplay ? 'block': 'none',
    };

    return (
      <form ref="addForm" name="addQuestion" style={ styleObj } className="clearfix" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label forHtml="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button className="btn btn-success pull-right">确认</button>
        <button className="btn btn-default pull-right" onClick={this.props.handleFormCancelButton}>取消</button>
      </form>
    );
  }
})