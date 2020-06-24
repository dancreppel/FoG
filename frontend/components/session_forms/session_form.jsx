import React from 'react';
import SessionErrors from './session_errors';

export default class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
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

    return(
      <>
        <ul className='sessionErrors'>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label className='sessionUsername'>FoG account name
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
          </label>

          <label className='sessionPassword'>Password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>

          <button className='sessionSubmit'>{this.props.formType}</button>
        </form>
      </>
    )
  }
}