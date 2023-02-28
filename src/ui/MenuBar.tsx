import { Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const menuIcons = [
    {
      img: '../shopp-icon.svg',
      alt: 'shopping cart',
      name: '/categories/category'
    },
    {
      img: '../home-icon.svg',
      alt: 'home',
      name: '/categories'
    },
    {
      img: '../menu-icon.svg',
      alt: 'menu',
      name:'/all-items-list'
    },
  ];

export const MenuBar = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    const handleNavigate = (path: string) => {
        navigate(path);
    };
        
    
  return (
    <Paper sx={{ display:'flex', justifyContent:'space-evenly', bgcolor:'primary.main',
        borderRadius:3, width:'100%', height:'45px'}}>

        { menuIcons.map((item) => (
          <motion.div style={{display:'flex'}} key={item.alt}>
            <Paper elevation={0} sx={{bgcolor: pathname === item.name 
                    ? '#359264' 
                    : 'primary.main', borderRadius: 3, p: 0.5}}>
                <IconButton sx={{p:0.3}} onClick={() => handleNavigate(item.name)}>
                  <img style={{width:'33px'}} src={item.img} alt={item.alt} />
                </IconButton>
            </Paper>
        </motion.div>
        ))}
    </Paper>
  )
}
