export class Movie {
    id = 0;
    name = 'Krishna';
    addresses: Address[];
  }
  
  export class Address {
    street = '';
    city   = '';
    location  = '';
    zip    = '';
  }
  
  // export const heroes: Hero[] = [
  //   {
  //     id: 1,
  //     name: 'Whirlwind',
  //     addresses: [
  //       {street: '123 Main',  city: 'Anywhere', location: 'CA',  zip: '94801'},
  //       {street: '456 Maple', city: 'Somewhere', location: 'VA', zip: '23226'},
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Bombastic',
  //     addresses: [
  //       {street: '789 Elm',  city: 'Smallville', location: 'OH',  zip: '04501'},
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'Magneta',
  //     addresses: [ ]
  //   },
  // ];
  
  export const locations = ['Arundalpet', 'Brodipet', 'VidyaNagar', 'Gardens'];