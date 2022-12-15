import { ParamError } from '../components/classes';
import ccax from '../index';

class Person {
  name: string = '';
}
class Employee extends Person {}
class User extends Person {}
class Manager extends Employee {}

// let person = new Person();
// let employee = new Employee();
// let user = new User();
// let manager = new Manager()

// if (person instanceof Person) console.log("person == Person")        //True
// if (person instanceof Employee) console.log("person == Employee")
// if (person instanceof User) console.log("person == User")
// if (person instanceof Manager) console.log("person == Manager")

// if (employee instanceof Person) console.log("employee == Person")       //True
// if (employee instanceof Employee) console.log("employee == Employee")    //True
// if (employee instanceof User) console.log("employee == User")
// if (employee instanceof Manager) console.log("employee == Manager")

// if (user instanceof Person) console.log("user == Person")            //True
// if (user instanceof Employee) console.log("user == Employee")
// if (user instanceof User) console.log("user == User")         //True
// if (user instanceof Manager) console.log("user == Manager")

// if (manager instanceof Person) console.log("manager == Person")      //True
// if (manager instanceof Employee) console.log("manager == Employee")   //True
// if (manager instanceof User) console.log("manager == User")
// if (manager instanceof Manager) console.log("manager == Manager")  //True

// //OUTPUT
// person == Person
// employee == Person
// employee == Employee
// user == Person
// user == User
// manager == Person
// manager == Employee
// manager == Manager

describe('Check Instance Of Class And Optional Instance Of Class Assertion Type', () => {
  /**
   * Instance Assertion Tests With ParamError Type
   */
  test('Instance (ParamError): undefined is not an instance of Object Assertion', () => {
    expect(() => {
      ccax.assertInstanceOf(undefined, 'source', Object, 'target');
    }).toThrow(ParamError);
  });

  /**
   * Instance Assertion Tests With Thrown Message
   */
  test('Instance (Message): undefined is not an instance of Object Assertion', () => {
    expect(() => {
      ccax.assertInstanceOf(undefined, 'source', Object, 'target');
    }).toThrow('Param source must be instance of target');
  });
});
