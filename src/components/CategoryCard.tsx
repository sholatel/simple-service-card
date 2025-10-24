import React from 'react';
import { Delete02Icon, PencilEdit01Icon, ArrowUp01Icon } from 'hugeicons-react';
import type { Category } from '../types';
import { IconButton } from './IconButton';
import { ServiceCard } from './ServiceCard';

interface CategoryCardProps {
  category: Category;
  onEditCategory?: () => void;
  onDeleteCategory?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onEditCategory,
  onDeleteCategory,
}) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-2xl  shadow-sm">
      {/* Category Header */}
      <div className="flex justify-between items-center mb-6 p-5 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
        <div className="flex items-center gap-2">
          <IconButton
            icon={<PencilEdit01Icon size={18} />}
            onClick={onEditCategory}
            ariaLabel="Edit category"
          />
          <IconButton
            icon={<Delete02Icon size={18} />}
            onClick={onDeleteCategory}
            ariaLabel="Delete category"
          />
           <IconButton
            icon={<ArrowUp01Icon size={18} />}
            onClick={onDeleteCategory}
            ariaLabel="Delete category"
          />
        </div>
      </div>

      {/* Services List */}
      <div className='bg-white p-5 md:p-6 mx-1 mb-1 rounded-2xl'>
        <div className="space-y-6">
        {category.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      </div>
    </div>
  );
};
