export class Province {
    private id: number;
    private idCcaa: number;
    private description: string;

    constructor(id: number, idCcaa: number, description: string){
        this.id = id;
        this.idCcaa = idCcaa;
        this.description = description;
    }

    getId(): number {
        return this.id;
    }

    getIdCaa(): number {
        return this.idCcaa;
    }

    getDescription(): string{
        return this.description;
    }

    setId(id: number): void {
        this.id = id;
    }

    setIdCcaa(idCcaa: number): void {
        this.idCcaa = idCcaa;
    }

    setDescription(description: string): void{
        this.description = description;
    }
}
