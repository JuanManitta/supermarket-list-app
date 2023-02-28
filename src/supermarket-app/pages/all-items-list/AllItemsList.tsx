import { Grid, Typography, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MenuBar } from '../../../ui/MenuBar';

const data = [

    {
        name: 'Meat',
        img: '../category-meat.svg',
        alt: 'meat',
        items: [
            {
                name: 'Beef',
                done: false,
                quantity: 1,
              },
              {
                  name: 'Chicken',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Pork',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Lamb',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Turkey',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Ham',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Bacon',
                  done: false,
                  quantity: 1,
              },
              {
                  name: 'Sausage',
                  done: false,
                  quantity: 1,
              },

          ],
      },
    {
        name: 'Fish',
        img: '../category-fish.svg',
        alt: 'fish',
        items: [
        {
              name: 'Salmon',
              done: false,
              quantity: 1,
          },
          {
              name: 'Tuna',
              done: false,
              quantity: 1,
          },
          {
              name: 'Cod',
              done: false,
              quantity: 1,
          },
          {
              name: 'Haddock',
              done: false,
              quantity: 1,
          },
          
          

      ],
      },
    {
        name: 'Fish',
        img: '../category-fish.svg',
        alt: 'fish',
        items: [
        {
              name: 'Salmon',
              done: false,
              quantity: 1,
          },
          {
              name: 'Tuna',
              done: false,
              quantity: 1,
          },
          {
              name: 'Cod',
              done: false,
              quantity: 1,
          },
          {
              name: 'Haddock',
              done: false,
              quantity: 1,
          },
          
          

      ],
      },
    {
        name: 'Fish',
        img: '../category-fish.svg',
        alt: 'fish',
        items: [
        {
              name: 'Salmon',
              done: false,
              quantity: 1,
          },
          {
              name: 'Tuna',
              done: false,
              quantity: 1,
          },
          {
              name: 'Cod',
              done: false,
              quantity: 1,
          },
          {
              name: 'Haddock',
              done: false,
              quantity: 1,
          },
          
          

      ],
      },
    {
        name: 'Fish',
        img: '../category-fish.svg',
        alt: 'fish',
        items: [
        {
              name: 'Salmon',
              done: false,
              quantity: 1,
          },
          {
              name: 'Tuna',
              done: false,
              quantity: 1,
          },
          {
              name: 'Cod',
              done: false,
              quantity: 1,
          },
          {
              name: 'Haddock',
              done: false,
              quantity: 1,
          },
          
          

      ],
      },
    {
        name: 'Fish',
        img: '../category-fish.svg',
        alt: 'fish',
        items: [
        {
              name: 'Salmon',
              done: false,
              quantity: 1,
          },
          {
              name: 'Tuna',
              done: false,
              quantity: 1,
          },
          {
              name: 'Cod',
              done: false,
              quantity: 1,
          },
          {
              name: 'Haddock',
              done: false,
              quantity: 1,
          },
          
          

      ],
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




export const AllItemsList = () => {

    const [height, setHeight] = useState(0)
    const carousel = useRef<HTMLInputElement>(null)

    const navigate = useNavigate();
    const handleBackNavigate = () => {
        navigate('/categories');
    }

    useEffect(() => {
        if (carousel.current) {
            setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight)
        }
    }, [])







    
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
            <Grid xs={11}>
                <Typography variant='h6' sx={{textAlign:'center', mr:3}}>
                    Supermarket List
                </Typography>
            </Grid>
        </Grid>
        <Grid>
        <motion.div ref={carousel} style={{height:'420px', overflow:'hidden'}} >
            <motion.div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1rem', padding:'24px'}}
            drag="y"
            dragConstraints={{bottom:0, top: -height}}>

            { data.map(item => (
                <motion.div>
                    <Paper elevation={0} sx={{bgcolor:'secondary.main', width:'100%', display:'grid', p:2, borderRadius:5}}>
                        <Paper elevation={0} sx={{bgcolor:'white', width:'100%', borderRadius: 2, mb:1, boxShadow: '1px 1px 6px 1px rgb(221,221,221)'}}>
                            <Typography sx={{fontSize:'1rem', textAlign:'center'}}>
                                {item.name}
                            </Typography>
                          
                        </Paper>
                        {
                            item.items.slice(0,4).map(item => (
                                <Grid sx={{display:'flex', justifyContent:'space-between'}}>
                                <Typography sx={{fontSize:'0.9rem'}}>{item.name}</Typography>
                                <Typography sx={{fontSize:'0.8rem'}}>{item.quantity}</Typography>
                            </Grid>
                           ))}
                        
                    </Paper>
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
        </Grid>


        <Grid sx={{p:3}}>
        <MenuBar/>
    </Grid>
    </motion.div>
  )
}
