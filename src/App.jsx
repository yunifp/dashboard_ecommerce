import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import ProdukList from './pages/ProdukList';
import Kategori from './pages/Kategori';
import Voucher from './pages/Voucher';
import Pengiriman from './pages/Pengiriman';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="produk" element={<ProdukList />} />
        <Route path="kategori" element={<Kategori />} />
        <Route path="voucher" element={<Voucher />} />
        <Route path="pengiriman" element={<Pengiriman />} />
      </Route>
    </Routes>
  );
}

export default App;