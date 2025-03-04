import { LanguageLevel } from "./language-level";

export class Language {
    private id: number;
    private contactId: number;
    private language: string;
    private level: LanguageLevel;

    constructor(id: number, contactId: number, language: string, level: LanguageLevel) {
        this.id = id;
        this.contactId = contactId;
        this.language = language;
        this.level = level;
    }

    getId(): number {
        return this.id;
    }

    getContactId(): number {
        return this.contactId;
    }

    getLanguage(): string {
        return this.language;
    }

    getLevel(): LanguageLevel {
        return this.level;
    }

    setId(id: number): void {
        this.id = id;
    }

    setContactId(contactId: number): void {
        this.contactId = contactId;
    }

    setLanguage(language: string): void {
        this.language = language;
    }

    setLevel(level: LanguageLevel): void {
        this.level = level;
    }
    
}
