import { Routes, Route } from 'react-router-dom';
import { Categories } from '../Categories';
import { Category } from '../pages/Category';

export const CategoriesRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Categories />} />
        {/* PASAR DE FORMA DINAMICA LA PAGINA */}
        <Route path="/category" element={<Category />} />
    </Routes>
  )
}