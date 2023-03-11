export const InfoDetail = ({ title, value }) => {
  return (
    <div className="info-detail">
      <p className="info-detail__title">{title}</p>
      <p className="info-detail__value">{value}</p>
    </div>
  );
};