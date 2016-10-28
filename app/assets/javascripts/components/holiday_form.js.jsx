var HolidayForm = React.createClass({
	
	getInitialState() { 
		return { 
			date_from: '',
			date_to: '',
			leave_type: '',
			status:  ''
		};
	},

	handleChange: function(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	},

	handleClick: function(e){		
		$.ajax({
			url: 'holidays/create',
			method: 'POST',
			data: {holiday: this.state},
			success: (data) => {
				this.props.onSubmit(data);
				this.setState({
					date_from: '',
					date_to: '',
					leave_type: '',
					status:  ''
				});
			}
		});
	},

	render: function() {
	 return (
	 	<div className="container">
		 	
		 	<form className="form-inline">

		 		<div className="form-group">
		 			<input type="date" placeholder="select Date" name="date_from" className="form-control" onChange={this.handleChange} />
		 		</div>

		 		<div className="form-group">
		 			<input type="date" placeholder="select Date" name="date_to" className="form-control" onChange={this.handleChange} />
		 		</div>

		 		<div className="form-group">
		 			<input type="text" placeholder="Leave Type" name="leave_type" className="form-control" onChange={this.handleChange} />
		 		</div>

		 		<div className="form-group">
		 			<input type="text" placeholder="Enter Status" name="status" className="form-control" onChange={this.handleChange} />
		 		</div>

		 		<input type="submit" value="Create Leave" className="btn btn-primary" disabled={!(this.state.date_from && this.state.date_to)} onClick={this.handleClick} />

	 		</form>

		</div> 	
	 );
	}
});