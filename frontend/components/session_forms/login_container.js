import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const MSP = ({ errors }) => ({
  formType: 'Sign In',
  errors: errors.session
});

const MDP = dispatch => ({
  action: user => dispatch(login(user))
});

const LoginContainer = connect(MSP, MDP)(SessionForm);
export default LoginContainer;