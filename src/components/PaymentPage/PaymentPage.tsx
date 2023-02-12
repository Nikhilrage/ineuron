import React, { useEffect, useState, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "../../Schema/Schemas";
//Local imports
import { PathNames } from "../../routes/PathNames";
import Sidebar from "../../atoms/Sidebar/Sidebar";

type FormSchemaType = z.infer<typeof formSchema>;

const PaymentPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const [blockedSeats, setBlockedSeats] = useState<string[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>();

  useEffect(() => {
    if (location.state) {
      setBlockedSeats([...location.state.blockedSeats]);
      setFinalPrice(location.state.price);
    }
  }, [location]);

  const paymentHandler: SubmitHandler<FormSchemaType> = (data) => {
    reset();
    alert("Hurray!, Seats are blocked. Payment Successfull");
    navigate(PathNames.MOVIES);
  };

  return (
    <>
      <Sidebar title="Payment" />
      <div className="w-full">
        <div className="main_content ">
          <div className="layout m-9 p-5">
            <div className="text-slate-400 underline mb-2 ml-3 text-2xl">
              Payment
            </div>
            <div className="bg-[#fff]  p-5 rounded-xl flex flex-row justify-between">
              <form
                className="basis-[50%]"
                onSubmit={handleSubmit(paymentHandler)}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="block w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="block text-xs text-red-400 pl-3">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    placeholder="xxxx @gmail.com"
                    className=" w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("email")}
                  />
                  {errors.email && (
                    <label className="block text-xs text-red-400 pl-3">
                      {errors.email.message}
                    </label>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    type="number"
                    placeholder="+91 Number"
                    className="block w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("number")}
                  />
                  {errors.number && (
                    <p className="block text-xs text-red-400 pl-3">
                      {errors.number.message}
                    </p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    type="number"
                    placeholder="Debit/Card number"
                    className="block w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("card")}
                  />
                  {errors.card && (
                    <p className="block text-xs text-red-400 pl-3">
                      {errors.card.message}
                    </p>
                  )}
                </div>
                <div className="flex pt-3">
                  <div>
                    <input
                      type="number"
                      placeholder="CVV"
                      className="block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("cvv")}
                    />
                    {errors.cvv && (
                      <p className="block text-xs text-red-400 pl-3">
                        {errors.cvv.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="0897"
                      className="block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("validThru")}
                    />
                    {errors.validThru && (
                      <p className="block text-xs text-red-400 pl-3">
                        {errors.validThru.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="pt-3 pr-11 mr-11">
                  <button
                    type="submit"
                    className="float-right text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Pay Now
                  </button>
                </div>
              </form>
              <div className="px-8 text-[#000] basis-[50%] text-gray-400 border-l border-slate-300">
                <p className="pb-3 ">
                  Seats:{" "}
                  <span className="ml-3">
                    {blockedSeats?.toString().split(",").join()}
                  </span>
                </p>
                <p className="pb-3 ">
                  Total: <span className="ml-3">{finalPrice}/-</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
