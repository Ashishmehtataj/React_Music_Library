import axios from "axios";
import { useEffect, useState } from "react";

function AxiosTutorial(){
    const [datas,setDatas] = useState([])
    const URL = "https://jsonplaceholder.typicode.com/users"


    async function UserDatas() {
        try{
            const res = await axios.get(URL)
            // .then((res)=>{
                setDatas(res.data)
            // })
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        UserDatas();
    },[])
    // useEffect(()=>{
    //     axios.get(URL)
    //     .then((response)=>{
    //         console.log(response)
    //         setDatas(response.data)
    //         // document.write(datas)
    //     })
    // },[])
    return(
        <div>
                {datas.map((data)=>{    
                    return (
                        <div >

                            <h1 className="text-center mt-2">{data.id} - {data.name}</h1>
                           
                        </div>
                    )
                })}
        </div>
    )
}
export default AxiosTutorial;