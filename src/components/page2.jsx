import React, { useEffect,useState } from "react"
import "./cardstyle.css"

import SmallCard from "./smallcard"
function Page2(){

    const [main,setmain]=useState("Income Tax Calculator")
    const [findex,setfindex]=useState(3)
    const [sindex,setsindex]=useState(0)
    const [tindex,settindex]=useState(1)
    const [frindex,setfrindex]=useState(2)
    
    const [arr,setarr]=useState(["EMI Calculator","News","Coming Soon"])
    
    const [i,seti]=useState(0)
    function Change(event,val){
        var i=arr.indexOf(val)
        arr[i]=main
        if(main==="Income Tax Calculator"){
            setfindex(i)
        }
        else if(main==="EMI Calculator"){
            setsindex(i)
        }
        else if(main==="News"){
            settindex(i)
        }
        else if(main==="Coming Soon"){
            setfrindex(i)
        }
        event.preventDefault()
        
    setmain(val)
    
    }
    
    
    
    function cards(){
    
    var t=0;
        return(
            <div>
                {arr.map((each)=>{
             
                    return(
                  <div>      
                  {/* {  each==="Income Tax Calculator"?t=findex:each==="EMI Calculator"?t=sindex:each==="News"?t=tindex:each==="Coming Soon"?t=frindex:null} */}
                 
                <SmallCard main={main} i={each} Change={(event)=>Change(event,each)} val={each}/>
                    </div>
                    )
                })}
                </div>
        )
    }
    
    useEffect(()=>{
        if(i>0){
            
            document.querySelector(".a").classList.remove("maincard")
            document.querySelector(".a").classList.add("maincard2")
        }
    seti(i+1)
    },[main])    
    
    
    
    return(
        <div className="container">
        {main==="Income Tax Calculator"?<div className="maincard a">
        <div >
        <iframe className="frame" name="right_side" src="https://savinesttaxcalculator.netlify.app/" width="100%"  
        height="500px" frameBorder="0"></iframe>

        
            </div>
        </div>:null}
        {main==="EMI Calculator"?<div className="maincard a">
        <a className="frame" name="right_side" href="http://getemi.herokuapp.com/"  
        >EMI Calculator</a>
        </div>:null}
        {main==="News"?<div className="maincard a">
        <a className="frame" name="right_side" href="https://finnnews.herokuapp.com/" 
         frameBorder="0">News</a>
        </div>:null}
      {main==="Coming Soon"?<div className="maincard a">
          Coming Soon
        </div>:null}
        {/* {main!=="Income Tax Calculator"?<SmallCard main={main}  Change={(event)=>Change(event,"Income Tax Calculator",findex)}  val="Income Tax Calculator"/>:null}
        {main!=="EMI Calculator"?<SmallCard main={main} Change={(event)=>Change(event,"EMI Calculator",sindex)} val="EMI Calculator"/>:null}
        {main!=="News"?<SmallCard main={main} Change={(event)=>Change(event,"News",tindex)} val="News"/>:null}
        {main!=="Coming Soon"?<SmallCard main={main} Change={(event)=>Change(event,"Coming Soon",frindex)} val="Coming Soon"/>:null} */}
      {cards()}
        </div>
    )
    
}

export default Page2