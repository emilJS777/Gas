import React, { useState } from 'react'
import './HeaderAdd.css'
import save from '../../../../../img/save.png'
import del from '../../../../../img/del.png'
import { NavLink } from 'react-router-dom'
import { GrFormSubtract, GrAdd } from 'react-icons/gr';
import axios from 'axios'
export const HeaderAdd = (props) => {
  const url = 'http://185.183.182.157:5001/api/device'
  const [formName, setFormName] = useState({
    key: "",
    name: "",
    description: "",
    parent_key: "",
    client_id: '',
    // Flowhanacset: '',
    // Pressgorcakicset: '',
    // Kgorcakicset: '',
    // Dpgorcakicset: '',
    // Flowmaxset: '',
    // Flowprocset: ''

  })



  const post = async e => {
    e.preventDefault();
    const data = await axios.post(url);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

    console.log(data);
    if (data.status === 422 || data.status === 401 || !data) {
      window.alert('xcho')
      console.log('xcho');
    }
    // else {
    //   window.alert('vaspur')
    //   console.log('vaspur');
    // }

    localStorage.setItem('item', JSON.parse(data))
    localStorage.setItem('token', JSON.pars(data.data.obj))
  }








  const [inputList, setinputList] = useState([{ parent_key: "", }])
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value
    setinputList(list)
  }
  const handleremove = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setinputList(list)
  }
  const handleaddclick = () => {
    setinputList([...inputList, { parent_key: "", }])

  }
  return (
    <div className='HeadeAdd'>
      <h1>Devise</h1>
      <div className='devise-icon'>
        <div className='devise-icon-save' onClick={post}>
          <img src={save} />
          {/* <NavLink to='devise'> */}
          <h2>Save</h2>
          {/* </NavLink> */}
        </div>
        <div className='devise-icon-del'>
          <img src={del} />
          <h2>Delete</h2>
        </div>
      </div>
      <div className='headeradd-inputs'>
        <h1>Device Details</h1>
        <div className='inputs-hr'></div>
        <div className='inputs1'>
          <div className='form1' >
            <div className='inp1 inputitem'>
              <label >Device Name</label>
              <input name='name' type='text' placeholder='Maais' />
            </div>
            <div className='inp2 inputitem'>
              <label >Description</label>
              <input name='description'
                type='text' placeholder='D6 Description' />
            </div>
            <div className='inp3 inputitem'>
              <label >Key</label>
              <input name='key' type='text' placeholder='D6' />
            </div>
            <div className='inp4 inputitem'>
              <label >User</label>
              <input name='client_id' type='text' placeholder='Armen' />
            </div>
            <div className='input-master'>
              <h3>Masters</h3>
              <div className='master'>
                {inputList.map((inplist, index) => {
                  return (
                    <div key={index} className='inp5 inputitem'>
                      <label >Key name</label>
                      <input name='parent_key' type='text' placeholder='name' onChange={(e) => handleinputchange(e, index)} value={inplist.parent_key}
                      />
                      {inputList.length > 1 && (
                        <div className='btn-danger' onClick={() => handleremove(index)}>< GrFormSubtract /></div>
                      )}
                      {inputList.length - 1 === index && inputList.length < 4 && (
                        <div className='btn-success' onClick={handleaddclick}>< GrAdd /></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='form-hr'></div>
          <form className='form2'>
            <div className='inp6 inputitem2'>
              <label >Flowhanacset</label>
              <input name='Flowhanacset' type='text' placeholder="0" />
            </div>
            <div className='inp7 inputitem3'>
              <label >Flowhanac</label>
              <input disabled type='text' />
            </div>
            <div className='inp8 inputitem2'>
              <label >Flowpast</label>
              <input disabled type='text' placeholder='3221.3' />
            </div>
            <div className='inp9 inputitem2'>
              <label >Flowauto</label>
              <input disabled type='text' placeholder='0' />
            </div>
            <div className='inp10 inputitem2'>
              <label >Pressgorcakicset</label>
              <input name='Pressgorcakicset' type='text' placeholder="0.1856" />
            </div>
            <div className='inp11 inputitem4'>
              <label >Pressgorcakic</label>
              <input disabled type='text' placeholder='0.1856' />
            </div>
            <div className='inp12 inputitem4'>
              <label >Presspastaci</label>
              <input disabled type='text' />
            </div>
            <div className='inp13 inputitem2'>
              <label >Flow sarqac</label>
              <input disabled type='text' placeholder='3221.3' />
            </div>
          </form>
          <form className='form3'>
            <div className='inp14 inputitem2'>
              <label >Kgorcakicset</label>
              <input name='Kgorcakicset' type='text' placeholder="1.1" />
            </div>
            <div className='inp15 inputitem2'>
              <label >Kgorcakic</label>
              <input disabled type='text' />
            </div>
            <div className='inp16 inputitem2'>
              <label >Dpdrac</label>
              <input disabled type='text' placeholder='26.1' />
            </div>
            <div className='inp17 inputitem2'>
              <label >Dppastaci</label>
              <input disabled type='text' placeholder='53.4' />
            </div>
            <div className='inp18 inputitem3'>
              <label >Dpgorcakicset</label>
              <input name='Dpgorcakicset' type='text' placeholder="0.0021" />
            </div>
            <div className='inp19 inputitem3'>
              <label >Dpgorcakic</label>
              <input disabled type='text' placeholder='0.0021' />
            </div>
            <div className='inp12 inputitem3'>
              <label >Yesterday</label>
              <input disabled type='text' />
            </div>
          </form>
          <form className='form4'>
            <div className='inp22 inputitem4'>
              <label >Flowmaxset</label>
              <input name='Flowmaxset' type='text' placeholder="0" />
            </div>
            <div className='inp25 inputitem4'>
              <label >Flowmax</label>
              <input disabled type='text' />
            </div>
            <div className='inp26 inputitem4'>
              <label >Monthly</label>
              <input disabled type='text' />
            </div>
          </form>
          <form className='form5'>
            <div className='inp22 inputitem5'>
              <label >Flowprocset</label>
              <input name='Flowprocset' type='text' placeholder="30" />
            </div>
            <div className='inp25 inputitem5'>
              <label >Flowproc</label>
              <input disabled type='text' />
            </div>
            <div className='inp26 inputitem5'>
              <label >Today</label>
              <input disabled type='text' />
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}
