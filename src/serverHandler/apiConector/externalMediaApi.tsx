import { ExternalMedia } from "@crc_types/externalMedia"

const useExternalMediaApi = (): any => {

    let language = "en"

    const read = async () => {
        let response = await fetch(`${window.location.origin}/data/${language}/external_media.json`)
        let jsonData = await response.json()
        let experience: ExternalMedia[] = JSON.parse(JSON.stringify(jsonData))
        return experience
    };

    return {
        read
    }
};

export default useExternalMediaApi;
