// create class Header
class Header extends React.Component {
  constructor() {
    super();
    // membuat objek state
    this.state = {
      angka1: "0",
      angka2: "0",
      result: "0"
    };
  }

  // Set values
  setAngka1 = (val) => {
    this.setState({ angka1: val });
  };

  setAngka2 = (val) => {
    this.setState({ angka2: val });
  };

  // Arithmetic operations such as addition, subtraction, division, multiplication
  funcMultiply = () => {
    var hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
    this.setState({ result: hasil });
  };

  funcDivide = () => {
    var hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
    this.setState({ result: hasil });
  };

  funcSubtract = () => {
    var hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
    this.setState({ result: hasil });
  };

  funcAdd = () => {
    var hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
    this.setState({ result: hasil });
  };

  render() {
    return (
      <div>
        <h1>Simple Calculator ReactJS</h1>
        Input 1: <input value={this.state.angka1} onChange={(e) => { this.setAngka1(e.target.value) }} />
        <br />
        Input 2: <input value={this.state.angka2} onChange={(e) => { this.setAngka2(e.target.value) }} />
        <h1>Result: {this.state.result}</h1>
        <button onClick={this.funcMultiply}>Multiply</button>
        <button onClick={this.funcDivide}>Division</button>
        <button onClick={this.funcSubtract}>Subtract</button>
        <button onClick={this.funcAdd}>Addition</button>
      </div>
    );
  }
}

// Render the component to RealDOM
ReactDOM.render(<Header />, document.getElementById("app"));