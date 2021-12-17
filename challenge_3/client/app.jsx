
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 42,
      next: false,
      form1: false,
      form2: false,
      form3: false,
      form4: false,
      checkout: true
    }

    this.checkOutButton = this.checkOutButton.bind(this);
    this.nextButton = this.nextButton.bind(this);

  }

checkOutButton() {
  console.log('checkout button clicked')
  this.setState({form1 : true, next: true, checkout : false })
  //IF statements to prevent
}

nextButton() {
  console.log('NEXT')

  if (this.state.form4 === true) {
    //this.setState({form1 : false, form2: true })
  }

  if (this.state.form3 === true) {
    this.setState({form3 : false, form4: true })
  }

  if (this.state.form2 === true) {
    this.setState({form2 : false, form3: true })
  }

  if (this.state.form1 === true) {
    this.setState({form1 : false, form2: true})
  }

  }


render() {
  return <div>
    React app here

    <div> &nbsp; </div>
    <div> {this.state.checkout ? <button onClick={this.checkOutButton}>Checkout</button> : ''} &nbsp; {this.state.next ? <button onClick={this.nextButton}>NEXT</button> : ''}  </div>
    <div> {this.state.form1 ? <F1 /> : ''} </div>
    <div> {this.state.form2 ? <F2 /> : ''} </div>
    <div> {this.state.form3 ? <F3 /> : ''} </div>
    <div> {this.state.form4 ? <F4 /> : ''} </div>


  </div>
}

}


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
    return (
      <div>
        <div>FORM ONE HERE</div>


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


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
