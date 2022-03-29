import { Hobbies } from "@curriculum/serverHandler/models/hobbies"

const useHobbiesApi = (): any => {

    let language = "en"

    const read = async () => {
        console.log("aaaaa")
        return fetch(`${window.location.origin}/data/${language}/hobbies.json`)
            .then(response => response.json())
            .then(jsonData => {
                console.log("bbbbbbbbbbbbb", jsonData)

                let hobbies: Hobbies = JSON.parse(JSON.stringify(jsonData))
                console.log(hobbies)
                return hobbies
            });
    };

    return {
        read
    }
};

export default useHobbiesApi;
