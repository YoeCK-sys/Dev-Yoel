export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1C1C1C] text-white">
      <section className="container mx-auto py-20 px-4 md:px-8 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hola, soy Yoel</h1>
            <p className="text-lg text-gray-400">
              Desarrollador web y móvil con experiencia en proyectos de gran escala y una pasión por la innovación.
            </p>
            <div className="flex items-center space-x-4">
              <a
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00C2FF] text-black font-medium hover:bg-[#00A8E0] transition-colors"
                href="#"
              >
                Contáctame
              </a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#">
                Ver portafolio
              </a>
            </div>
          </div>
          <div className="relative">
            <img alt="Yoel" className="w-full h-auto rounded-3xl shadow-lg" src="/placeholder.svg" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C2FF]/50 to-[#7B61FF]/50 rounded-3xl blur-[100px] z-[-1]" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Proyectos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-[#1C1C1C] rounded-3xl overflow-hidden">
            <img alt="Proyecto 1" className="w-full h-auto" src="/placeholder.svg" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C2FF]/50 to-[#7B61FF]/50 rounded-3xl blur-[100px] z-[-1]" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#1C1C1C] to-transparent">
              <h3 className="text-2xl font-bold">Proyecto 1</h3>
              <p className="text-gray-400">Descripción corta del proyecto 1</p>
            </div>
          </div>
          <div className="relative bg-[#1C1C1C] rounded-3xl overflow-hidden">
            <img alt="Proyecto 2" className="w-full h-auto" src="/placeholder.svg" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C2FF]/50 to-[#7B61FF]/50 rounded-3xl blur-[100px] z-[-1]" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#1C1C1C] to-transparent">
              <h3 className="text-2xl font-bold">Proyecto 2</h3>
              <p className="text-gray-400">Descripción corta del proyecto 2</p>
            </div>
          </div>
          <div className="relative bg-[#1C1C1C] rounded-3xl overflow-hidden">
            <img alt="Proyecto 3" className="w-full h-auto" src="/placeholder.svg" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C2FF]/50 to-[#7B61FF]/50 rounded-3xl blur-[100px] z-[-1]" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#1C1C1C] to-transparent">
              <h3 className="text-2xl font-bold">Proyecto 3</h3>
              <p className="text-gray-400">Descripción corta del proyecto 3</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experiencia y habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1C1C1C] rounded-3xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#00C2FF] rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Experiencia</h3>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>3+ años en desarrollo web y móvil</li>
              <li>Proyectos de gran escala para empresas líderes</li>
              <li>Experiencia en metodologías ágiles</li>
            </ul>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#7B61FF] rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Habilidades</h3>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>JavaScript, React, Vue.js, Angular</li>
              <li>Node.js, Express, MongoDB, MySQL</li>
              <li>Flutter, Swift, Kotlin</li>
            </ul>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#00C2FF] rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Cómo empecé</h3>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>Empecé haciendo software de optimización de Windows</li>
              <li>Luego me dediqué a hacer Cheats de juegos</li>
              <li>Finalmente, me enfoqué en el desarrollo web</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1C1C1C] rounded-3xl p-6">
          <form action="/api/contact" method="post" className="space-y-4">
              <div>
                <label className="block text-gray-400 font-medium mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="bg-[#2C2C2C] rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-[#2C2C2C] rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
                  id="email"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-medium mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="bg-[#2C2C2C] rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
                  id="message"
                  rows={4}
                />
              </div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00C2FF] text-black font-medium hover:bg-[#00A8E0] transition-colors"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl p-6 flex flex-col items-center justify-center space-y-4">
            <h3 className="text-2xl font-bold">Sígueme en</h3>
            <div className="flex items-center space-x-4">
              <a className="text-[#00C2FF] hover:text-white transition-colors" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm6.5 8.511c-.026.187-.308 2.213-1 4.13-.678 1.84-1.368 3.672-2.482 3.672-.796 0-1.065-.581-1.993-.581-1.037 0-1.354.581-2.01.581-.114 0-.228-.005-.342-.015-1.126-.05-1.978-1.185-2.63-2.352-1.487-2.55-1.647-5.038-1.647-5.154.001-.027.004-.054.011-.08.194-.679.663-1.08 1.263-1.08.02 0 .039.001.059.002.51.02.865.189 1.01.5.168.36.313 1.01.313 1.01s-.351-1.951 1.587-1.951c.854 0 1.504.884 1.504.884s.654-.884 1.504-.884c1.938 0 1.587 1.951 1.587 1.951s.145-.65.313-1.01c.145-.311.5-.48 1.01-.5.02-.001.039-.002.059-.002.6 0 1.069.401 1.263 1.08.007.026.01.053.011.08 0 .116-.16 2.604-1.647 5.154z" />
                </svg>
              </a>
              <a className="text-[#7B61FF] hover:text-white transition-colors" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
