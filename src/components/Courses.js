import React from 'react'
import Nav from './Nav'
import './styles/Courses.css'
import { useNavigate } from 'react-router-dom'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Footer from './Footer'

const Courses = () => {
    const obj = {
        display: 'flex',
        marginTop: '20px',
        marginBottom: '20px'
    };
    const Navigate = useNavigate()
    return (
        <>
            <Nav/>
                <h1 style={{paddingLeft:'44%'}}>Courses</h1>
            <div className="container" style={obj}>
                <Card color='neutral' variant='soft' sx={{ width: 320 }} >
                    <h3>Java</h3>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img src="https://imgs.search.brave.com/xU4z0qJbwmAEUZLYHMOnzpMo0xp-EjFXh2CHpMuAufs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vY29yZS9p/bWFnZXMvamF2YS1s/b2dvMS5wbmc" alt="JAVAimg" loading="lazy" />
                    </AspectRatio>
                    <p style={{
                        textAlign: 'justify'
                    }
                    } >
                        Java is a versatile, object-oriented programming language known for its platform independence and widespread use in developing a wide range of applications, from web and mobile to enterprise software.
                    </p>
                    <Button
                        color="warning"
                        size="sm"
                        variant="outlined"
                        onClick={function () { Navigate('/Roadmap')}}
                    >Go to Roadmap</Button>
                </Card>
            </div>
            <Footer/>
        </>
    )
}
export default Courses