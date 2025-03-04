import { Ccaa } from "./location/ccaa";
import { Country } from "./location/country";
import { Place } from "./location/place";
import { Province } from "./location/province";

export class Location {
    private id: number;
    private contactId: number;
    private pais: Country;
    private ccaa: Ccaa;
    private provincia: Province;
    private localidad: Place;

    constructor (id: number, contactId: number, pais: Country, ccaa: Ccaa, provincia: Province, localidad: Place){
        this.id = id;
        this.contactId = contactId;
        this.pais = pais;
        this.ccaa = ccaa;
        this.provincia = provincia;
        this.localidad = localidad;
    }
    
    getId(): number {
        return this.id;
    }

    getContactId(): number {
        return this.contactId;
    }

    getPais(): Country {
        return this.pais;
    }

    getCcaa(): Ccaa{
        return this.ccaa;
    }

    getProvincia(): Province {
        return this.provincia;
    }

    getLocalidad(): Place {
        return this.localidad;
    }

    setId(id: number): void {
        this.id = id;
    }

    setContactId(contactId: number): void {
        this.contactId = contactId;
    }

    setPais(pais: Country): void {
        this.pais = pais;
    }

    setCcaa(ccaa: Ccaa): void {
        this.ccaa = ccaa;
    }

    setProvincia(provincia: Province): void {
        this.provincia = provincia;
    }
    
    setLocalidad(localidad: Place): void {
        this.localidad = localidad;
    }
}
