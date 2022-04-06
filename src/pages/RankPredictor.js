 import React , { useState } from 'react'
 import rankpredictor from "../css/rankpredictor.css"
 import { Typography , Paper, FormLabel } from '@mui/material';
 import { Radio } from 'antd';
import PredictionForm from '../components/PredictionForm';
 const RankPredictor = () => {

     const [value, setValue] = useState(1);
     const onChange = e => {
         console.log('radio checked', e.target.value);
         setValue(e.target.value);
     };
     return (
         <>
            <div 
             className="mainDivRank"
             style = {{
                 height : "60vh" ,
                 width : "100%" ,
                 display : "flex" ,
                 flexDirection : "column" ,
                 justifyContent : "center" ,
                 alignItems : "center" }}>
                 <Typography variant="h3" color="#fff" fontWeight="700"  marginTop = "-15%">
                     {value == 1 ? "JEE Main" : "Neet"} Rank Predictor
                 </Typography>
                 <Radio.Group onChange={onChange} value={value}>
                 <Radio value={1}>JEE</Radio>
                <Radio value={2}>NEET</Radio>
                 </Radio.Group>
            </div> 
            <div style={{position : "relative" , top : "-14em" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
             <Paper
                 elevation={5} 
                 style = {{
                     minHeight : "45vh" , 
                     width : "40%" , 
                     background : "rgba(255 , 255 , 255 , 0.6)" , 
                     padding : 20
                 }}>
                 <PredictionForm />
             </Paper>
            </div>
         </>
     )
 };

 export default RankPredictor;

// import { Paper, Typography } from '@mui/material';
// import React, { useState } from 'react' 
// import rankpredictor from '../css/rankpredictor.css';
// import { Radio } from 'antd';
// const RankPredictor = () => {
//     const [value, setValue] = useState(1);
//     const onChange = e => {
//         console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//       };
//     return (
//         <>
//             <div className='mainDivRank' 
//             style={{
//              height: "60vh",
//              width: "100%", 
//              display:"flex",
//              flexDirection:"column",
//              justifyContent:"center",
//              alignItems:"center"}}>
//                 <Typography  variant='h3' color="#fff" fontWeight='700' marginTop="-12%">
//                     {value == 1 ? "JEE Main" : "Neet"} Rank Predictator
//                 </Typography>
//                 <Radio.Group onChange={onChange} value={value}>
//                 <Radio value={1}>JEE</Radio>
//                 <Radio value={2}>NEET</Radio>
//                 </Radio.Group>
//             </div>
//             <div style={{position:"relative",top:"-10em",display:"flex",justifyContent:"center",alignItems:"center"}}>
//                 <Paper elevation={5} style={{minHeight:"50vh",width:"50%",background:"red"}}>
//                 </Paper>
//             </div>
//         </>
        
//     )
// }

// export default RankPredictor;

