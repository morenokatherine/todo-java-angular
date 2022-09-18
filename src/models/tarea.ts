export class Tarea {
  title: string;
  status: string;
  constructor(title: string) {
    this.title = title;
    this.status = "";
  }

  setTitle(title: string) {
    this.title = title;
  }

  setStatus(status: string) {
    this.status = status;
  }
}
