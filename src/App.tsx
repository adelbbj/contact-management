import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={"Loading"}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </Suspense>
  );
}

export default App;
