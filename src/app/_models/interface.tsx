export interface Climb {
  climb: string;
  grade: string;
}

export interface Grades {
  [number: number]: string;
}

export interface Names {
  name: string;
  display_difficulty: number;
  uuid: string;
}
