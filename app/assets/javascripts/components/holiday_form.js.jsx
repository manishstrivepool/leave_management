var HolidayForm = React.createClass({

  getInitialState() { 
    return {
      date_from: '',
      date_to: '',
      description: '',
      leave_type: ''
    };
  },

  componentDidMount: function () {
    $('.date').datepicker({
      dateFormat: 'yy/mm/dd'
    });
  },

  handleClick: function(e){
    e.preventDefault();
    var date_from = this.refs['date_from'].value;
    var date_to = this.refs['date_to'].value;
    var description = this.refs['description'].value;
    var leave_type = this.refs['leave_type'].value;
    $('#leave_type, #description').val(" ")
    $.ajax({
      url: 'holidays/',
      method: 'POST',
      data: { holiday: { date_from: date_from, date_to: date_to, leave_type: leave_type, description: description } },
      success: (data) => {
        this.props.handleSubmit(data);
        this.setState({
          date_from: '',
          date_to: '',
          description: '',
          leave_type: ''
        });
      }
    });
  },

  render: function() {
   return (
   <body>
    <div className="container leave-margin">
    <div className="col-md-6">
      <form className="form-horizontal">
        <div className="form-group">
        
          <label className="control-label col-md-4" htmlFor = "date_from">Leave From:</label>
            <div className="col-md-8">
              <input className="date form-control"  placeholder="YYYY-MM-DD" ref="date_from" value={this.state.date_from} />
           
            </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor = "date_to">Leave To:</label>
            <div className="col-md-8">
              <input  className="date form-control" placeholder="YYYY-MM-DD" ref="date_to" value={this.state.date_to} />
            </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor = "leave_type">Leave Type:</label>
            <div className="col-md-8">
              <input className="form-control" placeholder="Leave Type" ref="leave_type" id="leave_type" />
            </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor = "description">Description:</label>
            <div className="col-md-8">
              <textarea className="form-control text-width" placeholder="Description" ref="description" id="description" />
            </div>
        </div>
       <button className="btn btn-primary" onClick={this.handleClick}>Create Leave </button>
      </form>
      </div>
    </div> 
    </body> 
   );
  }
});