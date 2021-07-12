import React from 'react'
import { Container,Card,CardBody } from 'reactstrap';
import { Loading } from '../LoadingComponent';

export interface ICenterPieceProps {}

export const CenterPiece: React.FunctionComponent<ICenterPieceProps> = props => {
    const { children} = props;
    return(
        <Container
            style={
                {
                    position:'absolute',
                    left:'50%',
                    top:'50%',
                    transform:'translate(-50%,-50%)',
                    WebkitTransform:'translate(-50%,-50%)'
                }
            }
            className='d-flex justify-content-center'
        >
            {children}
        </Container>
    )
}

export interface ILoadingComponentProps {
    card?: boolean;
    dotType?: string;
  }
  
  export const LoadingComponent: React.FunctionComponent<ILoadingComponentProps> =
    (props) => {
      const { card, children, dotType } = props;
      if (card) {
        return (
            <CenterPiece>
                <Card>
                    <CardBody>
                        <Loading dotType={dotType}>{children}</Loading>
                    </CardBody>
                </Card>
            </CenterPiece>
        );
      }
      return <Loading dotType={dotType}>{children}</Loading>;
    };
  
  
    LoadingComponent.defaultProps = {
        card: true,
        dotType: 'dot-bricks'
    }
  
    export default LoadingComponent