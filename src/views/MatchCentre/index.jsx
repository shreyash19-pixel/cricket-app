import React, { useState } from 'react'
import { MatchCentreHeading, MatchCentreHeadingWrap, MatchCentreSection, MatchCentreSections } from '../../styles/MatchCentre'
import { FaArrowLeft } from "react-icons/fa6";
import Scoring from '../../components/Scoring';

const MatchCentre = () => {

    const [isSectionSelected, setIsSectionSelected] = useState(true)

    return (
        <>
            <MatchCentreHeadingWrap>
                <MatchCentreHeading>
                    <FaArrowLeft style={{ fontSize: "24px", cursor: "pointer" }} />
                    <h1>Match Centre</h1>
                </MatchCentreHeading>

            </MatchCentreHeadingWrap>
            <MatchCentreSections>
                <MatchCentreSection isSectionSelected = {isSectionSelected}>
                    Scoring
                </MatchCentreSection>
                <MatchCentreSection>
                    Scorecard
                </MatchCentreSection>
                <MatchCentreSection>
                    Stats
                </MatchCentreSection>
                <MatchCentreSection>
                    Super Stats
                </MatchCentreSection>
                <MatchCentreSection>
                    Balls
                </MatchCentreSection>
                <MatchCentreSection>
                    Info
                </MatchCentreSection>
            </MatchCentreSections>
            <Scoring />
        </>
    )
}

export default MatchCentre
