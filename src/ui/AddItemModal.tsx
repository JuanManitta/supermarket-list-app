import Modal from 'react-modal';
import { Grid, IconButton, TextField, Typography, Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addItem } from '../supermarket-app/slice/supermarketSlice';

interface AddItemModalProps {
    isOpen: boolean;
    closeModal: () => void;
    category: string;
}
export const AddItemModal = ({isOpen, closeModal, category}: AddItemModalProps) => {

    const dispatch = useDispatch();

    const {product, price, quantity, handleInputChange, resetForm } = useForm();


    const handleSubmit = (event:any) => {
       
        event.preventDefault();
        if (product.trim().length === 0 || quantity <= 0) {
            return;
        }
        dispatch(addItem({product, category, quantity}));
        resetForm();
        closeModal();

    }
    

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border:'none',
          background:'#fff',
          borderRadius: 15,
          maxWidth: 400,
        },
    };

    Modal.setAppElement('#root');

  return (
    <Modal
    isOpen ={isOpen}
    onRequestClose={closeModal}
    style={customStyles}
    overlayClassName="modal-fondo"
    closeTimeoutMS={500}
    >
        <Grid>
            <Grid container justifyContent='space-between' alignItems='center' sx={{mb:3, mt:1}}>
                <Typography sx={{fontWeight:'500'}}>Add Product</Typography>
                <IconButton onClick={closeModal}>
                    <Close/>
                </IconButton>
            </Grid>
            <hr style={{opacity:0.3}}/>
            
            <form onSubmit={handleSubmit}>
                <Grid container sx={{mt:4, mb:2}}>
                    <Grid item xs={7}>
                        <TextField fullWidth value={product}  size='small' label='Product' name='product' onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField type='number'value={quantity} size='small' name='quantity' placeholder='1' onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={2} sx={{ml:2, display:'flex'}}>
                        <Button size='small' variant='contained' sx={{backgroundColor:'info.main', borderRadius:1}} 
                        onClick={handleSubmit}>
                            <Typography sx={{fontSize:'0.7rem', fontWeight:'500'}}>Add</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
        

    </Modal>
  )
}
