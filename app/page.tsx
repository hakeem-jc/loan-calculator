"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./components/Input";

type FormData = {
  loanAmount: string;
  interestRate: string;
  lengthOfLoan: string;
  paymentsPerYear: string;
  calculatedLoanPayment: string;
  totalNumberOfPayments: string;
  amountPaid: string;
  totalInterestPaid: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-[#181818] text-white">
      <nav className="bg-white dark:bg-[#181818] w-full border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lone
            </span>
          </a>
        </div>
      </nav>

      <form className="max-w-xl flex flex-col mx-auto" onSubmit={calculate}>
        <h2 className="text-xl pt-6">Basic Loan Information</h2>
        <div className="  ">
          <Input
            id="loanAmount"
            label="Loan Amount ($)"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.loanAmount?.message}
            placeholder="1,000,000"
            validationRules={{ required: "Loan Amount is required" }}
          />

          <Input
            id="interestRate"
            label="Interest Rate (%)"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.interestRate?.message}
            placeholder="8.45"
            validationRules={{ required: "Interest Rate is required" }}
          />

          <Input
            id="lengthOfLoan"
            label="Length of Loan in Years"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.calculatedLoanPayment?.message}
            placeholder="60"
            validationRules={{
              required: "Length of Loan is required",
            }}
          />

          <Input
            id="paymentsPerYear"
            label="Payments Per Year"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.paymentsPerYear?.message}
            placeholder="12"
            validationRules={{ required: "Payments Per Year is required" }}
          />

          <div className="text-center">
            <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-400">
              Calculate
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl">Payment Information</h2>

          <Input
            id="calculatedLoanPayment"
            label="Calculated Loan Payment"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.calculatedLoanPayment?.message}
          />

          <Input
            id="totalNumberOfPayments"
            label="Total Number of Payments"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.totalNumberOfPayments?.message}
          />

          <Input
            id="amountPaid"
            label="Amount Paid ($)"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.totalNumberOfPayments?.message}
          />

          <Input
            id="totalInterestPaid"
            label="Total Interest Paid ($)"
            type="text"
            // @ts-ignore
            register={register}
            error={errors.totalInterestPaid?.message}
          />
        </div>
      </form>
    </main>
  );
}
