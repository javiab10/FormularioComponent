import { Location } from "./location";
import { Education } from "./academic/education";
import { Language } from "./academic/language";
import { Source } from "./source";
import { State } from "./state";
import { Technology } from "./technology";
import { WorkExperience } from "./work/work-experience";

export class Contact {
    private id: number;
    private name: string;
    private phone: string;
    private email: string;
    private location: Location;
    private education: Education[]; //Hecho
    private languages: Language[]; //Hecho
    private workExperiences: WorkExperience[] | undefined; //Hecho
    private source: Source; //Hecho
    private technologies: Technology[];
    private minSalary: number;
    private maxSalary: number;
    private state: State; //Hecho

    constructor(id: number, name: string, phone: string, email: string, location: Location, education: Education[], languages: Language[], workExperience: WorkExperience[] | undefined, source: Source, technologies: Technology[], minSalary: number, maxSalary: number, state: State) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.location = location;
        this.education = education;
        this.languages = languages;
        this.workExperiences = workExperience;
        this.source = source;
        this.technologies = technologies;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.state = state;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPhone(): string {
        return this.phone;
    }   

    getEmail(): string {
        return this.email;
    }

    getLocation(): Location {
        return this.location;
    }

    getEducation(): Education[] {
        return this.education;
    }

    getLanguages(): Language[] {
        return this.languages;
    }

    getWorkExperiences(): WorkExperience[] | undefined {
        return this.workExperiences;
    }

    getSource(): Source {
        return this.source;
    }

    getTechnologies(): Technology[] {
        return this.technologies;
    }

    getMinSalary(): number {
        return this.minSalary;
    }

    getMaxSalary(): number {
        return this.maxSalary;
    }

    getState(): State {
        return this.state;
    }

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setLocation(location: Location): void {
        this.location = location;
    }

    setEducation(education: Education[]): void {
        this.education = education;
    }

    setLanguages(languages: Language[]): void {
        this.languages = languages;
    }

    setWorkExperiences(workExperiences: WorkExperience[]): void {
        this.workExperiences = workExperiences;
    }

    setSource(source: Source): void {  
        this.source = source;
    }

    setTechnologies(technologies: Technology[]){
        this.technologies = technologies;
    }

    setMinSalary(minSalary: number): void {
        this.minSalary = minSalary;
    }

    setMaxSalary(maxSalary: number): void {
        this.maxSalary = maxSalary;
    }

    setState(state: State): void {
        this.state = state;
    }

    
}
