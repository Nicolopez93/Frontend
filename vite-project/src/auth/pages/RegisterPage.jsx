import { Link , useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import imgLogo from "../../assets/logo.jpeg";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    usuarioRol: "ROLE_USER", // Agregar el rol de usuario al objeto formData
  });

  const { login } = useContext(AuthContext);

  const postUser = async (user) => {
    const response = await fetch("http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    login(data);
    navigate("/", { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.nombre === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Todos los campos son requeridos");
      return;
    }
    postUser(formData);
    setFormData({
      nombre: "",
      email: "",
      password: "",
      usuarioRol: "ROLE_USER",
    }); // Reiniciar formData incluyendo usuarioRol
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
                  Bienvenido a CAR4ALL, tu destino para experimentar la libertad
                  de la carretera con estilo y comodidad incomparables. En
                  CAR4ALL, nos dedicamos a ofrecer más que simples alquileres de
                  autos; nos esforzamos por brindar experiencias inolvidables
                  que complementen cada viaje con una dosis de lujo y emoción.
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
                  Crear una Cuenta
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre de usuario"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                    />
                  </div>
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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
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
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Crear Cuenta
                    </button>
                  </div>
                  <div className="flex items-center justify-around mt-6">
                <p className="text-sm text-center text-gray-400 ">
                  Si tenes cuenta 
                </p>
                  <Link
                    // component={RouterLink}
                    color="inherit"
                    to="/login"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline "
                  >
                    <small>Volve al login</small>
                  </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <AuthLayout>
    //   <div>
    //     <div className="heading">Crear cuenta</div>
    //     <form onSubmit={handleSubmit} className="form">
    //       <TextField
    //         id='name'
    //         name='name'
    //         label='Nombre completo'
    //         type='text'
    //         placeholder='Nombre'
    //         fullWidth
    //         className="input"
    //         value={formData.nombre}
    //         onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
    //       />
    //       <TextField
    //         id='email'
    //         name='email'
    //         label='Correo'
    //         type='email'
    //         placeholder='correo@google.com'
    //         fullWidth
    //         className="input"
    //         value={formData.email}
    //         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //       />
    //       <TextField
    //         id='password'
    //         name='password'
    //         label='Contraseña'
    //         type='password'
    //         placeholder='Contraseña'
    //         fullWidth
    //         className="input"
    //         value={formData.password}
    //         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    //       />
    //       <Button
    //         variant='contained'
    //         fullWidth
    //         type='submit'
    //         className="login-button"
    //       >
    //         Crear cuenta
    //       </Button>
    //     </form>
    //   </div>
    //   <Grid
    //     container
    //     direction='row'
    //     justifyContent='end'
    //     alignItems='center'
    //   >
    //     <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
    //     <Link
    //       component={RouterLink}
    //       color='inherit'
    //       to='/login'
    //     >
    //       Ingresar
    //     </Link>
    //   </Grid>
    // </AuthLayout>
  );
};
