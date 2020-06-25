import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const MSP = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
});

const MDP = dispatch => ({
  action: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

const SignupContainer = connect(MSP, MDP)(SessionForm);
export default SignupContainer;