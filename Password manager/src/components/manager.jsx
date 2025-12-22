import React, { useState, useEffect } from 'react'


const Manager = () => {

    const [showpassword, setshowpassword] = useState(false);
    const [URL, setURL] = useState("");
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [passwords, setPasswords] = useState([]);

    const savedpasswords = () => {
        if (!URL || !username || !Password) {
            alert("All field required")
            return;
        }
        const newPassword = { URL, username, Password };
        const updatedPassword = [...passwords, newPassword];

        setPasswords(updatedPassword);
        localStorage.setItem("passwords", JSON.stringify(updatedPassword));

        setURL("");
        setUsername("");
        setPassword("");
    }
    useEffect(() => {
        const savedpasswords = JSON.parse(localStorage.getItem("passwords"));
        if (savedpasswords) {
            setPasswords(savedpasswords);
        }
    }, [])

    const deletePassword = (index) => {
        const updatedPasswords = passwords.filter((_, i) => i !== index);
        setPasswords(updatedPasswords);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    }
    const copytext = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error("Copy failed", err);
        }
    };
    
    return (
        <>
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


            </div>
        </>
    )
}


export default Manager
