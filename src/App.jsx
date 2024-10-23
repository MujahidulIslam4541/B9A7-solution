
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import OurRecepi from './components/OurRecepi'
import Recepes from './components/Recepes'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'

function App() {

  const [recipequeue, setRecipequeue] = useState([])

  const [removeQueue, setRemoveQueue] = useState([])

  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleRecipeQueue = recipe => {
    const isExist = recipequeue.find(previousRecipe => previousRecipe.recipeId === recipe.recipeId)
    if (!isExist) {
      const newRecipe = [...recipequeue, recipe]
      setRecipequeue(newRecipe)
    }
    else {
      alert('This item already Existed')
    }

  }

  const handleRemoveQueue = id => {
    // find with recipe queue
    const delatedRecipe = recipequeue.find(recipe => recipe.recipeId === id)

    // remove want to cook table
    const updatedQueue = recipequeue.filter(recipe => recipe.recipeId !== id)
    setRecipequeue(updatedQueue)
    setRemoveQueue([...removeQueue, delatedRecipe])
  }

  const handleTotalTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }

  console.log(recipequeue)

  return (
    <>

      {/* header */}
      <Header></Header>

      {/* Banner section */}
      <Banner></Banner>
      {/* Our Recipe section */}
      <OurRecepi></OurRecepi>

      <section className='flex flex-col md:flex-row gap-6 mt-10'>
        {/* Recepes section */}
        <Recepes handleRecipeQueue={handleRecipeQueue}></Recepes>

        {/* Sidebar section */}
        <Sidebar
          handleRemoveQueue={handleRemoveQueue}
          recipequeue={recipequeue}
          removeQueue={removeQueue}
          handleTotalTimeAndCalories={handleTotalTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        >
        </Sidebar>
      </section>


    </>
  )
}

export default App
