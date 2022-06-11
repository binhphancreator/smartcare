import React from "react";
import FormDashboard from "../components/FormDashboard"
import DefaultLayout from "../layouts/DefaultLayout"
export default function Dashboard() {
  return (
    <div>
      <DefaultLayout>
        <FormDashboard />
      </DefaultLayout>

    </div>
  );
}
