import Robot from "./Robot";

const Robots = ({ robots }) => {
  return (
    <div className="content">
      {robots.map((robot) => (
        <Robot key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default Robots;
