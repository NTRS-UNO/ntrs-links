export function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer className='flex flex-col items-center justify-center py-3.5 my-16 mx-auto w-full max-w-[20rem] font-semibold text-gray-300 text-center text-lg border border-white/10 bg-white/5 shadow-xl shadow-white/5 rounded-xl'>
        <div className='flex items-center justify-center space-x-6'>
          <span>{`${year}`}</span>
          <span>|</span>
          <section>
            <span>Hecho por</span>{' '}
            <span className='hover:underline hover:text-blue-500'>
              <a
                href='https://discord.gg/ew9qemBD6g'
                target='_blank'
                rel='noopener noreferrer'
              >
                NTRS 
              </a>
            </span>
          </section>
        </div>
      </footer>
    )
  }