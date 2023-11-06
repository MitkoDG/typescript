var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDt) {
        this.title;
        this.subtitle;
        this.creationDt;
    }
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    };
    return Course;
}());
var course = new Course("Typescript", "Learn and BOOM", new Date(2023, 1, 1));
console.log(course.age());
