
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function Temoignages() {
  const testimonials = [
    {
      rating: 5,
      text: "Système saraha très facile et efficace, oli 3ajbni ktar howa l ramassage gratuit.",
      name: "Zay Beauty",
      category: "beauté",
      image: "/images/profile1.jpg", // <-- à remplacer
    },
    {
      rating: 4,
      text: "Depuis que j’utilise BMD, mes clients reçoivent leurs colis en bon état et sont satisfaits.",
      name: "Arwa Fashion",
      category: "mode",
      image: "/images/profile2.jpg", // <-- à remplacer
    },
    {
      rating: 5,
      text: "Partenaire idéal b ma3ana l kalima service mzian saraha support 3andhom nady chapeau.",
      name: "Modamix Trends",
      category: "mode",
      image: "/images/profile3.jpg", // <-- à remplacer
    },
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-purple-300 via-blue-300 to-blue-400">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Ce que <span className="text-blue-600">nos clients</span> disent
        </h2>
        <p className="text-gray-700 mb-12">
          Découvrez les expériences de nos clients satisfaits avec notre service de livraison
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-left hover:shadow-lg transition">
              {/* Stars */}
              <div className="flex space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  i < testimonial.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
