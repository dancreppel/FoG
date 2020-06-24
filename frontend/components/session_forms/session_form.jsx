import React from 'react';
import SessionErrors from ''

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
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label className='formUsername'>FoG account name
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
          </label>

          <label className='formPassword'>Password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>

          <button>{this.props.formType}</button>
        </form>
      </>
    )
  }
}