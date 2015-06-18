import React from 'react';

export default React.createClass({
  displayName: 'Pad', 
  handleClick: function () {
    React.findDOMNode(this.refs.piano_a3).play();
  },
  render: function () {
      var style = {
        color: 'green'
      };
      return (
        <div>
          <button 
            onClick={this.handleClick}  
            style={style}>Pad</button>
          <audio ref="piano_a3" preload="true" autobuffer="true">
            <source src="/sound/a3.wav" />
            <source src="/sound/a3.ogg" />
          </audio>
        </div>
      )
    }
})
