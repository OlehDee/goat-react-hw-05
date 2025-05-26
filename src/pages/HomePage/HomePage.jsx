import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import { fetchTrends } from "../../Fetch/fetch";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    const [trends, setTrends] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getTrends() {
            try {
                setError(false);
                setTrends([]);
                const data = await fetchTrends();
                setTrends(data.data.results);
            } catch {
                setError(true);
            }
        }
        getTrends();
    }, []);

    return (
        <div className={css.container}>
            <h1 className={css.page_title}>Popular Today</h1>
            {!error ? (
                <MovieList movies={trends} />
            ) : (
                <p>Something went wrong</p>
            )}
        </div>
    );
}
