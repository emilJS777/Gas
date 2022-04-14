import React from 'react'
import add from '../../../../img/add.png'
import adds from '../../../../img/+.png'
import del from '../../../../img/del.png'
import { Link } from 'react-router-dom'
import group2 from '../../../../img/group2.png'

import './HeaderGas.css'
export const HeaderGas = () => {
    return (
        <div className='Devise'>
            <h1>Stations list</h1>
            <div className='devise-icon'>
                <div className='devise-icon-add'>
                    <img src={add} />
                    <img src={adds} />
                    <Link to='gasadd'><h2>Add</h2></Link>
                </div>
                <div className='devise-icon-del'>
                    <img src={del} />
                    <h2>Delete</h2>
                </div>
            </div>
            <div className='gas-block'>
                <div className='gas-table'>
                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Address</th>
                                <th>Name</th>
                                <th>Devices number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Isahakyan St, Armavir, Armenia 40..</td>
                                <td>Gas station 1</td>
                                <td>3</td>
                                <td><img src={group2} /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Isahakyan St, Armavir, Armenia 40..</td>
                                <td>Gas station 1</td>
                                <td>3</td>
                                <td><img src={group2} /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Isahakyan St, Armavir, Armenia 40..</td>
                                <td>Gas station 1</td>
                                <td>3</td>
                                <td><img src={group2} /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Isahakyan St, Armavir, Armenia 40..</td>
                                <td>Gas station 1</td>
                                <td>3</td>
                                <td><img src={group2} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
