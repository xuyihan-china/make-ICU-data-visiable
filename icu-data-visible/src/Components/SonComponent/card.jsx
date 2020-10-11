import React, { Component } from 'react'
import { Card } from 'antd'
class card extends Component {
    render() {
        function randomNum(minNum,maxNum){ 
            switch(arguments.length){ 
                case 1: 
                    return parseInt(Math.random()*minNum+1,10); 
                break; 
                case 2: 
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                break; 
                    default: 
                        return 0; 
                    break; 
            } 
        }
        let num = Math.ceil(Math.random() * 15 + 1)
        setInterval(() => {
            num = Math.ceil(Math.random() * 15 + 1)
        }, 3);
        let heartArray = [70, 71, 92, 94, 95, 96, 97, 98,100,111,100,66,65,44,144,170,70, 71, 92, 94,]
        let breathArray = [88,89,67,68,69,78,99,100,44,78,91,92,93,94,95,77,75,111,100,66,65,44]
        let bloodArray = [130,128,88,160,90,100,120,111,113,111,100,66,65,44,144,170,111,113,114,115]
        // setInterval(() => {
        //     let heartRate = randomNum(90, 100)
        //     heartArray.push(heartRate)
        //     let breath = randomNum(60, 100)
        //     breathArray.push(breath)
        //     let blood = randomNum(130, 140)
        //     bloodArray.push(blood)
        // }, 2000);
        // setTimeout(()=>{
        //     window.location.reload();
        //  },3000); 
        return (
            <div>
                
                <Card style={{ width: 300 }}
                    hoverable={true}
                    extra={"移除患者"}
                    title={
                        "ICU patient"
                    }
                >
                    <p style={{ fontWeight: 'bold',color:'red' }}>心跳:{heartArray[num]}次/min</p>
                    <p style={{ fontWeight: 'bold',color:'skyblue' }}>血压:{bloodArray[num]}mmHg</p>
                    <p style={{ fontWeight: 'bold',color:'black'}}>呼吸:{breathArray[num]}次/min</p>
                </Card>
            </div>
        );
        
    }
}

export default card;