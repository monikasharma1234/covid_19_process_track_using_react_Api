import React,{useEffect,useState} from "react";
import './covid.css';

function Covid()
{   const [set,setData]=useState([]);
    const [hoveredElement, setHoveredElement] = useState(null);
    async function getCovidData()
    {
        const res=await fetch("https://disease.sh/v3/covid-19/countries");
        const actualData= await res.json();
        console.log(actualData);
        setData(actualData);

    }
    useEffect(()=>{
        getCovidData();
    },[]);
   
    return (
        <>
         
          {
            set.map((data)=>{
            return (<div key={data.country}>
                 <h1 >
                  {data.country}</h1>
                <p className={hoveredElement===data.cases ? 'hovered' : ''}
                onMouseOver={() => setHoveredElement(data.cases)}
                onMouseOut={() => setHoveredElement(null)} >
                TotalCases: {data.cases}</p>
                <p className={hoveredElement===data.deaths ? 'hovered' : ''}
                onMouseOver={()=>setHoveredElement(data.deaths)}
                onMouseOut={()=>setHoveredElement(data.deaths)}>total death :{data.deaths}</p>
                <p className={hoveredElement===data.recovered ? 'hovered' : ''}
                onMouseOver={()=>setHoveredElement(data.recovered)}
                onMouseOut={()=>setHoveredElement(data.recovered)}>Total recovered: {data.recovered}</p>
            </div>);
            
            })
          }
        </>
      );
    
}
export {Covid};