import useExperienceApi from "../apiConector/experienceApi"
import { Experience, ExperienceType } from "../models/experience";


const useTimelineService = (): any => {

    const { read } = useExperienceApi();

    const getCurriculumExperienceData = () => {
        return (
            read().then((experiences: Experience[]) => {
                // console.log(ExperienceType.Education.valueOf())
                let filteredExperiences = experiences
                    .filter(_experience => _experience.type === ExperienceType.Education.valueOf() || _experience.type === ExperienceType.EmploymentHistory.valueOf())

                return filteredExperiences;
            })
        )
    }

    return {
        getCurriculumExperienceData
    }

}

export default useTimelineService;