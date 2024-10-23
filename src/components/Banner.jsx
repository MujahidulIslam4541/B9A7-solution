

export default function Banner() {
  return (
    <div>
      <div
        className="hero min-h-screen mt-8 rounded-3xl"
        style={{
          backgroundImage: "url('./src/assets/Rectangle 1.png')",
        }}>
        <div className="hero-overlay rounded-3xl bg-opacity-10"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-3/4 md:w-2/3">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <button className="px-6 py-2 rounded-full text-black font-semibold bg-[#0BE58A]">Get Started</button>
            <button className="px-6 py-2 rounded-full border-2 border-green-500 ml-2 md:ml-8 font-semibold hover:bg-[#0BE58A] hover:text-black hover:border-none">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
