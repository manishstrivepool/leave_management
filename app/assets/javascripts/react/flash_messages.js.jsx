
var FlashMessages = React.createClass({
  getInitialState: function() {
    return {messages: this.props.data};
  },

  messages: function (messageArray) {
    this.replaceState({messages: messageArray});
  },

  render: function() {
    return (
      <div className='flash_messages_component'>
        {this.state.messages.map(function(content, index) {
          message_type = content[0];
          message  = content[1];
          return (
            <div key={index} className={this.flash_class(message_type)}>
              {message}
            </div>
          );
        }.bind(this))}
      </div>
    )
  },

  flash_class: function(type) {
    var result = 'alert alert-danger';
    if (type === 'notice') {
      result = 'alert alert-info';
    } else if (type === 'success') {
      result = 'alert alert-success';
    }
    return result;
  }
});
