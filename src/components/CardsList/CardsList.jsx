import { Card } from "components/Card/Card";

export const CardsList = ({ items }) => {
  const sortedByName = items.sort((a, b) => a.name > b.name ? 1 : -1);

  return (
    <>
      {items.length === 0 && <p>No such character</p>}
      <ul className="cards-list">
        {sortedByName.map(item => {
          return <Card key={item.id} item={item} />
        })}
      </ul>
    </>
  );
};