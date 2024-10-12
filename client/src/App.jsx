import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-paanel/layout";
import AdminProducts from "./pages/admin-panel/products";
import AdminDeshboard from "./pages/admin-panel/deshboard";
import AdminOrders from "./pages/admin-panel/orders";
import AdminFeatures from "./pages/admin-panel/features";
import ShoppingLayout from "./components/shopping/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shoppping/home";
import ShoppingListing from "./pages/shoppping/listing";
import ShoppingAccount from "./pages/shoppping/account";
import ShoppingCheckout from "./pages/shoppping/checkout";

function App() {
  return (
    <div className=" flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="deshboard" element={<AdminDeshboard />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
