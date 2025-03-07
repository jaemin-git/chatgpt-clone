'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useSheetStore } from '@/store/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';

export default function MobileMenu() {
  const open = useSheetStore((state) => state.open);
  const setOpen = useSheetStore((state) => state.setOpen);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left' className='p-0'>
          <DialogTitle className='sr-only'>메뉴</DialogTitle>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
