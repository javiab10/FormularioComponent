export class Country {
    private id: string;
    private description: string;

    constructor(id: string, description: string){
        this.id = id;
        this.description = description;
    }

    getId(): string {
        return this.id;
    }

    getDescription(): string{
        return this.description;
    }

    setId(id: string): void {
        this.id = id;
    }

    setDescription(description: string): void{
        this.description = description;
    }
    
}
