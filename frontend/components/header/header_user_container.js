import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HeaderUser from './header_user';

const MSP = ({ sessionUser }) => ({
  currentUser: sessionUser
});

const MDP = dispatch => ({
  logout: () => dispatch(logout())
});

const HeaderUserContainer = connect(MSP, MDP)(HeaderUser);

export default HeaderUserContainer;