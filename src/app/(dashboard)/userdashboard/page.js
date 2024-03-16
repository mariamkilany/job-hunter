"use client";
import Image from "next/image";
import React from "react";
import Chart from "@/components/Dashboard/Chart";
import Chart2 from "@/components/Dashboard/Chart2";

const UserHome = () => {
  return (
    <>
      <div className="flex overflow-hidden bg-white">
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto "
        >
          <main>
            <div className="px-4 pt-6">
              <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 2xl:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        $45,385
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        Sales this week
                      </h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 text-base font-bold text-green-500">
                      12.5%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div id="main-chart">
                    <Chart2></Chart2>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        Latest Transactions
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        This is a list of latest transactions
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="#"
                        className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  Transaction
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  Date &amp; Time
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr>
                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                                  Payment from
                                  <span className="font-semibold">
                                    Bonnie Green
                                  </span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 23 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $2300
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                                  Payment refund to
                                  <span className="font-semibold">#00910</span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 23 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  -$670
                                </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                                  Payment failed from
                                  <span className="font-semibold">#087651</span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 18 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $234
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                                  Payment from
                                  <span className="font-semibold">
                                    Lana Byrd
                                  </span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 15 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $5000
                                </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                                  Payment from
                                  <span className="font-semibold">
                                    Jese Leos
                                  </span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 15 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $2300
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                                  Payment from
                                  <span className="font-semibold">
                                    THEMESBERG LLC
                                  </span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 11 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $560
                                </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                                  Payment from
                                  <span className="font-semibold">
                                    Lana Lysle
                                  </span>
                                </td>
                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                  Apr 6 ,2021
                                </td>
                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                  $1437
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        2,340
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        New products this week
                      </h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                      14.6%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        5,355
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        Visitors this week
                      </h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                      32.9%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        385
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        User signups this week
                      </h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-red-500">
                      -2.7%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 my-4 2xl:grid-cols-2 xl:gap-4">
                <div className="h-full p-4 mb-4 bg-white rounded-lg shadow sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900">
                      Latest Customers
                    </h3>
                    <a
                      href="#"
                      className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                    >
                      View all
                    </a>
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="17727a767e7b57607e7973646372653974787a"
                              >
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            $320
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Bonnie Green
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                              >
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            $3467
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Michael Gough
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="57323a363e3b17203e3933242332257934383a"
                              >
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            $67
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Thomes Lean
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                              >
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            $2367
                          </div>
                        </div>
                      </li>
                      <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              Lana Byrd
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                              >
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            $367
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <h3 className="mb-10 text-xl font-bold leading-none text-gray-900">
                    Acquisition Overview
                  </h3>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap">
                            Top Channels
                          </th>
                          <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap">
                            Users
                          </th>
                          <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap min-w-140-px" />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="text-gray-500">
                          <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Organic Search
                          </th>
                          <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            5,649
                          </td>
                          <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                30%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 rounded-sm bg-cyan-600"
                                    style={{ width: "30%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-gray-500">
                          <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Referral
                          </th>
                          <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            4,025
                          </td>
                          <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                24%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 bg-orange-300 rounded-sm"
                                    style={{ width: "24%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-gray-500">
                          <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Direct
                          </th>
                          <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            3,105
                          </td>
                          <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                18%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 bg-teal-400 rounded-sm"
                                    style={{ width: "18%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-gray-500">
                          <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Social
                          </th>
                          <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            1251
                          </td>
                          <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                12%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 bg-pink-600 rounded-sm"
                                    style={{ width: "12%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-gray-500">
                          <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Other
                          </th>
                          <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            734
                          </td>
                          <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                9%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 bg-indigo-600 rounded-sm"
                                    style={{ width: "9%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-gray-500">
                          <th className="p-4 pb-0 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                            Email
                          </th>
                          <td className="p-4 pb-0 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                            456
                          </td>
                          <td className="p-4 pb-0 text-xs align-middle border-t-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                7%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    className="h-2 bg-purple-500 rounded-sm"
                                    style={{ width: "7%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserHome;
