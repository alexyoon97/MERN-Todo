import React from 'react'
import { Container } from 'reactstrap'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import IPageProps from '../interfaces/page'

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return(
        <Container fluid className='p-0'>
            <Navigation/>
            <Header
                title="Awesome Todo App"
                headLine="Do your stuff"
            />
            <Container className='mt-5'>
                Todo stuff here...
            </Container>
        </Container>
    )
}

export default HomePage;