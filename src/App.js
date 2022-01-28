import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
// import { About } from './components/About';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { New } from './components/New';
import { Users } from './components/Users';
import { Admin } from './components/Admin';
import { UserDetails } from './components/UserDetails';
import { NoMatch } from './components/NoMatch';
import { Navbar } from './components/Navbar';

const LazyAbout = React.lazy(() => import('./components/About.js'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={
          <React.Suspense fallback="loading...">
            <LazyAbout />
          </React.Suspense>
        }>
        </Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
