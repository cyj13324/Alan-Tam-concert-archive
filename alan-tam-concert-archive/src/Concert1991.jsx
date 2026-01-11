import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Concert1991.css';

const Concert1991 = () => {
    const navigate = useNavigate();

    // --- 完整时间轴数据 (严格锁死) ---
    const fullTimeline = [
        { time: "00:50", title: "魔与道", sec: 50, desc: "震撼开场，电子乐与重金属风格的结合。" },
        { time: "04:36", title: "理想与和平", sec: 276, desc: "1990年世界杯主题曲粤语版。" },
        { time: "10:06", title: "拥抱", sec: 606 },
        { time: "14:24", title: "Hello Goodbye", sec: 864 },
        { time: "17:50", title: "失陪", sec: 1070 },
        { time: "24:31", title: "忘不了您", sec: 1471 },
        { isHeader: true, title: "🎭 都市音乐舞台剧 (精华环节)", desc: "长达20分钟的电影化叙事篇章" },
        { time: "28:37", title: "路叠路", sec: 1717, isStagePlay: true },
        { time: "32:30", title: "也曾相识", sec: 1950, isStagePlay: true, desc: "舞台剧灵魂曲目，弱音艺术巅峰。" },
        { time: "38:39", title: "爵士怨曲 + Stop!", sec: 2319, isStagePlay: true },
        { time: "42:04", title: "无声的信笺", sec: 2524, isStagePlay: true },
        { time: "46:33", title: "曾到此", sec: 2793, isStagePlay: true },
        { time: "49:07", title: "也曾相识 (Reprise)", sec: 2947, isStagePlay: true },
        { time: "51:23", title: "小说人生", sec: 3083, isStagePlay: true, desc: "舞台剧终章，感悟都市人生。" },
        { isHeader: true, title: "✨ 经典高潮与互动", desc: "从梦幻转向全场狂欢" },
        { time: "53:37", title: "卡拉永远OK", sec: 3217, desc: "标志性舞步，全场万人互动。" },
        { time: "58:56", title: "半梦半醒", sec: 3536 },
        { time: "1:02:30", title: "世外桃源 + 情两牵", sec: 3750 },
        { time: "1:13:50", title: "明天你是否依然爱我", sec: 4430, desc: "嘉宾关淑怡现身，梦幻对唱。" },
        { time: "1:21:40", title: "一生中最爱", sec: 4900, desc: "《双城故事》主题曲，情感巅峰。" },
        { time: "1:25:54", title: "知不知", sec: 5154 },
        { time: "1:32:17", title: "今夜情为证", sec: 5537 },
        { time: "1:36:40", title: "Elaine", sec: 5800 },
        { time: "1:40:32", title: "我做得到", sec: 6032 },
        { time: "1:45:05", title: "凌晨一吻", sec: 6305 },
        { time: "1:49:46", title: "梦仍是一样", sec: 6586, desc: "完美的谢幕，呼应梦幻主题。" },
    ];

    const concertArchives = {
        artAnalysis: [
            { title: "紫蓝色浪漫美学", content: "1991年首创以紫蓝色为主基调的“剧院式”美学，营造深海般的忧郁感。" },
            { title: "唱功的“白金”巅峰", content: "校长的嗓音圆润且富有弹性，气声技术的运用达到了红馆现场的极致。" }
        ],
        trivia: [
            { tag: "💎 视觉定义", text: "校长的造型定义了90年代初的高级感，舍弃了张扬，转向修身宫廷风。" },
            { tag: "🎙️ 现场神功", text: "20分钟舞台剧环节，校长在无提词器下兼顾歌词、武打与复杂走位。" }
        ]
    };

    const baseSrc = "https://player.bilibili.com/player.html?bvid=BV1EmNEeHEGr&page=1&high_quality=1&autoplay=1";
    const [currentSrc, setCurrentSrc] = useState(baseSrc);
    const [activeDesc, setActiveDesc] = useState("欢迎浏览1991档案。点击右侧歌单即可精准跳转。");

    return (
        <div className="concert-page">
            {/* --- 背景特效层 --- */}
            <div className="star-container">
                <div className="aurora-layer aurora-1"></div>
                <div className="aurora-layer aurora-2"></div>

                {/* 20条慢速流星 */}
                {[...Array(20)].map((_, i) => (
                    <span key={`shoot-${i}`} className="shooting-star" style={{
                        left: `${Math.random() * 120 - 20}%`,
                        animationDuration: `${Math.random() * 4 + 8}s`,
                        animationDelay: `${Math.random() * 12}s`,
                        opacity: Math.random() * 0.6 + 0.2
                    }}></span>
                ))}

                {/* 40颗闪烁繁星 */}
                {[...Array(40)].map((_, i) => (
                    <span key={`star-${i}`} className="star" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`
                    }}></span>
                ))}
            </div>

            {/* --- 高级返回按钮 --- */}
            <div className="top-nav">
                <button className="back-home-btn-premium" onClick={() => navigate('/')}>
                    <span className="btn-icon">←</span>
                    <span className="btn-text">返回数字档案馆</span>
                    <div className="btn-glow-effect"></div>
                </button>
            </div>

            <header className="main-header">
                <h1>ALAN TAM 1991</h1>
                <p className="sub-title">DREAMY ROMANCE · DEEP ARCHIVE</p>
            </header>

            <div className="content-container">
                <div className="left-panel">
                    <div className="video-box shadow-glow">
                        <iframe src={currentSrc} allowFullScreen title="Alan91Video"></iframe>
                    </div>

                    <div className="active-info-bar glass">
                        <span className="info-icon">💡</span>
                        <p>{activeDesc}</p>
                    </div>

                    <section className="archives-grid">
                        <div className="archive-card glass">
                            <h3 className="section-title">🏛️ 艺术赏析</h3>
                            {concertArchives.artAnalysis.map((item, i) => (
                                <div key={i} className="analysis-item">
                                    <h4 className="purple-text">{item.title}</h4>
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="archive-card glass">
                            <h3 className="section-title">🔍 幕后档案</h3>
                            <div className="trivia-list">
                                {concertArchives.trivia.map((item, i) => (
                                    <div key={i} className="trivia-item-box">
                                        <span className="trivia-tag">{item.tag}</span>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="right-panel">
                    <div className="timeline-box glass">
                        <div className="list-title">跳转歌单 (Timeline)</div>
                        <div className="list-scroll">
                            {fullTimeline.map((item, idx) => (
                                item.isHeader ? (
                                    <div key={idx} className="header-item">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ) : (
                                    <div
                                        key={idx}
                                        className={`track-item ${item.isStagePlay ? 'stage-play' : ''}`}
                                        onClick={() => {
                                            setCurrentSrc(`${baseSrc}&t=${item.sec}`);
                                            if (item.desc) setActiveDesc(item.desc);
                                        }}
                                    >
                                        <span className="track-time">{item.time}</span>
                                        <span className="track-name">{item.title}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concert1991;