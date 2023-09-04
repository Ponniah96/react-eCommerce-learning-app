import { useState } from "react";
import { Box, Button} from "@mui/material";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import {AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn} from '@material-ui/icons'
import { pink, purple } from "@mui/material/colors";
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const ProductTable=({
    title,
    columns,
    data
})=>{
    const [rowID, setRowID] = useState(-1);
    const theme = createTheme({
        palette: {
            buttonColorNormal: {
              main:pink[200],
              dark:pink[200],
              contrastText: '#FFF',
            },
            buttonColorActive: {
                main:purple[600],
                dark:purple[600],
                contrastText: '#FFF',
              },
          },
    });
    return(
        <Box sx={{width:'90%', margin:'0 auto'}}>
            <ThemeProvider theme={theme}>
                <MaterialTable
                    title={''}
                    columns={columns}
                    data={data}
                    icons={tableIcons}
                    actions={[
                       {
                         icon:'save',
                         tooltip:'Add to Cart',
                         onClick:((e,data)=>{
                            setRowID(data.tableData.id);
                        })
                       }
                    ]}
                    components={{
                        Action:props=>(
                            <Button 
                                size="small"
                                variant="contained"
                                color={rowID!==props.data.tableData.id?"buttonColorNormal":"buttonColorActive"}
                                onClick={(event) => props.action.onClick(event, props.data)}
                            >
                                {rowID!==props.data.tableData.id?"Add to Cart":"Added to Cart" }
                            </Button> 
                        )
                    }}
                    options={{
                        search:true,searchFieldAlignment:'left',searchFieldVariant:'outlined',searchFieldStyle:{border:'1px solid rgba(59, 70, 167, 0.30)', borderRadius:'0.9375rem'},
                        paging:true,pageSizeOptions:[10,20,30],pageSize:10,paginationType:"stepped",
                        headerStyle:{
                            fontFamily:'Poppins',
                            fontSize:'1rem',
                            color:'#38506B',
                            borderTop:'2px solid rgba(95, 77, 200, 0.60)',
                            borderBottom:'3px solid rgba(95, 77, 200, 0.60)',
                            // borderLeft:'2px solid rgba(95, 77, 200, 0.60)',
                            // borderRight:'2px solid rgba(95, 77, 200, 0.60)',
                            // border:'2px solid rgba(95, 77, 200, 0.60)'
                        },
                        rowStyle:{
                            fontFamily:'Poppins',
                            fontSize:'1rem',
                            borderLeft:'3px solid rgba(95, 77, 200, 0.71)',
                            borderTop:'5px solid rgba(163, 172, 255, 0.15)',
                            borderBottom:'5px solid rgba(163, 172, 255, 0.15)',
                            marginTop:'3px',
                            color:'#415771'
                        },
                        actionsColumnIndex:-1,
                        actionsCellStyle:{
                            width:'150px'
                        }
                    }}
                />
            </ThemeProvider>
        </Box>
    )
}