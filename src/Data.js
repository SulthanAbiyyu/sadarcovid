import { useEffect, useState } from "react";
import axios from "./axios";

function Data({ fetchUrl }) {
  const [population, setPopulation] = useState("");
  const [tests, setTests] = useState("");
  const [recover, setRecover] = useState("");
  const [active, setActive] = useState("");
  const [deaths, setDeaths] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/countries/Indonesia");
      setPopulation(request.data.population);
      setTests(request.data.tests);
      setActive(request.data.active);
      setRecover(request.data.recovered);
      setDeaths(request.data.deaths);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Population</th>
              <th scope="col">Tests</th>
              <th scope="col">Active</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{population}</td>
              <td>{tests}</td>
              <td>{active}</td>
              <td>{recover}</td>
              <td>{deaths}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
