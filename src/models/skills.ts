export default class Skill {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    desc: string;
    name: string;
    category: string;
    proficiency: string;
    timer: number;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un skill.
    constructor(
    
     id: number,
     timer: number = 0,
     name: string = 'name',
     category: string,
     proficiency: string= 'Débutant-null',
     desc: string ,
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un skill.
     this.id = id;
     this.desc = desc;
     this.timer = timer;
     this.category = category;
     this.proficiency = proficiency;
     this.name = name;
     this.created = created;
    }
   }