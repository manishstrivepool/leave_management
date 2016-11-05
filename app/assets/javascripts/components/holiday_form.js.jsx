var HolidayForm = React.createClass({
  
  getInitialState() { 
    return {
      date_from: '',
      date_to: '',
      leave_type: ''
    };
  },

  validateForData: function() {
    return (
      this.state.date_from && this.state.date_to && this.state.leave_type
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
            leave_type: ''
          });
        }
      });
    }
  },

  render: function() {
   return (
    <div>
      
      <form>
      <table class="table table-striped">
        <tr>           
          <td><strong><label htmlFor="date_from">From </label></strong></td>
          <input type="date" placeholder="Select Date" name="date_from" onChange={this.handleChange} />          
        </tr>
        
        <tr>         
          <td><strong><label htmlFor="date_to">To </label></strong></td>
          <input type="date" placeholder="Select Date" name="date_to" onChange={this.handleChange} />        
        </tr>
        
        <tr>         
          <td><strong><label htmlFor="leave_type">Type </label></strong></td>
          <input type="text" placeholder="Leave Type" name="leave_type" onChange={this.handleChange} />        
        </tr>

        <tr>
          <input type="submit" value="Create Leave" className="btn btn-primary" disabled={!this.validateForData()} onClick={this.handleClick} />          
        </tr>
      </table>

      </form>
    </div>  
   );
  }
});