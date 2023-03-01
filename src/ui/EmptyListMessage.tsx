import { Grid, Typography } from "@mui/material"
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
    '../category-meat.svg',
    '../category-fruits.svg',
    '../category-vegetables.svg',
    '../category-drinks.svg',
    '../milk.svg',
    '../fish.svg',
    '../bread.svg',
    '../bakery.svg',
]
export const EmptyListMessage = () => {
    const [transition, setTransition] = useState({delay: 0.1, duration: 1});
    const [opacity, setOpacity] = useState(0);
    const [y, setY] = useState(60)
    const [productImageIndex, setProductImageIndex] = useState(0)

    const handleAnimationComplete = () => {
        setTransition({ delay: 0, duration: 1 });
        setOpacity(opacity === 0 ? 1 : 0);
        setY(y === 60 ? 0 : 60);
        setProductImageIndex((productImageIndex +1) % images.length)
    }

    const productImage = images[productImageIndex]



  return (
    <Grid sx={{p:3}}>
        <Typography variant="h6" component="h2" sx={{textAlign: 'center', mt: 6}}>
            No hay productos en la lista
        </Typography>
        <Typography variant="h6"  sx={{textAlign: 'center', mt: 1, color:'primary.main', fontSize:'1.2rem'}}>
            Empezá a agregar productos
        </Typography>
        
        <motion.div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}
            animate={{y, opacity}}
            transition={transition}
            onAnimationComplete={handleAnimationComplete}>
            <img style={{width:'50px'}} src={productImage} alt="" />
        </motion.div>

        <motion.div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
            <img style={{width:'80px', marginRight:'18px'}} src="../home-carrito.svg" alt="" />
        </motion.div>
    </Grid>
  )
}
