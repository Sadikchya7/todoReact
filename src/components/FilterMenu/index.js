import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Filtermenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = () => {
    if (location.pathname === "/home") return "all";
    if (location.pathname === "/completedtodo") return "completed";
    if (location.pathname === "/incompletedtodo") return "incompleted";
    return "";
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      navigate("/home");
    } else if (value === "completed") {
      navigate("/completedtodo");
    } else if (value === "incompleted") {
      navigate("/incompletedtodo");
    }
  };

  return (
    <div className="tab">
      <select name="options" value={pages()} onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
}
