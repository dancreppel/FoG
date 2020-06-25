import { connect } from 'react-redux';
import { logout, guestLogin } from '../../actions/session_actions';
import HeaderUser from './header_user';

const MSP = ({ sessionUser }) => ({
  currentUser: sessionUser
});

const MDP = dispatch => ({
  logout: () => dispatch(logout()),
  guestLogin: () => dispatch(guestLogin())
});

const HeaderUserContainer = connect(MSP, MDP)(HeaderUser);

export default HeaderUserContainer;