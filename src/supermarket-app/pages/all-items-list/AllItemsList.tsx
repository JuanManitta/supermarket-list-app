import { Grid, Typography, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MenuBar } from '../../../ui/MenuBar';
import useStore from '../../../hooks/useStore';
import { EmptyListMessage } from '../../../ui/EmptyListMessage';





export const AllItemsList = () => {

    const [height, setHeight] = useState(0)
    const [emptyList, setEmptyList] = useState(true);
    

    const carousel = useRef<HTMLInputElement>(null)

    const { supermarketSlice: categories } = useStore();

    const navigate = useNavigate();
    const handleBackNavigate = () => {
        navigate('/categories');
    }

    useEffect(() => {
        if (carousel.current) {
            setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight)
        }
    }, [])    
    

    const categoriesWithProducts = categories.filter(category => category.items.length > 0);

    useEffect(() => {
        setEmptyList(categoriesWithProducts.length === 0 ? true : false);
    }, [categoriesWithProducts])

    





    
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}>
        <Grid container sx={{pt:3, pb:3, borderBottom: '1px solid rgb(221,221,221)', 
            boxShadow:'1px 1px 8px 1px rgba(221, 221, 221, 0.609)', justifyContent:'space-evenly'}}>
            <Grid item xs={1}>
                <IconButton sx={{ml:1}} onClick={handleBackNavigate}>
                    <ArrowBackIos fontSize='small'/>
                </IconButton>
            </Grid>
            <Grid item xs={11}>
                <Typography variant='h6' sx={{textAlign:'center', mr:3}}>
                    Supermarket List
                </Typography>
            </Grid>
        </Grid>
        <Grid>
            
        <motion.div ref={carousel} style={{height:'400px', overflow:'hidden', marginTop:'4rem'}} >
            {
            emptyList 
            ? <EmptyListMessage/> 
            : <motion.div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1rem', padding:'24px'}}
            drag="y"
            dragConstraints={{bottom:0, top: -height}}>
                {categoriesWithProducts.map( category => (
                <motion.div key={category.name}>
                    <Paper elevation={0} sx={{bgcolor:'secondary.main', width:'100%', display:'grid', p:2, borderRadius:5}}>
                        <Paper elevation={0} sx={{bgcolor:'white', width:'100%', borderRadius: 2, mb:1, boxShadow: '1px 1px 6px 1px rgb(221,221,221)'}}>
                            <Typography sx={{fontSize:'1rem', textAlign:'center'}}>
                                {category.name}
                            </Typography>
                        </Paper>
                            {
                            category.items.slice(0,4).map(product => (
                                <Grid sx={{display:'flex', justifyContent:'space-between'}} key={product.id}>
                                <Typography sx={{fontSize:'0.9rem'}}>{product.name}</Typography>
                                <Typography sx={{fontSize:'0.8rem'}}>{product.quantity}</Typography>
                            </Grid>
                           ))}
                    </Paper>
                </motion.div>
            ))
            }
            </motion.div>
            }
        </motion.div>

        </Grid>
        <Grid sx={{p:3}}>
        <MenuBar/>
    </Grid>
    </motion.div>
  )
}
