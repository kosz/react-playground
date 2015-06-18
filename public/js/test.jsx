import React from 'react'

export default React.createClass({
  displayName: 'Test', 
  render: function () {
      var style = {
        color: 'red'
      };
      return (
        <div style={style}>Awesome Test!</div>
      )
    }
})
