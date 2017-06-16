export class User  {
    constructor() {
        this.alive = true;
    }

    setSkills(skills=[]) {
        const defaultSkills = ['JavaScript'];
        this.skills = skills.concat(defaultSkills);
    }

    sayHello() {
        window.setTimeout(() => {
            console.log('Hello World!');
    }, 2000);
    }

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
}