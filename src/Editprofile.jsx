import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "./utils/userSlice";

const EditProfile=({user})=>{
     const [firstName, setfirstName] = useState(user.firstName);
     const [lastName, setlastName] = useState(user.lastName);
     const [photo,setPhoto]=useState(user.photo);
     const [about,setAbout]=useState(user.about);
     const [age,setAge]=useState(user.age);
     const [gender,setGender]=useState(user.gender);
     const [error,setError]=useState();
     const dispatch=useDispatch();

     
     const saveProfile = async () => {
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                { firstName, lastName, photo, about, age, gender },
                { withCredentials: true }
            );
    
            console.log("Response data:", res.data); // Log the response data
            dispatch(addUser(res?.data?.data));
        } catch (err) {
            console.error("Error message:", err.message); // Log the error message
            setError(err.message);
        }
    };
    //  useEffect(()=>{
    //    saveProfile();
    // },[]);
    

     
    return(
        <div className="flex justify-center my-10 ">
            <div className="flex justify-center mx-10">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">FirstName</span>
                            </div>
                            <input type="text"
                                value={firstName}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setfirstName(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">LastName</span>
                            </div>
                            <input type="text"
                                value={lastName}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setlastName(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Photo</span>
                            </div>
                            <input type="text"
                                value={photo}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setPhoto(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">About</span>
                            </div>
                            <input type="text"
                                value={about}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setAbout(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>
                            <input type="text"
                                value={age}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setAge(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Gender</span>
                            </div>
                            <input type="text"
                                value={gender}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setGender(e.target.value)} />
                        </label>
                    </div>
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
        <UserCard user={{firstName,lastName,photo,about,age,gender}}/>
        </div>
        
    )
}

export default EditProfile;