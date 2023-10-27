'use client';
import '../styles/home.css';
import Card from '@/components/card';
import imagen from "/public/assets/bugatti.jpg.webp";
import Img from "next/image";
import React from 'react';
import Link from "next/link";


const MiPagina = () => {
    const totalCards = 8; // Total de tarjetas

    const cardsToShow = Array.from({ length: totalCards }).map((_, index) => (
        <Card
            key={index}
            nombre="John Doe"
            alias="johnny123"
            texto="¡Hola, soy John!"
            image={imagen}
        />
    ));

    return (
        <div className="body">
            <div className="container">
                <div className="left-div">
                    Contenido del div izquierdo
                </div>
                <div className="right-div">
                    <div className="contain_nav">
                        <Link href="" className="boton_nav">
                            <p className="under">Para ti</p>
                        </Link>
                        <Link href="" className="boton_nav">
                            <p className="under">Siguiendo</p>
                        </Link>
                    </div>
                    {cardsToShow}
                </div>
            </div>
        </div>
    );
};

export default MiPagina;
