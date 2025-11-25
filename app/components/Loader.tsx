'use client';

import Image from 'next/image';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm z-9999">
      <Image
        src="/images/loader.gif"
        alt="Loading..."
        width={100}
        height={50}
        unoptimized
        loading="eager"
        priority
        style={{ width: "auto", height: "auto" }}
        className="opacity-90"
      />
    </div>
  );
}
