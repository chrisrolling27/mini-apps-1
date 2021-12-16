
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 42,
      form1: false,
      form2: false
    }

    this.checkOutButton = this.checkOutButton.bind(this);
    this.nextButton = this.nextButton.bind(this);

  }

checkOutButton() {
  console.log('button clicked')
  let f1switch = !this.state.form1;
  this.setState({form1 : f1switch })
}

nextButton() {
  console.log('next clicked')
  //let f1switch = !this.state.form1;
  //this.setState({form1 : f1switch })
}


render() {
  return <div>
    React app here

    <div> &nbsp; </div>
    <div> <button onClick={this.checkOutButton}>Checkout</button> </div>
    <div> {this.state.form1 ? <F1 /> : 'Click Checkout button to check out!'} </div>
    <div> {this.state.form2 ? <F2 /> : 'f2 false'} </div>


  </div>
}

}


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form2 : false
    };
    this.f1Next = this.f1Next.bind(this);
  }


  f1Next() {
    console.log('f1next clicked')
    let f2switch = !this.state.form2;
    this.setState({form2 : f2switch })
  }

  render() {
    return (
      <div>
        <div>FORM ONE HERE</div>

        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> <button onClick={this.f1Next}>NEXT</button> </div>
        {this.state.form2 ? 'F2 me': 'getgoing'}
      </div>
    );
  }
}



class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form3 : false
    };
    this.f2Next = this.f2Next.bind(this);
  }


  f2Next() {
    console.log('f1next clicked')
    let f3switch = !this.state.form3;
    this.setState({form3 : f3switch })
  }

  render() {
    return (
      <div>
        <div>FORM TWO HERE</div>

        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> <button onClick={this.f2Next}>NEXT</button> </div>
        {this.state.form3 ? 'F3 me': 'getgoing'}
      </div>
    );
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form4 : false
    };
    this.f3Next = this.f3Next.bind(this);
  }


  f3Next() {
    console.log('f1next clicked')
    let f4switch = !this.state.form4;
    this.setState({form4 : f4switch })
  }

  render() {
    return (
      <div>
        <div>FORM THREE HERE</div>

        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> <button onClick={this.f3Next}>NEXT</button> </div>
        {this.state.form4 ? 'F4 me': 'getgoing'}
      </div>
    );
  }
}




class F4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form4 : false
    };
    //FOURTH AND FINAL
    //this.f3Next = this.f3Next.bind(this);
  }


  f4Next() {
    console.log('f1next clicked')
    let f4switch = !this.state.form4;
    this.setState({form4 : f4switch })
  }

  render() {
    return (
      <div>
        <div>FORM FOUR HERE</div>

        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> <button onClick={this.f4Next}>NEXT</button> </div>
        {this.state.form4 ? 'END ME': 'getgoing'}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
