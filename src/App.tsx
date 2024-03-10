import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import { Suspense, lazy } from "react";
import Loading from "./pages/Loading";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
// const Loading = lazy(() => import("./pages/Loading"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/customers" element={<Customers />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/transactions" element={<Transactions />}></Route>

          {/* Charts */}

          {/* Apps */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
