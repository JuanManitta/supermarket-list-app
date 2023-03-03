import { Grid, Paper } from '@mui/material';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';




export const AppLayout = ({children}: {children: ReactNode}) => {




  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", position:'relative' }}
    >
      <motion.div
       initial={{opacity:0}}
       animate={{opacity:1, transition:{delay:0.5}}}>
        <Paper elevation={0} sx={{p:0, width:'360px', height:'650px', borderRadius:10, boxShadow: 10}}>

            {children}

        </Paper>
      </motion.div>
    </Grid>
  );
};