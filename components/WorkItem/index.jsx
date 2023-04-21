import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StreamIcon from '@mui/icons-material/Stream';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function WorkItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let title = props.title
  let subheader = props.subheader
  let image = props.image
  let description = props.description
  let subDescription = props.subDescription
  let siteLink = props.siteLink
  let codeLink = props.codeLink

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'var(--color15)', color: 'var(--color17)' }}>
      <CardHeader
       avatar={
          <StreamIcon />
        }
        action={
        <>
          <IconButton 
            aria-label="settings menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
          >
            <MoreVertIcon />
          </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <a href={siteLink} target='_blank' rel='noreferrer'>
                        <Typography textAlign="center">View Site</Typography>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <a href={codeLink} target='_blank' rel='noreferrer'>
                        <Typography textAlign="center">Source Code</Typography>
                    </a>
                </MenuItem>
            </Menu>
        </>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="var(--color17)">
         {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {subDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}