import React from 'react';

import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/actions/course'
import { connect } from 'react-redux';

// import { Container } from './styles';
const moduloLesson4 = {
  id: 2,
  title: 'Apredendo React',
  lessons: [
    {id: 3, title: 'Terceira aula'},
    {id: 4, title: 'Quarta aula'},
  ]
}
const lesson4 = {id: 4, title: 'Quarta aula'}

const Footer = ({ activeLesson, changeLesson4 }) => (
  <div> 
    <h2>Footer</h2>
    <p>Você está assistindo a aula: {activeLesson.title}</p>
    <button onClick={() => changeLesson4(
      moduloLesson4,
      lesson4
    )}>Mudar para a quarta aula</button>
  </div>
)

const mapStateToProps = state => ({
  activeLesson: state.course.activeLesson
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
