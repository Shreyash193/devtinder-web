import axios from "axios";
import {BASE_URL} from "./utils/constants";
import { useDispatch } from "react-redux";
import {removeUserFeed} from "./utils/feedSlice";

const UserCard=({user})=>{
    const {_id,firstName,lastName,photo,about,age,gender}=user;

    const dispatch=useDispatch();

    const handleSendRequest = async (status,_id) =>{
      try{
        const res=await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,{},{withCredentials:true});
        dispatch(removeUserFeed(_id));

      }
      catch(err){
        console.log(err);

      }
    }




    return(
       
        <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + " " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
     
    )
}

export default UserCard;