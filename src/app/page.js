import Card from "@/components/card";

const MiPagina = () => {
  return (
    /*<div className="box">
        <h1> HOLA </h1>
        <div className='rectangle'>
            <h1> hola</h1>
        </div>
        

    </div>*/
    <div className="container">
      <div className="left-div">
        Contenido del div izquierdo
      </div>
      <div className="right-div">
        Contenido del div derecho

        <Card
        nombre="John Doe"
        alias="johnny123"
        mensaje="¡Hola, soy John!"
        imagen="ruta/de/imagen.jpg"
      />
      <Card
        nombre="John Doe"
        alias="johnny123"
        mensaje="¡Hola, soy John!"
        imagen="ruta/de/imagen.jpg"
      />
      </div>
    </div>
  );
};

export default MiPagina;

