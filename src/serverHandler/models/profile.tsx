import React from 'react'

export class AdditionalInfo {
    icon: any
    text!: string
}

export class Profile {
    name!: string
    profission!: string
    photo?: string
    additionalInfo!: AdditionalInfo[]
    type?: string
}
