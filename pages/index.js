import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/api/movies`);
  //     const { results } = await response.json();
  //     setMovies(results);
  //   })();
  // }, []);
  const router = useRouter();
  const onClickHandler = (id, title) => {
    router.push(`/movies/${title}/${id}`);
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       title,
    //     },
    //   },
    //   `/movies/${id}` // url에 어떤 파라미터가 넘어가도 /movies/id 값만 보여준다.
    // );
  };
  return (
    <>
      <div className="container">
        <Seo title="home" />
        {results?.map((movie) => (
          <div className="movie" key={movie.id} onClick={() => onClickHandler(movie.id, movie.original_title)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Link
              // href={{
              //   pathname: `/movies/${movie.id}`,
              //   query: {
              //     title: movie.original_title,
              //   },
              // }}
              // as={`/movies/${movie.id}`}
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              {movie.original_title}
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

// 서버에서 동작 & API KEY를 작성하주면 client에 절대 보여질 일이 없다.
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();
  return {
    props: {
      results,
    },
  };
}
