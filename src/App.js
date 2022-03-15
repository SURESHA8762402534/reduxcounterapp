import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import { actionincrease, DECaction } from './action/action.js'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count : 0
    // }
  }

  decrease = () => {
    this.props.dec()
  }

  Increment = () => {

    this.props.inc()
    // console.log(this.props.count);

  }
 
  componentDidUpdate(){
    console.log(this.props.count);
  }

componentDidMount(){
  console.log(this.props.count);
}

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="crad-header">
                  <h1 className="btn-danger text-center" onClick={this.decrease}>decrease</h1>
                </div>
              </div>
              <div className="card-body">
                <p className='h1 text-center text-danger font-5'>{this.props.count }</p>
              </div>
              <div className="card-footer">
                <h1 className="btn-primary text-center" onClick={this.Increment}>increment</h1>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (reduxStore, currentProps) => {
  const count = reduxStore.count;
  return {
    count,
  }
}

const mapDispatchToProps = (dispatch, currentProps) => {
  const dispatchfunc = () => {
    // const actionobj = {
    //   type : 'INCREMENT',

    // }
    dispatch(actionincrease())
  }

  const dispatchdec = () => {
    // const actionObj = {
    //   type : 'DECREASE'
    // }
    dispatch(DECaction())
  }
  return {
    inc: dispatchfunc,
    dec: dispatchdec
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);