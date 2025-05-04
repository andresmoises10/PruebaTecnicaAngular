// Con este archivo se mapean los datos de la API a la interfaz TypicodeInterface para que la tabla pueda mostrar los datos correctamente. Se utiliza la función map para recorrer el array de usuarios y devolver un nuevo array con los datos que se necesitan para la tabla. En este caso, se devuelve un objeto con las propiedades name, email y city, que son las que se utilizan en la tabla. De esta forma, se evita tener que modificar el componente para adaptarlo a la estructura de los datos de la API.

import { TypicodeInterface } from '../interfaces/typicode-interface';

export function TypicodeMapper(response: any[]): TypicodeInterface[] {
  return response.map(user => ({
    name: user.name,
    email: user.email,
    city: user.address.city,
  }));
}
