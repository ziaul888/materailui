import React from 'react'
import Typography from "@material-ui/core/Typography"
import { Container,Button,makeStyles } from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';


const useStyles=makeStyles({
    btn:{
        fontSize:60,
      backgroundColor:"violet",
      "&:hover":{
          backgroundColor:"blue"
      }
    },
    title:{
        textDecoration:"underline",
        marginBottom:20
    }
})


export const Create = () => {
    const classes=useStyles()
    return (
        <Container>
            <Typography variant="h6"
            component="h2"
            color="primary"
            align="center">
                crete a header
            </Typography>
            <Typography color="secondary" noWrap className={classes.title}>
            Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
            Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
            </Typography>

            <Button type="submit"
            color="secondary"
            variant="contained"
            startIcon={<SendIcon/>}
            endIcon={<SendIcon/>}
            className={classes.btn}
            >
                submit
            </Button>

            <br></br>
            <AcUnitOutlinedIcon color="secondary"
            fontSize="large"/>

        </Container>
    )
}
