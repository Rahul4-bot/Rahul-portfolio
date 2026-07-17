import React from "react";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#08111f] pointer-events-none">
      {/* Aurora Blob 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 blur-[120px] mix-blend-screen animate-aurora-1" />
      
      {/* Aurora Blob 2 */}
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-900/20 blur-[140px] mix-blend-screen animate-aurora-2" />
      
      {/* Aurora Blob 3 */}
      <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-sky-900/20 blur-[130px] mix-blend-screen animate-aurora-3" />

      {/* Grid overlay for a premium tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}
