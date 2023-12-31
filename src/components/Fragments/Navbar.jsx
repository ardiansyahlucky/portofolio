import Button from "../Elements/Button/Button";
import WaveImage from "/wave/headerwave.svg";

const Navbar = () => {
  return (
    <div className="container">
      <span className="absolute inset-x-0 -top-10 left-0 -z-20">
        <img src={WaveImage} alt="" className="hidden lg:block" />
      </span>
      <div className=" fixed lg:relative w-full bg-lime-500 inset-x-0 top-0 left-0 z-20 ">
        <div className="flex w-full justify-between space-x-2 mx-3 px-4 mt-2 mb-2 text-white">
          <h1 className="text-xl md:text-3xl font-bold py-3">LUCKY ARDIANSYAH</h1>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Navbar;