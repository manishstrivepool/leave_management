
var HolidayForm = React.createClass({  
  getInitialState() { 
    return {
      date_from: '',
      date_to: '',
      description: '',
      leave_type: ''
    };
  },

  validateForData: function() {
    return (
      this.state.date_from && this.state.date_to && this.state.leave_type && this.state.description
     );
  },

  handleChange: function(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },
  handleClick: function(e){
    if ( this.state.date_from > this.state.date_to ) {
      alert("The value of Date_To must be greater than Date_From")
    }
    else {
      $.ajax({
        url: 'holidays/create',
        method: 'POST',
        data: {holiday: this.state},
        success: (data) => {
          this.props.onSubmit(data);
          this.setState({
            date_from: '',
            date_to: '',
            description: '',
            leave_type: ''
          });
        }
      });
    }
  },

  render: function() {
   return (
    <div>
      <form >
        <table>
          <tbody>
            <tr>
              <td><label htmlFor = "date_from">From</label></td>
              <td><input type="date" placeholder="select Date" name="date_from" onChange={this.handleChange} /></td>
            </tr>
            <tr> 
              <td><label htmlFor = "date_to">To</label></td>
              <td><input type="date" placeholder="select Date" name="date_to" onChange={this.handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor = "leave_type">Leave Type</label></td>
              <td><input type="text" placeholder="Leave Type" name="leave_type" onChange={this.handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor = "description">Description</label></td>
              <td><textarea type="text" placeholder="Description" name="description" onChange={this.handleChange} /></td>
            </tr>
            <tr>
              <td><input type="submit" value="Create Leave" className="btn btn-primary" disabled={!this.validateForData()} onClick={this.handleClick} /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>  
   );
  }
});