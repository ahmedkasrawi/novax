

function SlideLoading() {
    return (
      <div className="loading-slide">
        <div className="slide-products slide">
          <div className="container">
            <div className="top-slide Skelton" style={{ width: "120px" }}></div>
            <div className="top-slide Skelton" style={{ width: "170px" }}></div>
            <div className="w-full h-px bg-gray-200"></div>
            <div className=" w-full flex justify-between gap-3 md:gap-4 xl:gap-5 mt-10 relative overflow-visible">
              <div className="w-full h-70 rounded bg-gray-200 Skelton"></div>
              <div className="w-full h-70 rounded bg-gray-200 Skelton"></div>
              <div className="sm:w-full h-70 rounded bg-gray-200 Skelton"></div>
              <div className="md:w-full h-70 rounded bg-gray-200 Skelton"></div>
              <div className="xl:w-full h-70 rounded bg-gray-200 Skelton"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SlideLoading