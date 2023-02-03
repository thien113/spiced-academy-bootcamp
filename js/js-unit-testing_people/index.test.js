import {
  getFirstNames,
  getFullNames,
  getNameAndAge,
  getPeopleByAge,
  getPeopleNamesOlderThan,
  getPeopleByLastName,
  findPersonById,
  isAnyoneOlderThan,
  getFullNamesSortedByAge,
} from "./index.js";

const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

test("getFirstNames() returns an array with the first names", () => {
  const result = getFirstNames(people);
  expect(result).toEqual(["Jane", "John", "Max", "Erika", "Luke"]);
});

test('getFullNames() returns an array with full names as strings, e.g. "Jane Doe"', () => {
  const result = getFullNames(people);
  expect(result).toEqual([
    "Jane Doe",
    "John Doe",
    "Max Mustermann",
    "Erika Musterfrau",
    "Luke Skywalker",
  ]);
});

test('getNameAndAge() returns an array of formatted strings like this: "Skywalker (23)"', () => {
  const result = getNameAndAge(people);
  expect(result).toEqual([
    "Doe (21)",
    "Doe (18)",
    "Mustermann (32)",
    "Musterfrau (38)",
    "Skywalker (23)",
  ]);
});

test("getPeopleByAge() returns an array of people of a certain age", () => {
  const result = getPeopleByAge(people, 38);
  expect(result).toEqual({
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  });
});

test('getPeopleNamesOlderThan() returns an array of people full names older than a certain age, e.g. "Luke Skywalker"', () => {
  const result = getPeopleNamesOlderThan(people, 30);
  expect(result).toEqual(["Max Mustermann", "Erika Musterfrau"]);
});

test("getPeopleByLastName() returns an array of people of a certain lastName", () => {
  const result = getPeopleByLastName(people, "Mustermann");
  expect(result).toEqual({
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  });
});

// Hint: use Array.prototype.find for the implementation
test("getPersonById() returns the full object of a person", () => {
  const result = findPersonById(people, 1);
  expect(result).toEqual({
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  });
});

// Hint: implementation should use Array.prototype.some
test("isAnyoneOlderThan() returns true if any person is older than the given age", () => {
  const result = isAnyoneOlderThan(people, 20);
  expect(result).toBeTruthy();
});

test("isAnyoneOlderThan() returns false if no person is older than the given age", () => {
  const result = isAnyoneOlderThan(people, 40);
  expect(result).toBeFalsy();
});

test("getFullNamesSortedByAge() returns an array of last names sorted by age", () => {
  const result = getFullNamesSortedByAge(people);
  expect(result).toEqual([
    "John Doe",
    "Jane Doe",
    "Luke Skywalker",
    "Max Mustermann",
    "Erika Musterfrau",
  ]);
});
