var Admindashboard = React.createClass({

  getInitialState() { 
    return { 
      holidays: this.props.data
    };
  },

  handleStatus: function(holiday, data) {
    var index = this.state.holidays.indexOf(holiday);
    var holidays = React.addons.update(this.state.holidays, { $splice: [[index, 1, data]] });
    
    this.setState({ holidays: holidays }); 
  },

  removeHoliday: function(id){
    var holidays = this.state.holidays.filter(function(r){
      return r.id != id;
    });    
    this.setState({ holidays: holidays });
  },

  render: function() {

    var holidays= this.state.holidays.map(function(holiday) {
      return <Adminapprove key={holiday.id} holiday={holiday} handleStatus={this.handleStatus} removeHoliday={this.removeHoliday} />;
    }.bind(this));

    return (
    <div className="container">
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Name</th>
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