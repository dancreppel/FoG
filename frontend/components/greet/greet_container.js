import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greet from './greet';

const MSP = ({ sessionUser }) => ({
  currentUser: sessionUser
});

const MDP = dispatch => ({
  logout: () => dispatch(logout())
});

const GreetContainer = connect(MSP, MDP)(Greet);

export default GreetContainer;