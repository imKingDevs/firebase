import React, { useState } from 'react'

const Data = () => {

    const [user, setuser] = useState({
        username: "",
        name: "",
        email: "",
        phone: "",
        birth: "",
        bio: "",
    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name
        value = event.target.value

        setuser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();

        const { username, name, email, phone, birth, bio } = user;

        if (username && name && email && phone && birth && bio){
            
            const res = await fetch("https://reactfirebase-51dc2-default-rtdb.firebaseio.com/userdata.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    name,
                    email,
                    phone,
                    birth,
                    bio,
                })
            });
            
            if (res) {
                setuser({
                    username: "",
                    name: "",
                    email: "",
                    phone: "",
                    birth: "",
                    bio: "",
                })
            }
        } else {
            alert("Please Enter All Fields")
        }
    }

    return (
        <>
            <div className="w-screen h-screen">
                <form className='w-full h-full flex flex-col space-y-7 items-center justify-center' method='POST'>
                    <input
                        className='md:w-3/5 w-9/12 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600'
                        type="text"
                        placeholder='Enter Your Name'
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="name"
                        value={user.name} />
                    <input
                        className='md:w-3/5 w-9/12 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600'
                        type="text"
                        placeholder='Enter Username'
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="username"
                        value={user.username} />
                    <input
                        className='md:w-3/5 w-9/12 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600'
                        type="email"
                        placeholder='Enter Your Email'
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="email"
                        value={user.email} />
                    <input
                        className='md:w-3/5 w-9/12 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600'
                        type="tel"
                        placeholder='Enter Phone Number'
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="phone"
                        value={user.phone} />
                    <input
                        className='md:w-3/5 w-9/12 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600'
                        type="date"
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="birth"
                        value={user.birth} />
                    <textarea
                        className='md:w-3/5 w-9/12 h-32 border-2 border-black rounded-3xl px-6 py-2.5 placeholder:text-neutral-600 resize-none'
                        type="date"
                        placeholder='Enter Bio'
                        required
                        autoComplete='off'
                        onChange={getUserData}
                        name="bio"
                        value={user.bio}
                    ></textarea>
                    <button
                        className='md:w-3/5 w-9/12 border-0 rounded-3xl px-6 py-2.5 bg-neutral-900 text-white'
                        type="submit"
                        onClick={postData}
                    >
                        Submit
                    </button>
                    {/* <input 
                    className='md:w-3/5 w-9/12 border-0 rounded-3xl px-6 py-2.5 bg-neutral-900 text-white' 
                    type="submit" 
                    value="Submit" /> */}
                </form>
            </div>
        </>
    )
}

export default Data