export class Person {
  id: number;
  name: string;
  active: boolean;
}

export class Category {
  id: number;
  name: string;
  subcategory: boolean;
  active: boolean;
  person = new Person();
}
