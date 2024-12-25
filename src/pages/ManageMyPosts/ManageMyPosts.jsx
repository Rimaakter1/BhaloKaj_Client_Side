import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import TableFormat from '../../components/TableFormat/TableFormat';

const ManageMyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/volunteer-posts/${user.email}`)
            .then((response) => {
                setMyPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching volunteer posts:", error);
            });
    }, [user?.email]);

    console.log(myPosts);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPosts.map(post => (
                                <TableFormat key={post._id} post={post}></TableFormat>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageMyPosts;