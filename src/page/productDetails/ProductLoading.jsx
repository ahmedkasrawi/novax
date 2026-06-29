import "./product.css"
import SlideLoading from "../../components/slideProducts/SlideLoading"
function ProductLoading() {
    return(
        <>
            <div className="container">
                <div className="img-loading ">
                    <div className="img Skelton"></div>
                    <div className="content">
                        <h5 className="loading Skelton"></h5>
                        <h5 className="loading Skelton"></h5>
                        <h5 className="loading Skelton"></h5>
                        <h5 className="loading Skelton"></h5>
                        <h5 className="loading Skelton"></h5>
                    </div>
                </div>
                <SlideLoading/>
            </div>

        </>
    )
}

export default ProductLoading