import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
    const initialstate = {
        name: "",
        email: "",
        city: "",
        phone: "",
        photo: ""
    }
    const [user, setUser] = useState(initialstate)
    const [img, setimg] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    const onSubmits = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const apiUrl = "https://tureappservar.onrender.com/user";

            {/*Because it is a form data so we use formdata()*/ }
            let formdata = new FormData()
            formdata.append("name", user.name)
            formdata.append("city", user.city)
            formdata.append("email", user.email)
            formdata.append("phone", user.phone)
            formdata.append("photo", img)

            {/*If it will be raw data we will write user in the place of formdata*/ }

            const response = await axios.post(apiUrl, formdata)
            console.log(response);
            toast.success(response?.data?.message)
            navigate("/showuser")
            setLoading(false)

        } catch (error) {
            console.log("Error Fetching Data", error);
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }




    }

    return (
        <>
            <div className="container" style={{ marginTop: '70px', height: '550px', border: '2px solid red', backgroundColor: 'blue' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Login</h2>
                <form onSubmit={onSubmits} method='post'>
                    <div className="form-group">
                        <label for="exampleInputEmail1" style={{ color: 'white', textWeight: 'bold' }}>Name*</label>
                        <input type="text" name='name' placeholder='Enter user name...' required className="form-control"
                            onChange={handleChange}
                            value={user.name}
                        />

                    </div>


                    <div class="form-group">
                        <label for="exampleInputEmail1" style={{ color: 'white', textWeight: 'bold' }}>Email*</label>
                        <input type="email" class="form-control" name='email' placeholder='Enter email address...' required
                            onChange={handleChange}
                            value={user.email}
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{ color: 'white', fontSize: '20px' }}>Phone</label>
                        <input type="text" class="form-control" name='phone' placeholder='Enter your phone number...'
                            onChange={handleChange}
                            value={user.phone}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{ color: 'white', textWeight: 'bold', fontSize: '20px' }}>City</label>
                        <input type="text" class="form-control" name='city' placeholder='Enter your city...'
                            onChange={handleChange}
                            value={user.city}
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1" style={{ color: 'white', textWeight: 'bold', fontSize: '20px' }}>Photo</label>
                        <input
                            type="file"
                            onChange={(e) => setimg(e.target.files[0])}
                            name="img"
                            accept="image/*"
                            class="form-control"
                        />
                        {img !== "" && img !== undefined && img !== null ? (
                            <img
                                style={{ height: "180px" }}
                                src={URL.createObjectURL(img)}
                                alt=""
                                className="upload-img"
                            />
                        ) : (
                            <>{img === "" && <p>Drag or drop content here</p>}</>
                        )}
                    </div>

                    <button type="submit" class="btn btn-danger">
                        {loading?'Loading...':'Submit'}
                    </button>
                </form>
            </div>

        </>
    )
}

export default AddUser
