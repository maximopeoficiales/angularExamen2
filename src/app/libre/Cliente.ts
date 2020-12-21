class Address {
  street: string;
  suite: string;
  city: string;
  constructor(street: string, suite: string, city: string) {
    this.street = street;
    this.suite = suite;
    this.city = city;
  }
}
export class Cliente {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
  }
}
