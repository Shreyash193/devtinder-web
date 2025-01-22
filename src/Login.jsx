import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  {addUser}  from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";

const Login = () => {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [emailId, setEmailId] = useState("shreyashgore193@gmail.com");
    const [password, setPassword] = useState("Shreyash@193");
    const [isUserLogin,setIsUserLogin]=useState(true);
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const [error,setError]=useState("");


    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId, password
            },
            {withCredentials:true},
        );
        dispatch(addUser(res.data));
        return navigate("/");
        }
        catch (err) {
            setError(err?.response?.data || "something went wrong");
            console.error(err);
        }
    };

    const handleSignUp = async () =>{
        try{
            const res= await axios.post(BASE_URL + "/signup",{firstName,lastName,emailId, password},{withCredentials:true});
            dispatch(addUser(res.data.data));
            navigate("/profile");

        }
        catch(err){
            console.log(err);
        }

    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isUserLogin? "Login" : "Sign Up"}</h2>
                  {!isUserLogin &&  <>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">FirstName</span>
                            </div>
                            <input type="text"
                                value={firstName}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setFirstName(e.target.value)} />
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
                                onChange={(e) => setLastName(e.target.value)} />
                        </label>
                    </div>
                    </>}
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Email Id</span>
                            </div>
                            <input type="text"
                                value={emailId}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setEmailId(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label password">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="text"
                                value={password}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"onClick={isUserLogin? handleLogin :handleSignUp}>{isUserLogin ? "Login" : "Sign Up"}</button>
                    </div>
                    <p className="text-white-500 text-center cursor-pointer" onClick={()=>setIsUserLogin((value)=>!value)}>{isUserLogin? "New User? Sign Up" : "Existing User? Login"}</p>
                </div>
            </div>
        </div>

    )
};

export default Login;