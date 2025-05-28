import { useState } from "react";
import { paragraphRandom } from "./randomPara";

export function ParagraphGenerator(){
    const [length,setLength] = useState(0);
    const [paragraph,setParagraph] = useState();

    function generatePara(){
         let words = paragraphRandom.split(" ");
let subarray = words.slice(0, length+1); // use length, not length+1 unless needed
let paragraph = subarray.join(" ");
         setParagraph(paragraph)
    }
    return <div style={{

        height:'100vh',
        width:'100vw',
        padding:'15px'
    }}>
         <h2 style={{
            textAlign:'center'
         }}>Para Generator</h2>
         <div style={{
            width:'100%'
         }}>
              <input type="text" placeholder="Enter the length of words" onChange={(e)=> setLength(e.target.value)} style={{
                paddingTop:'15px',
                paddingBottom:'15px',
                paddingLeft:'5px',
                border:'1px solid black',
                width:'90%',
                font:'25px',
                marginRight:'5px'
              }}/>
              <button onClick={generatePara} style={{
                paddingTop:'15px',
                paddingBottom:'15px',
                paddingLeft:'5px',
                paddingRight:'5px',
                font:'25px',
                borderRadius:'5px'
              }}>Generate</button>
         </div>
         <div>
            <div style={{
                padding:'2px',
                overflowY:'auto',
                font:'20px',
                fontFamily:'cursive',
                borderRadius:'5px',
                width:'100%'
            }}>
                {paragraph}
            </div>
         </div>
    </div>
}