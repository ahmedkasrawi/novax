export default function ProductImages({ product,className }) {
  if (!product?.images) {
    return (
      <p style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        {" "}
        product images not found
      </p>
    );
  }
  return (
    <>
      <div
        className={`${className} py-3 border-b-2 border-gray-500 md:border-0 md:border-e-2`}
      >
        <h1 className="text-(--main-color) font-bold">{product.title}</h1>
        <div className="flex justify-center">
          <img
            id="big-img"
            src={product.images[0]}
            alt={product.title}
            className="max-w-60 duration-500"
          />
        </div>
        <div className="flex justify-center gap-2 cursor-pointer  ">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className="max-w-13 w-fit"
              width={"5px"}
              onClick={() => {
                document.getElementById("big-img").src = img;
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
