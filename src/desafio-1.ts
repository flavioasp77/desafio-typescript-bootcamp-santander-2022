interface IEmployee {
  code: number;
  name: string
}

const employee = {} as IEmployee;

employee.code = 10;
employee.name = 'Flávio';