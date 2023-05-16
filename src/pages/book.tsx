import type { ReactElement } from "react";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";

const Book: NextPageWithLayout = () => {
  return (
    <div>
      <h1>BookPage</h1>
    </div>
  );
};

Book.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Book;
