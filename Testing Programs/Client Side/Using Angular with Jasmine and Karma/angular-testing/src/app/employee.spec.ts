import { Employee } from './employee';

describe('Employee', () => {
  it('model class property testing....', () => {
    let emp = new Employee(1,"Raj",21);
    expect(emp).toBeTruthy();
    expect(emp.id).toEqual(1);
    expect(emp.name).toEqual("Raj");
    expect(emp.age).toEqual(21);
    
  });
});
