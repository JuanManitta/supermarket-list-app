import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '../supermarket-app/layout/AppLayout'
import { Home } from '../supermarket-app/pages/home/Home'
import { CategoriesRoutes } from '../supermarket-app/pages/categories/routes/CategoriesRoutes';
import { AllItemsList } from '../supermarket-app/pages/all-items-list/AllItemsList';

export const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/categories/*" element={<CategoriesRoutes/>}/>
        <Route path="/all-items-list" element={<AllItemsList/>}/>
        
      </Routes>
    </AppLayout>
  )
}





