
import React from 'react'
import Image from 'next/image';
import tecnologiasJSON from '@/app/data/tecnologias.json';


const TecnologiasPage = () => {
// Converter JSON para objeto JS
const tecnologias = JSON.parse(JSON.stringify(tecnologiasJSON));


return (
<section className="p-8">
<h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{tecnologias.map((tech: any, index: number) => (
<div
key={index}
className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
>
<Image
src={`/tecnologias/${tech.image}`}
alt={tech.title}
width={200}
height={200}
className="mb-4"
/>


<h3 className="text-xl font-semibold mb-2">{tech.title}</h3>


<p className="text-sm text-gray-600 mb-4">{tech.description}</p>


<span className="text-yellow-500 font-bold">
Rating:⭐ {tech.rating}/5
</span>
</div>
))}
</div>
</section>
);
};


export default TecnologiasPage;