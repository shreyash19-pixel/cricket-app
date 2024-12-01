import styled from 'styled-components'


export const MatchCentreHeadingWrap = styled.div`
    padding-inline: 12px;
    margin-top: 10px;
`

export const MatchCentreHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    h1{
        font-weight: 500;
        color: black;
    }
`

export const MatchCentreSections = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #d1d1d1;
`

export const MatchCentreSection = styled.div`
   padding: 16px;
   cursor: pointer;
   font-weight: 400;
   position: relative;

   &::after{
        content: ${({ isSectionSelected }) => (isSectionSelected ? "''" : "none")};
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left:0;
        background-color: black;
   }

`