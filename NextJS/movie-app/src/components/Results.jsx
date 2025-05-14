import MovieCard from "./MovieCard";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto p-4">
      {
        results.map((result) => (
          <div key={result.id}>
            <h2>
              <MovieCard key={result.id} result = {result}/>
            </h2>
          </div>
        ))
      }
    </div>
  )
}
