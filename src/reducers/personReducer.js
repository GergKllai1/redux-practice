import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADDPERSON:
      const newPerson = {
        id: Math.random(),
        name: payload.name,
        age: payload.age
      };
      return {
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.REMOVEPERSON:
      return {
        persons: state.persons.filter(person => person.id !== payload.personID)
      };
  }

  return state;
};
