import react from "react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router";

export const Card2 = () => {

    const[memes, setMemes] = useState([]);
    const[memindex, setMemindex] = useState(0);
    const[caption, setCaption] = useState([]);

    const history = useHistory();
    const updateCaption = (e, index) => {
        const text = e.target.value || '';

        setCaption(
            caption.map((c, i) => {
                if(index == i) {
                        return text;
                }else{
                    return c;
                }
            })
        )
    };

    const generateMeme = () => {
        const currentMeme = memes[memindex];
        const formData = new FormData();

        formData.append('username', 'antiPr75');
        formData.append('password','794bhe@J');
        formData.append('template_id', currentMeme.id);
        caption.forEach((c,index) => formData.append(`boxes[${index}][text]`,c));

        fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            body: formData
        }).then(res => {
            res.json().then(res => {
                console.log(res.data);
                console.log(res)
                history.push(`/generated?url=${res.data.url}`);
                
                
            })
        });
    }
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then( res =>
        res.json().then(res => {
           //console.log(res.data);
            const memes = res.data.memes;
           
            
            setMemes(memes);
        })

        );
      
    }, []);

    useEffect(() => {
        if(memes.length){
            setCaption(Array(memes[memindex].box_count).fill(''));
        }
    },[memindex, memes]);

    useEffect(() => {
        console.log(caption);
    },[caption]);
    
return (
  memes.length ? <div className="styles.container">
    
      <button type='submit' onClick={() => {setMemindex(memindex+1)}}>Next</button>
      {
          caption.map((c, index) => (
              <input onChange={(e) => updateCaption(e, index)}  key={index}/>
          ))
      }
      
      <img style={{width:200}} src={memes[memindex].url}/>
      <button type="submit" onClick={generateMeme}>Generate Meme</button>
  </div> : <></>
);
};

export default Card2;