// export interface Skills {
//     htmlCss: Skill[], 
//     javaScript: Skill[], 
//     other: Skill[], 
//     minor: Skill[]
// }

export interface Skills {
    htmlCss: {
        name: string, 
        skills: Skill[] 
    }, 
    javaScript: {
        name: string, 
        skills: Skill[]
    }
    other: {
        name: string, 
        skills: Skill[] 
    }, 
    minor: {
        name: string, 
        skills: Skill[]
    }
}

export interface Skill {
    skillName: string;
    skillLogo: string;
}