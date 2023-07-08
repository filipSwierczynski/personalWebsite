
import { createRoot } from "react-dom/client";
import Pet from "./Pet";


const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Edgar" animal="dog" breed="Shihtzu"/>
    <Pet name="Edgar" animal="dog" breed="Shihtzu"/>
    <Pet name="Edgar" animal="dog" breed="Shihtzu"/>
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);