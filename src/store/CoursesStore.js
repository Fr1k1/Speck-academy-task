import { observable, action, computed, makeObservable } from "mobx";

class CoursesStore {
  mobxCourses = [];

  constructor() {
    makeObservable(this, {
      mobxCourses: observable,
      setCourses: action,
      setCourse: action,
      coursesLength: computed,
    });
  }

  setCourses = (mobxCourses) => {
    this.mobxCourses = mobxCourses;
  };

  setCourse = (course) => {
    this.mobxCourses.push(course);
  };

  get coursesLength() {
    return this.mobxCourses.length;
  }
}

const coursesStore = new CoursesStore();
export default coursesStore;
