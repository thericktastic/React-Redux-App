import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

// actions
import { fetchTrivia } from "../actions";

// The purpose of this component is to display the trivia retrieved by the API call

const Trivia = props => {
    console.log("This is isLoading on Trivia component: ", props.loadingOnProps)
  return (
    <div>
      <button onClick={props.fetchTrivia}>Show me the trivia</button>
      {!props.triviaOnProps && !props.loadingOnProps && <h3>Now hit that button and learn something new (or don't!)</h3>}
      {props.loadingOnProps &&
        <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
     />
    }
    {props.triviaOnProps && !props.loadingOnProps && (
        <p>{props.triviaOnProps}</p>
    )}
    </div>
  );
};

// This code takes the state in store and sets it to the prop triviaOnProps
const mapStateToProps = state => {
  return {
    loadingOnProps: state.isLoading,
    triviaOnProps: state.trivia,
    errorOnProps: state.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { fetchTrivia } // object
)(Trivia);
