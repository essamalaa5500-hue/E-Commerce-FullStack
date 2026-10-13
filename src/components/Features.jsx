import { FaTruck, FaUndo, FaLock } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaTruck className="text-3xl text-indigo-600" />,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly and reliably.",
    },
    {
      icon: <FaUndo className="text-3xl text-indigo-600" />,
      title: "Easy Returns",
      description: "Return your items within 14 days, hassle-free.",
    },
    {
      icon: <FaLock className="text-3xl text-indigo-600" />,
      title: "Secure Payment",
      description: "Your payment information is always safe with us.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          {feature.icon}
          <h3 className="font-bold text-lg mt-2">{feature.title}</h3>
          <p className="text-gray-600 mt-1">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
