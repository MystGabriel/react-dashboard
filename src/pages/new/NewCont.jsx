import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"
import { useNavigate } from "react-router-dom";

const NewCont = ({ inputs, title }) => {
    const [data, setData] = useState({})
    const [per, setPerc] = useState({})
    const navigate = useNavigate()

    const handleInput = (e) => {
        const id = e.target.id
        const value = e.target.value
        
        setData({ ...data, [id]: value })
    }

    const handleAdd = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, "contratos"), {
            ...data,
            timeStamp: serverTimestamp()
            });
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleAdd}>
                        <div className="formInput">
                            <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                            />
                        </div>

                        {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                            </div>
                        ))}
                        <button disabled={per !== null && per < 100} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCont