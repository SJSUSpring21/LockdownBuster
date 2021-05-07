import React from "react"
import Card from '@material-ui/core/Card';
import { Box } from "@material-ui/core";

const CardComponent = ({ title, status, time}) => {
    
    return (
        <>
            <Box display="flex" flexDirection="row" mt="30px">
                <Box ml={'19%'} p="10px" mb="10px" width="30%">
                    <Card style={{backgroundColor:'white', height:"180px", display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center'}}>
                        
                        <p style={{fontSize:20, fontWeight:"bolder", WebkitTextFillColor:"darkblue"}}>{title}</p>

                        <label style={{
                            width:'45%', 
                            borderRadius:"8%", 
                            backgroundColor: (status === "moderate")  ? "#d97641" : (status === "substantial")  ? "#c43d53" : (status === "widespread")  ? "#802f67" : (status === "minimal")  ? "#e6b735" : "white", 
                            webkitTextFillColor: (status === "widespread" || status === "substantial")  ? "white" : "black", 
                            textAlign:'center', 
                            fontSize:'100%', 
                            fontWeight:"bolder",
                            textTransform:'uppercase'
                            }}>
                            <p>{status}</p>
                        </label>
                        <p style = {{fontWeight:"bolder"}}> 
                            {(status === "widespread") ? "Many non-essential indoor business operations are closed" : 
                             (status === "substantial") ?  "Some non-essential indoor business operations are closed" : 
                             (status === "moderate") ? "Some indoor business operations are open wth modifications" : 
                             (status === "minimal") ?  "Some indoor business operations are open wth modifications" :""}
                        </p> 
                    </Card>
                </Box>
                <Box p="10px" mb="10px" width="30%">
                    <Card style={{backgroundColor: 'white', height:"180px", display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', fontWeight:"bolder"}}>
                        <p> The expected opening date for the selected sector will be </p>
                        <p style={{fontSize: '130%'}}>{time}</p>
                    </Card >
                </Box>
            </Box>
         </>
    );
};

export default CardComponent