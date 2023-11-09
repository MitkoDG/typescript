class Course {
    // title: string;
    // subtitle: string;
    // creationDt: Date;

    constructor(
        private _title: string,
        private subtitle: string,
        private creationDt: Date,
    ) {
        this.title;
        this.subtitle;
        this.creationDt;
    }

    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty"
        }
        this._title = newTitle;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }
}

const course = new Course(
    "Typescript",
    "Learn and BOOM",
    new Date(2023, 1, 1)
);

course.title = "New Value"

console.log(course);
