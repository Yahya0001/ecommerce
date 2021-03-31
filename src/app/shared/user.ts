export class User {
	id:number;
	nom:string;
	prenom:string;
	adresse:string;
	ville:string;
	code_postal:string;
	mail:string;
	password:string;

    constructor(id:number,nom: string,prenom: string,adresse: string,ville: string,code_postal: string,mail: string,password: string){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.adresse=adresse;
        this.ville=ville;
        this.code_postal=code_postal;
        this.mail=mail;
        this.password=password
    }
  }