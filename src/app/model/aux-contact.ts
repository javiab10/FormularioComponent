import { Education } from "./academic/education";
import { Language } from "./academic/language";
import { Location } from "./location";
import { Ccaa } from "./location/ccaa";
import { Country } from "./location/country";
import { Place } from "./location/place";
import { Province } from "./location/province";
import { Source } from "./source";
import { State } from "./state";
import { Technology } from "./technology";
import { WorkExperience } from "./work/work-experience";

export class AuxContact {
    private id: number = -1;
    private name: string = '';
    private phone: string = '';
    private email: string = '';
    private location: Location = new Location(-1, -1, new Country('', ''), new Ccaa(-1, ''), new Province(-1, -1, ''), new Place(-1, ''));
    private education: Education[] = []; //Hecho
    private languages: Language[] = []; //Hecho
    private workExperiences: WorkExperience[] | undefined = []; //Hecho
    private source: Source = new Source(-1, ''); //Hecho
    private technologies: Technology[] = [];
    private minSalary: number = 0;
    private maxSalary: number = 0;
    private state: State = new State(-1, ''); //Hecho

    constructor(){}

    //GETTERS
    public get Id() : number {
        return this.id;
    }

    public get Name() : string {
        return this.name;
    }

    public get Phone(): string {
        return this.phone;
    }

    public get Email() : string {
        return this.email;
    }
    
    public get Location() : Location {
        return this.location;
    }

    public get Education() : Education[] {
        return this.education;
    }

    public get Languages() : Language[] {   
        return this.languages;
    }

    public get WorkExperiences() : WorkExperience[] | undefined {
        return this.workExperiences;
    }

    public get Source() : Source {
        return this.source;
    }

    public get Technologies() : Technology[] {
        return this.technologies;
    }

    public get MinSalary() : number {
        return this.minSalary;
    }

    public get MaxSalary(): number {
        return this.maxSalary;
    }

    public get State() : State {
        return this.state;
    }

    //SETTERS
    public set Id(id : number) {
        this.id = id;
    }
    
    public set Name(name : string) {
        this.name = name;
    }
    
    public set Phone(phone : string) {
        this.phone = phone;
    }

    public set Email(email : string) {
        this.email = email;
    }

    public set Location(location : Location) {
        this.location = location;
    }

    public set Education(education : Education[]) {
        this.education = education;
    }

    public set Languages(languages : Language[]) {
        this.languages = languages;
    }

    public set WorkExperiences(workExperiences : WorkExperience[]) {
        this.workExperiences = workExperiences;
    }

    public set Source(source : Source) {
        this.source = source;
    }   

    public set Technologies(technologies : Technology[]) {
        this.technologies = technologies;
    }

    public set MinSalary(minSalary : number) {
        this.minSalary = minSalary;
    }

    public set MaxSalary(maxSalary : number) {
        this.maxSalary = maxSalary;
    }

    public set State(state : State) {
        this.state = state;
    }



    
    
    
    
    
    
}
