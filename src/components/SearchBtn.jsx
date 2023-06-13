import { Link } from "react-router-dom";

function SearchBtn({ hiddenInMobile = true }) {
  const show = hiddenInMobile ? "hidden" : "block";

  return (
    <Link
      to="/search"
      className={`${show} p-3 font-bold text-black text-center border-2 bg-white rounded-full align-baseline hover:bg-transparent hover:text-white transition-all md:block`}
    >
      Search
    </Link>
  );
}

export default SearchBtn;
