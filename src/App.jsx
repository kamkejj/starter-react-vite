import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
        <h1>Pappa Pizza - Order Now -</h1>
        <Pizza 
          name="Margherita"
          desc="Tomato, Mozzarella, Basil"
          image={"https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/11/crop-0-0-960-960-0-2.jpg"} />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
