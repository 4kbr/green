export const formatDecimalToPercent = (decimal: number) => {
  return decimal.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
};
// interface Number {
//   toPercent(): string;
// }
// Number.prototype.toPercent = function () {
//   return (
//     this?.toLocaleString("en-US", {
//       style: "percent",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }) + "%"
//   );
// };
