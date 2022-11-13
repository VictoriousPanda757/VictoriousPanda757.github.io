export default interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  }
  location: {
    street: {
      number: number;
      name: string;
    }
    city: string;
    state: string;
    country: string;
    postcode: number;
  }
  email: string;
  dob: {
    date: string;
  }
  phone: string;
  cell: string;
  picture: {
    large: string;
  }
}