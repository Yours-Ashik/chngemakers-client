import React, { useContext, useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import { authProvider } from '../Provider/Provider';
import MyTable from '../Components/MyTable';

const MyCampaign = () => {
    const { user, setUser } = useContext(authProvider);
    const email = user?.email;
    const [myCampaign, setMyCampaign] = useState([]);

    useEffect(() => {
        if (email) {

            console.log("Fetching campaigns for email:", email);

            fetch(`http://localhost:5000/myCampaign/search?email=${email}`, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Campaign data:", data);
                    setMyCampaign(data)
                })
                .catch(err => console.error("Error fetching campaigns:", err));
        } else {
            console.error("User email is undefined");
        }
    }, [email]);



    return (
        <div className='my-10 lg:my-20'>
            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myCampaign.map((campaign,index) => <MyTable
                                campaign={campaign}
                                index={index}
                                key={index}
                                ></MyTable>)
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;