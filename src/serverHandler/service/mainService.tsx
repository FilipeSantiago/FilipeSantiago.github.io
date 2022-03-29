import { useAboutApi, useHobbiesApi } from "../apiConector"
import { About } from "../models/about";
import { Hobbies } from "../models/hobbies";

export class Main {
    about!: string
    aboutQuote!: string
    aboutQuotePerson!: string
    hobbies!: string
    hobbiesQuote!: string
    hobbiesQuotePerson!: string
};


const useMainService = (): any => {

    const { read: readAbout } = useAboutApi();
    const { read: readHobbies } = useHobbiesApi();

    const getMainPageData = async () => {
        const about: About = await getAboutData()
        const hobbies: Hobbies = await getHobbiesData()

        let main: Main = new Main();

        main.about = about.text;
        main.aboutQuote = about.quote
        main.aboutQuotePerson = about.quotedPerson
        main.hobbies = hobbies.text;
        main.hobbiesQuote = hobbies.quote
        main.hobbiesQuotePerson = hobbies.quotedPerson

        return main;
    }

    const getAboutData = async () => {
        let about: About = await readAbout()
        return about
    }

    const getHobbiesData = async () => {
        let hobbies: Hobbies = await readHobbies()
        console.log("aaaaa", hobbies)
        return hobbies
    }

    return {
        getMainPageData
    }

}

export default useMainService;