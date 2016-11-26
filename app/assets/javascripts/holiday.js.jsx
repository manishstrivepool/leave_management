var Holiday = React.createClass({
  
  getInitialState() { 
    return { 
      edit: false
    };
  },

  componentDidUpdate: function() {
    $('.date').datepicker({
      dateFormat: 'yy/mm/dd'
    });
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    });
  },

  handleLeaveCancel: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    var status = "Leave Cancelled";
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

  handleEdit: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    var date_from = this.refs['date_from'].value;
    var date_to = this.refs['date_to'].value;
    var description = this.refs['description'].value;
    var leave_type = this.refs['leave_type'].value;
      $.ajax({
        url: 'holidays/'+id,
        method: 'PUT',
        dataType: "json",
        data: { holiday: { date_from: date_from, date_to: date_to, description: description, leave_type: leave_type,} },
        success: (data) => {
          this.props.handleEditHoliday(this.props.holiday, data);
          this.setState({
            edit: false
          });
        }
      });
    },

  holidayRow: function() {
    return (
      <tr> 
        <td>{this.props.holiday.date_from}</td>

        <td>{this.props.holiday.date_to}</td>

        <td>{this.props.holiday.description}</td>
        
        <td>{this.props.holiday.leave_type}</td>

        <td>{this.props.holiday.status}</td>
        
        <td><input type="button" className="btn btn-success btn-xs" value='Edit' onClick={this.handleToggle}/>
        
        <input type="button" className="btn btn-danger btn-xs" value='Cancel Leave' onClick={this.handleLeaveCancel} /></td>

      </tr>
    );
  },

  holidayForm: function() {
    return ( 
      <tr>
        <td>
          <input className="date" placeholder="YYYY-MM-DD" ref="date_from" defaultValue={this.props.holiday.date_from} />
        </td>

        <td>
          <input className="date" placeholder="YYYY-MM-DD" ref="date_to" defaultValue={this.props.holiday.date_to} />
        </td>

        <td>
          <textarea type="text" placeholder="Description" ref="description" className="form-control" defaultValue={this.props.holiday.description} />
        </td>

        <td>
          <input type="text" placeholder="Leave Type" ref="leave_type" className="form-control" defaultValue={this.props.holiday.leave_type} />
        </td>

        <td>
          <input className="form-control" defaultValue={this.props.holiday.status} disabled="true"/>
        </td>
        
        <td>
          <input type="button" className='btn btn-primary btn-xs' value='Update' onClick={this.handleEdit} />

          <input type="button" className='btn btn-warning btn-xs' value="Cancel" onClick={this.handleToggle} />
        </td>
      </tr>
    );
  },

  render: function() {
    return this.state.edit ? this.holidayForm() : this.holidayRow();
  }
});