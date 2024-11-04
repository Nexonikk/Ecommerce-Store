import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Transforming Shopping, One Click {" "}
              <span className="text-[#9d3cf8]">at a Time!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
          
          </div>
          <Link to="/products">
          <button className="p-4 text-white mt-6 bg-[#9d3cf8]">Products</button>
          </Link>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
          src="https://imgs.search.brave.com/M23MnmdN5IdFxKQ3WZ5uj0OGBMmyYur85FVk7UnKUAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvS2xp/cHNjaF8xMDEyMzEz/X0ltYWdlX09ORV9P/bl9FYXJfU3RlcmVv/XzEzNDQ0Mjg0NThf/NzM3NTUxLmpwZw"
            className="md:w-[600px] md:h-[560px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
