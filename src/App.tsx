import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { Loading } from "./components/ui/loading";
import { Providers } from "./components/providers";

const CenteredLoading = () => (
  <div className="h-screen w-screen flex items-center justify-center">
    <Loading size="large" type="ring" />
  </div>
);

function App() {
  return (
    <Providers>
      <Suspense fallback={<CenteredLoading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Providers>
  );
}

export default App;
