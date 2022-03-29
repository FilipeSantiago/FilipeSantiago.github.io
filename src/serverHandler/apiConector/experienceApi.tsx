import { Experience } from "@curriculum/serverHandler/models/experience"

const useExperienceApi = (): any => {

    let language = "en"

    const read = () => {
        return fetch(`${window.location.origin}/data/${language}/experience.json`)
            .then(response => response.json())
            .then(jsonData => {
                // console.log(jsonData)
                let experience: Experience[] = JSON.parse(JSON.stringify(jsonData))
                return experience
            });
    };

    return {
        read
    }
};

export default useExperienceApi;
