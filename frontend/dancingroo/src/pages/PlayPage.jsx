import React, {useEffect} from "react";
import styled from "styled-components";
import useApi from "../hooks/auth/useApi";
import DanceSection from "../components/play/DanceSection";
import GameSection from "../components/play/GameSection";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function PlayPage({handleWatchingPage}) {

    const {data:playData, isLoading, error, fetchApi:playListApi} = useApi()
    // const {recommendedData, recommendedIsLoading, recommendedError, recommendedApi} = useApi('/play/recommendation')

    useEffect(()=>{
        handleWatchingPage('play')
        playListApi('GET', '/play')
    },[])

    return (
        <Wrapper>
            <DanceSection danceData={playData?.data.filter((e)=>e.playMode===0)} />
            <GameSection gameData={playData?.data.filter((e)=>e.playMode!==0)} />
        </Wrapper>
    );
}

export default PlayPage;