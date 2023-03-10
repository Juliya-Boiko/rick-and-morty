import { Card } from "components/Card/Card";

export const CardsList = ({ items }) => {
  //console.log(items);

  return (
    <ul className="cards-list">
      {items.map(item => {
        return <Card key={item.id} item={item} />
      })}
    </ul>
  );
};