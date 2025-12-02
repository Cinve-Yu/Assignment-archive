import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ArticlePage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black/90 pointer-events-none">
      
      {/* Top Spacer for Header */}
      <div className="h-32"></div>

      {/* Article Container */}
      <div className="w-full px-6 md:px-12 pb-24 relative z-20 pointer-events-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-tech text-white/40 mb-8 uppercase tracking-widest">
           <Link to="/" className="hover:text-white">首页</Link>
           <span>/</span>
           <span>超级计算</span>
           <span>/</span>
           <span className="text-white">文章</span>
        </div>

        {/* Title Section */}
        <h1 className="text-5xl md:text-7xl font-cn font-bold text-white mb-8 leading-tight">
          深度解析：<br/>神威·海洋之光的"中国芯"
        </h1>

        <div className="flex items-center justify-between border-y border-white/10 py-6 mb-12">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">R</div>
              <div>
                <p className="text-white font-cn font-bold text-sm">芬奇</p>
                <p className="text-white/40 text-xs font-cn">资深科技记者</p>
              </div>
           </div>
           <div className="text-right">
              <p className="text-white/40 font-tech text-sm">2025-12-01</p>
              <p className="text-white/40 font-tech text-sm">10分钟阅读</p>
           </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none">
           <p className="font-cn text-xl leading-9 text-gray-300 mb-8">
             在刚刚结束的全球超级计算大会（SC25）上，中国的新一代超级计算机“神威·海洋之光”再次引发了全球瞩目。这台部署于国家超级计算青岛中心的巨兽，不仅在峰值计算速度上刷新了记录，更重要的是，它证明了一条完全独立自主的技术路线的可行性。
           </p>
           
           <h3 className="text-3xl font-cn text-white font-bold mt-12 mb-6">自主指令集的胜利</h3>
           <p className="font-cn text-xl leading-9 text-gray-300 mb-8">
             长期以来，高性能计算领域一直被x86架构所统治。然而，神威·海洋之光搭载的SW26010-Pro处理器，基于申威自主指令集（SW-64）。这不仅仅是替代，更是一次架构层面的革新。通过独特的“众核”设计，单块芯片集成了390个计算核心，这种高密度的计算阵列设计，为并行计算提供了无与伦比的物理基础。
           </p>

            <figure className="my-12 w-2/3 mx-auto">
              <div className="relative overflow-hidden rounded-lg border border-white/10 group bg-gray-900/50">
                <img 
                  src="/img/taihu.jpg" 
                  alt="图片描述" 
                  className="w-full object-cover opacity-90 transition-all duration-700"
                />
                {/* 增加一个内阴影遮罩，让图片边缘融合得更好 */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none rounded-lg"></div>
              </div>
              <figcaption className="text-center text-xs text-blue-200/50 mt-4 font-cn tracking-wider uppercase">
                图 1：位于无锡的神威·太湖之光超级计算机
              </figcaption>
            </figure>
            
           {/* --- 图片组件开始 --- */}
            <figure className="my-12 w-2/3 mx-auto">
              <div className="relative overflow-hidden rounded-lg border border-white/10 group bg-gray-900/50">
                <img 
                  src="/img/1.png" 
                  alt="图片描述" 
                  className="w-full object-cover opacity-90 transition-all duration-700"
                />
                {/* 增加一个内阴影遮罩，让图片边缘融合得更好 */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none rounded-lg"></div>
              </div>
              <figcaption className="text-center text-xs text-blue-200/50 mt-4 font-cn tracking-wider uppercase">
                图 2：SW26010 Pro与同类CPU的性能对比
              </figcaption>
            </figure>
            {/* --- 图片组件结束 --- */}

           <div className="my-12 p-8 border-l-4 border-blue-500 bg-white/5 italic">
             <p className="text-2xl font-cn text-white">
               "这不仅仅是一台机器，它是中国在E级计算时代递交的一份满分答卷。"
             </p>
           </div>
           

           <h3 className="text-3xl font-cn text-white font-bold mt-12 mb-6">应用驱动的算力革命</h3>
           <p className="font-cn text-xl leading-9 text-gray-300 mb-8">
             超算的价值最终体现在应用上。目前，海洋之光已经支持了涵盖气候气象、海洋环境、地球物理、生命科学等领域的数十个重大应用。特别是在高分辨率气候模拟方面，它能够模拟未来100年的地球气候变化，分辨率精确到公里级，这对于防灾减灾具有不可估量的战略意义。
           </p>
           {/* --- 视频组件开始 --- */}
            <div className="my-12 w-2/3 mx-auto">
              <div className="relative rounded-lg border border-white/10 bg-black overflow-hidden shadow-2xl shadow-blue-500/5">
                {/* 装饰性光条 */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
                
                <video 
                  className="w-full aspect-video object-cover"
                  autoPlay
                  loop 
                  muted 
                  playsInline
                  poster="/img/videocover.jpg"
                >
                  <source src="/video/1.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3 font-tech tracking-widest">
                视频：算力赋能新产业
              </p>
            </div>
            {/* --- 视频组件结束 --- */}
           
           <p className="font-cn text-xl leading-9 text-gray-300 mb-8">
             未来，随着量子计算与传统超算的进一步融合，我们有理由相信，中国的算力基建将为第四次工业革命提供最强劲的动力引擎。
           </p>
        </div>

        {/* Back Button */}
        <div className="mt-16 pt-12 border-t border-white/10">
           <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-tech tracking-widest uppercase text-sm">
             ← 回到首页
           </Link>
        </div>

      </div>
    </div>
  );
};