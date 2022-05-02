import { useState, useEffect } from "react";

interface AnimeType {
    title: string;
}


function AnimeList() {

    const [anime, setAnimes] = useState<AnimeType>()

    useEffect(() => {
    
      return () => {
      }
    }, [])
    

}

export default AnimeList;