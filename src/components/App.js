import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = state => {
  return {
    about: state.about,
    skills: state.skills,
    experience: state.experience,
    education: state.education,
    achievements: state.achievements,
    hobbies: state.hobbies,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
