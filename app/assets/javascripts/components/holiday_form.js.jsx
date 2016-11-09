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
    let date_from = this.refs.date_from.value;
    let date_to = this.refs.date_to.value;
    let leave_type = this.refs.leave_type.value;
    let description = this.refs.description.value;
    $.ajax({
      url: 'holidays/',
      type: 'POST',
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
    <div>
      <form >
        <table>
          <tbody>
            <tr>
              <td><label htmlFor = "date_from">From</label></td>
              <td><input className="date" placeholder="YYYY-MM-DD" ref="date_from" /></td>
            </tr>
            <tr> 
              <td><label htmlFor = "date_to">To</label></td>
              <td><input  className="date" ref="date_to" placeholder="YYYY-MM-DD" /></td>
            </tr>
            <tr>
              <td><label htmlFor = "leave_type">Leave Type</label></td>
              <td><input  placeholder="Leave Type" ref="leave_type"  /></td>
            </tr>
            <tr>
              <td><label htmlFor = "description">Description</label></td>
              <td><textarea placeholder="Description" ref="description" /></td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-primary" onClick={this.handleClick}>Create Leave 
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>  
   );
  }
});