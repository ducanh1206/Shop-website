import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayouts = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Page Loading....</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
