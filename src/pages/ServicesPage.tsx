import React from 'react';
import type { Category } from '../types';
import { Button } from '../components/Button';
import { CategoryCard } from '../components/CategoryCard';
import { SectionHeader } from '../components/SectionHeader';
import Header from '../components/Header';
import { IconButton } from '../components';
import { Add01Icon, FolderAddIcon,  Link04Icon,  MoreVerticalCircle01Icon } from 'hugeicons-react';

// Mock data matching the specification
const mockCategory: Category = {
  title: 'Technology',
  services: [
    {
      name: 'Fashion Design',
      description: 'This is a fashion design agency',
      status: 'public',
      price: 0,
      addons: [{ name: 'Logo Design', price: 0 }],
    },
  ],
};

export const ServicesPage: React.FC = () => {
  // Event handlers (placeholder implementations)
  const handleNewService = () => console.log('New Service clicked');
  const handleCopyLink = () => console.log('Copy Link clicked');
  const handleNewCate = () => console.log('New Cate clicked');
  const handleNewAddon = () => console.log('New Add-on clicked');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className='mb-20 mt-4'>
          <Header />
        </div>
        
        <div className="mb-3 lg:mb-5">
          <div className='flex items-center justify-between mb-10'>
            <h1 className="text-3xl font-bold text-black/70">Services</h1>
            <IconButton icon = {<MoreVerticalCircle01Icon className='' />} />
          </div>
          
          {/* Action Buttons Row */}
          <div className="flex flex-nowrap items-center gap-3 overflow-x-auto min-w-full hide-scrollbar">
            <Button
              variant="primary"
              icon={<Add01Icon size={16} />}
              onClick={handleNewService}
              className='!text-nowrap'
            >
              New Service
            </Button>
            <Button
              variant="secondary"
              icon={<Link04Icon size={16} />}
              onClick={handleCopyLink}
               className='!text-nowrap'
            >
              Copy Link
            </Button>
            <Button
              variant="secondary"
              icon={<FolderAddIcon size={16} />}
              onClick={handleNewCate}
               className='!text-nowrap'
            >
              New Category
            </Button>
          </div>
        </div>

        {/* Service Category Card */}
        <section className="mt-8">
          <CategoryCard category={mockCategory} />
        </section>

        {/* Add-ons Section */}
        <section className="mt-10">
          <SectionHeader
            title="Add-ons"
            subtitle="Add additional services that customers can choose alongside the main service."
            className="mb-4"
          />
          <Button
            variant="primary"
            icon={<Add01Icon size={16} />}
            onClick={handleNewAddon}
          >
            New Add-on
          </Button>
        </section>
      </div>
    </div>
  );
};
