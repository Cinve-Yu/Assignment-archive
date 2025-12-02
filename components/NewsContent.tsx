import React from 'react';
import { Link } from 'react-router-dom';

export const NewsContent: React.FC = () => {
  return (
    // Wrapper is pointer-events-none to allow 3D interaction in the margins/background
    <div className="w-full bg-gradient-to-b from-transparent via-black/90 to-black min-h-screen pointer-events-none">
      
      {/* Spacer to push content below the fold */}
      <div className="h-[20vh] w-full bg-gradient-to-b from-transparent to-black/80"></div>

      {/* Main Content Container */}
      <div className="w-full px-6 md:px-24 py-12 relative z-20 pointer-events-auto">
        
        {/* --- SECTION 1: Deep Dive (Text Focus) --- */}
        <div className="border-t border-white/20 pt-12 mb-24 flex flex-col md:flex-row gap-12">
           <div className="md:w-1/3">
             <span className="text-blue-400 font-tech text-xs tracking-widest uppercase">编辑精选</span>
             <h3 className="text-5xl font-cn font-bold text-white mt-4 leading-normal">
               深度解析：<br/>中国超算重构未来
             </h3>
             <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white/50 text-xs">R</div>
                <div className="text-xs text-white/60 font-cn">
                  <p>文 / 芬奇</p>
                  <p>2025年12月1日</p>
                </div>
             </div>
             
             <Link to="/article" className="inline-block mt-8 text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
               阅读完整报道 →
             </Link>
           </div>

           <div className="md:w-2/3">
             <p className="text-xl font-cn text-gray-300 leading-8 mb-6 first-letter:text-6xl first-letter:float-left first-letter:mr-4 first-letter:text-white first-letter:font-bold">
               在青岛国家超级计算中心的机房里，数排黑色的机柜静默伫立，只有蓝色的指示灯在极快地闪烁。
               这里是“神威·海洋之光”的大脑，每一秒钟，它都在进行着超过百亿亿次的运算。
               不同于以往依赖国外GPU加速的架构，神威采用的是完全自主研发的众核架构体系。
             </p>
             <p className="text-xl font-cn text-gray-400 leading-8">
               从原子尺度的材料模拟，到全球尺度的气候变迁预测，这台庞然大物正在以前所未有的速度解析着世界的奥秘。
               工程师汪淼指着屏幕上流动的三维数据流说道：“如果你把以前的算力比作一条小溪，那海洋之光就是真正的太平洋。”
             </p>
           </div>
        </div>

        {/* --- SECTION 2: Architecture (Grid/Visuals) --- */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] bg-white/20 flex-grow"></div>
             <span className="text-white/50 font-tech tracking-[0.2em] uppercase">架构解析</span>
             <div className="h-[1px] bg-white/20 flex-grow"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="aspect-video bg-gray-900 border border-white/10 p-8 flex flex-col justify-end group hover:border-blue-500/50 transition-colors cursor-pointer relative overflow-hidden">
                <img
                  src="/img/HDI.jpg"
                  alt="Chip"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />

                <h4 className="text-2xl text-white font-cn font-bold mt-4 z-10">高密度互连架构</h4>
                <p className="text-base text-gray-300 mt-2 font-cn z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">突破性的片上网络设计，降低了90%的传输延迟，实现了节点间微秒级通信。</p>
             </div>
             <div className="aspect-video bg-gray-900 border border-white/10 p-8 flex flex-col justify-end group hover:border-blue-500/50 transition-colors cursor-pointer relative overflow-hidden">
                <img
                  src="/img/SW.jpg"
                  alt="Chip"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <h4 className="text-2xl text-white font-cn font-bold mt-4 z-10">SW26010-Pro 异构芯片</h4>
                <p className="text-base text-gray-300 mt-2 font-cn z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">单芯片集成390个核心，完全自主指令集，能效比相比上一代提升300%。</p>
             </div>
           </div>
        </div>

        {/* --- SECTION 3: Latest Insights (List) --- */}
        <div className="mb-12">
           <h3 className="text-3xl text-white font-cn font-bold mb-8 pl-4 border-l-4 border-blue-500">产业动态</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "算力网络：数字经济的新基建", date: "2025-12-03", tag: "政策解读" },
                { title: "AI大模型训练需求推动超算迭代", date: "2025-12-01", tag: "行业趋势" },
                { title: "绿色计算：如何降低E级超算能耗？", date: "2025-11-30", tag: "技术前沿" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                   <div className="flex justify-between items-start mb-4">
                     <span className="text-xs font-tech text-blue-400 tracking-wider border border-blue-400/30 px-2 py-1 rounded">{item.tag}</span>
                     <span className="text-xs font-tech text-gray-500">{item.date}</span>
                   </div>
                   <h4 className="text-xl text-white font-cn font-bold group-hover:text-blue-300 transition-colors">{item.title}</h4>
                   <p className="text-sm text-gray-400 mt-4 font-cn">点击查看详情...</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};