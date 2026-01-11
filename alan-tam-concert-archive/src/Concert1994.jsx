import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Concert1994.css';

const Concert1994 = () => {
    const navigate = useNavigate();

    // --- 1994 完整时间轴数据 ---
    const fullTimeline = [
        { time: "00:17", title: "01.Opening", sec: 17 },
        { time: "01:54", title: "02.捕风的汉子", sec: 114 },
        { time: "05:22", title: "03.爱情陷阱", sec: 322 },
        { time: "11:27", title: "04.梦幻的笑容", sec: 687 },
        { time: "15:51", title: "05.情人", sec: 951 },
        { time: "19:34", title: "06.爱多一次痛多一次", sec: 1174 },
        { time: "24:51", title: "07.再见亦是泪", sec: 1491 },
        { time: "29:16", title: "08.俗世洪流", sec: 1756 },
        { time: "36:18", title: "09.爱的根源", sec: 2178 },
        { time: "40:13", title: "10.还是你懂得爱我", sec: 2413 },
        { time: "44:28", title: "11.再等几天", sec: 2668 },
        { time: "49:06", title: "12.一世风云", sec: 2946 },
        { time: "52:56", title: "13.火美人", sec: 3176 },
        { time: "57:35", title: "14.片刻的无题", sec: 3455 },
        { isHeader: true, title: "🎹 Medley 经典组曲 (I)", desc: "岁月如歌，雨中连唱" },
        { time: "1:02:53", title: "15.MEDLEY:水中花", sec: 3773 },
        { time: "1:04:29", title: "16.MEDLEY:谁可改变", sec: 3869 },
        { time: "1:05:55", title: "17.MEDLEY:你是我的女人", sec: 3955 },
        { time: "1:06:50", title: "18.MEDLEY:雨丝情愁", sec: 4010 },
        { time: "1:08:02", title: "19.MEDLEY:孩儿", sec: 4082 },
        { time: "1:11:13", title: "20.笑看人生", sec: 4273 },
        { time: "1:18:16", title: "21.情凭谁来定错对", sec: 4696 },
        { isHeader: true, title: "🎼 Medley 经典组曲 (II)", desc: "万众期待的抒情金曲串烧" },
        { time: "1:23:17", title: "22.MEDLEY:小风波", sec: 4997 },
        { time: "1:24:42", title: "23.MEDLEY:相识非偶然", sec: 5082 },
        { time: "1:26:05", title: "24.MEDLEY:半梦半醒", sec: 5165 },
        { time: "1:27:31", title: "25.MEDLEY:雾之恋", sec: 5251 },
        { time: "1:30:49", title: "26.MEDLEY:爱在深秋", sec: 5449 },
        { time: "1:33:00", title: "27.MEDLEY:爱是这样甜", sec: 5580 },
        { time: "1:34:27", title: "28.爱极爱", sec: 5667 },
        { time: "1:39:14", title: "29.一首歌一个故事", sec: 5954 },
        { time: "1:44:00", title: "30.珍惜的珍惜", sec: 6240 },
        { time: "1:48:47", title: "31.夏日寒风", sec: 6527 },
        { time: "1:53:45", title: "32.傲骨", sec: 6825 },
        { time: "2:00:01", title: "33.讲不出再见", sec: 7201 },
    ];

    const concertArchives = [
        { tag: "🏟️ 规模纪录", text: "扩建后大球场首位开唱歌手，现场四万人冒雨见证传奇。" },
        { tag: "🌧️ 草地杀手", text: "因大雨及歌迷踩踏，耗资千万的草坪毁于一旦，此为校长外号由来。" },
        { tag: "🎬 4K 史诗修复", text: "采用 LD Decode 源码修复，高帧率还原雨中演出的每一滴水花。" },
        { tag: "🙌 万众一心", text: "尾声《讲不出再见》全场亮起打火机与荧光棒，开创红馆外大合唱先河。" }
    ];

    const baseSrc = "https://player.bilibili.com/player.html?bvid=BV1KYSFBvEUs&page=1&high_quality=1&autoplay=1";
    const [currentSrc, setCurrentSrc] = useState(baseSrc);
    const [activeDesc, setActiveDesc] = useState("1994年香港大球场，那场大雨成就了永恒的经典。");

    return (
        <div className="concert-page green-theme">
            {/* 背景层：极光与动态雨滴 */}
            <div className="bg-container">
                <div className="aurora-green aurora-1"></div>
                <div className="aurora-green aurora-2"></div>
                {/* 慢速垂直下落的雨滴 */}
                {[...Array(30)].map((_, i) => (
                    <span key={i} className="rain-line" style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 2 + 3}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}></span>
                ))}
            </div>

            <div className="top-nav">
                <button className="back-home-btn-premium" onClick={() => navigate('/')}>
                    <span className="btn-icon">←</span>
                    <span className="btn-text">返回数字档案馆</span>
                    <div className="btn-glow-effect"></div>
                </button>
            </div>

            <header className="main-header">
                <h1>ALAN TAM 1994</h1>
                <p className="sub-title">香港大球场 · 史诗雨中传奇</p>
            </header>

            <div className="content-container">
                <div className="left-panel">
                    <div className="video-box shadow-glow">
                        <iframe src={currentSrc} allowFullScreen title="Alan94Video"></iframe>
                    </div>

                    <div className="active-info-bar glass">
                        <span className="info-icon">🌧️</span>
                        <p>{activeDesc}</p>
                    </div>

                    <div className="archive-card glass">
                        <h3 className="section-title">🔍 1994 幕后冷知识</h3>
                        <div className="archives-grid-94">
                            {concertArchives.map((item, i) => (
                                <div key={i} className="trivia-item-box-94">
                                    <span className="trivia-tag-94">{item.tag}</span>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="timeline-box glass">
                        <div className="list-title">跳转歌单 (Timeline)</div>
                        <div className="list-scroll">
                            {fullTimeline.map((item, idx) => (
                                item.isHeader ? (
                                    <div key={idx} className="header-item-94">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ) : (
                                    <div key={idx} className="track-item-94" onClick={() => {
                                        setCurrentSrc(`${baseSrc}&t=${item.sec}`);
                                        if (item.desc) setActiveDesc(item.desc);
                                    }}>
                                        <span className="track-time-94">{item.time}</span>
                                        <span className="track-name-94">{item.title}</span>
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

export default Concert1994;