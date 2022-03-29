export enum ExperienceType {
    Profile = "Profile",
    EmploymentHistory = "EmploymentHistory",
    Education = "Education"
}

export class ExperienceDescription {
    id: number = 0
    title!: string
    duration!: string
    location!: string
    highlights?: string[]
};

export class Experience {
    type: ExperienceType = ExperienceType.Profile
    description?: string
    items?: ExperienceDescription[]
};
