import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { battle } from "../PopularPage/api/api";
import Loading from "../../shared/Loading/Loading";
import withSearchParams from "../../entities/withSearchParams/withSearchParams";
import { Player } from "../../app/types/profiles";
import Card from "../../widgets/Card/Card";

function ResultsPage({
  router,
}: {
  router: { searchParams: URLSearchParams };
}) {
  const [winner, setWinner] = useState<Player | null>(null);
  const [loser, setLoser] = useState<Player | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sp = router.searchParams;
    const playerOne = sp.get("playerOne");
    const playerTwo = sp.get("playerTwo");

    if (playerOne === null || playerTwo === null) {
      setError("Players not found");
      setLoading(false);
      return;
    }

    battle([playerOne, playerTwo])
      .then((players) => {
        //@ts-ignore
        setWinner(players[0]);
        //@ts-ignore
        setLoser(players[1]);
        setError(null);
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [router.searchParams]);

  if (loading) {
    return <Loading text="Battling" />;
  }

  if (error) {
    return <p className="text-center error">{error}</p>;
  }

  return (
    <main className="animate-in stack main-stack">
      <div className="split">
        <h1>Results</h1>
        <Link to="/battle" className="btn secondary">
          Reset
        </Link>
      </div>
      <section className="grid">
        <article className="results-container">
          <Card profile={winner!.profile} />
          <p className="results">
            <span>
              {winner!.score === loser!.score ? "Tie" : "Winner"}{" "}
              {winner!.score.toLocaleString()}
            </span>
            {winner!.score !== loser!.score && (
              <img
                width={80}
                src="https://ui.dev/images/certificate.svg"
                alt="Certificate"
              />
            )}
          </p>
        </article>
        <article className="results-container">
          <Card profile={loser!.profile} />
          <p className="results">
            <span>
              {winner!.score === loser!.score ? "Tie" : "Loser"}{" "}
              {loser!.score.toLocaleString()}
            </span>
          </p>
        </article>
      </section>
    </main>
  );
}

export default withSearchParams(ResultsPage);
