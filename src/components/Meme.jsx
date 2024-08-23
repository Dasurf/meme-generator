import React, {useState, useEffect, useId} from "react";
import "../assets/styles/Meme.css";


export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1ur9b0.jpg",
        width: "",
        height: ""
    });
    const [allMemes, setAllMemes] = useState({});

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memesData => setAllMemes(memesData.data.memes))
        .catch(() => console.log("Error"))
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prevFormData => {
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
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const currentData = allMemes[randomNumber];

        setMeme(prevFormData => {
            return {
                ...prevFormData,
                url: currentData.url,
                height: currentData.height,
                width: currentData.width
            }
        });
    }
    console.log("meme Data", allMemes);
    console.log("meme: ", meme);

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
                    value={meme.topText}/>
                <br />

                <label htmlFor={id + "-bottom--text"}>Bottom text</label>
                <input
                    name="bottomText"
                    type="text" 
                    placeholder="Enter bottom text" 
                    id={id + "-bottom--text"}
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                <br />
                <button type="submit">Get a new meme image  🖼</button>
            </form>
            <br />
            <div className="meme--container">
                <img src={`${meme.url}`} className="meme--image" width={meme.width} height={meme.height}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        
        </main>
    )
}
