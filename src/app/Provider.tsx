import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        <Hero />
        {children}
    </div>
  )
}

export default Provider