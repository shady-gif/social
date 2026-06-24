import React from 'react';
import {
  BRAND_NAME,
  BRAND_SHORT_NAME,
} from '@gitroom/frontend/components/brand/brand';

export const LogoTextComponent = () => {
  return (
    <div
      className="flex items-center gap-[12px] text-white"
      aria-label={BRAND_NAME}
    >
      <img
        src="/synergetics-social-hub.svg"
        alt=""
        width={42}
        height={42}
        className="rounded-[11px]"
      />
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-[700] tracking-[-0.3px]">
          Synergetics
        </span>
        <span className="mt-[5px] text-[12px] font-[600] tracking-[1.8px] text-white/60 uppercase">
          {BRAND_SHORT_NAME}
        </span>
      </div>
    </div>
  );
};
