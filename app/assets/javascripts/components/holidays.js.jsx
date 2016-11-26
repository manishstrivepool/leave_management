var Holidays = React.createClass({

  getInitialState() { 
    return { 
      holidays: this.props.data
    };
  },

  handleSubmit(holiday) {
    var holidays = React.addons.update(this.state.holidays, { $push: [holiday] });
    this.setState({ holidays: holidays });
  },

  handleStatus: function(holiday, data) {
    var index = this.state.holidays.indexOf(holiday);
    var holidays = React.addons.update(this.state.holidays, { $splice: [[index, 1, data]] });
    
    this.setState({ holidays: holidays }); 
  },

  handleEditHoliday: function(holiday, data) {
    var index = this.state.holidays.indexOf(holiday);
    var holidays = React.addons.update(this.state.holidays, { $splice: [[index, 1, data]] });
    
    this.setState({ holidays: holidays }); 
  },

  render: function() {

    var holidays= this.state.holidays.map(function(holiday) {
      return <Holiday key={holiday.id} holiday={holiday} handleStatus={this.handleStatus} handleEditHoliday={this.handleEditHoliday} />;
    }.bind(this));

    return (
    <div className="container">
      <br />
      <HolidayForm handleSubmit={this.handleSubmit} />
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date From</th>
            <th>Date To</th>
            <th>Description</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          { holidays }
        </tbody>
        
      </table>
    </div>
    );
  }
})