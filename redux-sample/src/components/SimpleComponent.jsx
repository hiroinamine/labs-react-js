import React from "react";
import { connect } from "react-redux";

function SimpleComponent(props) {
  return (
    <>
      <div>{props.prop1.exemplo}</div>
      <div>{props.prop2.exemplo}</div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    prop1: state.prop1,
    prop2: state.prop2
  };
}

export default connect(mapStateToProps)(SimpleComponent);
