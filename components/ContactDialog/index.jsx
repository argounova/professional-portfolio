import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import { IconButton } from '@mui/material';

const formProps = {
    name: '',
    email: '',
    message: '',
} 

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(formProps);

  const onSubmit = (formProps) => {
    setValues(formProps)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <IconButton aria-label='Email' onClick={handleClickOpen}>
    <EmailIcon sx={{ color: 'var(--color4)' }} />
    </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please allow 1-2 business days for a response.
          </DialogContentText>
          <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => console.log(data)}
          >
            <TextFieldElement
            autoFocus
            margin="dense"
            name="name"
            id="name"
            label="Name"
            type="email"
            fullWidth
            size="small"
            required
            />
            <TextField
            autoFocus
            // error
            // helperText="Invalid email"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            size="small"
            />
            <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="email"
            fullWidth
            multiline
            rows={4}
            size="small"
            />
          </FormContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}