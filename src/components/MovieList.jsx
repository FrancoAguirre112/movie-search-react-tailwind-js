import PositiveMock from '../mockups/positiveResponse.json';
import NegativeMock from '../mockups/negativeResponse.json';

function MovieList() {
  return (
    <>
      <div className="container mx-auto my-10">
        <section id="search">
          <div className="space-y-5">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5-xl">
              Search Movie
            </h1>
            <form action="search" className="md:space-x-1 grid grid-flow-col">
              <input
                type="text"
                placeholder="Avengers, The Matrix, The Hunger Games..."
                className="rounded-l-lg py-1 border-2 border-black px-2"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white py-1 font-bold rounded-r-lg"
              >
                Search
              </button>
            </form>
          </div>
        </section>
        <seaction id="movieList"></seaction>
      </div>
    </>
  );
}

export default MovieList;
