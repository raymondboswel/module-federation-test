import './App.css';
import { Route, Router, Routes } from '@solidjs/router';
import Products from './Products';
import Product from './Product';

function App() {
  return (
    <>
      <Router base="/products">
        <Routes>
          <Route path="/" component={Products} />
          <Route path="/:id" component={Product} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
