import { AcademicLevel } from "./academic-level";
import { Language } from "./language";

export class Education {
    private id: number;
    private contactId: number;
    private description: string;
    private academicLevel: AcademicLevel; //Hecho

    constructor(id: number, contactId: number, description: string, academicLevel: AcademicLevel) {
        this.id = id;
        this.contactId = contactId;
        this.description = description;
        this.academicLevel = academicLevel;
    }

    getId(): number {
        return this.id;
    }

    getContactId(): number {
        return this.contactId;
    }

    getDescription(): string {
        return this.description;
    }

    getAcademicLevel(): AcademicLevel {
        return this.academicLevel;
    }

    setId(id: number): void {
        this.id = id;
    }

    setContactId(contactId: number): void {
        this.contactId = contactId;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setAcademicLevel(academicLevel: AcademicLevel): void {
        this.academicLevel = academicLevel;
    }

}
