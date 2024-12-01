import React from 'react'
import { BatsmanInfoGrid, BatsmanName, BatsmanNameWrap,Extras, InningsNumber, OverRuns, OverRunsWrap, Overs, OversAndRunsWrap, RunrateAndPartnership, RunrateWrap, Runs, RunsGrid, RunsPadWrap, ScoreAndWickets, TeamName } from '../../styles/Scoring'
import { MdEdit } from "react-icons/md";
import { CiBaseball } from "react-icons/ci";

const Scoring = () => {
  return (
    <>
    <OversAndRunsWrap>
      <TeamName>
        ABC
      </TeamName>
      <InningsNumber>
        1st Innings
      </InningsNumber>
      <ScoreAndWickets>
        2-0
        <Overs>
          (7)
        </Overs>
      </ScoreAndWickets>
    </OversAndRunsWrap>
    <RunrateAndPartnership>
        <RunrateWrap>
          <Extras>
            Extras - 1
          </Extras>
          <Extras>
            Overs - 0.2 / 5
          </Extras>
          <Extras>
            CRR - 6.0
          </Extras>
        </RunrateWrap>
        <div>
          <Extras>
            Partnership - 2(2)
          </Extras>
        </div>
      </RunrateAndPartnership>
      <BatsmanInfoGrid>
        <BatsmanNameWrap>
          <BatsmanName>
          <MdEdit style={{cursor: "pointer"}} />
              Batsman
          </BatsmanName>
          <BatsmanName>
              Bhuvan
          </BatsmanName>
          <BatsmanName>
              Nathan
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              R
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
          <BatsmanName>
              0
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              B
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
          <BatsmanName>
              0
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              4s
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
          <BatsmanName>
              0
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              6s
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
          <BatsmanName>
              0
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              SR
          </BatsmanName>
          <BatsmanName>
              100.0
          </BatsmanName>
          <BatsmanName>
              0.0
          </BatsmanName>
        </BatsmanNameWrap>
      </BatsmanInfoGrid>


      <BatsmanInfoGrid>
        <BatsmanNameWrap>
          <BatsmanName>
          <MdEdit style={{cursor: "pointer"}} />
              Bowler
          </BatsmanName>
          <BatsmanName>
              Ram
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              O
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>

        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              M
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              R
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              W
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
        </BatsmanNameWrap>

        <BatsmanNameWrap>
          <BatsmanName>
              Eco
          </BatsmanName>
          <BatsmanName>
              1
          </BatsmanName>
        </BatsmanNameWrap>
      </BatsmanInfoGrid>
      <OverRunsWrap>
        <OverRuns>
          1
        </OverRuns>
      </OverRunsWrap>

      <RunsPadWrap>
        <RunsGrid>
          <Runs>1</Runs>
          <Runs>2</Runs>
          <Runs>3</Runs>
          <Runs>4</Runs>
          <Runs>5</Runs>
          <Runs>LB</Runs>
          <Runs>Bye</Runs>
          <Runs>Wide</Runs>
          <Runs>NB</Runs>
          <Runs><span></span></Runs>
          <Runs more = {true}>More</Runs>
          <Runs><CiBaseball /></Runs>
          <Runs>4 5 6 7</Runs>
          <Runs>Undo</Runs>
          <Runs>Out</Runs>
        </RunsGrid>
      </RunsPadWrap>
    </>
  )
}

export default Scoring



