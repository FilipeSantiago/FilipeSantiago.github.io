import { About } from "@curriculum/serverHandler/models/about"

const useAboutApi = (): any => {

    let language = "en"

    const read = async () => {
        return fetch(`${window.location.origin}/data/${language}/about.json`)
            .then(response => response.json())
            .then(jsonData => {
                let experience: About = JSON.parse(JSON.stringify(jsonData))
                return experience
            });
    };

    return {
        read
    }
};

export default useAboutApi;
