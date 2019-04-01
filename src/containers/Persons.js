import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../reducers/actions";

const Persons = props => {
  return (
    <div>
      <AddPerson personAdded={props.personAddedHandler} />
      {props.persons.map(person => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => props.personDeletedHandler(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    persons: state.ppl.persons
  };
};

const mapDispatchToProps = {
  personAddedHandler: (name, age) => ({
    type: actionTypes.ADDPERSON,
    payload: { name: name, age: age }
  }),
  personDeletedHandler: personID => ({
    type: actionTypes.REMOVEPERSON,
    payload: { personID: personID }
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
