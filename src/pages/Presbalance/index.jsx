import React, { useState, useEffect } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { useGet, useGetUser,useGetById } from "utils/functions";
import { useRecoilState } from "recoil";
import { User } from "utils/recoil/atoms";

const PresbalancePage = () => {
  const [history, setHistory] = useState([]);
  const Get = useGet();
  const GetUser = useGetUser();
  const [user] = useRecoilState(User);
  const getById = useGetById();

  const [totalPrice, setTotalePrice] = useState(0);
  const billingHistoryData = [
    {
      date: "Jan 2022",
      status: "Paid",
      amount: "USD $30",
      description: "Description 1",
    },
    {
      date: "Feb 2022",
      status: "Paid",
      amount: "USD $30",
      description: "Description 2",
    },
  ];
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await GetUser(user);
        const data = await Get("Transcations", { owner: response.user._id });
        let x = 0;
        for (let i = 0; i < data.length; i++) {
          x += data[i].amount;
        }
        setTotalePrice(x);

        setHistory(data);
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <>
      <div className="flex m-auto w-full">
        <div className="flex m-auto w-full justify-center w-[100%]">
          <div className="bg-white-A700 w-[100%] pl-[5%]   border-solid flex flex-col items-start justify-end m-0 p-2 py-5 z-[1]">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-2 items-center justify-between w-full">
                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-8 h-[182px] md:h-auto items-start justify-center pb-[3px] pt-6 sm:px-5 px-6 rounded-md w-[100%]">
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="text-blue_gray-500 text-sm w-full"
                      size="txtInterRegular14Bluegray500"
                    >
                      <>Today&#39;s Revenue</>
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-red-300 tracking-[-0.80px] w-full"
                      size="txtInterSemiBold30"
                    >
                      ${totalPrice}
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-[30px] leading-[normal] rounded-md text-[11px] text-center w-[131px]"
                    color="red_300"
                    size="sm"
                    variant="fill"
                  >
                    Withdraw Balance
                  </Button>
                </div>
              </div>
              <Text
                className="mt-[39px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_02 tracking-[-0.80px]"
                size="txtInterSemiBold30Bluegray90002"
              >
                Wallet
              </Text>
              <Text
                className="mt-[35px] text-blue_gray-900_02 text-xl tracking-[-0.80px]"
                size="txtInterSemiBold20Bluegray90002"
              >
                Billing and invoicing
              </Text>
              <Text
                className="mt-[3px] text-blue_gray-500 text-sm"
                size="txtInterRegular14Bluegray500"
              >
                Pick an account plan that fits your workflow.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start pt-[23px]  px-[23px] w-full">
              <table className="table-fixed items-center w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <br></br>
                <br></br>
                <tbody>
                  {history.length > 0 ? (
                    history.map((entry, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          {new Date(entry?.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>
                        <td className="text-center">{entry?.status}</td>
                        <td className="text-center">{entry?.amount}</td>
                        <td className="text-center">
                          {entry?.client.email.primary}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No history available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresbalancePage;
