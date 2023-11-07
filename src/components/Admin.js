import React from 'react'
import Nav from './Nav'

function Admin() {
    const styles = {
        marginLeft: '38%',
        fontSize: '3rem',
        color: 'black',
        marginTop: '1%',
    };
    let userArray = [];
    return (
        <>
            <Nav titleLink={'Roadmap'} li1={''} li2={''} li3={'CONTACT'} />
            <h1 style={styles}>Admin Panel</h1>
            <div className="con">
                
                
            </div>
        </>
    )
}

export default Admin;
