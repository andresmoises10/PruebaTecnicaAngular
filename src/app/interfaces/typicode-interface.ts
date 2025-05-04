//En esta interfaz se define el objeto que se obtiene de la API de Typicode
// Su objetivo es definir la estructura de los datos que se obtienen de la API y que se utilizan en el componente ya que para el componente se necesita un objeto con solo los datos de nombre, email y ciudad

export interface TypicodeInterface {
    name: string;
    email: string;
    city: string;
}