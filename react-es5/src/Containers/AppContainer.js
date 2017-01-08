var React = require('react');
var Calculator = require('../Components/CalculatorComponent');

var AppContainer = React.createClass({

    getInitialState : function() {
        return {
            value1: 0,
            value2: 0
        }
    },


    render: function () {
        return (
            <Calculator value1={this.state.value1} value2={this.state.value2}/>
        );
    },
});

module.exports = AppContainer;
