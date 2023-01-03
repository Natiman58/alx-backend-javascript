export default function groceriesList() {
  const gg = [
    { key: 'Apples', value: 10 },
    { key: 'Tomatoes', value: 10 },
    { key: 'Pasta', value: 1 },
    { key: 'Rice', value: 1 },
    { key: 'Banana', value: 5 },
  ];

  const mapped = new Map(gg.map((obj) => [obj.key, obj.value]));
  return mapped;
}
