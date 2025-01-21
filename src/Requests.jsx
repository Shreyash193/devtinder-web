import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest,removeRequest} from "./utils/requestSlice";

const Requests =()=>{
    const requests=useSelector((store)=>store.requests);
    const dispatch=useDispatch();

    const reviewRequest =async (status,_id) =>{
        try{
            const res=await axios.post(BASE_URL + "/request/review/" + status + "/" + _id,{},{withCredentials:true});
            dispatch(removeRequest(_id));
        }
        catch(err){
            console.log(err);
        }
    }
    const getAllRequests= async () => {
        try{
            const res=await axios.get(BASE_URL + "/user/request/received",{withCredentials:true});
            dispatch(addRequest(res.data.data));
           
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getAllRequests();
    },[]);


    if(!requests){
        return;
    }

    if(requests.length == 0){
        return <h1 className="flex justify-center text-4xl mt-10">No Requests Found</h1>
    }

    return (
        <div className="justify-center">
        <div className="flex justify-center font-bold mt-10 ">Requests Recived</div>

        {requests.map((requests)=>{
            const {_id,firstName,lastName,photo,age,gender,about}=requests.fromUserId;

            return (
                <div key={_id} className="flex justify-center m-5">
                    <div className="card card-side bg-base-300 shadow-xl w-1/2 ">
                <figure className="w-24">
                  <img
                    src={photo}
                    alt="Photo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  {age && gender && <p>{age + "," + gender}</p>}
                  <p>{about}</p>
                </div>
                <div className="flex m-5 ">
               <button className="btn btn-outline btn-primary mx-2" onClick={()=>reviewRequest("accepted",requests._id)}>Accept</button>
               <button className="btn btn-outline btn-secondary mx-2" onClick={()=>reviewRequest("rejected",requests._id)}>Reject</button>
               </div>
               
                      
              </div>
                </div>
                
            )
        })}
        </div>
    )
}

export default  Requests ;