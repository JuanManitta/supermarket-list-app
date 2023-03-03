import { Add, ArrowBackIos } from '@mui/icons-material';
import { Grid, Typography, Paper, IconButton, Checkbox, Fab } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MenuBar } from '../../../../ui/MenuBar';
import useStore from '../../../../hooks/useStore';
import { EmptyListMessage } from '../../../../ui/EmptyListMessage';
import { AddItemModal } from '../../../../ui/AddItemModal';






export const Category = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [emptyList, setEmptyList] = useState(true);
    const { supermarketSlice } = useStore();
    
    const category = supermarketSlice.filter((category) => category.isActive === true);
    const categoryProducts = category[0].items; 

    
    
    
    
    const navigate = useNavigate();

    const handleBackNavigation = () => {
      navigate('/categories')
    };

    const [height, setHeight] = useState(0);
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (categoryProducts.length > 0) {
            setEmptyList(false);
        } else {
            setEmptyList(true);
        }
    }, [categoryProducts])


    useEffect(() => {
        if (carousel.current) {
            setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleAddItem = () => {
        setIsOpen(true);
    };


    

  
  
  return (
  <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}>
    <Grid sx={{mb:6}}>
        <Paper elevation={0} sx={{bgcolor:'secondary.main', width:'100%', display:'grid', p:2,
         borderRadius:10}}>
        <Grid container>
            <Grid item xs={6}>
            <Grid>
                <IconButton sx={{mb:1, p:0}} onClick={handleBackNavigation}>
                    <motion.div
                        whileTap={{scale:0.8}}>
                        <ArrowBackIos fontSize='small'/>
                    </motion.div>
                </IconButton>
            </Grid>
            <Typography  sx={{color:'black', textAlign:'left', mt:6, ml:2, fontSize:'1.5rem'}}>
                {category[0].name}
            </Typography>
            </Grid>

            <Grid item xs={6}>
                <Grid container justifyContent='right' sx={{width:'11rem'}}>
                    <img style={{width:'110px'}} src={category[0].img} alt={category[0].name} />
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    </Grid>


    <motion.div ref={carousel} style={{ position:'relative', height: '350px',overflow:'hidden', cursor:'grab'}}>
    { emptyList 
        ? <EmptyListMessage /> 
        :
        <motion.div 
            style={{padding:'24px'}}
            drag="y"
            dragConstraints={{bottom: 0, top: -height }}>
            {category[0].items.map((product) => (
                <Paper elevation={0} sx={{ display:'flex', justifyContent:'space-evenly', bgcolor:'secondary.main',
                borderRadius:3, width:'100%', minHeight:'2rem0px', mb: 2}} key={product.id}>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography sx={{color:'black', textAlign:'left', p:1.5}}>
                            {product.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:'flex', alignItems:'center'}}>
                        <Checkbox />
                        <Paper elevation={0} sx={{bgcolor:'info.main', width:'20px', height:'22px', display:'flex',
                         justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <Typography sx={{ color:'black', fontSize:'0.9rem'}}>
                                {product.quantity}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            ))}
        </motion.div> }
        <Fab size='small' color='primary' sx={{position:'absolute', bottom:'4%', right:'8%' }} onClick={handleAddItem}>
            <Add sx={{color:'secondary.main'}}/>
        </Fab>
    </motion.div>

    <Grid sx={{p:3}}>
        <MenuBar/>
    </Grid>
    <AddItemModal isOpen={isOpen} closeModal={closeModal} category={category[0].name}/>
    </motion.div>

  )
}