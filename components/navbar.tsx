'use client';

import { Wrench } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-[#f97316]" />
            <span className="font-bold text-xl text-[#1e293b]">MaquiRent</span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center items-center space-x-8">
            <Link href="/" className="text-[#475569] hover:text-[#f97316] transition-colors">
              Inicio
            </Link>
            <Link href="#rental" className="text-[#475569] hover:text-[#f97316] transition-colors">
              Arriendo
            </Link>
            <Link href="#sales" className="text-[#475569] hover:text-[#f97316] transition-colors">
              Venta
            </Link>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white">
            Inscríbete
          </Button>
        </div>
      </div>
    </nav>
  );
}