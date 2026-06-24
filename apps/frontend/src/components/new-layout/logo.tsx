'use client';

import { BRAND_NAME } from '@gitroom/frontend/components/brand/brand';

export const Logo = () => {
  return (
    <div
      className="mt-[8px] flex min-h-[60px] min-w-[60px] items-center justify-center"
      title={BRAND_NAME}
    >
      <img
        src="/synergetics-social-hub.svg"
        alt={BRAND_NAME}
        width={52}
        height={52}
        className="rounded-[14px]"
      />
    </div>
  );
};
