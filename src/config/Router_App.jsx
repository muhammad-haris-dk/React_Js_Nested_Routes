import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dasboard } from "../pages/Dasboard";
import Order_List from "../pages/Order_List";
import Order_Detail from "../pages/Order_Detail";
import Cutomer from "../pages/Cutomer";
import Analytics from "../pages/Analytics";
import Reviews from "../pages/Reviews";
import Foods from "../pages/Foods";
import Food_Details from "../pages/Food_Details";
import Calender from "../pages/Calender";
import Chat from "../pages/Chat";
import Wallet from "../pages/Wallet";
import Layout from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<Dasboard />} />
      <Route path="dashboard">
        <Route path="order-list" element={<Order_List />} />
        <Route path="order-detail" element={<Order_Detail />} />
        <Route path="customer" element={<Cutomer />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="food" element={<Foods />} />
        <Route path="food-detail" element={<Food_Details />} />
        <Route path="calender" element={<Calender />} />
        <Route path="chat" element={<Chat />} />
        <Route path="wallet" element={<Wallet />} />
      </Route>
    </Route>
  )
);

export function Router_App() {
  return <RouterProvider router={router} />;
}
