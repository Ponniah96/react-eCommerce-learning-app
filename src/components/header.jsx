import {Stack, Button, IconButton, Box, Typography, AppBar, Toolbar} from '@mui/material';
import { EmailSharp, Facebook, Instagram, Phone, Twitter } from '@mui/icons-material';
// import ReactLanguageSelect from "react-languages-select";
// import "../../node_modules/react-languages-select/css/react-languages-select.css";
export const HeaderLayout=()=>{
    return(
        <Stack>            
            <Stack spacing={4} direction='row' sx={{
                display:{
                        xs:'none',
                        sm:'flex'
                    },
                    width:'90%',
                    margin:'0 auto 10px auto'
                }}>
                <Stack spacing={2} sx={{flexGrow:1}} direction='row'>
                    <Button  size="small" variant='text' startIcon={<EmailSharp/>} 
                        sx={{
                            fontSize:'12px',
                            color:'#807F92',
                            ":hover":{
                                textDecoration:'underline',
                                background:'none'
                            }
                        }}
                        aria-label='email'
                        href='mailto:ponniahk78@gmail.com'
                    >info@webmail.com</Button>
                    <Button  size="small" variant='text' startIcon={<Phone />}
                        sx={{
                            fontSize:'12px',
                            color:'#807F92',
                            ":hover":{
                                textDecoration:'underline',
                                background:'none'
                            }
                        }}
                        aria-label='phone-Number'
                        href='tel:+919677264250'
                    >+1 (999)-999-9999</Button>
                </Stack>
                <Stack spacing={2}  direction='row' >
                    <IconButton size='small' aria-label='facebook'><Facebook/> </IconButton>
                    <IconButton size='small' aria-label='twitter'><Twitter/> </IconButton>
                    <IconButton size='small' aria-label='instagram'><Instagram/> </IconButton>
                    {/* <Typography sx={{paddingTop:'10px'}}>
                        <ReactLanguageSelect
                            defaultLanguage="en"
                            onSelect={(languageCode)=>console.log(languageCode)}
                            selectedSize={12}
                            optionsSize={12}
                        />
                    </Typography> */}
                </Stack>
            </Stack>
            <Box sx={{
                display:'flex',
                width:'90%',
                margin:'0 auto'
            }}>
                <AppBar position="static" sx={{backgroundColor:'transparent', boxShadow:'none'}}>
                    <Toolbar>
                        <Typography variant='text' sx={{color:'#262250', fontSize:'1.375rem', fontWeight:'700', flexGrow:1}}>PEAKZI</Typography>
                    </Toolbar>
                </AppBar>                
            </Box>
        </Stack>
    )
}