import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        flex items-center 
        w-full max-w-45 sm:max-w-80 md:max-w-md lg:max-w-lg mx-auto 
        bg-(--bg-color) border border-(--main-color) 
        rounded-full overflow-hidden h-7 md:h-8
        focus-within:ring-1 focus-within:ring-(--main-color)
        focus-within:ring-opacity-50 transition-all
      "
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for products, brands and more"
        className=" block py-2 px-4 bg-transparent outline-none w-full text-gray-700 "
      />
      <button
        type="submit"
        className="px-5 py-2.5 h-full bg-(--main-color) text-white hover:brightness-110 transition-all flex items-center justify-center"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
