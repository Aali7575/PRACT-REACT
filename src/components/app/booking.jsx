import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker'
import { useState } from 'react';

function Bookings() {
    const [date, setDate] = useState(null); 
    const [time, setTime] = useState(null);
  return (
    <div>
        <div className="h-[600px] bg-gray-100">
  <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
    <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
      <div className="px-4 py-5 sm:p-6">
        <p className="text-xl font-bold text-gray-900">Book for your slot</p>
        <p className="mt-3 text-sm font-medium text-gray-500">
        Choose a date and time that works for you.
         Our technicians will ensure your vehicle is properly maintained to keep it running smoothly.
        </p>
        <form action="#" method="POST" className="mt-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-900">
                {" "}
                 Full Name{" "}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="John Doe"
                  defaultValue=""
                  className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-900">
                {" "}
                 Vehicle's registration number{" "}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="AFZ2222"
                  defaultValue=""
                  className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email@example.com"
                  defaultValue=""
                  className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            
              <div className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
              <label>Date</label>
              <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
               />
               </div>
               <div className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
               <label>Time</label>
               <TimePicker
               selected={time} 
               onChange={(time) => setTime(time)}
               />
              </div>
              <div>
              <label htmlFor="" className="text-sm font-bold text-gray-900">
                {" "}
                Reason for booking{" "}
              </label>
              <div className="mt-2">
                <select className="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                <option></option>
                  <option>Diesel service</option>
                  <option>Petrol service</option>
                  <option>Suspension check</option>
                  <option>Cooling system check</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-5 space-x-4">
            <button
              type="reset"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Bookings