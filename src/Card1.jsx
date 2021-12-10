
import React from "react";
import { NavLink } from "react-router-dom";
import Creatememe from "./Creatememe";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
/*
const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key} = ${value}`)
  return '?' + params.join('&')
}
*/
function Card1() {


  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memes, setMemes] = useState([]);
  const [caption, setCaption] = useState([]);
  const [memindex, setMemindex] = useState(0);

  const history = useHistory();
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => {
        const memes = response.data.memes;
        setTemplates(memes)
        setMemes(memes)
        console.log(response);
      })
    );
  }, []);
  const generateMeme = () => {
    const objectToQueryParam = obj => {
      const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
      return "?" + params.join("&");
    };
    const currentMeme = memes[memindex];
    let obj = {};

    obj['username'] = 'antiPr75';
    obj['password'] = '794bhe@J';
    obj['template_id'] = memes[0].id;
    obj["text0"] = "rabin";
    obj["text1"] = "down";
    // caption.forEach((c, index) => { obj[`boxes[${index}][text]`] = c; });



    fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: objectToQueryParam(obj)
    }).then(res => {
      console.log(res);
      res.json().then(resp => {
        console.log(resp);
        history.push(`/generated?url=${resp.data.url}`);

        //console.log(res);
      })
    });
  }


  const updateCaption = (e, index) => {
    const text = e.target.value || '';

    setCaption(
      caption.map((c, i) => {
        if (index == i) {
          return text;
        } else {
          return c;
        }
      })
    )
  };


  /* 

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then( res =>
    res.json().then(res => {
       //console.log(res.data);
        const memes = res.data.memes;
        setMemes(memes);
    })

    );
  
}, []);
  */





  /*
          return(
            <div style={{textAlign:"center"}}>
              {template && (
                <form onSubmit={e => {
                  e.preventDefault();
                  //Add logic to generate meme
                }}>
              <Creatememe template={template}/>
              <div className="container col-md-4">
              <input placeholder="Top Text" style={{padding:"5px",borderRadius:"20px",marginBottom:"10px"}}/>
              <br/>
              <input placeholder="Bottom Text" style={{padding:"5px",borderRadius:"20px",marginBottom:"10px",borderColor:"turquoise"}}/>
                  <br/>
              <button type="submit" onCLick={generateMeme} className="btn btn-primary" style={{borderRadius:'20px',color:"sienna",backgroundColor:"springgreen",borderColor:"teal"}}>Generate Meme</button>
              <button type="submit" onClick={() => {setMemindex(memindex+1)}}>Here</button>
              </div>
              </form>
              )}
              {!template && 
              (<>
              <h1 style={{padding :"2px 20px",color:"tomato"}}>Pick a template</h1>
              {
              templates.map(template => {
                return(
                  <Creatememe
                 
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}
                  />
                );
              })}</>)}
            </div>
          );
            }
        export default Card1;
         /* 
        if(meme) {
          <div style={{textAlign:"center"}}>
              <img
                style={{width:200}}
                src={meme} alt="custom meme"
              />
          </div>
        }
  
        */



  return (
    <>

      <div style={{ textAlign: "center", backgroundColor: "white" }}>
        {template && (
          <form onSubmit={async e => {
            e.preventDefault();
            /*
            const params = {
              template_id :template.id,
              text0:topText,
              text1:bottomText,
              username: "antiPr75",
              password: "794bhe@J"
            };
            const axios = require('axios').default;
           
            
            const sendPostRequest = async () => {
              try {
                  const resp = await axios.post('https://api.imgflip.com/caption_image', params);
                  console.log(resp.data);
              } catch (err) {
                  // Handle Error Here
                  console.error(err);
              }
          };
          */



          }}>
            <Creatememe template={template} />
            <div className="container-md col-4">
              <input placeholder="first "
                value={topText}
                onChange={e => setTopText(e.target.value)} />
              <hr />
              <input placeholder="second"
                value={bottomText}
                onChange={e => setBottomText(e.target.value)}
              />
              <br /><br />
              <button type="submit" onClick={generateMeme}>Create Meme</button>
            </div>
          </form>
        )}
        {!template &&
          (
            <>
              <h1 className="text-center" >Pick a template</h1>
              {templates.map(template => {
                return (<Creatememe
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}
                />);
              })}</>
          )})
      </div>
    </>
  );
};



export default Card1;