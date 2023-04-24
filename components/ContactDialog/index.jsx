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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formMessage, setFormMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const form = React.useRef();


  const handleChange = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

    if (formType === 'from_name') {
      setFormName(formValue);
    } else if (formType === 'reply_to') {
      setFormEmail(formValue);
    } else {
      setFormMessage(formValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!validateEmail(formEmail) || !formName) {
    //   setErrorMessage('Valid email and/or name required!');
    //   console.log(errorMessage);
    //   return;
    // }

    // emailjs.sendForm('service_peaz7nq', 'template_iuipk7c', form.current, 'ZElOBNy_cU2ZofiP0');

    // alert(`Thanks for reaching out ${formName}! Please allow 1-2 business days for a response.`);
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

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
          <form
            ref={form}
          >
            <TextField
            autoFocus
            margin="dense"
            value={formName}
            name="from_name"
            onChange={handleChange}
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
            value={formEmail}
            name="reply_to"
            onChange={handleChange}
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            size="small"
            />
            <TextField
            autoFocus
            margin="dense"
            value={formMessage}
            name="message"
            onChange={handleChange}
            id="message"
            label="Message"
            type="email"
            fullWidth
            multiline
            rows={4}
            size="small"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
     </div>
  );
}