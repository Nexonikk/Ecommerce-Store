/* eslint-disable react/prop-types */

function Cards({ item }) {

  const formattedTitle = item.title.split(" ").slice(0, 1).join(" ") + "...";

  const formattedDesc = item.description.split(" ").slice(0, 5).join(" ") + "...";

  // const images = JSON.parse(item.images[0].trim(""));
  // const images = item.images.map((imageUrl) => imageUrl.replace(/['"]+/g, ''));
  const imageUrl = item.images[0]
  ?.replace('[', '')
  ?.replace(']', '')
  ?.replace(/"/g, '')
  ?.replace(/\\/g, '');

  // const trimmedWithEllipsis = str.split(" ").slice(0, 5).join(" ") + "...";
// Result: "This is a very long..."
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92  shadow-2xl hover:scale-105 duration-200">
          <figure>
            <img src={imageUrl} alt="Products" className="h-60 w-52" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {formattedTitle}
              <div className="badge badge-secondary">
                {/* Category */}
                {item.categoryName}
                </div>
            </h2>
            <p className="max-w-48"> 
              {/* Title */}
              {/* {item.title} */}
              {formattedDesc}
              </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                ${item.price}
{/* Price */}
              </div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-[#9d3cf8] hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
