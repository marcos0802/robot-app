import { useState, useEffect } from "react";
import Robots from "./components/Robots";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [robots, setRobots] = useState([]);
  const [filteredData, setFilteredData] = useState(robots);

  useEffect(() => {
    setLoading(true);
    const getRobots = async () => {
      const robotsFromServer = await fetchRobots();
      setLoading(false);
      setRobots(robotsFromServer);
      setFilteredData(robotsFromServer);
      console.table(robotsFromServer)
    };
    getRobots();
  }, []);

  const fetchRobots = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  const _searchRobot = (event) => {
    let searchWord = event.target.value;
    let searchResult = [];
    searchResult = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        robot.name.toUpperCase().includes(searchWord.toUpperCase())
      );
    });
    setFilteredData(searchResult);
  };

  return (
    <div className="container">
      <>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div>
            {" "}
            <h1>My Robots</h1>
            <input
              type="text"
              onChange={(event) => _searchRobot(event)}
              placeholder="Search by Name"
            />
            <Robots robots={filteredData} />
          </div>
        )}
      </>
    </div>
  );
};

export default App;
