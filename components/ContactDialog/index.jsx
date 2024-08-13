import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import MessageSent from './messageSent';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formMessage, setFormMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const form = React.useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    if (!validateEmail(formEmail) || !formName) {
      setErrorMessage('Valid email and/or name required!');
      console.log(errorMessage);
      return;
    }

    console.log();
    emailjs.sendForm('service_peaz7nq', 'template_iuipk7c', form.current, 'ZElOBNy_cU2ZofiP0');

    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  return (
    <div>
    <IconButton aria-label='Email' onClick={handleClickOpen}>
    <EmailIcon sx={{ color: 'var(--neon_green)', fontSize: '3.5rem' }} />
    </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please allow 1-2 business days for a response.
          </DialogContentText>
          <form
            id="contactForm"
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
            type="text"
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
            required
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
            required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
          <Button onClick={handleSubmit}><MessageSent /></Button>
        </DialogActions>
      </Dialog>
     </div>
  );
}