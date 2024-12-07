import React from 'react';
import { MdDeleteForever, MdEdit } from "react-icons/md";
const MyTable = ({campaign, index}) => {
    const {email,name,type,title} = campaign;
    console.log(campaign)
    return (
        
            <tr>
                            <th>{index+1}</th>
                            <td>{title}</td>
                            <td>{type}</td>
                            <td>{email}</td>
                            <div className='flex items-center gap-5 p-5'>
                                <button className='text-3xl text-red-600'><MdDeleteForever /></button>
                                <button className='text-2xl text-yellow-700'><MdEdit /></button>
                                
                            </div>
                        </tr>
        
    );
};

export default MyTable;