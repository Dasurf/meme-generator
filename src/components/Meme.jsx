import React, {useState} from "react";
import "../assets/styles/Meme.css";
import memesData from "../memesData";
import { useId } from "react";


export default function Meme() {
    const memesArray = memesData.data.memes;
    const [formData, setFormData] = useState(
        {
            topText: "",
            bottomText: "",
            id: "",
            name: "",
            url: "",
            width: "",
            height: "",
            box_count: "",
        }
    )

    function handleChange(event) {
        const {name, value} = event.target;

        setFormData(prevFormData => {
            return (
                {
                    ...prevFormData,
                    [name]: value
                }
            )
        })
    }

    const id = useId();
 

    function getImage(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const currentData = memesArray[randomNumber];

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                id: currentData.id,
                name: currentData.name,
                url: currentData.url,
                width: currentData.width,
                height: currentData.height,
                box_count: currentData.box_count,
            }
        });
    }
    console.log("Form Data", formData);

    return (
        <main className="meme-input">
            <form className="form" onSubmit={getImage}>
                <label htmlFor={id + "-top--text"}>Top text</label>
                <input 
                    name="topText" 
                    type="text" 
                    placeholder="Enter top text" 
                    id={id + "-top--text"}
                    onChange={handleChange}
                    value={formData.topText}/>
                <br />

                <label htmlFor={id + "-bottom--text"}>Bottom text</label>
                <input
                    name="bottomText"
                    type="text" 
                    placeholder="Enter bottom text" 
                    id={id + "-bottom--text"}
                    onChange={handleChange}
                    value={formData.bottomText}
                    />
                <br />
                <button type="submit">Get a new meme image  🖼</button>
            </form>
            <br />
            <div className="meme--container">
                <img src={`${formData.url}`} className="meme--image" width={formData.width} height={formData.height} />
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>

        
        </main>
    )
}
