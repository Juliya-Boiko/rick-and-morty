import { useSelector } from "react-redux";
import { sortedByName } from "helpers/sortedByName";
import { Card } from "components/CardsList/Card/Card";

export const CardsList = () => {
  const { items } = useSelector(state => state.characters);
  const sortedItems = sortedByName(items);

  return (
    <>
      {items
        ? <ul className="cards-list">
            {sortedItems.map(item => {
              return <Card key={item.id} item={item} />
            })}
          </ul>
        : null}
    </>
  );
};