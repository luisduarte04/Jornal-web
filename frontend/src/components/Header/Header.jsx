import logo from "../../images/logo.png";

export default function Header() {
  return (
    <nav className="flex justify-between items-center max-w-full p-4 bg-white shadow-md">
      <div className="relative flex items-center w-52">
        <i className="bi bi-search absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"></i>
        <input type="text" placeholder="Pesquise por um título"  className="w-full p-2 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <img src={logo} alt="Logo do Breaking News" className="w-32 h-14 object-cover cursor-pointer"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600 uppercase font-medium tracking-wide">
        Entrar
      </button>
    </nav>
  );
}

