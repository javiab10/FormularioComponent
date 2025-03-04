import { HiberusLevel } from "../hiberus-level";
import { Technology } from "../technology";

export class WorkExperience {
    private id: number;
    private contactId: number;
    private position: string;
    private company: string;
    private location: string;
    private startDate: Date;
    private endDate: Date;
    private relatedToOurIndustry: boolean;
    private technologies: Technology[] | undefined; //Hecho
    private hiberusLevel: HiberusLevel | undefined; //Hecho


	constructor(id: number, contactId: number, position: string, company: string, location: string, startDate: Date, endDate: Date, relatedToOurIndustry: boolean, technologies: Technology[] | undefined, hiberusLevel: HiberusLevel | undefined) {
		this.id = id;
        this.contactId = contactId;
		this.position = position;
		this.company = company;
        this.location = location;
		this.startDate = startDate;
		this.endDate = endDate;
		this.relatedToOurIndustry = relatedToOurIndustry;
        this.technologies = technologies;
        this.hiberusLevel = hiberusLevel;
	}

    getId(): number {
        return this.id;
    }
    
    getContactId(): number {
        return this.contactId;
    }

    getPosition(): string {
        return this.position;
    }

    getCompany(): string {
        return this.company;
    }
    
    getLocation(): string {
        return this.location;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getRelatedToOurIndustry(): boolean {
        return this.relatedToOurIndustry;
    }

    getTechnologies(): Technology[] | undefined {
        return this.technologies;
    }

    getHiberusLevel(): HiberusLevel | undefined{
        return this.hiberusLevel;
    }

    setId(id: number): void {
        this.id = id;
    }

    setContactId(contactId: number): void {
        this.contactId = contactId;
    }

    setPosition(position: string): void {
        this.position = position;
    }

    setCompany(company: string): void {
        this.company = company;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }

    setEndDate(endDate: Date): void {
        this.endDate = endDate;
    }

    setRelatedToOurIndustry(relatedToOurIndustry: boolean): void {
        this.relatedToOurIndustry = relatedToOurIndustry;
    }

    setTechnologies(technologies: Technology[]): void {
        this.technologies = technologies;
    }

    setHiberusLevel(hiberusLevel: HiberusLevel): void {
        this.hiberusLevel = hiberusLevel;
    }


}
