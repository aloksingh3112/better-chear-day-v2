import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Download,
  Coffee,
  Pizza,
  Beef,
  Sandwich,
  Cookie
} from 'lucide-react';

const RestaurantDownloads = () => {
  const restaurants = [
    { name: 'Starbucks', icon: <Coffee className="w-6 h-6" />, file: 'starbucks.pdf' },
    { name: 'Faasos', icon: <Sandwich className="w-6 h-6" />, file: 'faasos.pdf' },
    { name: 'Taco Bell', icon: <Sandwich className="w-6 h-6" />, file: 'taco-bell.pdf' },
    { name: 'Pizza Hut', icon: <Pizza className="w-6 h-6" />, file: 'pizza-hut.pdf' },
    { name: 'Dominos', icon: <Pizza className="w-6 h-6" />, file: 'dominoes.pdf' },
    { name: 'Burger King', icon: <Beef className="w-6 h-6" />, file: 'burger-king.pdf' },
    { name: 'McDonalds', icon: <Beef className="w-6 h-6" />, file: 'mcdonalds.pdf' },
    { name: 'KFC', icon: <Beef className="w-6 h-6" />, file: 'kfc.pdf' },
    { name: 'Wow! Momo', icon: <Cookie className="w-6 h-6" />, file: 'Wow! Momo Nutrition.pdf' },
    { name: 'California Burrito', icon: <Sandwich className="w-6 h-6" />, file: 'california-burrito.pdf' },
    { name: 'Haldiram', icon: <Cookie className="w-6 h-6" />, file: 'haldiram.pdf' }
  ];

  return (
    <Card className="w-full max-w-4xl p-6">
      <CardContent>
        <h2 className="text-2xl font-bold mb-6">Restaurant Nutrition Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="mr-4">
                {restaurant.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-medium">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">Nutrition Chart</p>
              </div>
              <Download className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantDownloads;