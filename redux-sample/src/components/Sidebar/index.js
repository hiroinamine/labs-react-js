import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <div>
      <aside>
        {modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => toggleLesson(module, lesson)}>
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modules: state.course.modules
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleLesson: (module, lesson) =>
//       dispatch(CourseActions.toggleLesson(module, lesson))
//   };
// };
// outra forma de deixar disponivel as actions pro componente
const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

// export default connect(state => ({ modules: state.course.modules }))(Sidebar);
// connect - high order component
