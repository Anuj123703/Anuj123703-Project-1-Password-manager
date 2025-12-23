import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Manager = () => {
    // input states
    const [URL, setURL] = useState("");
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    // passwords array
    const [passwords, setPasswords] = useState([]);
    // show password state
    const [showpassword, setshowpassword] = useState(false);
    // edit state
    const [isedit, setedit] = useState(false);
    const [editingindex, seteditingindex] = useState(null);
    // popup state
    const [showpopup, setShowpopup] = useState(false);
    const [deleteindex, setDeleteindex] = useState(null);

    //edit function
    const edittext = (index) => {
        const p = passwords[index];
        setURL(p.URL)
        setUsername(p.username);
        setPassword(p.Password);
        setedit(true);
        seteditingindex(index);
    };
    //save password function
    const savedpasswords = () => {
        // Validate inputs
        if (!URL || !username || !Password) {
            alert("All field required")
            return;
        }
        // Edit existing password
        if (isedit) {
            const updatedPasswords = [...passwords];
            updatedPasswords[editingindex] = { URL, username, Password };
            // Update state and localStorage
            setPasswords(updatedPasswords);
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
            // Reset edit state
            setedit(false);
            seteditingindex(null);
        }
        else {
            // Add new password
            const updatedPasswords = [...passwords, { URL, username, Password }];
            setPasswords(updatedPasswords);
            localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
        }

        // Clear inputs
        setURL("");
        setUsername("");
        setPassword("");
    }
    // Load passwords from localStorage on component mount
    useEffect(() => {
        const savedpasswords = JSON.parse(localStorage.getItem("passwords"));
        if (savedpasswords) {
            setPasswords(savedpasswords);
        }
    }, [])

    // delete password function
    const deletePassword = (index) => {
        setDeleteindex(index)
        setShowpopup(true);
    }
    // confirm delete function
    const confirmDelete = () => {
        const updatedPasswords = passwords.filter((_, i) => i !== deleteindex);
        setPasswords(updatedPasswords);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

        setShowpopup(false);
        setDeleteindex(null)

    }
    // cancel delete function
    const cancelDelete = () => {
        setShowpopup(false);
        setDeleteindex(null);
    };

    // copy to clipboard function
    const copytext = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('copied succesfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="pb-20 min-h-screen scroll-smooth  " >
                <div className='my_contaainer m-5'>
                    <h1 className='text-4xl text font-bold text-center' >
                        <span className='text-green-500' >&lt;</span>
                        <span className='text-black'>Pass</span>
                        <span className='text-green-500' >OP/&gt;</span>
                    </h1>
                    <p className='opacity-50 text-center' >your own password manager</p>

                </div>

                <div className='flex flex-col items-center gap-3 ' >
                    <label htmlFor="URL" className='sr-only' >URL</label>
                    <input
                        type="text"
                        id='URL'
                        placeholder='Enter website URL'
                        className='border border-green-800 rounded-full w-1/2 p-1 px-4'
                        value={URL}
                        onChange={(e) => setURL(e.target.value)}
                    />
                    <div className='w-full flex gap-4 justify-center' >
                        <label htmlFor="username" className='sr-only' >Username</label>
                        <input
                            type="text"
                            id='username'
                            placeholder='Username'
                            className='border border-green-800  rounded-full p-1 px-4 w-1/4'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="relative w-1/5 ">
                            <label htmlFor="Password" className='sr-only' >Password</label>
                            <input
                                type={showpassword ? "text" : "password"}
                                className='border  border-green-800 p-1 px-4 rounded-full w-full '
                                placeholder='Password'
                                id='Password'
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className='absolute right-4 top-[6px] cursor-pointer'
                                onClick={() => setshowpassword(!showpassword)}
                            >
                                <img width={20}
                                    src={
                                        showpassword
                                            ? "icons/eye.png"
                                            : "icons/hidden.png"
                                    } alt="toggle password"
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        className='bg-green-500 rounded-full flex justify-center items-center gap-2 w-fit px-5 py-1 hover:bg-green-400 '
                        onClick={savedpasswords}>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>Add Password
                    </button>
                </div>
                <table className=" table-fixed mt-5 mx-auto w-11/13 rounded-lg overflow-hidden [&_td]:max-w-xs [&_td]:break-words [&_td]:whitespace-normal" >
                    <thead className='bg-slate-800 text-white text-center ' >
                        <tr>
                            <th className='text-center py-2 px-4 w-1/3' >URLs</th>
                            <th className='text-center py-2 px-4 w-1/6' >Usernames</th>
                            <th className='text-center py-2 px-4 w-1/6' >Passwords</th>
                            <th className='text-center py-2 px-4 w-1/6' >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passwords.map((item, index) => (
                            <tr key={index}
                                className='odd:bg-green-100 even:bg-white text-center ' >
                                <td>
                                    <a href={item.URL}
                                        target="_blank"
                                        rel="noopener noreferrer"  >
                                        {item.URL}
                                    </a>
                                </td>
                                <td>{item.username}
                                    <lord-icon
                                        src="https://cdn.lordicon.com/cfkiwvcc.json"
                                        trigger="hover"
                                        colors="primary:#16c72e"
                                        className="inline-block w-3 h-3 ml-1"
                                        onClick={() => copytext(item.username)}
                                    >
                                    </lord-icon>
                                </td>
                                <td>{item.Password}
                                    <lord-icon
                                        src="https://cdn.lordicon.com/cfkiwvcc.json"
                                        trigger="hover"
                                        colors="primary:#16c72e"
                                        className="inline-block w-3 h-3 ml-1"
                                        onClick={() => copytext(item.Password)}
                                    >
                                    </lord-icon>

                                </td>
                                <td>
                                    <button
                                        className='p-3'
                                        onClick={() => edittext(index)} >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#000000,secondary:#000000"
                                            className="w-5 h-5">
                                        </lord-icon>
                                    </button>
                                    <button
                                        onClick={() => deletePassword(index)}  >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/oqeixref.json"
                                            trigger="hover"
                                            colors="primary:#16c72e"
                                            className="inline-block w-5 h-5 ml-1" >
                                        </lord-icon>
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            {showpopup && (
                <div className="fixed top-0 z-50 border border-black w-full  ">

                    <div className="bg-slate-800 rounded-xl shadow-xl w-80 p-6 text-center mx-auto">

                        <h2 className="text-white text-lg font-bold text-center mb-2">
                            Confirm Delete
                        </h2>

                        <p className="text-white text-center mb-5">
                            Are you sure you want to delete this password?
                        </p>

                        <div className="flex justify-between">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-1 rounded-full bg-green-100 hover:scale-105 transition-transform duration-200"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDelete}
                                className="px-4 py-1 rounded-full bg-green-600 text-white hover:scale-105 transition-transform duration-200"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}


export default Manager
