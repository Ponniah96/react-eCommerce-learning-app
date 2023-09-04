import { Stack } from "@mui/system"
import { ProductTable } from "../../components/table"
import { Avatar, Typography } from "@mui/material"
import ProductIcon1 from '../../assets/images/product-organization/ProductIcon1.png'
import WallPainting from  '../../assets/images/product-services/WallPainting.svg'
import Construction from "../../assets/images/product-services/Construction.svg"
import Cleaning from "../../assets/images/product-services/Cleaning.svg"
import ACRepair from '../../assets/images/product-services/ACRepair.svg'
import ElectricalService from '../../assets/images/product-services/ElectricalServices.svg'
import Plumbing from '../../assets/images/product-services/Plumbing.svg'
import PestControl from '../../assets/images/product-services/PestControl.svg'
export const ProductOrganizationList = ()=>{
    const columns=[
        { 
            title: "Sr.no",
            field: "sno" 
        },
        { 
            title: "Organization",
            field: "organization", 
            render:(rowData)=>(
                <Stack direction='row'>
                    {/* <img src={`${rowData.images}`} alt="product-images"></img> */}
                    <img src={ProductIcon1}  alt="product-images"></img>
                    <Typography sx={{color:'rgba(65, 87, 113, 0.80)', fontSize:'1rem', fontWeight:'600', paddingLeft:'15px',fontFamily:'Poppins'}}>{rowData.organization}</Typography>
                </Stack>
            )
        },
        { 
            title: "Location",
            field: "location" 
        },
        { 
            title: "Services",     
            field: "services",
            render:(rowData)=>(
                <>
                {   rowData.services==='Construction'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(196, 79, 192, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Construction" src={Construction}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='Cleaning'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(236, 184, 49, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Cleaning" src={Cleaning}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='Electrical Services'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(59, 70, 167, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Electrical Service" src={ElectricalService}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='Pest control, water softening' || rowData.services==='Pest control'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(244, 179, 128, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Pest Control" src={PestControl}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='Plumbing, water softening' || rowData.services==='Plumbing, Electrical, AC works'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(143, 74, 193, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Wall Painting" src={Plumbing}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='AC repair, HVAC maintenance'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(74, 81, 204, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="AC Repair" src={ACRepair}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                    rowData.services==='Wall Painting, Accent walls'
                        ?
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(220, 132, 157, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Wall Painting" src={WallPainting}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                        :
                        <Stack direction='row'>
                            <Avatar sx={{bgcolor:'rgba(220, 132, 157, 0.30)',width:'25px',height:'25px',img:{width:'40%',height:'40%'}}} alt="Wall Painting" src={WallPainting}></Avatar>
                            <Typography sx={{paddingLeft:'15px', fontSize:'1rem', fontFamily:'Poppins'}}>{rowData.services}</Typography>
                        </Stack>
                }
                
                </>
            )
        }
    ]    
    const  data=[
        {
            sno:1,
            organization: "MDF Builders",
            location: "New York, NY",
            services: "Construction",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon1.png'
        },
        {
            sno:2,
            organization: "Maid Brigade",
            location: "Austin, TX",
            services: "Cleaning",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon2.png'
        },
        {
            sno:3,
            organization: "GC electrical",
            location: "Charleston, SC",
            services: "Electrical Services",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon3.png'
        },
        {
            sno:4,
            organization: "Omaha",
            location: "New Jersey, NJ",
            services: "Pest control, water softening",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon4.png'
        },
        {
            sno:5,
            organization: "Wirenut home Services",
            location: "Dallas, TX",
            services: "Plumbing, water softening",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon5.png'
        },
        {
            sno:6,
            organization: "Home electrics",
            location: "San Diego, CA",
            services: "Electrical Services",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon6.png'
        },
        {
            sno:7,
            organization: "Pest free",
            location: "Savannah, GE",
            services: "Pest control",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon7.png'
        },
        {
            sno:8,
            organization: "Wagner Home repair",
            location: "Dallas, TX",
            services: "Plumbing, Electrical, AC works",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon8.png'
        },
        {
            sno:9,
            organization: "We one services",
            location: "San Diego, CA",
            services: "Wall Painting, Accent walls",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon9.png'
        },
        {
            sno:10,
            organization: "One source home services",
            location: "Austin, TX",
            services: "AC repair, HVAC maintenance",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon10.png'
        },
        {
            sno:11,
            organization: "MDF Builders",
            location: "New York, NY",
            services: "Construction",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon1.png'
        },
        {
            sno:12,
            organization: "Maid Brigade",
            location: "Austin, TX",
            services: "Cleaning",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon2.png'
        },
        {
            sno:13,
            organization: "GC electrical",
            location: "Charleston, SC",
            services: "Electrical Services",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon3.png'
        },
        {
            sno:14,
            organization: "Omaha",
            location: "New Jersey, NJ",
            services: "Pest control, water softening",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon4.png'
        },
        {
            sno:15,
            organization: "Wirenut home Services",
            location: "Dallas, TX",
            services: "Plumbing, water softening",
            cart: 34,
            images:'../../assets/images/product-organization/ProductIcon5.png'
        }
    ]
    return(
        <ProductTable
            title={'Organization List'}
            columns={columns}
            data={data}
        />
    )
}