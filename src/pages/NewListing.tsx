import axios from 'axios'
import { useState } from 'react'

type Status = 'sale' | 'rent'

type Agent = {
    firstName: string,
    lastName: string,
    email:string,
    profile: File,
    phone: string
}

export type Listing = {
    adress: string,
    image : File,
    region : string,
    city: string,
    zipCode: number, 
    price : number,
    area: number,
    roomsCount: number,
    description: string,
    status : Status,
    agent: Agent
}

const defaultData : Listing = {
    adress: '',
    image : {} as File,
    region : '',
    city: '',
    zipCode: 0, 
    price : 0,
    area: 0,
    roomsCount: 0,
    description: '',
    status : 'rent',
    agent: {} as Agent
}

const API_URL = 'https://api.real-estate-manager.redberryinternship.ge/api/real-estates'

const addListing = async (userData : Listing) =>{
    const respone = await axios.post(API_URL, userData, {
        headers:{
            Authorization : `Bearer ${process.env.token}`
        }        
    })
    return respone.data
}

const NewListing = () => {
    const [data, setData] = useState<Listing>(defaultData)

    const handleSubmit = () =>{

    }
    return <div>
        <h1 style={{
            fontSize : '32px',
            textAlign:'center',
            fontWeight: '500',
            color: '#021526'
        }}>ლისტინგის დამატება</h1>
        <form style={{
            width : '790px',
            display: 'flex',
            flexDirection: "column",
            margin: '0 auto',
            gap: '80px'
        }}>

        </form>
    </div>;
  };
  
  export default NewListing;