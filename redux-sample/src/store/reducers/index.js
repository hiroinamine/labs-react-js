import { combineReducers } from "redux";
import course from "./course";
import { prop1, prop2 } from "./simple";

export default combineReducers({
  course,
  prop1,
  prop2
});

// {
//   course: { modules: [], activeLesson:{}, activeModule: {}},
//   user: { name: ""}
// }
