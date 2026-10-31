'use client';

import dynamic from 'next/dynamic';

const SpiderExperience = dynamic(() => import('@/components/SpiderExperience'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen flex items-center justify-center bg-[#8B0000] text-white font-mono text-sm">
      Loading Mrityuuu 3D Spider...
    </div>
  ),
});

export default function Home() {
  return <SpiderExperience />;
}
