import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-8 md:p-12 pointer-events-auto backdrop-blur-[2px]">
      {/* Logo Area */}
      {/* 变化点1：使用 Link to="/" 替代 a href，确保点击Logo回首页时不重载3D场景 */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white transition-colors duration-300">
           <div className="w-3 h-3 bg-white group-hover:bg-black transition-colors duration-300"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-[0.2em] font-cn text-white">科技日报</span>
          <span className="text-[20px] tracking-[0.1em] font-tech text-white/50">TECH DAILY</span>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-sm font-cn tracking-widest text-white/70">
        {/* 变化点2：首页链接 */}
        <Link to="/" className="hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
          首页
        </Link>
        
        {/* 变化点3：详情页链接 - 这里指向了我们的二级页面路由 "/article" */}
        <Link to="/article" className="hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
          超级计算
        </Link>
        
        {/* 占位链接：因为没有做对应的页面，暂时保持 a href="#" 或者 Link to="#" */}
        <Link to="#" className="hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
          人工智能
        </Link>
        <Link to="#" className="hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
          全球竞争
        </Link>
        <Link to="#" className="hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
          关于我们
        </Link>
      </div>
    </nav>
  );
};