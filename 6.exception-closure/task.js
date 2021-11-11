function parseCount(numberOfitems) {
	let result = Number.parseInt(numberOfitems, 10);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
	return result;
}


function validateCount(numberOfitems) {
  try {
   parseCount(numberOfitems);
  } catch (error) {
    return error;
  }
  return parseCount(numberOfitems);
}


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
    let p = 0.5 * this.getPerimeter();
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
   return new Triangle(a, b, c);
  } catch (error) {
      let object = {};
      object.getPerimeter = function() {
        throw new Error('Ошибка! Треугольник не существует');
      }
      object.getArea = function() {
        throw new Error('Ошибка! Треугольник не существует');
      }
      return object;
    } 
}