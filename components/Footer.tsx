import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 md:px-24 bg-black/80 backdrop-blur-md pointer-events-auto relative z-20">
      <div className="flex flex-col md:flex-row justify-between text-white/40 text-xs font-cn">
        <div>
          <p>&copy; 科技日报社 TECH DAILY</p>
          <p className="mt-2">ICP备案：粤B2-20250722-42</p>
        </div>
        <div className="flex gap-8 mt-4 md:mt-0">
           <a href="#" className="hover:text-white transition-colors">隐私政策</a>
           <a href="#" className="hover:text-white transition-colors">联系我们</a>
           <a href="#" className="hover:text-white transition-colors">加入我们</a>
        </div>
      </div>
    </footer>
  );
};