import validations from './validation';

describe('Form validations', () => {
  it('should validate required', () => {
    const invalidValue = '';
    const validValue = 'value'; 
    expect(validations.required(invalidValue)).toBe('required');
    expect(validations.required(validValue)).toBeUndefined();
  });

  it('should validate checked', () => {
    const invalidValue = false;
    const validValue = true; 
    expect(validations.checked(invalidValue)).toBe('unchecked');
    expect(validations.checked(validValue)).toBeUndefined();
  });

  it('should validate minLength', () => {
    const invalidValue = '123';
    const validValue = '1234'; 
    expect(validations.minLength(4)(invalidValue)).toBe('minLength');
    expect(validations.minLength(4)(validValue)).toBeUndefined();
  });

  it('should validate maxLength', () => {
    const invalidValue = '1234';
    const validValue = '123'; 
    expect(validations.maxLength(3)(invalidValue)).toBe('maxLength');
    expect(validations.maxLength(3)(validValue)).toBeUndefined();
  });

  it('should validate patterns', () => {
    const invalidValue = 1234;
    const validValue = 'value'; 
    expect(validations.pattern(/[A-Z]+/)(invalidValue)).toBe('pattern');
    expect(validations.pattern(/[A-Z]+/)(validValue)).toBeUndefined();
  });

  it('should validate minimum quantity', () => {
    const invalidValue = '5';
    const validValue = '10'; 
    expect(validations.min(10)(invalidValue)).toBe('minimum');
    expect(validations.min(10)(validValue)).toBeUndefined();
  });

  it('should validate maximum quantity', () => {
    const invalidValue = '10';
    const validValue = '5'; 
    expect(validations.max(5)(invalidValue)).toBe('maximum');
    expect(validations.max(5)(validValue)).toBeUndefined();
  });
});