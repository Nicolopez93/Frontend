import { Link , useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import imgLogo from "../../assets/logo.jpeg";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/usuario");

    const data = await response.json();
    console.log(response);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    setFormData({ email, password });

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Usuario logueado");
      setUser(user);
      setNotFound(false);
      login(user);
      navigate("/", {
        replace: true,
      });
    } else {
      console.log("Usuario no encontrado");
      setNotFound(true);
    }
    setFormData({ email: "", password: "" });
    e.target.reset();
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://teltonika-gps.com/cdn/extras/9080/car-sharing-rental-header-1920x1280.webp",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                CAR4ALL
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                Bienvenido a CAR4ALL, tu destino para experimentar la libertad de la carretera con estilo y comodidad incomparables. En CAR4ALL, nos dedicamos a ofrecer más que simples alquileres de autos; nos esforzamos por brindar experiencias inolvidables que complementen cada viaje con una dosis de lujo y emoción.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img src={imgLogo} alt="logo" className="rounded-xl" />
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Ingrese con su cuenta
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Colocar su Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Colocar su Contraseña
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Ingresar
                    </button>
                  </div>
                </form>
                <div className="flex items-center justify-around mt-6">
                <p className="text-sm text-center text-gray-400 ">
                  Si no tenes cuenta ingresa 
                </p>
                  <Link
                    // component={RouterLink}
                    color="inherit"
                    to="/register"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline "
                  >
                    <small> Crear una cuenta</small>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
