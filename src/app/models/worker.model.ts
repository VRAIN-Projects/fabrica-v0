import { Skill } from "./skill.model";

export class Worker {
    public color: string = "black";
    public name: string = "...";
    public action: number = 0;
    public skills: Skill[] = [];
}