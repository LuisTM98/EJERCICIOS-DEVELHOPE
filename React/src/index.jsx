import { createRoot } from "react-dom/client";
import { App1, App2, App3, App4 } from "./Apps";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </div>
);
