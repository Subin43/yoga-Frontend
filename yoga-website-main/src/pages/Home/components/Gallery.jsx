mport { ACHIEVEMENT } from "../../data/data";

export default function Gallery() {
  return (
    <div>
      {ACHIEVEMENT.map((item) => (
        <li key={item.id}>
          <img src={item.img} alt="img" />
        </li>
      ))}
    </div>
  );
}
