import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

// Header
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

// Content
const Content = (props) => {

  console.log('Content props', props)

  const partsName1 = props.parts[0].name 
  const partsExercises1 = props.parts[0].exercises   

  const partsName2 = props.parts[1].name 
  const partsExercises2 = props.parts[1].exercises   

  const partsName3 = props.parts[2].name 
  const partsExercises3 = props.parts[2].exercises   

  return (
    <div>
      <Part part={partsName1} exercises={partsExercises1} />
      <Part part={partsName2} exercises={partsExercises2} />
      <Part part={partsName3} exercises={partsExercises3} />
  </div>
  );
}

// Part
const Part = (props) => {

  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>

  );
}

// Total
const Total = (props) => {

  const partsArray = props.parts

  const total = partsArray.reduce(function(tot, partsArray) {
    return tot + partsArray.exercises
  }, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
}

export default App;
