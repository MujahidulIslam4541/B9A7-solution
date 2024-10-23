

export default function Header() {
  return (
    <div className="block space-y-4  md:space-y-0 md:flex md:justify-between w-11/12 mx-auto pt-4 items-center">
        <div>
            <h2 className="text-3xl">Recipe Calories</h2>
        </div>
        <div className="flex gap-4">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Recipes</a>
            <a href="">Contact</a>
        </div>
        <div className="flex gap-4 items-center">
        <i className="fa-solid fa-magnifying-glass text-2xl"></i><input className="px-4 py-2 rounded-xl border" type="text" name="" id="" placeholder=" Search" />
            <i className="fa-regular fa-circle-user text-2xl text-red-800"></i>
        </div>
    </div>
  )
}
