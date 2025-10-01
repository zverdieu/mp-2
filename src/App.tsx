import DBZ from "./components/DBZ.tsx";
import { useEffect, useState } from "react";
import type { Character } from "./interfaces/Characters.ts";
import type { JikanCharacter } from "./interfaces/JikanCharacters.ts";

// Styled container for the whole page

export default function App() {
    const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.jikan.moe/v4/anime/813/characters");
            const { data: characters }: { data: JikanCharacter[] } = await rawData.json();

            setData(
                characters.map((c) => ({
                    id: c.character.id,
                    name: c.character.name,
                    image_url: c.character.images.jpg.image_url,
                }))
            );
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e) => console.log("There was the error: " + e));
    }, []);

    return (
      <DBZ data={data} />
    );
}