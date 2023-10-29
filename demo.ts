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

// const courseName = "TypeScript BOOM"

// debugger;

// if (courseName) {
//     const subtitle = "Learn that lesson"

//     printCourseName(courseName);
// };

// function printCourseName(name:string) {
//     debugger;

//     console.log("The course name is " + name.toUpperCase());

// };

// functions

// interface Course {
//   title: string;
//   subtitle: string;
//   lessonsCount: number;
// }

// type CreateCourse = (title: string, subtitle: string, lessonsCount: number) => Course;

// type OnCourseCreated = ( course: Course) => void;

// const createCourse = (title: string, subtitle: string, lessonsCount:number, callback: OnCourseCreated) => {
//     console.log(` Creating curse with Title: ${title}
//     Subtitle: ${subtitle} lesson count ${lessonsCount}`);

//     const course = {
//         title,
//         subtitle,
//         lessonsCount
//     };

//     callback(course);

//     return course;
// }

// tuples

// type CourseRecord = [string, string, number];

// const courseRecord: CourseRecord = ["TypescriptBOOM", "Learn it fast", 100];

// function createCourse(title: string, subtitle: string): CourseRecord {
//   console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);

//   return [title, subtitle, 100];
// }

// Type Narrowing and Predicates

// const course: unknown = {
//   title: "TypeScript BOOM",
//   subtitle: "Learn and practice",
//   lessonsCount: 10,
// };

// if (isCourse(course)) {
//   course.title;
// }

// function isCourse(value: unknown): value is Course {
//   const course = value as Course;

//   return course?.title != null && course?.subtitle != null;
// }

// never type

// let anyValue:any;

// let neverValue: never = undefinied;
// neverValue["property"] = 10;

// type CourseStatus = "draft" | "published" | "unpublished";

// let courseStatus : CourseStatus = "draft";

// if (courseStatus == "draft") {
  
// } else if (courseStatus == "published") {

// } else if (courseStatus == "unpublished") {

// } else {
//   unexpectedError(courseStatus);
// };

// function unexpectedError(value:never) {
//   throw new Error(`Unexpected vaue: ${value}`);
// }

//intersection type
interface HasId {
  id:string
}
interface HasTitle {
  title: string;
  description: string;
}

type Course = HasId & HasTitle;

const course: Course = {
  id: "ddg",
  title: "Mitko",
  description: "test test"
}