import { FormLabel , Button} from '@mui/material'
import { Radio , Input} from 'antd';
import React, { useState } from 'react'
import { PredictionList } from '../Json/Prediction';
import RankPredictor from '../pages/RankPredictor';

const PredictionForm = () => {
    const [mark, setMark] = useState(0);
    const [value, setValue] = useState("score");
    const [predicted, setPredicted] = useState(false);
    const [rank1 , setRank1] = useState(0);
    const [rank2 , setRank2] = useState(0);

    const runAgain = () => {
        setPredicted(false);
        setMark(0);
    }
     const onChange = e => {
         console.log('radio checked', e.target.value);
         setValue(e.target.value);
     };
     const rankPredictor = () => {
         setPredicted(true);
         checkRank();
     };

     const randomIntFromInterval=(min,max) => {
         let r1 = Math.floor(Math.random() * (max - min + 1) + min );
         let r2 = Math.floor(Math.random() * (max - min + 1) + min );
         if(r1 == r2) 
         {
             let r1 = r1 + 1;
         }

         setRank1(r1);
         setRank2(r2);
     };
     const checkRank = () => {
         PredictionList.map((v,i) => mark > v.minPercentile && mark < v.maxPercentile && randomIntFromInterval(v.minRank , v.maxRank));
     };
    return (
        <>
          { !predicted ? <> <div style= {{ flexDirection: "column" , display: "flex"}}>
            <FormLabel className="input_box_input_label">
                Select any one
            </FormLabel>
            <Radio.Group
                onChange={onChange}
                value={value}
                style={{ marginTop : 8}}>
                    <Radio value = "score">Score</Radio>
                    <Radio value = "percentile">Percentile</Radio>
            </Radio.Group>
            <div className="flexCenter">
            <select class="form-select" aria-label="Default select example" style={{width:"48%" , marginTop: 10 , borderRadius: 10 , marginRight: 15 }}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example" style={{width:"48%" , marginTop: 10 , borderRadius: 10}}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
            <div style={{marginTop: 20}}>
            <FormLabel className="input_box_input_label">
                Enter your marks
            </FormLabel>
            <Input 
                onChange={(e) => setMark(e.target.value)}
                placeholder="Input Your Marks"
                style={{ borderRadius: 10 , marginTop : 2}}
                value={mark}
            >
            </Input>
            </div>
        </div>  
        <div className="flexCenter" style={{marginTop : 40 , borderRadius : 20}}>
            <Button variant="outlined" color='secondary' style={{borderRadius : 20}} onClick={rankPredictor} disabled={mark == 0}>Predict My Rank</Button>
        </div>
    </>
     : (
        <>
            <h2> your rank is:<br />
                {rank1 > rank2 ? <div> {rank2} - {rank1} </div> :<div> {rank1} - {rank2}</div>}
            </h2>
            <div className="flexCenter" style={{marginTop : 40 , borderRadius : 20}}> 
                <Button variant="outlined" color='secondary' style={{borderRadius : 20}} onClick={() => runAgain()} disabled={mark == 0}>Use Again</Button>
            </div>
        </>
    )}
    </>
    );
};

export default PredictionForm
