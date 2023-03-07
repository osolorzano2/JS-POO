class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter: twitter,   //Se puede poner el mismo nombre
            instagram,          // Si se deja solo el nombre es como ponerlo igual que arriba
            facebook
        };
        this.approvedCourses = approved;
        this.learningPaths = learning;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "Juandccc",
    email: "miguelito@gmail.com",
    instagram: "juanmiguel"
})