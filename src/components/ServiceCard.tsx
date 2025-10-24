import React from 'react';
import {  Delete02Icon, File02Icon, PencilEdit01Icon, Share05Icon } from 'hugeicons-react';
import type { Service } from '../types';
import { IconButton } from './IconButton';
import { Badge } from './Badge';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onIntakeForm?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onEdit,
  onDelete,
  onDuplicate,
  onIntakeForm,
}) => {
  return (
    <div className="space-y-3">
      {/* Service Header */}
      <div className="flex justify-between items-start">
        <div className='flex space-x-2 items-center'>
          <div className="w-1 h-[16px] bg-[#654321]"/>
          <h3 className="text-base font-medium text-gray-900">{service.name}</h3>
        </div>
        <span className="text-base font-semibold text-gray-900">£{service.price}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-black-100 font-medium">{service.description}</p>

      <div className='flex justify-between'>
         {/* Status Badge */}
        <div>
          <Badge variant="public">{service.status}</Badge>
        </div>

      

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <IconButton
            icon={<PencilEdit01Icon size={16} className='text-gray-400' />}
            onClick={onEdit}
            ariaLabel="Edit service"
          />
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            }
            onClick={onDuplicate}
            ariaLabel="Duplicate service"
            className='text-gray-400'
          />
          <IconButton
            icon={<Share05Icon size={16} className='text-gray-400' />}
            onClick={onDelete}
            ariaLabel="Share service"
          />
          <IconButton
            icon={<Delete02Icon size={16} className='text-gray-400' />}
            onClick={onDelete}
            ariaLabel="Delete service"
          />
        </div>
      </div>

      {/* Add-ons */}
      {service.addons.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8">
          {service.addons.map((addon, index) => (
            <Badge key={index} variant="addon">
              {addon.name} <span className='text-green-400'>£{addon.price}</span>
            </Badge>
          ))}
        </div>
      )}

      {/* Intake Form Button */}
      <div className='mt-4 flex justify-end'>
        <Button
          variant="secondary"
          icon={<File02Icon size={16} />}
          onClick={onIntakeForm}
        >
          Intake Form
        </Button>
      </div>
    </div>
  );
};
