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
	},

	render: function() {
	 return (
	 	<div className="container">
		 	
		 	<form className="form-inline">
		 		
		 			<input type="date" placeholder="select Date" name="date_from" onChange={this.handleChange} />
		 		
		 			<input type="date" placeholder="select Date" name="date_to" onChange={this.handleChange} />
		 		
		 			<input type="text" placeholder="Leave Type" name="leave_type" onChange={this.handleChange} />

		 		<input type="submit" value="Create Leave" className="btn btn-primary" disabled={!this.validateForData()} onClick={this.handleClick} />

	 		</form>
		</div> 	
	 );
	}
});