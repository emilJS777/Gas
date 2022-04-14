import React, { useEffect, useState } from 'react'
import './Devise.css'
import add from '../../../../img/add.png'
import adds from '../../../../img/+.png'
import del from '../../../../img/del.png'
import { FaEllipsisV } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import icons1 from '../../../../img/icons1.png'
import icons2 from '../../../../img/icons2.png'
import icons3 from '../../../../img/icons3.png'
import icons4 from '../../../../img/icons4.png'
import group2 from '../../../../img/group2.png'
import icons5 from '../../../../img/icons5.png'
import axios from 'axios'
// import axios from 'axios'
export const Devise = (props) => {
    // console.log(props, 'vaspur');
    //  const url = 'http://185.183.182.157:5001/api/device'
    // const [product, setProduct] = useState(null)
    // useEffect(() => {
    //     fetch(url).then((result) => {
    //         result.json().then((resp) => {
    //             console.log(result, 'result');
    //             console.log(resp, 'resp');
    //             setProduct(resp)
    //             console.log(product, 'product');
    //         })
    //     })
    // }, [])
    //    const getRepo=()=>{
    //        axios.get(url).then((response)=>{
    //            console.log(response);
    //        })
    //    }
    //    useEffect(()=> getRepo(),[])
    return (
        <div className='Devise'>
            <Outlet />
            <div className='devise-icons-menu'>
                <GiHamburgerMenu />
                <h2>Devise</h2>
            </div>
            <h1>Devise</h1>
            <div className='devise-icon'>
                <div className='devise-icon-add'>
                    <img src={add} />
                    <img src={adds} />
                    <Link to='add'><h2>Add</h2></Link>
                </div>
                <div className='devise-icon-del'>
                    <img src={del} />
                    <h2>Delete</h2>
                </div>
            </div>
            <div className='devise-block'>
                <div className="devise-table">
                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Devicename</th>
                                <th>Flowpast</th>
                                <th>Flowsarqac</th>
                                <th>Dpdrac</th>
                                <th>Today</th>
                                <th> Pressure</th>
                                <th> Last update</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* {props.contact.map((item) => {
                                console.log(item);
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><img src={icons1} /><img src={icons5} /></td>
                                    <td>3221.3</td>
                                    <td>3221.3</td>
                                    <td>3221.3</td>
                                    <td>3221.3</td>
                                    <td>0.00</td>
                                    <td>03/03/2022 13:48:05</td>
                                    <td><img src={group2} /></td>
                                </tr>
                            })} */}
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td><img src={icons2} /><img src={icons5} />T</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>0.00</td>
                                <td>03/03/2022 13:48:05</td>
                                <td><img src={group2} /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td><img src={icons3} /><img src={icons5} />T</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>0.00</td>
                                <td>03/03/2022 13:48:05</td>
                                <td><img src={group2} /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td><img src={icons4} /> <img src={icons5} />T</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>3221.3</td>
                                <td>0.00</td>
                                <td>03/03/2022 13:48:05</td>
                                <td><img src={group2} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
