// Interface representing the raw structure of the Jikan API response for characters.
export interface JikanCharacter {
  character: {
    id: number;
    name: string;
    images: {
      jpg: { image_url: string };
    };
  };
}