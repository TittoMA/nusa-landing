import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

function ComparationSection() {
  return (
    <section
      id="comparation"
      className="px-[10%] py-16 bg-yellow-300 z-10 relative"
    >
      <h1 className="text-center text-yellow-900 text-4xl font-extrabold">
        Perbandingan dengan Produk Sejenis
      </h1>
      <hr className="w-40 mt-4 mx-auto border-4 border-yellow-100 rounded-lg" />

      <div className="mt-12 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-yellow-900"></th>
              <th
                scope="col"
                className="py-3 px-6 bg-yellow-900 text-lg text-white text-center"
              >
                UNO Stacko
              </th>
              <th
                scope="col"
                className="py-3 px-6 bg-yellow-900 text-lg text-white text-center"
              >
                Jenga
              </th>
              <th
                scope="col"
                className="py-3 px-6 bg-yellow-900 text-lg text-white text-center"
              >
                Nusa SMB
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-yellow-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Bahan dasar ramah lingkungan
              </th>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
            </tr>
            <tr className="border-b border-yellow-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Warna menarik untuk anak-anak
              </th>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
            </tr>
            <tr className="border-b border-yellow-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Untuk media pembelajaran
              </th>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
            </tr>
            <tr className="border-b border-yellow-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Terdapat kode QR yang terhubung dengan website
              </th>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
            </tr>
            <tr className="border-b border-yellow-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Terdapat gambar dan informasi tentang kebudayaan di Indonesia
              </th>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <XCircleIcon className="h-10 w-10 mx-auto text-red-500 block" />
              </td>
              <td className="py-4 px-6 bg-gray-50">
                <CheckCircleIcon className="h-10 w-10 mx-auto text-green-500 block" />
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-normal text-base text-white bg-yellow-900"
              >
                Harga
              </th>
              <td className="py-4 px-6 bg-gray-50 text-lg text-center text-black font-bold">
                Rp.85.000
              </td>
              <td className="py-4 px-6 bg-gray-50 text-lg text-center text-black font-bold">
                Rp.127.000
              </td>
              <td className="py-4 px-6 bg-gray-50 text-lg text-center text-black font-bold">
                Rp.75.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ComparationSection;
