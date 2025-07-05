'use client';

import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

interface BuyMeCoffeeButtonProps {
  className?: string;
}

export function BuyMeCoffeeButton({ className = '' }: BuyMeCoffeeButtonProps) {
  const { t } = useLanguage();
  
  const handleClick = () => {
    // 在新标签页中打开Stripe支付链接
    window.open('https://buy.stripe.com/aFa8wPa185z526h54Yf7i00', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="sm"
      className={`flex items-center space-x-2 bg-gradient-to-r from-stone-600 to-amber-700 hover:from-stone-700 hover:to-amber-800 text-white border-stone-600 hover:border-amber-700 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      <Coffee className="w-4 h-4" />
      <span className="text-sm font-medium">
        {t('buy_me_coffee') || 'Buy Me a Coffee'}
      </span>
    </Button>
  );
} 