import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TechnologyCard from "./components/TechnologyCard";
import Hero from "./components/Hero";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) return; // পরে toast.warning() দিয়ে replace করবো
    setStack([...stack, technology]);
  };

  if (loading) {
    return <p className="text-center mt-20">Loading technologies...</p>;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id);
            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAddToStack}
                isAdded={isAdded}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;