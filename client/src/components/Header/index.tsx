import React from 'react'
import {Container, Row,Col } from "reactstrap";

export interface IHeaderProps {
    height?: string;
    image?: string;
    title: string;
    headLine: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const {children, height, image, headLine, title } = props;
    const headerStyle = {
        background: 'linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(' + image + ') no-repeat center center',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: height
    }
  return (
      <header style={headerStyle}>
          <Container>
              <Row className = 'align-items-center text-center'>
                  <Col>
                    <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
                    <h3 className='mb-5 text-white'>{headLine}</h3>
                    {children}
                  </Col>
              </Row>
          </Container>

      </header>

  )
}

Header.defaultProps = {
    height: '100%',
    image: ''

}

export default Header;
