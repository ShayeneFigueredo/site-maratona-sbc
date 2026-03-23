export default function Stats() {
  const stats = [
    { label: "Company", value: "2000+" },
    { label: "Years Exp.", value: "10+" },
    { label: "Hours of Digital", value: "800+" },
    { label: "In Tracked Revenue", value: "150M+" },
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <h2>{item.value}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}