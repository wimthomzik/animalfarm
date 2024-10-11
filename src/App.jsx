import { useEffect, useState } from "react"

export default function App() {

  const { animals, search } = useAnimalSearch();

  return (
    <main>
      <h1>Animal Farm</h1>

      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {animals.length === 0
          ?
          <>No animals found.</>
          :
          animals.map((a) => (
            <Animal key={a.id} {...a} />
          ))}
      </ul>
    </main>
  );
}

function Animal({ type, name, age }) {
  return <li> {type} {name} {age} </li>;
}

function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery);

  }, []);

  const search = async (q) => {
    const response = await fetch('http://localhost:8080?' + new URLSearchParams({ q }));
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem('lastQuery', q);
  }

  return { animals, search };
}