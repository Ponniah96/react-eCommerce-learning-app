import { Stack } from "@mui/system"
import { ProductTable } from "../../components/table"
import { Typography } from "@mui/material"
import ProductIcon2 from '../../assets/images/product-organization/ProductIcon8.png'

export const ProductCompetitorList = ()=>{
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
                    <img src={ProductIcon2}  alt="product-images" loading="lazy"></img>
                    <Typography sx={{color:'rgba(65, 87, 113, 0.80)', fontSize:'1rem', fontWeight:'600', paddingLeft:'15px'}}>{rowData.organization}</Typography>
                </Stack>
            )
        },
        { 
            title: "Location",
            field: "location" 
        },
        { 
            title: "Services",     
            field: "services" 
        },
        { 
            title: "Cart",         
            field: "cart", 
            lookup: {
                 34: "India", 
                 63: "USA" 
            }
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
            title={'Competitor List'}
            columns={columns}
            data={data}
        />
    )
}