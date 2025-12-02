import React from 'react';

export const UIOverlay: React.FC = () => {
  return (
    // The Container: h-screen to fill the first view. 
    // pointer-events-none allows dragging the 3D model in empty spaces.
    <div className="relative w-full h-screen flex flex-col justify-between pointer-events-none overflow-hidden">
      
      {/* 1. Top Spacer (Where Nav used to be) */}
      <div className="h-24"></div>

      {/* 2. Main Hero Content */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-8 md:px-24 flex flex-col items-start pointer-events-none">
        
        <div className="pointer-events-auto mb-6">
           <h1 className="text-6xl md:text-8xl font-cn font-bold text-white leading-tight drop-shadow-2xl mix-blend-overlay opacity-90">
             算力中国：未来已来
           </h1>
           <h2 className="text-2xl md:text-2xl font-tech font-light text-white/80 mt-2 tracking-[0.3em] uppercase">
             AI Power China: The Future has arrived
           </h2>
        </div>

        <div className="pointer-events-auto max-w-xl backdrop-blur-sm p-6 bg-black/20 border-l-2 border-white/20 hover:border-blue-400 transition-colors duration-500 cursor-text">
          <p className="text-sm md:text-base font-cn text-gray-300 leading-relaxed text-justify">
            在量子与光子的交织中，中国超算再攀高峰。不需要进口芯片，完全自主可控。
            探索E级计算时代的中国方案，如何赋能海洋科学、气候预测与生命科学。
            这不仅是算力的奇迹，更是数字主权的基石。
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="mt-6 flex items-center gap-3 text-xs font-tech tracking-widest text-white hover:text-blue-300 transition-colors group"
          >
            开始阅读
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>

      </div>

      {/* 3. Bottom Area */}
      <div className="w-full flex justify-end items-end p-8 md:p-12 pointer-events-none relative">
        
        {/* CENTER: Interaction Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 text-sm font-tech tracking-[0.2em] text-white/30 select-none animate-pulse">
           <span className="flex items-center gap-2">
             <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
             </svg>
             拖拽旋转
           </span>
           <span className="w-1 h-1 bg-white/30 rounded-full"></span>
           <span className="flex items-center gap-2">
             <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
             </svg>
             滚动下滑
           </span>
        </div>

        {/* Right: Stats */}
        <div className="pointer-events-auto flex gap-8">
           <div className="group cursor-default">
             <p className="text-[30px] font-tech text-white/40 uppercase tracking-widest mb-1 group-hover:text-blue-300 transition-colors">Peak Performance</p>
             <p className="text-xl font-tech text-white">1.5 ExaFLOPS</p>
           </div>
           <div className="group cursor-default">
             <p className="text-[30px] font-tech text-white/40 uppercase tracking-widest mb-1 group-hover:text-blue-300 transition-colors">Architecture</p>
             <p className="text-xl font-tech text-white">SW26010-Pro</p>
           </div>
        </div>
      </div>

    </div>
  );
};