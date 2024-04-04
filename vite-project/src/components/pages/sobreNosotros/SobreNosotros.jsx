import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../../../assets/SobreNosotros/1 1.png";
import imagen2 from "../../../assets/SobreNosotros/2 22.png";
import imagen3 from "../../../assets/SobreNosotros/3 3063.png";
import imagen4 from "../../../assets/SobreNosotros/4 2.png";
import imagen5 from "../../../assets/SobreNosotros/5 8078.png";
import imagen6 from "../../../assets/SobreNosotros/6 1.png";
import imagen7 from "../../../assets/SobreNosotros/7 1.png";
import imagen8 from "../../../assets/SobreNosotros/8 1.png";
import imagen9 from "../../../assets/SobreNosotros/9 1.png";
import imagen10 from "../../../assets/SobreNosotros/10 1.png";
import Button from "../../common/button/Button";

const SobreNosotros = () => {
  const images = [
    { name: "imagen1", src: imagen1 },
    { name: "imagen2", src: imagen2 },
    { name: "imagen3", src: imagen3 },
    { name: "imagen4", src: imagen4 },
    { name: "imagen5", src: imagen5 },
    { name: "imagen6", src: imagen6 },
    { name: "imagen7", src: imagen7 },
    { name: "imagen8", src: imagen8 },
    { name: "imagen9", src: imagen9 },
    { name: "imagen10", src: imagen10 },
  ];

  return (
    <>
      <section className="bg-[#f5f5f5] min-h-[calc(100vh-110px)]">
        <div className="mx-[4vw] pt-8 ">
          <Link to="/">
            <Button>Volver</Button>
          </Link>
          <h2 className="text-4xl font-bold my-8 text-center">Sobre Nosotros</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.name} className="w-full h-auto" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNosotros;
