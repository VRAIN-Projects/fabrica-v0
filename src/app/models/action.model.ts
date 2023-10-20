import { Skill } from "./skill.model";

export class Action {
    id: number = 0;
    skills: Skill[] = [];
    top: number = 0;
    left: number = 0;

    constructor(id: number, skills: Skill[]) {
        this.id = id;
        this.skills = skills;
    }

}
