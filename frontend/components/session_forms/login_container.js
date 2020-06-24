import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const MSP = ({ errors }) => ({
  formType: 'Sign In',
  errors: errors.session
});

const MDP = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

const LoginContainer = connect(MSP, MDP)(LoginForm);
export default LoginContainer;