import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyTable = ({ campaign, index,handleDeleteFromParent }) => {
    
    const { email, name, type, title, _id } = campaign;
    
    
    console.log(campaign)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/campaign/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){

                        Swal.fire({
                    title: "Deleted!",
                    text: "Your campaign has been deleted.",
                    icon: "success"
                });

                handleDeleteFromParent(id)

                    }
                })
                
            }
        });
    }

    return (

        <tr className=''>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{type}</td>
            <td>{email}</td>
            <div className='flex items-center gap-5 p-5'>
                <button onClick={() => handleDelete(_id)} className='text-3xl text-red-600'><MdDeleteForever /></button>
                <Link to={`/updateCampaign/${_id}`}><button className='text-2xl text-yellow-700'><MdEdit /></button></Link>

            </div>
        </tr>

    );
};

export default MyTable;