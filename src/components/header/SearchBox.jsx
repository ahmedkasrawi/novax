import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        flex w-[45vw] md:w-[40vw] bg-gray-200 rounded-3xl text-sm items-center
        border-2 border-(--main-color)
      "
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for products, brands and more"
        className=" block h-full py-1 px-2 sm:py-2 bg-transparent outline-none w-full text-gray-700 "
      />
      <button
        type="submit"
        className="bg-(--main-color) relative border sm:py-1 border-(--main-color) rounded-r-3xl px-1 md:px-3 text-white hover:brightness-110 transition-all"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
