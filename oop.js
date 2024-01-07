var Course = /** @class */ (function () {
    // title: string;
    // subtitle: string;
    // creationDt: Date;
    function Course(_title, subtitle, creationDt) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.title;
        this.subtitle;
        this.creationDt;
    }
    Course.printTitle = function (course) {
        console.log("The title of the course ".concat(course.title));
    };
    Object.defineProperty(Course.prototype, "title", {
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "age", {
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDt.getTime();
            return Math.round(ageInMs / 1000 / 60 / 24);
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var course = new Course("Typescript", "Learn and BOOM", new Date(2023, 1, 1));
course.title = "New Value";
// console.log(course);
Course.printTitle(typescript);
