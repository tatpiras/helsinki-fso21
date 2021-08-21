import React from 'react'
import Course from './components/Course'
import MainHeader from './components/MainHeader'

const App = () => {

  const mainHeaderName = 'Web development curriculum'

  const courses = [
  
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, // course 1

    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    } // course 2

]

return (
  <>
    <MainHeader mainHeaderName={mainHeaderName} />
    {courses.map(course => 
    <Course key={course.id} course={course} />
    )}
  </>
);
}

export default App