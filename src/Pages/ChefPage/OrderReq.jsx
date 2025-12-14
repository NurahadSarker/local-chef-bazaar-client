import React from 'react';

const OrderReq = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5 bg-base-100 rounded-2xl shadow-md">
      <h2 className="text-[32px] font-bold mb-6">Order Requests</h2>

      <div className="overflow-x-auto bg-base-200 rounded-xl">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-base-300 text-gray-700">
            <tr>
              <th>Meal</th>
              <th>Customer</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Pending Order */}
            <tr>
              <td>Chicken Biriyani</td>
              <td>Rahim</td>
              <td>2</td>
              <td>Tk. 500</td>
              <td>40 mins</td>
              <td>
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-sm bg-red-500 text-white">
                  Cancel
                </button>
                <button className="btn btn-sm bg-green-600 text-white">
                  Accept
                </button>
                <button className="btn btn-sm btn-disabled">
                  Deliver
                </button>
              </td>
            </tr>

            {/* Accepted Order */}
            <tr>
              <td>Beef Tehari</td>
              <td>Karim</td>
              <td>1</td>
              <td>Tk. 280</td>
              <td>35 mins</td>
              <td>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                  Accepted
                </span>
              </td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-sm btn-disabled">
                  Cancel
                </button>
                <button className="btn btn-sm btn-disabled">
                  Accept
                </button>
                <button className="btn btn-sm bg-blue-600 text-white">
                  Deliver
                </button>
              </td>
            </tr>

            {/* Delivered Order */}
            <tr>
              <td>Fish Curry</td>
              <td>Jamal</td>
              <td>1</td>
              <td>Tk. 220</td>
              <td>30 mins</td>
              <td>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                  Delivered
                </span>
              </td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-sm btn-disabled">
                  Cancel
                </button>
                <button className="btn btn-sm btn-disabled">
                  Accept
                </button>
                <button className="btn btn-sm btn-disabled">
                  Deliver
                </button>
              </td>
            </tr>

            {/* Cancelled Order */}
            <tr>
              <td>Vegetable Khichuri</td>
              <td>Hasan</td>
              <td>1</td>
              <td>Tk. 180</td>
              <td>25 mins</td>
              <td>
                <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
                  Cancelled
                </span>
              </td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-sm btn-disabled">
                  Cancel
                </button>
                <button className="btn btn-sm btn-disabled">
                  Accept
                </button>
                <button className="btn btn-sm btn-disabled">
                  Deliver
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default OrderReq;