var Counter = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    };
  },
  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    })
  },
  render: function () {
    return React.createElement('div', {},
      React.createElement('button', {onClick: this.increment}, '+'),
      React.createElement('button', {onClick: this.decrement}, '-'),
      React.createElement('span', {}, 'Licznik: ' + this.state.counter)
    );
  },
  componentWillMount: function () {
    console.log('Komponent gotowy do użycia.');

  },

  componentDidMount: function () {
    console.log('Komponent zamontowany.');
  },

  componentWillReceiveProps: function () {
    console.log('Komponent otrzyma propsy.');
  },

  shouldComponentUpdate: function () {
    console.log('Komponent otrzymuje nowy stan propsa.');
    return true;
  },

  componentWillUpdate: function () {
    console.log('Komponent zaktualizowany.')
  },

  componentDidUpdate: function () {
    console.log('Zauktualizowano!');
  },

  componentWillUnmount: function () {
    console.log('Komponent zdemontowany :)');
  }
});

var element_1 = React.createElement(Counter);
ReactDOM.render(element_1, document.getElementById('licznik1'));
var element_2 = React.createElement(Counter);
ReactDOM.render(element_2, document.getElementById('licznik2'));
var element_3 = React.createElement(Counter);
ReactDOM.render(element_3, document.getElementById('licznik3'));