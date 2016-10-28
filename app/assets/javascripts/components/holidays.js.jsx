var Holidays = React.createClass({

	getInitialState() { 
		return { 
			holidays: this.props.data
		};
	},

	addHoliday: function(holiday) {

	var holidays = React.addons.update(this.state.holidays, { $push: [holiday] });

		this.setState({
			holidays: holidays
		});
	},

	removeHoliday: function(id){
		var holidays = this.state.holidays.filter(function(r){
			return r.id != id;
		});
		
		this.setState({
			holidays: holidays
		});
	},

	handleEditHoliday: function(holiday, data) {
		
		var index = this.state.holidays.indexOf(holiday);	  
	  var holidays = React.addons.update(this.state.holidays, { $splice: [[index, 1, data]] });
		
		this.setState({
			holidays: holidays
		}); 
	},

	render: function() {

		var holidays= this.state.holidays.map(function(holiday) {
			return <Holiday key={holiday.id} holiday={holiday} removeHoliday= {this.removeHoliday} handleEditHoliday={this.handleEditHoliday} />;
		}.bind(this));

		return (
		<div className="container">
			<br />

			<HolidayForm onSubmit={this.addHoliday}  />

			<hr />
			<table className="table table-bordered">
	  		<thead>
	  			<tr>
	  				<th>Date_From</th>
	  				<th>Date_To</th>
	  				<th>Leave_Type</th>
	  				<th>Status</th>
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