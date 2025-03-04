export class AcademicLevel {
    private id: number;
    private description: string;

    constructor(id: number, description: string){
        this.id = id;
        this.description = description;
    }

    getId(): number {
        return this.id;
    }

    getDescription(): string {
        return this.description;
    }

    setId(id: number): void{
        this.id = id;
    }

    setDescription(description: string): void{
        this.description = description;
    }
}
