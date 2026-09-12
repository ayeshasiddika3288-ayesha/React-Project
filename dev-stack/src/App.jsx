import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }
  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack!`);
};

const handleRemove = (id) => {
  const removedItem = stack.find((item) => item.id === id);
  setStack(stack.filter((item) => item.id !== id));
  toast.info(`${removedItem.name} removed from your stack.`);
};

const handleRemoveAll = () => {
  setStack([]);
  toast.info("All technologies removed from your stack.");
};
  if (loading) {
    return <p className="text-center mt-20">Loading technologies...</p>;
  }

  return (
  <>
    <Navbar />
    <Hero />

    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Pick one technology per category to build your stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3">
          <TechnologyGrid
            technologies={technologies}
            stack={stack}
            onAdd={handleAddToStack}
          />
        </div>

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </main>

    <Footer />
    <ToastContainer position="top-right" autoClose={2500} />
  </>
);

}
export default App;