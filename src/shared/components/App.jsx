import React from 'react';
import BranchIntro from './branch-intro/BranchIntro';
import Offer from './offer/Offer';

export default class App extends React.Component {

    render() {
        return (
            <div className="tapp">
                <div className="tapp__intro">
                    <BranchIntro/>
                </div>
                <div className="tapp__content">
                    <Offer/>
                </div>
            </div>
        );
    }

}
