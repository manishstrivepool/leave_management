var Adminapprove = React.createClass({
  
  getInitialState: function() {
    return {
      name: ''
    };
  },

  handleStatusAccepted: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    var status = "Accepted";
      $.ajax({
        url: 'holidays/'+id,
        method: 'PUT',
        dataType: "json",
        data: { holiday: { status: status} },
        success: (data) => {
          this.props.handleStatus(this.props.holiday, data);
        }
      });
    },

  handleDelete: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    $.ajax({
      url: 'holidays/'+id,
      type: 'DELETE',
      success: () => {
        this.props.removeHoliday(id);
      }
    }); 
    },

    handleStatusRejected: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    var status = "Not Accepted";
      $.ajax({
        url: 'holidays/'+id,
        method: 'PUT',
        dataType: "json",
        data: { holiday: { status: status} },
        success: (data) => {
          this.props.handleStatus(this.props.holiday, data);
        }
      });
    },

  holidayRow: function() {
    return (
      <tr>

        <td>{this.props.holiday.name}</td>

        <td>{this.props.holiday.date_from}</td>

        <td>{this.props.holiday.date_to}</td>

        <td>{this.props.holiday.description}</td>
        
        <td>{this.props.holiday.leave_type}</td>

        <td>{this.props.holiday.status}</td>
        
        <td><input type="button" className="btn btn-primary btn-xs" value='Reject' onClick={this.handleStatusRejected} />

        <input type="button" className="btn btn-success btn-xs" value='Approve' onClick={this.handleStatusAccepted}/>

        <input type="button" className="btn btn-danger btn-xs" value='Delete' onClick={this.handleDelete}/></td>

      </tr>
    );
  },

  render: function() {
    return this.holidayRow();
  }
});