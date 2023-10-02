// let courses = {
//     textFields: {
//         title: "TypeScript BOOM"
//     }
// };
// let courses = null;

// const title = courses?.textFields?.title ?? "No title found";

// logCourseTitle(courses);

// function logCourseTitle(courses){

//     if (!courses?.textFields) {
//         console.log("textFields not defined");
//         return;
//     }

//     if (courses.textFields.title) {
//         console.log(`The title is: ${courses.textFields.title}`);
//     }
// }

enum DemoCourses {
    FREE = "FREE",
    PREMIUM = "PREMIUM",
    PRIVATE = "PRIVATE",
    HIDDEN = "HIDDEN"
}

const courses = {
    title: "TypeScript BOOM",
    type: DemoCourses.HIDDEN
};

console.log(courses);


