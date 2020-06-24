import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const MSP = ({ errors }) => ({
  formType: 'Join FoG',
  errors: errors.session
});

const MDP = dispatch => ({
  action: user => dispatch(signup(user))
});

const SignupContainer = connect(MSP, MDP)(SessionForm);
export default SignupContainer;