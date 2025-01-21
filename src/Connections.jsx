import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionSlice";

const Connections =()=>{
    const connections=useSelector((store)=>store.connections);
    const dispatch=useDispatch();

    
    const fetchConnections= async ()=>{
        try{
            const res=await axios.get(BASE_URL + "/user/connections",{withCredentials:true,

            });
           
            dispatch(addConnections(res?.data?.data));

        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
     fetchConnections();
    },[]);

    if(!connections){
        return;
    }

    if(connections.length == 0){
        return <h1>No Connection Found</h1>
    }

    return (
        <div className="justify-center">
        <div className="flex justify-center font-bold mt-10 ">Connections</div>

        {connections.map((connection)=>{
            const {firstName,lastName,photo,age,gender,about}=connection;

            return (
                <div className="flex justify-center m-5">
                    <div className="card card-side bg-base-300 shadow-xl w-1/2 ">
                <figure>
                  <img
                    src={photo}
                    alt="Photo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{age + "," + gender}</p>
                  <p>{about}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div> */}
                </div>
                      
              </div>
                </div>
                
            )
        })}
        </div>
    )
}

export default Connections;