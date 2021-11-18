import React from "react";
import { useDispatch, useSelector } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

function CourseList() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction("GraphQL"));
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button onClick={addCourse}>Adicionar curso</button>
    </>
  );
}

export default CourseList;
