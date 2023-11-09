import { useState } from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import { Close , DeleteOutline } from '@mui/icons-material'
import { API_URLS } from '../services/api.urls.js'
import useApi from '../hooks/useApi'

const dialogStyle = {
    height: '70%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    baxShadow: 'none',
    borderRadius: '10px 10px 10px 10px'
}

const Header = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3px  15px',
    background: "#f8bbd0",
    marginBottom: '20000',
    '& > p ': {
        fontSize: 13,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    padding: "0 15px",
    '& > div': {
        fontSize: '13px',  
        borderBottom: '1px solid #F5F5F5',
        marginTop: '1px'
    }
})

const Footer = styled(Box) ({
    display: 'flex',
    padding: '10px 15px',
    justifyContent: 'space-between',
})

const SendButton = styled(Button)({
    background: '#33c9dc',
    color: '#212121',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 85
})

const ComposeMail = ({openDialog, setOpenDialog}) => {
    const [data, setData]  = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmails);

    const config = {
            Host : "smtp.elasticemail.com",
            Username : process.env.REACT_APP_USERNAME,
            Password : process.env.REACT_APP_PASSWORD,
            Port: '2525'
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const closeComposeMail = (e) =>{
        e.preventDefault();
        setOpenDialog(false);
    }

    const sendMail = (e) =>{
        e.preventDefault();
        if(window.Email){
                window.Email.send({
                ...config,
                To : data.to,
                From : "rohithvudayana46@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert(message)
            );
        }

        const payload = {
            to : data.to,
            from : "rohithvudayana46@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'rohith',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setOpenDialog(false)
            setData({});
        } else {

        }
    }



    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx : dialogStyle }}
        > 
            <Header>
                <Typography>New message</Typography>
                <Close fontSize='small' onClick={(e) => closeComposeMail(e)}/>
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder='Recipients' name='to' onChange={(e) => onValueChange(e)}/>
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)}/>
            </RecipientsWrapper>

            <TextField
                multiline
                rows = '15'
                sx={{ '& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
                onChange={(e) => onValueChange(e)}
                name="body"
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)}/>
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;