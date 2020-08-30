import React, { useState, createContext, useContext } from 'react';
import shortid from 'short-id';
const JobsContext = createContext();
const Context = ({ children }) => {
  const initialState = [
    {
      id: shortid.generate(),
      local: '',
      trabalho: '',
      valor: 0,
    },
  ];
  const [jobsArray, setJobsArray] = useState(initialState);

  function addJob() {
    setJobsArray((prevState) => [
      ...prevState,
      { id: shortid.generate(), local: '', trabalho: '', valor: 0 },
    ]);
  }

  function removeJob(id) {
    setJobsArray((prevState) =>
      prevState.filter((el) => {
        return el.id !== id;
      })
    );
  }

  function setFieldValue(index, name, value) {
    setJobsArray((prevState) => {
      let currentState = [...prevState];
      let newState = { ...currentState[index] };
      newState[name] = value;
      currentState[index] = newState;
      return currentState;
    });
  }

  function getTotalValue() {
    return jobsArray
      .map((item) => Number(item.valor))
      .reduce((prev, next) => prev + next);
  }

  return (
    <JobsContext.Provider
      value={{ jobsArray, addJob, removeJob, setFieldValue, getTotalValue }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export function useJobs() {
  const {
    jobsArray,
    addJob,
    removeJob,
    setFieldValue,
    getTotalValue,
  } = useContext(JobsContext);
  return { jobsArray, addJob, removeJob, setFieldValue, getTotalValue };
}

export default Context;
