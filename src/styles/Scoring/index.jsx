import styled from 'styled-components'


export const OversAndRunsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-bottom: 1px solid #d1d1d1;
`

export const TeamName = styled.p`
    font-size: 18px;
    color: black;
    margin-bottom: 6px;
    font-weight: 500;
`

export const InningsNumber = styled.p`
    color: #858585;
`

export const ScoreAndWickets = styled.h2`
    color: #008622;
    font-size: 60px;
`

export const Overs = styled.span`
    color: #008622;
    font-size: 20px;
`

export const RunrateAndPartnership = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-bottom: 1px solid #d1d1d1;
    padding-bottom: 10px;
`

export const RunrateWrap = styled.div`
    display: flex;
    gap: 30px;
`

export const Extras = styled.p`
    color: black;
    font-weight: 500;
`

export const BatsmanInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 12px;
    padding-inline: 12px;
    padding-block: 10px;
    border-bottom: 1px solid #d1d1d1;
`

export const BatsmanNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const BatsmanName = styled.div`
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;

    &:first-child{
        font-weight: 500;
    }
`

export const OverRunsWrap = styled.div`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-inline: 12px;
    padding-block: 10px;
`

export const OverRuns = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: grey;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RunsPadWrap = styled.div`
    width: 100%;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

export const RunsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`

export const Runs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.more ? "black" : "white"};
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    
    &:not(:nth-child(11)):not(:nth-child(12)):not(:nth-child(13)):not(:nth-child(14)):not(:nth-child(15)) {
        border-bottom: 1px solid black;
    }

    &:not(:nth-child(5)):not(:nth-child(10)):not(:last-child)
    {
        border-right: 1px solid black;
    }
    

    span{
        width: 6px;
        height: 6px;
        background-color: white;
        border-radius: 50%;
    }
`