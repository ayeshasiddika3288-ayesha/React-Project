import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies, stack, onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}

export default TechnologyGrid;