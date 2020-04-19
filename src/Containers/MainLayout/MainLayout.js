import React from 'react'
import SecureRoute from '../../API/SecureRoute'
import LandingPage from '../../Components/Home_page/Home_page'
import Dash_board from '../../Components/Dash_board/Dash_board'
import New_college from '../../Components/New_college/New_college'
import Publish from '../../Components/Publish/Publish'
import Refer_us from '../../Components/Refer_us/Refer_us'
import NavigationBar from '../../Components/UI_components/NavigationBar/NavigationBar'

export default function MainLayout(props) {
    console.log("props inside MainLayout",props)
    return (

        <React.Fragment>
            <NavigationBar>
            <SecureRoute exact path={props.match.url+'/Home'} component={LandingPage}></SecureRoute>
            <SecureRoute exact path={props.match.url+'/Dash_board'} component={Dash_board}></SecureRoute>
            <SecureRoute exact path={props.match.url+'/New_college'} component={New_college}></SecureRoute>
            <SecureRoute exact path={props.match.url+'/Publish'} component={Publish}></SecureRoute>
            <SecureRoute exact path={props.match.url+'/Refer_us'} component={Refer_us}></SecureRoute>
            </NavigationBar>
        </React.Fragment>

    )
}
