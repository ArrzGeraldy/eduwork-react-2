import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&q=${search}&apiKey=fd0484f2555c4f049f3ee973d121fc93`
    );
    const json = await response.json();
    console.log(news.length);
    setNews(json.articles);
    console.log(json);
  };

  useEffect(() => {
    fetchNews();
  }, [search]);

  const render = () => {
    return (
      <div className="grid grid-cols-5 gap-4 w-4/5 mx-auto">
        {news.map((n) => (
          <div className="flex flex-col" key={n.title}>
            <img src={n.urlToImage} alt="" />
            <h1>{n.title}</h1>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center mt-12 gap-y-4">
      <input
        type="text"
        placeholder="search.."
        className="w-96 px-2 py-1 border border-black"
        onChange={(e) => setSearch(e.target.value)}
      />
      {news.length === 0 ? <p>Loading</p> : render()}
    </div>
  );
}

export default App;
