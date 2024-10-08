"use client";

import { useState } from "react";
import StoreCard from "../store-card";
import DefaultPagination from "../default-pagination";
import { Store } from "@/pages/homepage-screen";

interface StoresGridProps {
  stores: Store[];
}

const StoresGrid = ({ stores }: StoresGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const TOTAL_PAGES = 4;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex-1 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      <DefaultPagination
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default StoresGrid;
