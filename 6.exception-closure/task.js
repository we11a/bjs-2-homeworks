function parseCount(numberOfitems) {
	if (isNaN(Number.parseInt(numberOfitems, 10))) {
    throw new Error('Невалидное значение');
  }
	return (Number.parseInt(numberOfitems));
}

function validateCount(numberOfitems) {
  let result = parseCount(numberOfitems);
  try {
   result;
  } catch (Error) {
    return Error;
  }
  return result;
}

validateCount('7');

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c
  }

  getArea() {
    let p = 0.5 * triangle.getPerimeter();
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
   return new Triangle(a, b, c);
  } catch (Error) {
    let object = () => {
      object.getPerimeter();
      object.getArea();
      throw new Error('Ошибка! Треугольник не существует');
    }
    return Error;
  }
}