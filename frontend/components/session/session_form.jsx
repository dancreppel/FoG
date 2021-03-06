import React from 'react';
import SessionErrors from './session_errors';

export default class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  handleChange (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit (e) {
    let submitAction = this.props.action;
    let user = this.state;

    e.preventDefault();
    submitAction(user);
  }

  render () {
    let errors = this.props.errors.map((error, index) => 
      <SessionErrors error={error} key={'session error ' + index}/>
    )

    let h1 = (this.props.formType === 'signin') ? 'Sign In' : 'Create an Account'
    let button = (this.props.formType === 'signin') ? 'Sign In' : 'Join FoG'
    let message = (this.props.formType === 'signin') ? (
      'To an existing account') : ('')

    return (
      <div className={"sessionDiv " + this.props.formType}>
        <h1>{h1}</h1>
        <p>{message}</p>
        <ul className="sessionErrors">{errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <div className="sessionUsername">
            <p>FoG account name</p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
            />
          </div>

          <div className="sessionPassword">
            <p>Password</p>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </div>

          <button className="sessionSubmit">{button}</button>
        </form>
      </div>
    );
  }
}