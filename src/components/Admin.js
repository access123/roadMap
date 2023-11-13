import React from 'react'
import Nav from './Nav'
import { UserCard } from './Card';
import './styles/Admin.css'
function Admin() {
    const styles = {
        marginLeft: '43%',
        fontSize: '2rem',
        color: 'black',
        marginTop: '1%',
    };
    let userArray = [{
        userName: 'User 1',
        progress: 20,
    },
    {
        userName: 'User 2',
        progress: 40,
    },
    {
        userName: 'User 3',
        progress: 60,
    },
    {
        userName: 'User 4',
        progress: 80,
    } , 
    {
        userName: 'User 5',
        progress: 100,
    },
    {
        userName: 'User 6',
        progress: 20,
    },
    {
        userName: 'User 7',
        progress: 40,
    },
    {
        userName: 'User 8',
        progress: 45,
    }
];
    return (
        <>
            <Nav titleLink={''} li1={''} li2={''} li3={'CONTACT'} />
            <h1 style={styles}>Admin Panel</h1>
            <div className="con">
                {
                    userArray.map((item) => (
                        <UserCard userName={item.userName} progress={item.progress}  onClick={()=>{
                            console.log('clicked');
                        }}/>
                    ))
                }
            </div>
        </>
    )
}

export default Admin;
