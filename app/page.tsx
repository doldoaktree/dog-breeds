const products = [
  {
    id: 1,
    name: "Calvin the Basenji",
    breed: "Basenji",
    height: "18 cm",
    imageSrc:
      "https://media.istockphoto.com/id/1028480732/photo/female-basenji-dog-in-animal-shelter-hoping-to-be-adopted.jpg?s=1024x1024&w=is&k=20&c=U6plmg_Sz49l6MPtCfva_qn7cmsxWLNnLcuu37kskic=",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Home() {
  return (
    <div className="bg-white">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    


        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dog Breeds</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.height}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// const dogBreeds = [
//   {
//     breed: 'Basenji',
//     name: 'Calvin the Basenji',
//     image:
//       'https://media.istockphoto.com/id/1028480732/photo/female-basenji-dog-in-animal-shelter-hoping-to-be-adopted.jpg?s=1024x1024&w=is&k=20&c=U6plmg_Sz49l6MPtCfva_qn7cmsxWLNnLcuu37kskic=',
//   },
//   {
//     breed: 'German Shepherd',
//     name: 'kristen.ramos@example.com',
//     image:
//       'https://media.istockphoto.com/id/538067053/photo/puppy-german-shepherd-dog-sitting-in-sofa.jpg?s=1024x1024&w=is&k=20&c=0p1p9WG34jZoWBdAlw4npIgRghmWZncRJAEKjcMEcnY=',
//   },
//   {
//     breed: 'Staffy',
//     email: 'ted.fox@example.com',
//     image:
//       'https://media.istockphoto.com/id/171354781/photo/hello.jpg?s=1024x1024&w=is&k=20&c=HZ1IbPTjEtGmryrIHLsL4_fcjF6b67x3JedCqAhjSKs=',
//   },
// ]

// export default function Home() {
//   return (
//     <ul className="divide-y divide-gray-200">
//       {dogBreeds.map((dog) => (
//         <li key={dog.breed} className="py-4 flex">
//           <img className="h-10 w-10 rounded-full" src={dog.image} alt="" />
//           <div className="ml-3">
//             <p className="text-sm font-medium text-gray-900">{dog.name}</p>
//             <p className="text-sm text-gray-500">{dog.breed}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           To Do List
//         </p>
//       </div>
//       <Link href="/pages/hello">Click Me Wee</Link>
//     </main>
//   );
// }
