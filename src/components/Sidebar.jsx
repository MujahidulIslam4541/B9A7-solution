/* eslint-disable react/prop-types */

export default function Sidebar({
    recipequeue,
    handleRemoveQueue,
    removeQueue,
    handleTotalTimeAndCalories,
    totalTime,
    totalCalories
})

{
  return (
    <div className="md:w-1/3 bg-slate-100 rounded-lg p-2 mt-10">
      <h2 className="text-xl text-center border-b font-bold py-4"> Want To Cook :{recipequeue.length}</h2>
      {/* Want to cook table */}
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipequeue.map((item, index) =>
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{item.recipeName}</td>
                <td>{item.preparingTime}</td>
                <td>{item.calories}</td>
                <td> <button onClick={() => { handleRemoveQueue(item.recipeId), handleTotalTimeAndCalories(item.preparingTime, item.calories) }} className=" bg-green-400 rounded-full text-xs p-2">Preparing</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Preparing table */}
      <h2 className="text-xl text-center border-b font-bold py-4 mt-14"> Currently Cooking:{removeQueue.length}</h2>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {removeQueue.map((item, index) =>
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{item.recipeName}</td>
                <td>{item.preparingTime}</td>
                <td>{item.calories}</td>
              </tr>
            )}

            {/* total calories section */}
            <tr className="border-t-2" >
              <th></th>
              <td></td>
              <td>Total Time:{totalTime}</td>
              <td>Total Calories:{totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}
