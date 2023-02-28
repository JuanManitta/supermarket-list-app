import { Button, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

    const homeFooter =[
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

export const Home = () => {

  const [cartMovemet, setCartMovemet] = useState({});
  const [buttonMovement, setButtonMovement] = useState({});
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate();
  
  const handleButton = () => {
    navigate('/categories');
  };

  const handleCartMovement = () => {
    setCartMovemet({x:-30});

    setTimeout(() => {
      setCartMovemet({x: 300, opacity: 0, transition:{duration: 1}})
      handleButtonMovement();
        
    }, 60);

    setTimeout(() => {
      handleButton()
    }, 700);
  }
  const handleButtonMovement = () => {
      setButtonMovement({x:0, opacity:1, transition:{duration: 1}});
      setIsShow(!isShow)
  };

    

  


  return (
    <>
    <motion.div style={{padding:'24px'}}
      initial={{opacity:0}}
      animate={{opacity:1}}>
    <Grid sx={{ display:'flex',
    flexDirection:'column', alignItems:'center',}}>
        <Grid sx={{mb:3}} >
          <img style={{width:'190px'}} src="../home-compras.png" alt="" />
        </Grid>
        <motion.div style={{position:'absolute', top:'50%',}}
          animate={{opacity: isShow ? 0 : 1, transition:{delay:0.5}}}>
          <Typography variant='h6' sx={{textAlign:'center', fontWeight:'bold' }}>
            ¡No te olvides nada! <br />
          </Typography>
          <Typography sx={{color:'info.main', }}>
            Anota tus proximas compras
          </Typography>
        </motion.div>
        {/* <motion.div
          initial={{x:-800}}
          animate={buttonMovement}>
          <Button variant='contained' sx={{mt:3, mb:3}} onClick={() => handleButton()}>
            <Typography sx={{fontWeight:'500', color:'secondary.main'}}>
              Ir de compras
            </Typography>
          </Button>
        </motion.div> */}

        <Grid container alignItems='center' sx={{mt:13}}>
            
            <Grid item xs={4} sx={{pl:3}}>
            <motion.div
            animate={{x:[0,5,0], transition:{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
            }}}>
              <img src="../home-pointer.svg" style={{width:'60px', opacity:0.7}} alt="" />
            </motion.div>
            </Grid>

            <Grid item xs={4}>
            <motion.div
            animate={cartMovemet}
            whileHover={{scale:1.1}}>
              <img style={{width:'75px', cursor: 'pointer'}} src="../home-carrito.svg" alt="" onClick={handleCartMovement} />
            </motion.div>
            </Grid>
        </Grid>
        </Grid>
        <Paper elevation={0} sx={{width:'100%', height:'50px', borderRadius:4,
        bgcolor:'primary.main', mt:4, display:'flex', justifyContent:'space-evenly'}}>
           {homeFooter.map((item) => (
           <motion.div style={{display:'flex'}} key={item.alt}
               whileHover={{scale:1.3}}>
               <img style={{width:'40px'}} src={item.img} alt={item.alt} />
           </motion.div>
           ))}
        </Paper>
      </motion.div>
    </>
  );
};