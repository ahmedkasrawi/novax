import Container from "../../components/Container";
import useFavorites from "../../hooks/favorites";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
function Cart() {
  const { deleteItem, favoriteItems } = useFavorites();
  if (favoriteItems.length == 0) {
    return (
      <Container className="h-[calc(100vh-150px)] flex justify-center items-center flex-col gap-3">
        <p className="font-bold text-xl">
          You Didn't Add Products To Favorites Yet
        </p>
        <button className="bg-violet-600 text-white py-1.5 px-2 rounded">
          <Link to="/">Discover Our Products</Link>
        </button>
      </Container>
    );
  }

  const favoritesList = favoriteItems.map((item, index) => {
    return (
      <div key={index} className="relative p-1  bg-violet-950/80 rounded-lg pb-10">
        <Link to={`/products/${item.id}`} className=" flex gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="flex items-center justify-center bg-violet-50 p-4 rounded"
          />
        </Link>
        <div className="absolute w-full rounded-lg bg-violet-950 text-white left-0 items-center bottom-0 px-2 py-1 justify-between md:text-lg ">
          <h4 className="line-clamp-1">{item.title}</h4>
          <p className="price_item">{item.price}</p>
        </div>

        <button
          className="bg-red-500 absolute top-1 right-1 li text-white h-7 rounded-bl-xl py-0.5 px-1 rounded-tr-sm"
          onClick={() => deleteItem(item.id)}
        >
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    );
  });

  return (
    <div className="w-full">
      <Container className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-7 gap-5 my-10">
        {favoritesList}
      </Container>
    </div>
  );
}

export default Cart;
