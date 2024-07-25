"use client";
import { useState } from "react";
export const texts = [
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores, ipsam ratione explicabo possimus ea doloribus cumque in recusandae culpa officia voluptates dolores sunt animi quisquam, quam nemo earum optio.`,
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);

  const onchangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = parseInt(count.toString());
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 10) {
      amount = 10;
    }
    setText(texts.slice(0, amount));
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center mt-10"
    >
      <div className="flex gap-2">
        <input
          className="border border-black p-2 rounded-xl"
          onChange={onchangeEvent}
          type="number"
          value={count}
          id="amount"
        />
        <button type="submit" className="bg-purple-900 text-white p-2 rounded-xl">
          Generate
        </button>
      </div>
      <div className="w-[500px] flex flex-col bg-gray-300 gap-10 p-4 rounded mt-4">
        {text.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
