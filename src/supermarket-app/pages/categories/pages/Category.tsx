import { ArrowBackIos } from '@mui/icons-material';
import { Grid, Typography, Paper, IconButton, Checkbox } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MenuBar } from '../../../../ui/MenuBar';



  
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

] ;

const filtro = 'Meat'

const category = data.filter(item => item.name === filtro);
const items = category[0].items;




export const Category = () => {
    const navigate = useNavigate();

    const handleBackNavigation = () => {
      navigate('/categories')
    };

    const [height, setHeight] = useState(0);
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
        }
    }, [])
    

  
  
  return (
  <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}>
    <Grid >
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
                    <img style={{width:'110px'}} src={category[0].img} alt={category[0].alt} />
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    </Grid>


    <motion.div ref={carousel} style={{ height: '350px',overflow:'hidden', cursor:'grab'}}>
    <motion.div 
        style={{padding:'24px'}}
        drag="y"
        dragConstraints={{bottom: 0, top: -height }}>
        {items.map((item) => (
            <Paper elevation={0} sx={{ display:'flex', justifyContent:'space-evenly', bgcolor:'secondary.main',
            borderRadius:3, width:'100%', minHeight:'2rem0px', mb: 2}}>
            <Grid container>
                <Grid item xs={9}>
                    <Typography sx={{color:'black', textAlign:'left', p:1.5}}>
                        {item.name}
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{display:'flex', alignItems:'center'}}>
                    <Checkbox />
                    <Paper elevation={0} sx={{bgcolor:'info.main', width:'20px', height:'22px', display:'flex',
                     justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <Typography sx={{ color:'black', fontSize:'0.9rem'}}>
                            {item.quantity}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
        ))}
    </motion.div>
    </motion.div>

    <Grid sx={{p:3}}>
        <MenuBar/>
    </Grid>
    </motion.div>

  )
}