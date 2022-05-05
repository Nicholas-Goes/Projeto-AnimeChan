import { useState, useEffect } from "react";

type AnimeData = {
    title: string
}

function AnimeList() {

const [anime, setAnime] = useState<AnimeData[]>([]);

    useEffect(() => {

    return () => {
    
    }
    }, [])

    return(
        <div></div>
    )
}

export default AnimeList;