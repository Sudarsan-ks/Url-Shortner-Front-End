import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "../../global";

export function Dashboard() {

  const [daily, setDaily] = useState([])
  const [monthly, setMonthly] = useState([])
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const dailyResponse = await axios.get(`${API}/url/daily`);
        const monthlyResponse = await axios.get(`${API}/url/monthly`);
        setDaily(dailyResponse.data.dailyCount);
        setMonthly(monthlyResponse.data.monthlyCount);
      } catch (err) {
        console.error("Error fetching data:", err.response ? err.response.data : err.message);
      }
    };

    fetchCounts();
  }, []);
  return (
    <div className="dashboard">
      <div className="url-count">
        <div className="daily-count">
          <table>
            <thead>
              <tr>
                <th>Per Day</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {daily.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="monthly-count">
        <table>
            <thead>
              <tr>
                <th>Per Month</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {monthly.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
