export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id: string | number;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  id: number | string;
  title: string;
  body: string;
};

export type socialType = {
  id: number | string;
  icon: string;
  path: string;
}