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

// enum DemoCourses {
//     FREE = "FREE",
//     PREMIUM = "PREMIUM",
//     PRIVATE = "PRIVATE",
//     HIDDEN = "HIDDEN"
// }

// const courses = {
//     title: "TypeScript BOOM",
//     type: DemoCourses.HIDDEN
// };

// console.log(courses);

// avoid using any as much as you can or rare
// let lessonsCount:number = 10; 


// let lessonsArray = [];

// console.log(lessonsCount);

//type aliases
// type CourseStatus = "draft" | "published" | "unpublished" | "archived";

// let courseStatus: CourseStatus = "draft";

// let newStatus: CourseStatus = "published";

// type Course = {
//     readonly title:string,
//     subtitle:string,
//     lessonsCount?:number
// };

// let course: Course = {
//     title: "TypeScript BOOM",
//     subtitle: "Learn and practice",
//     lessonsCount: 10
// };

// interfaces
// interface Course {
//     readonly title: string,
//     subtitle: string,
// };
// interface Course {
//     lessonsCount?: number
// }
// let course: Course = {
//     title: "TypeScript BOOM",
//     subtitle: "Learn and practice",
//     lessonsCount: 10
// };

// const input =
//     document.getElementById("input-field") as HTMLInputElement;
// input.value;

const courseName = "TypeScript BOOM"

debugger;

if (courseName) {
    const subtitle = "Learn that lesson"

    printCourseName(courseName);
};

function printCourseName(name:string) {
    debugger;

    console.log("The course name is " + name.toUpperCase());
    
};
