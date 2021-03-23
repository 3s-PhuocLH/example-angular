export class Todo {

  public _id : string;
  public name: string;
  public level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

}
