import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../contexts/user'
import IPageProps from '../interfaces/page'
import firebase from 'firebase'
import { SignInWithSocialMedia as SocialMediaPopup} from '../moduels/auth'
import logging from '../config/logging'
import { CenterPiece } from '../components/CenterPiece'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import ErrorTest from '../components/ErrorTest'
import { Provider } from '../config/firebase'
import LoadingComponent from '../components/LoadingComponent'

const LoginPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const userContext = useContext(UserContext)
    const history = useHistory();
    const isLogin = window.location.pathname.includes('login')

    const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider ) => {
        if (error !== '') setError('')

        setAuthenticating(true)

        SocialMediaPopup(provider)
        .then(async result => {
            logging.info(result)

            let user = result.user

            if(user){
                let uid = user.uid
                let name = user.displayName

                if(name){
                    try{
                        let fire_token = await user.getIdToken()

                        /** If we get a token, auth with the backend */
                    }
                    catch(error){
                        setError('Invalid toekn')
                        logging.error(error)
                        setAuthenticating(false)

                    }
                }
                else{
                    /** if no name is returned, we could have a custom form
                     * here getting the user's name, depending on the provider
                     * you are using. Google generally returns ones
                     */

                    setError('The identify provider doesn\'t have a name')
                    setAuthenticating(true)
                }
            }
            else{
                setError('The identify provider is missing a lot of the necessary information. Please try another account or provider')
                setAuthenticating(false)

            }
        })
        .catch(error=> {
            setError(error.message)
            setAuthenticating(false)
        })
    }

    return(
        <CenterPiece>
            <Card>
                <CardHeader>
                    {isLogin? 'Login' : 'Sign Up'}
                </CardHeader>
                <CardBody>
                    <ErrorTest error={error}/>
                    <Button
                        block
                        disabled={authenticating}
                        onClick={()=>SignInWithSocialMedia(Provider.google)}
                        style={{
                            backgroundColor:'#ea4335',
                            borderColor:'#ea4335'
                        }}
                    >
                        <i className="fab fa-google mr-2"></i> Sign {isLogin?'in':'up'} with Google
                    </Button>
                    {authenticating && <LoadingComponent card={false}/>}
                </CardBody>
            </Card>
        </CenterPiece>
    )
}

export default LoginPage;