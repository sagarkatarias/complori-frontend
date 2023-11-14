export interface Course {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly coachId: number;
  readonly members: Member[];
}

export interface Member {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly email: string;
  readonly name: string;
  readonly courses?: Course[];
}
