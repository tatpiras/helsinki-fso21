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
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {

  return (
    <div>
      <Part partName={props.parts[0].name} partExercises={props.parts[0].exercises}/>
      <Part partName={props.parts[1].name} partExercises={props.parts[1].exercises}/>
      <Part partName={props.parts[2].name} partExercises={props.parts[2].exercises}/>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
        <p>{props.partName} {props.partExercises}</p>
    </div>
  );
}

const Total = (props) => {

  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <div>
      Number of exercises {total}
    </div>
  );
}

export default App