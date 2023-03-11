import { Card } from "components/Card/Card";
import { sortedByName } from "helpers/sortedByName";

export const CardsList = ({ items }) => {
  const sortedItems = sortedByName(items);

  return (
    <ul className="cards-list">
      {sortedItems.map(item => {
        return <Card key={item.id} item={item} />
      })}
    </ul>
  );
};