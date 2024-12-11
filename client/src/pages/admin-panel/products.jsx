import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";

const AdminProducts = () => {
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button>Add New Product</Button>

      </div>
      <div className="grid gap-4 md:grid-col-3 lg:grid-cols-4"></div>
    </Fragment>
  );
};

export default AdminProducts;
