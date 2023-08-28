const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total/>
      </div>
  )
}

const Header = (props) =>{
  
  return(
  <h1> {props.course} </h1>
  )
}

const Content = (props) =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <>
    <Part name = {part1} exercises = {exercises1}/>
    <Part name = {part2} exercises = {exercises2}/>
    <Part name = {part3} exercises = {exercises3}/>
    </>

  )
}

const Total = (props) =>{
  
  return(
  <>
  <p>Number of exercises 31</p>
   </>
  )
}


const Part = (props) => {
  return(
    <>
 <p>{props.name} {props.exercises}</p>
  </> 
  )
 
} 
export default App