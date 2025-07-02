import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const BusinessApplications = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  const industries = [
    {
      key: 'electronics',
      image: '/images/00b88f1e-7be4-400e-b48b-73eee0db49e4.png',
      title: lang === 'cn' ? '电子与半导体 行业' : 'Electronics & Semiconductors Industry',
      points: lang === 'cn'
        ? [
            '晶圆缺陷的自动识别与标注系统',
            '装测试阶段的控制逻辑优化',
            '光刻/蚀刻工艺参数闭环优化',
            '智能洁净室环境监控与能耗管理',
          ]
        : [
            'Wafer defect detection and auto-labeling systems',
            'Control optimization in packaging and testing',
            'Closed-loop tuning of photolithography and etching parameters',
            'Smart cleanroom monitoring and energy management',
          ],
      impact: lang === 'cn'
        ? '+48% 检测效率提升 ｜–55% 返工率降低 ｜+26% 良品率提升'
        : '+48% Inspection Throughput ｜–55% Manual Rework ｜+26% Yield Rate',
    },
    {
      key: 'food',
      image: '/images/3b027ac8-e855-4f36-83dd-c295cb68e5d1.png',
      title: lang === 'cn' ? '食品与消费品 行业' : 'Food & Consumer Goods Industry',
      points: lang === 'cn'
        ? [
            '食品包装产线的效率提升与智能优化',
            '油类精炼处理与节能控制',
            '全链条温控与追溯物流管理系统',
          ]
        : [
            'Efficiency improvement and intelligent optimization of food packaging production lines',
            'Oil refining and energy-saving control',
            'Full-chain temperature control and traceability logistics management system',
          ],
      impact: lang === 'cn'
        ? '+42% 产能提升 ｜–35% 废品率 ｜+25% 订单准确率'
        : '+42% Throughput ｜–35% Waste Rate ｜+25% Order Accuracy',
    },
    {
      key: 'manufacturing',
      image: '/images/1bbf6b78-eb92-40c0-8ba1-247db47103c7.png',
      title: lang === 'cn' ? '智能制造（先进制造与装备）行业' : 'Advanced Manufacturing Industry',
      points: lang === 'cn'
        ? [
            '多机协作柔性制造产线系统',
            '自动上下料与过程节拍同步',
            '工业边缘计算与远程产线监控',
            '预测性维护模型部署，降低停机时间',
          ]
        : [
            'Flexible production lines with coordinated multi-robot systems',
            'Automated material loading/unloading with synchronized takt time',
            'Edge computing for industrial IoT and remote monitoring',
            'Predictive maintenance reducing unplanned downtime',
          ],
      impact: lang === 'cn'
        ? '+52% 生产效率提升 ｜–48% 停机时间减少 ｜+31% 系统透明度提升'
        : '+52% Productivity ｜–48% Downtime ｜+31% System Visibility',
    },
    {
      key: 'energy',
      image: '/images/6cbe2128-60d5-42c7-84a8-d225f4db59b3.png',
      title: lang === 'cn' ? '能源与公共事业 行业' : 'Energy & Utilities Industry',
      points: lang === 'cn'
        ? [
            '储能系统运行状态预测与调度算法',
            '工业锅炉燃烧效率与气候因子耦合调控',
            '多能源协同（光伏+储能+微电网）运维平台',
            '电力系统负载异常检测与动态响应',
          ]
        : [
            'Predictive scheduling of energy storage systems',
            'Intelligent control of industrial boilers under dynamic climate conditions',
            'Integrated PV-storage-microgrid operation optimization',
            'Real-time anomaly detection in electric load systems',
          ],
      impact: lang === 'cn'
        ? '+29% 能效提升 ｜–21% 运维成本降低 ｜+38% 电网响应能力增强'
        : '+29% Energy Efficiency ｜–21% OPEX ｜+38% Grid Responsiveness',
    },
    {
      key: 'healthcare',
      image: '/images/healthcare.png',
      title: lang === 'cn' ? '医疗与生物医药 行业' : 'Pharmaceuticals & Healthcare Industry',
      points: lang === 'cn'
        ? [
            '生物反应器工艺参数的AI预测控制',
            '药品包装视觉缺陷检测系统',
            '医疗器械制造过程的ESG审计与碳管理',
            '实验室样本自动化搬运与追溯系统',
          ]
        : [
            'AI-driven control of bioreactor process parameters',
            'Visual inspection systems for pharmaceutical packaging',
            'ESG and carbon audit solutions in medical device production',
            'Automated sample logistics and tracking in laboratories',
          ],
      impact: lang === 'cn'
        ? '+34% 批次一致性提升 ｜–41% 人为错误降低 ｜+47% 可追溯性增强'
        : '+34% Batch Consistency ｜–41% Human Error ｜+47% Traceability',
    },
    {
      key: 'chemicals',
      image: '/images/chemicals.png',
      title: lang === 'cn' ? '化工与新材料 行业' : 'Chemicals & Materials Industry',
      points: lang === 'cn'
        ? [
            '精细化工反应过程建模与动态调节',
            '挤出与注塑过程参数优化与能耗监测',
            '高分子材料热稳定性与分散性在线评估',
            '材料成分识别与生产配比优化系统',
          ]
        : [
            'Modeling and control of fine chemical reactions',
            'Process optimization and energy monitoring in extrusion/molding',
            'In-line thermal and dispersion analysis for polymer processing',
            'AI-powered formulation and dosing systems for materials',
          ],
      impact: lang === 'cn'
        ? '+36% 配方稳定性提升 ｜–27% 材料浪费降低 ｜+31% 能耗节约'
        : '+36% Formula Stability ｜–27% Material Waste ｜+31% Energy Savings',
    },
  ];

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0', fontFamily: 'Arial' }}>
        <div style={{ position: 'relative', width: '100%' }}>
            <img
                src="/images/headerApp.png"
                alt="header"
                style={{ width: '100vw', height: '280px', objectFit: 'cover', display: 'block' }}
        />
    <h2
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2rem',
        color: 'white',
        textShadow: '0 2px 6px rgba(0,0,0,0.6)',
        textAlign: 'center',
        padding: '0 1rem',
        lineHeight: '1.4',
        margin: 0,
        whiteSpace: 'nowrap',
      }}
    >
      {lang === 'cn' ? '服务行业与落地成效' : 'Industry Applications'}
    </h2>
  </div>
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {industries.map((industry) => (
          <div
            key={industry.key}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={industry.image}
              alt={industry.key}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0d47a1' }}>{industry.title}</h3>
              <ul style={{ paddingLeft: '1.25rem' }}>
                {industry.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>{p}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 'bold', color: '#2e7d32', marginTop: '0.5rem' }}>
                {lang === 'cn' ? '业务成效：' : 'Business Impact:'} {industry.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessApplications;