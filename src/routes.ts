import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJs",
    educator: "Dani",
  });

  CreateCourseService.execute({
    name: "NodeJs",
    educator: "Maria",
    duration: 45
  });
}
