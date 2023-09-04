import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {useState} from 'react';
import { ProductOrganizationList } from './product-organization-list';
import { ProductCompetitorList } from './product-competitor-list';

export const ProductIndex=()=>{
    const [pageIndex,setPageIndex]=useState(0);
    return(
        <Stack sx={{backgroundColor:"rgba(163, 172, 255, 0.15);"}}>
            <Box sx={{width:'90%', margin:'0 auto'}}>
                <Stack direction={'row'}>
                    <Button variant='outlined' onClick={(e)=>setPageIndex(0)}>Back</Button>
                    <Typography sx={{flexGrow:'1'}}></Typography>
                    <Button variant='contained' onClick={(e)=>setPageIndex(1)}>Next</Button>
                </Stack>
                {pageIndex===0
                    ?
                    <ProductOrganizationList />
                    :
                    <ProductCompetitorList />
                }
            </Box>
        </Stack>
        
    )
}