function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <img src="/foto.jpg" alt="Perfil" className="w-32 rounded-full" />
      <h1 className="text-3xl font-bold mt-4">Juan Pablo Cordero Romero</h1>
      <p className="text-gray-700">Desarrollador .NET Core y PHP Laravel</p>
      <h2 className="text-xl font-semibold mt-6">Proyectos</h2>
      <ul className="list-disc ml-6">
        <li><a href="https://github.com/usuario/proyecto1" className="text-blue-600">Proyecto 1</a></li>
        <li><a href="https://github.com/usuario/proyecto2" className="text-blue-600">Proyecto 2</a></li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Contacto</h2>
      <p>Email: jpablo.cordero.r@gmail.com</p>
    </div>
  );
}

export default App;
