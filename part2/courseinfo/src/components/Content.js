import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({courseParts}) => {

  const numberOfExercises = courseParts.map(part => part.exercises)

  const total = numberOfExercises.reduce(function(sum, n) {
    return sum + n
  }, 0)

  return (
    <div>
      {courseParts.map(part => 
        <Part key={part.id} part={part} />
      )}
    <Total total={total} />
    </div>
  )
}

export default Content