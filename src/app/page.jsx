import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className="flex items-center flex-col mx-auto justify-center pt-16 px-8">
      <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 shadow-xl shadow-white/5 hover:scale-105 transition-all ease-in-out duration-300">
        <img className="aspect-square h-full w-full" src="/logo.png" alt="Logo de la Universidad Nacional Del Oeste" />
      </span>

      <section className='flex flex-col items-center justify-center'>
        <h1 className='font-bold mt-8 mb-2 text-2xl text-center'>
          Links de Informática - UNO
        </h1>
        <p className='mx-auto max-w-xl px-4 text-base font-semibold  md:text-pretty text-center'>
          Acá vas a encontrar los grupos de whatsapp, telegram, un servidor de discord con material de estudio y demás cosas útiles.
        </p>
      </section>

      
    </main>
  )
}
