import {fizzbuzz} from "../components/Functions";
test("should return 1 for the number 1", function () {
    expect(fizzbuzz(1)).toEqual(1);
});
test("should return 37 for the number 37", function () {
    expect(fizzbuzz(37)).toEqual(37);
});
test("should return 'Fizz' for the number 6", function () {
    expect(fizzbuzz(6)).toEqual('Fizz');
});
test('should return "Fizz" for the number 9', () => {
    expect(fizzbuzz(9)).toEqual('Fizz');
  });
  
  test('Should return "Buzz" for the number 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
  
  test('Should return "Buzz" for the number 10', () => {
    expect(fizzbuzz(10)).toEqual('Buzz');
  });
  
  test('Should return "FizzBuzz" for the number 15', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });
  
  test('Should return "FizzBuzz" for the number 30', () => {
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
  });
