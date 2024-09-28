import "../assets/scss/main.scss";

const div1 = document.querySelector("#app") as HTMLDivElement | null;
// const num: number = 777;
// const text: string = "Счастливый день";

// type TypeUser = {
//   name: string;
//   surname: string;
//   age: number;
//   married: boolean;
// };

// let user: TypeUser;

// user = {
//   name: "dver",
//   surname: "dfbdrbf",
//   age: 30,
//   married: false,
// };

// let n: string = "vsdvv";

// console.log({ n });

const arr: (string | number)[] = [];

div1!.innerText = String(arr);

const newArr: (string | number)[] = arr.map((num) => {
  return typeof num == "number" ? num - 100 : num;
});

const filtArr: (number | null)[] = newArr.filter((item) => {
  return typeof item == "number";
}) as Array<null | number>;

const wdewed: (null | number)[] = filtArr.map((item)=>{
  return item! + 1000
})

div1!.innerText = String(wdewed);
