class Course {
    title: string;
    subtitle: string;
    creationDt: Date;

    constructor(
        title: string,
        subtitle: string,
        creationDt: Date,
    ) {
        this.title;
        this.subtitle;
        this.creationDt;
    }

    age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }
}

const course = new Course(
    "Typescript",
    "Learn and BOOM",
    new Date(2023, 1, 1)
);

console.log(course.age());
