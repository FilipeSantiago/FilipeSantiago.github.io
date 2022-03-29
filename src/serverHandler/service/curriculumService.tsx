import { useExperienceApi, useExternalMediaApi, useProfileApi, useSkillsApi } from "../apiConector"
import { Experience, ExperienceDescription } from "../models/experience";
import { CircleOutlined } from '@mui/icons-material';
import { Skill } from "@crc_types/skills";
import { Profile } from "@crc_types/profile";
import { ExternalMedia } from "@crc_types/externalMedia";


export class Content {
    title!: string
    emoji: any
    description?: string
    items?: ExperienceDescription[]
}

export class Link {
    title!: string;
    link!: string;
}

export class Details {
    title!: string;
    items?: Link[];
};

const useCurriculumService = (): any => {

    const { read: readExperience } = useExperienceApi();
    const { read: readExternalMedia } = useExternalMediaApi();
    const { read: readProfile } = useProfileApi();
    const { read: readSkills } = useSkillsApi();


    const getCurriculumContent = () => {
        return (
            readExperience().then((experiences: Experience[]) => {
                let content = experiences.map(experience => fillFromExperience(experience))
                return content;
            })
        )
    };

    const getCurriculumDetails = async () => {

        const details = await fillProfileDetails();
        const details_1 = await fillLinksDetails(details);
        const final_details = await fillSkillsDetails(details_1);

        return final_details;
    };

    const getCurriculumHeader = async () : Promise<Profile> => {
        return await readProfile()
    }

    const fillFromExperience = (experience: Experience) => {

        let content = new Content()

        content.title = experience.type.valueOf();
        content.description = experience.description;
        content.items = experience.items
        content.emoji = <CircleOutlined />

        return content
    };

    const fillSkillsDetails = async (detail_list: Details[]) => {
        let skills: Skill[] = await readSkills()

        let curriculumSkills = skills.filter(skill => skill.type === "technical")
        let skillItems = curriculumSkills.map(skill => {
            let link = new Link()
            link.title = skill.name;
            return link
        })

        let detail = new Details();
        detail.items = skillItems;
        detail.title = "skills"

        detail_list.push(detail)
        return detail_list
    };

    const fillProfileDetails = async () => {
        let profile: Profile = await readProfile()

        let detail = new Details();
        detail.items = profile?.additionalInfo?.map(x => {
            let link = new Link()
            link.title = x.text;
            return link
        })
        detail.title = "profile"

        let detail_list: Details[] = [detail]
        return detail_list
    };

    const fillLinksDetails = async (detail_list: Details[]) => {
        let medias: ExternalMedia[] = await readExternalMedia()

        let links = medias?.map(media => {
            let link = new Link()

            link.title = media.name;
            link.link = media.link;

            return link
        });

        let detail = new Details();
        detail.items = links
        detail.title = "links"
        detail_list.push(detail)

        return detail_list
    };

    return {
        getCurriculumContent,
        getCurriculumDetails,
        getCurriculumHeader
    }
}

export default useCurriculumService;
