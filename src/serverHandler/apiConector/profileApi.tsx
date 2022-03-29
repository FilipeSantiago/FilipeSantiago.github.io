import { Profile } from "@crc_types/profile"


const useProfileApi = () => {
    let language = "en"

    const read = async () => {
        let response = await fetch(`${window.location.origin}/data/${language}/profile.json`)
        let jsonData = await response.json()
        let experience: Profile = JSON.parse(JSON.stringify(jsonData))
        return experience
    };

    return {
        read
    }
};

export default useProfileApi;
