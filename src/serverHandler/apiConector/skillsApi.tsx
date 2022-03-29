import { Skill } from "@crc_types/skills"

const useSkillsApi = (): any => {

    let language = "en"

    const read = async () => {
        let response = await fetch(`${window.location.origin}/data/${language}/skills.json`)
        let jsonData = await response.json()

        let experience: Skill[] = JSON.parse(JSON.stringify(jsonData))
        return experience
    };

    return {
        read
    }
};

export default useSkillsApi;
