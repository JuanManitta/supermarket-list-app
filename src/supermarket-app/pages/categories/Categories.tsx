import { ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import { Grid, Typography, Paper, IconButton, Icon } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


    const shoppingIcons =[
  {
      img: '../home-meat.svg',
      alt: 'meat',
  },
  {
      img: '../home-fish.svg',
      alt: 'fish',
  },
  {
      img: '../home-fruit.svg',
      alt: 'fruit',
  },
  {
      img: '../home-veggie.svg',
      alt: 'food',
  },

  ];
    const categories = [
    {
      name: 'Meat',
      img: '../home-meat.svg',
      alt: 'meat',
    },
    {
      name: 'Fish',
      img: '../home-fish.svg',
      alt: 'fish',
    },
    {
      name: 'Fruit',
      img: '../home-fruit-dark.svg',
      alt: 'fruit',
    },
    {
      name: 'Veggie',
      img: '../home-veggie-dark.svg',
      alt: 'food',
    },
    {
      name: 'Dairy',
      img: '../home-milk.svg',
      alt: 'dairy',
    },
    {
      name: 'Others',
      img: '../home-others.svg',
      alt: 'others',
    },
  ];
    const menuIcons = [
    {
      img: '../shopp-icon.svg',
      alt: 'shopping cart',
    },
    {
      img: '../home-icon.svg',
      alt: 'home',
    },
    {
      img: '../menu-icon.svg',
      alt: 'menu',
    },
  ];




  export const Categories = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null)

    const navigate = useNavigate();

    useEffect(() => {
      if(carousel.current)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        
    }, [])

    const handleBackNavigation = (pathname: string) => {
      navigate({pathname})
    }


    
  
  
  return (
    <>
      <motion.div style={{padding:'24px'}}
      initial={{opacity:0}}
      animate={{opacity:1}}>
        <Paper elevation={0} sx={{bgcolor:'secondary.main', width:'100%', display:'grid', p:2, borderRadius:4, cursor:'pointer'}}>
          <motion.div>
            <IconButton sx={{mb:1, p:0}} onClick={() => handleBackNavigation('/')}>
              <motion.div
                whileTap={{scale:0.8}}>
                <ArrowBackIos fontSize='small'/>
              </motion.div>
            </IconButton>
          </motion.div>
          <Typography  sx={{color:'black', textAlign:'left', mb:1}}>
            Shopping List
          </Typography>
          <Grid container>
            <Grid item xs={8}>
              <Paper sx={{bgcolor:'primary.main', width:'100%', p:1, display:'flex', justifyContent:'space-around', borderRadius:3}}>
                { shoppingIcons.map((item) => (

                  <motion.div style={{display:'flex'}} key={item.alt}>
                  <img style={{width:'30px'}} src={item.img} alt={item.alt} />
                </motion.div>
                ))}
              </Paper>
            </Grid>

            <Grid item xs={2}>
              <Paper elevation={0} sx={{bgcolor:'white', width:'100%', p:1, borderRadius:3 }}>
                <Typography sx={{textAlign:'center', fontWeight:'bold' }}>4</Typography>
              </Paper>

            </Grid>
          </Grid>
        </Paper>

        <Grid sx={{mt:6, mb:10}}>
          <Grid container>
          <Typography variant='h6' sx={{fontWeight:'400', pl:1}}>
              Categories
          </Typography>
          <IconButton onClick={() => handleBackNavigation('/all-items-list')}>
            <ArrowForwardIos fontSize='small' />
          </IconButton>
          </Grid>

          <motion.div ref={carousel} style={{ overflow:'hidden', marginTop:'2rem', cursor:'grab'}}>
            <motion.div 
                drag="x" 
                dragConstraints={{right: 0, left: -width}}
                animate={{x:0}}  
                initial={{x:-60}}
                style={{display:'flex'}}>
              {
              categories.map((item) => (
                <motion.div style={{ minWidth:'9rem', padding:12}} key={item.name}>
                  <Paper elevation={0} sx={{width:'100%', height:'100%', borderRadius:5, 
                    bgcolor:'secondary.main', p:2, }} onClick={() => handleBackNavigation('/categories/category')}>
                    <img src={item.img} alt={item.alt} style={{width:'50px', marginLeft:'2rem'}} />
                    <Typography fontWeight='400' sx={{mt:1}}>{item.name}</Typography>
                  </Paper>
                </motion.div>
                  )
                  )}
            </motion.div>
          </motion.div>
        </Grid>

        <Paper sx={{ display:'flex', justifyContent:'space-evenly', bgcolor:'primary.main',
           borderRadius:3, width:'100%', height:'50px'}}>

            { menuIcons.map((item) => (
              <motion.div style={{display:'flex'}} key={item.alt}>
                <IconButton>
                  <img style={{width:'40px'}} src={item.img} alt={item.alt} />
                </IconButton>
            </motion.div>
            ))}
            
        </Paper>

      </motion.div>
    </>
  )
}