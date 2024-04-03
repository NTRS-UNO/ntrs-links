import React from 'react'
import { LINKS } from '../data/data'
import { LinksCard } from '@/components/LinksCard'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center flex-col mx-auto justify-center pt-16 px-8">
      <span className="size-28 shadow-xl shadow-white/10 hover:scale-105 transition-all ease-in-out duration-300 rounded-full">
        <img className="aspect-square h-full w-full" src="/logo.png" alt="Logo de la Universidad Nacional Del Oeste" />
      </span>

      <section className='flex flex-col items-center justify-center'>
        <h1 className='font-bold mt-8 mb-2 text-2xl text-center'>
          Links de Informática - UNO
        </h1>
        <p className='mx-auto max-w-xl px-4 text-base font-semibold text-gray-300  md:text-pretty text-center mb-12'>
          Acá vas a encontrar los grupos de whatsapp, telegram, un servidor de discord con material de estudio y demás cosas útiles.
        </p>
      </section>


      <h2 className='font-semibold my-4 text-lg text-center'>
        Grupos generales de las carreras de informática
      </h2>
      {LINKS.general.map((link) => (
        <LinksCard key={link.url} {...link} />
      ))}

      <h2 className='font-semibold my-4 text-lg text-center'>
        Grupos de las materias
      </h2>
      {LINKS.materias.map((link) => (
        <LinksCard key={link.url} {...link} />
      ))}


      <h2 className='font-semibold my-4 text-lg text-center'>
        Bolsa de trabajo
      </h2>
      {LINKS.trabajo.map((link) => (
        <LinksCard key={link.url} {...link} />
      ))}


      <h2 className='font-semibold my-4 text-lg text-center'>
        Discord con material de estudio (parciales, apuntes, etc), <br></br>chats de texto/voz y demás cosas
      </h2>
      {LINKS.discord.map((link) => (
        <LinksCard key={link.url} {...link} />
      ))}


      <h2 className='font-semibold my-4 text-lg text-center'>
        Canales de YouTube con tutorías/clases grabadas
      </h2>
      {LINKS.youtube.map((link) => (
        <LinksCard key={link.url} {...link} />
      ))}

      <Link href='https://www.youtube.com/watch?v=ItUEXtLLfas'>
        <h2 className='font-semibold my-12 text-xl text-center'>
          Video: Cómo usar Google Sheets para seguir el progreso de mi carrera universitaria 📊🎓
        </h2>
      </Link>

      
        <h2 className='font-semibold my-12 text-xl text-center'>
        Email departamento de alumnos: <Link href='mailto:escueladeinformatica@uno.edu.ar' className='bg-white/15 px-2 rounded-xl py-1 hover:underline hover:text-blue-500'>escueladeinformatica@uno.edu.ar</Link>
        </h2>



      <Footer/>
    </main>
  )
}
