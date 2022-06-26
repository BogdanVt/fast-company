import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
<<<<<<< HEAD
  const { error, initialize, progress, status } = useMockData();
  const handleClick = () => {
    initialize();
  };

  return (
    <div className="container mt-5">
      <h1>Main Page</h1>
      <h3>Инициализация данныз в FireBase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>error: {error}</li>}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Инициальзировать
      </button>
    </div>
  );
=======
    return <h1>Main</h1>;
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default Main;
