// let courses = {
//     textFields: {
//         title: "TypeScript BOOM"
//     }
// };
// let courses = null;
var createCourse = function (title, subtitle, lessonsCount, callback) {
    console.log(" Creating curse with Title: ".concat(title, "\n    Subtitle: ").concat(subtitle, " lesson count ").concat(lessonsCount));
    var course = {
        title: title,
        subtitle: subtitle,
        lessonsCount: lessonsCount
    };
    callback(course);
    return course;
};
