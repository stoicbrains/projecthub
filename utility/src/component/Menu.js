import React from 'react';
import Nav from './Nav';
import './Menu.css';
import { useState } from 'react';
let a=0;
let b=0;
let c=0;
let d=0;

let e=0;
let f=0;
let g=0;
let h=0;

let i=0;
let j=0;
let k=0;
let l=0;

function Menu(props) {
    const [billdrop,setbilldrop]=useState(false);
    const toggle =()=>{
        setbilldrop(!billdrop);
    }


    const [count,setcount] = useState(0);
    const increase=()=>{
            (setcount(count+1))
        }

    const decrease=()=>{
        
        if(count>0){
            setcount(count-1);
            
        }
    }
    const [sshake,setsshake] = useState(0);
    const sincrease=()=>{
            (setsshake(sshake+1))
        }

    const sdecrease=()=>{
        
        if(sshake>0){
            setsshake(sshake-1);
            
        }
    }
    const [cshake,setcshake] = useState(0);
    const cincrease=()=>{
            (setcshake(cshake+1))
        }

    const cdecrease=()=>{
        
        if(cshake>0){
            setcshake(cshake-1);
            
        }
    }
    const [oshake,setoshake] = useState(0);
    const oincrease=()=>{
            (setoshake(oshake+1))
        }

    const odecrease=()=>{
        
        if(oshake>0){
            setoshake(oshake-1);
            
        }
    }
    const [clatte,setclatte] = useState(0);
    const lincrease=()=>{
            (setclatte(clatte+1))
        }

    const ldecrease=()=>{
        
        if(clatte>0){
            setclatte(clatte-1);
            
        }
    }
    const [ccappino,setccappino] = useState(0);
    const ciincrease=()=>{
            (setccappino(ccappino+1))
        }

    const cidecrease=()=>{
        
        if(ccappino>0){
            setccappino(ccappino-1);
            
        }
    }
    const [mcafe,setmcafe] = useState(0);
    const mincrease=()=>{
            (setmcafe(mcafe+1))
        }

    const mdecrease=()=>{
        
        if(mcafe>0){
            setmcafe(mcafe-1);
            
        }
    }
    const [ccafe,setccafe] = useState(0);
    const ccincrease=()=>{
            (setccafe(ccafe+1))
        }

    const ccdecrease=()=>{
        
        if(ccafe>0){
            setccafe(ccafe-1);
            
        }
    }
    const [sand1,setsand1] = useState(0);
    const increase1=()=>{
            (setsand1(sand1+1))
        }

    const decrease1=()=>{
        
        if(sand1>0){
            setsand1(sand1-1);
            
        }
    }
    const [sand2,setsand2] = useState(0);
    const increase2=()=>{
            (setsand2(sand2+1))
        }

    const decrease2=()=>{
        
        if(sand2>0){
            setsand2(sand2-1);
            
        }
    }
    const [sand3,setsand3] = useState(0);
    const increase3=()=>{
            (setsand3(sand3+1))
        }

    const decrease3=()=>{
        
        if(sand3>0){
            setsand3(sand3-1);
            
        }
    }
    const [sand4,setsand4] = useState(0);
    const increase4=()=>{
            (setsand4(sand4+1))
        }

    const decrease4=()=>{
        
        if(sand4>0){
            setsand4(sand4-1);
            
        }
    }




    return (
        <>
    
        
            <Nav/>
            <div className="food-items">
                <div className="sandwiches">
                    <p>Sandwiches</p>
                    <table>
                        <tr>
                            <td>Items</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>ChickenSandwich </td>
                            <td>80Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={increase1}>+</button> {sand1} 
                            <button className="major-btn" onClick={decrease1}>-</button>
                            </div>
                            </td>
                            <td>
                                {i=sand1*80}
                            </td>
                        </tr>
                        <tr>
                            <td>VegSandwich </td>
                            <td>65Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={increase2}>+</button> {sand2} 
                            <button className="major-btn" onClick={decrease2}>-</button>
                            </div>
                            </td>
                            <td>
                                {j=sand2*65}
                            </td>
                        </tr>
                        <tr>
                            <td>PaneerSandwich </td>
                            <td>70Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={increase3}>+</button> {sand3} 
                            <button className="major-btn" onClick={decrease3}>-</button>
                            </div>
                            </td>
                            <td>
                                {j=sand3*70}
                            </td>
                        </tr>
                        <tr>
                            <td>CheeseSandwich </td>
                            <td>75Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={increase4}>+</button> {sand4} 
                            <button className="major-btn" onClick={decrease4}>-</button>
                            </div>
                            </td>
                            <td>
                                {l=sand4*75}
                            </td>
                        </tr>
                        Total = {i+j+k+l}
                    </table>
                </div>
                <div className="coffee">
                    <p>coffee</p>
                    <table>
                        <tr>
                            <td>Items</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Amount</td>

                        </tr>
                        <tr>
                            <td>Latte </td>
                            <td>80Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={lincrease}>+</button> {clatte} 
                            <button className="major-btn" onClick={ldecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {e=clatte*80}
                            </td>
                        </tr>
                        <tr>
                            <td>capaccino </td>
                            <td>85Rs.</td>
                               <td><div className="major"><button className="major-btn" onClick={ciincrease}>+</button> {ccappino} 
                            <button className="major-btn" onClick={cidecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {f=ccappino*85}
                            </td>
                        </tr>
                        <tr>
                            <td>Espresso </td>
                            <td>90Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={mincrease}>+</button> {mcafe} 
                            <button className="major-btn" onClick={mdecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {g=mcafe*90}
                            </td>
                        </tr>
                        <tr>
                            <td>Cold Coffee </td>
                            <td>95Rs.</td>
                            <td><div className="major"><button className="major-btn" onClick={ccincrease}>+</button> {ccafe} 
                            <button className="major-btn" onClick={ccdecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {h=ccafe*95}
                            </td>
                        </tr>
                        Total = {e+f+g+h}
                    </table>
            </div>
                <div className="shake">
                    <p>shakes</p>
                    <table>
                        <tr>
                            <td>Items</td>
                            <td>Price</td>
                            <td className='spread'>Quantity</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            
                            <td>butterscotch Shake</td>
                            <td>80Rs.</td>
                            
                            <td><div className="major"><button className="major-btn" onClick={increase}>+</button> {count} 
                            <button className="major-btn" onClick={decrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {c=count*80}
                            </td>
                            
                           
                        </tr>
                        <tr>
                            <td>strawberry Shake </td>
                            <td>85Rs.</td>
                                <td><div className="major"><button className="major-btn" onClick={sincrease}>+</button> {sshake} 
                            <button className="major-btn" onClick={sdecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {d=sshake*85}
                            </td>
                        </tr>
                        <tr>
                            <td>Chocalate Shake </td>
                            <td>90Rs.</td>
                                <td><div className="major"><button className="major-btn" onClick={cincrease}>+</button> {cshake} 
                            <button className="major-btn" onClick={cdecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {a=cshake*90}
                            </td>
                        </tr>
                        <tr>
                            <td>oreo Shake</td>
                            <td>105Rs.</td>
                                <td><div className="major"><button className="major-btn" onClick={oincrease}>+</button> {oshake} 
                            <button className="major-btn" onClick={odecrease}>-</button>
                            </div>
                            </td>
                            <td>
                                {b=oshake*105}
                            </td>
                        </tr>
                        Total = {a+b+c+d}
                    </table>
            </div>
            </div>
            
            <button className="food-order" onClick={toggle}>BillOut</button>
            <div className={billdrop===true ? "visible bill":"hide bill"}><div className={billdrop===true?"dekh-p":"no-p"}>
                <h4>Bill:</h4><br/>
                <hr/>
                <p className="p">
                    Quantity: {count+sand1+sand2+sand3+sand4+clatte+ccappino+ccafe+mcafe+sshake+cshake+oshake}
                    <br />
                    <br/>
                    TotalPrice: {a+b+c+d+e+f+g+h+i+j+k+l}
                    <br />
                    <br/>
                    Discount: 50% of {a+b+c+d+e+f+g+h+i+j+k+l}
                    <br/>
                    <br/>
                    final price: {(a+b+c+d+e+f+g+h+i+j+k+l)-0.50*(a+b+c+d+e+f+g+h+i+j+k+l)}
                    </p>
                    <br/>
                    <br/>
                    <hr/>
                    <h5>Thankyou for the Purchase</h5>
                    <hr/>
                </div></div>

            
            </>
        
    
    );
}

export default Menu;