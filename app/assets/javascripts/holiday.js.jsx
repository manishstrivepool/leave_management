var Holiday = React.createClass({
  
  getInitialState() { 
    return { 
      edit: false
    };
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
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

  handleEdit: function(e){
    e.preventDefault();
    var id = this.props.holiday.id
    var date_from = this.refs['date_from'].value;
    var date_to = this.refs['date_to'].value;
    var description = this.refs['description'].value;
    var leave_type = this.refs['leave_type'].value;

    if ( date_from > date_to ) {
      alert("The value of Date_To must be greater than Date_From")
    }
    else {
    
      $.ajax({
        url: 'holidays/'+id,
        method: 'PUT',
        dataType: "json",
        data: { holiday: { date_from: date_from, date_to: date_to, leave_type: leave_type , description: description} },
        success: (data) => {
          this.setState({
            edit: false
          });

        this.props.handleEditHoliday(this.props.holiday, data);
        }
      });
      }
    },

  holidayRecord: function() {
    return (
      <tr> 
        <td>{this.props.holiday.date_from}</td>

        <td>{this.props.holiday.date_to}</td>

        <td>{this.props.holiday.description}</td>
        
        <td>{this.props.holiday.leave_type}</td>
        
        <td>
          <input type="button" className = 'btn btn-primary' value='Edit' onClick={this.handleToggle}/>
        
          <input type="button" className= 'btn btn-danger'  value='Delete' onClick={this.handleDelete} />

        </td>

      </tr>
    );
  },

  holidayForm: function() {
    return ( 
      <tr>
        <td>
          <input type="date" placeholder="select Date" ref="date_from" className="form-control" defaultValue={this.props.holiday.date_from} />
        </td>

        <td>
          <input type="date" placeholder="select Date" ref="date_to" className="form-control" defaultValue={this.props.holiday.date_to} />
        </td>

        <td>
          <textarea type="text" placeholder="description" ref="description" className="form-control" defaultValue={this.props.holiday.description} />
        </td>

        <td>
          <input type="text" placeholder="Leave Type" ref="leave_type" className="form-control" defaultValue={this.props.holiday.leave_type} />
        </td>
        
        <td>
          <input type="button" className = 'btn btn-success' value='Update' onClick={this.handleEdit} />

          <input type="button" className = 'btn btn-danger' value="Cancel" onClick={this.handleToggle} />
        </td>
      </tr>
    );
  },

  render: function() {
    return this.state.edit ? this.holidayForm() : this.holidayRecord();
  }
});