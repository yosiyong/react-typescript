/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number
let num: number = 0;

//string
let str: string = "A";

//array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "A"];

//any:使わない方がよい
let any1: any = false;

//void [: void]省略しても問題ない
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "A" };
