import * as React from 'react';
import '../styles/ui.css';
import {AppStyle, GlobalStyles, HeaderStyle} from '../styles/styles.tsx';
import iconLike from '../assets/nav-icon/like.svg';
import iconInstall from '../assets/nav-icon/install.svg';
import iconAll from '../assets/nav-icon/all.svg';
import iconIcon from '../assets/nav-icon/icon.svg';
import iconIllus from '../assets/nav-icon/illustration.svg';
import iconMobile from '../assets/nav-icon/mobile.svg';
import iconColor from '../assets/nav-icon/color.svg';
import iconText from '../assets/nav-icon/text.svg';
import iconMockup from '../assets/nav-icon/mockup.svg';
import iconChart from '../assets/nav-icon/chart.svg';
import iconCn from '../assets/nav-icon/chinese.svg';
import iconComponent from '../assets/nav-icon/component.svg';
import iconImage from '../assets/nav-icon/image.svg';
import iconCode from '../assets/nav-icon/code.svg';
import iconLayout from '../assets/nav-icon/layout.svg';
import icon3d from '../assets/nav-icon/3d.svg';
import iconDs from '../assets/nav-icon/dsystem.svg';
import iconAnimation from '../assets/nav-icon/animation.svg';
import iconFcool from '../assets/nav-icon/fcool.svg';
import iconPrototype from '../assets/nav-icon/prototype.svg';
import iconHandoff from '../assets/nav-icon/handoff.svg';
import iconSvg from '../assets/nav-icon/svg.svg';
// import iconGame from "../assets/nav-icon/game.svg";
// import iconPick from "../assets/nav-icon/pick.svg";
// import iconSearch from "../assets/search.svg";
import iconTop from '../assets/backtop.svg';

const url = 'https://yuanqing.github.io/figma-plugins-stats/';

function compare(p) {
    return function (m, n) {
        var a = m[p];
        var b = n[p];
        return b - a;
    };
}

function subString(str, n) {
    var r = '';
    var m;

    if (str.replace(r, '**').length > n) {
        m = Math.floor(n / 2);

        for (var i = m, l = str.length; i < l; i++) {
            if (str.substr(0, i).replace(r, '**').length >= n) {
                return str.substr(0, i);
            }
        }
    }

    return str;
}

const App = ({}) => {
    const [tagActive, setTagActive] = React.useState('All');
    const [allPlugins, setAllPlugins] = React.useState([]);
    const [plugins, setPlugins] = React.useState([]);
    const [icon, setIcon] = React.useState([]);
    const [illustration, setIllustration] = React.useState([]);
    const [mobile, setMobile] = React.useState([]);
    const [color, setColor] = React.useState([]);
    const [text, setText] = React.useState([]);
    const [mock, setMock] = React.useState([]);
    const [chart, setChart] = React.useState([]);
    const [chinese, setChinese] = React.useState([]);
    const [component, setComponent] = React.useState([]);
    const [image, setImage] = React.useState([]);
    const [code, setCode] = React.useState([]);
    const [layout, setLayout] = React.useState([]);
    const [threeD, setThreeD] = React.useState([]);
    const [dSystem, setDSystem] = React.useState([]);
    const [animation, setAnimation] = React.useState([]);
    const [cool, setCool] = React.useState([]);
    const [prototype, setPrototype] = React.useState([]);
    const [handoff, setHandoff] = React.useState([]);
    const [svg, setSvg] = React.useState([]);
    const [inputValue, setInputValue] = React.useState();
    const [sort, setSort] = React.useState('installCount');
    const [thumbnail, setThumbnail] = React.useState(false);

    let tagData = [
        {
            name: 'All',
            plugins: allPlugins,
            tags: [],
            all: [],
            set: () => {},
            icon: iconAll,
        },
        {
            name: 'Icon',
            plugins: icon,
            tags: ['icon'],
            all: [],
            set: setIcon,
            icon: iconIcon,
        },
        {
            name: 'Illustration',
            plugins: illustration,
            tags: ['llustration'],
            all: [],
            set: setIllustration,
            icon: iconIllus,
        },
        {
            name: 'Mobile',
            plugins: mobile,
            tags: ['mobile', 'ios', 'android', 'phone'],
            all: [],
            set: setMobile,
            icon: iconMobile,
        },
        {
            name: 'Color',
            plugins: color,
            tags: ['color', 'palette', 'Gradient'],
            all: [],
            set: setColor,
            icon: iconColor,
        },
        {
            name: 'Typography',
            plugins: text,
            tags: ['text', 'typography', 'font', 'title', 'Title'],
            all: [],
            set: setText,
            icon: iconText,
        },
        {
            name: 'Mockup',
            plugins: mock,
            tags: ['mockup'],
            all: [],
            set: setMock,
            icon: iconMockup,
        },
        {
            name: 'Chart',
            plugins: chart,
            tags: ['chart', 'Visualization'],
            all: [],
            set: setChart,
            icon: iconChart,
        },
        {
            name: 'Chinese',
            plugins: chinese,
            tags: ['Chinese', 'China', 'chinese', 'china', '中', '是', '的'],
            all: [],
            set: setChinese,
            icon: iconCn,
        },
        {
            name: 'Component',
            plugins: component,
            tags: ['component', 'Component', 'master', 'datech'],
            all: [],
            set: setComponent,
            icon: iconComponent,
        },
        {
            name: 'Image',
            plugins: image,
            tags: ['image', 'Image', 'pic', 'Pixel'],
            all: [],
            set: setImage,
            icon: iconImage,
        },
        {
            name: 'Code',
            plugins: code,
            tags: ['code', 'Code', 'react', 'vue', 'css', 'js', 'html', 'HTML', 'javascript'],
            all: [],
            set: setCode,
            icon: iconCode,
        },
        {
            name: 'Layout',
            plugins: layout,
            tags: ['ayout', 'grid'],
            all: [],
            set: setLayout,
            icon: iconLayout,
        },
        {
            name: '3D',
            plugins: threeD,
            tags: ['3d', '3D'],
            all: [],
            set: setThreeD,
            icon: icon3d,
        },
        {
            name: 'Design System',
            plugins: dSystem,
            tags: ['design system', 'Design System', 'Design system', 'token', 'Token', 'Material'],
            all: [],
            set: setDSystem,
            icon: iconDs,
        },
        {
            name: 'Animation',
            plugins: animation,
            tags: ['animation', 'Animation', 'gif', 'animate'],
            all: [],
            set: setAnimation,
            icon: iconAnimation,
        },
        {
            name: 'Figma.Cool',
            plugins: cool,
            tags: ['Figma.Cool'],
            all: [],
            set: setCool,
            icon: iconFcool,
        },
        {
            name: 'Prototype',
            plugins: prototype,
            tags: ['prototype', 'ireframe', 'arrow', 'Slide', 'slide', 'Principle', 'Framer'],
            all: [],
            set: setPrototype,
            icon: iconPrototype,
        },
        {
            name: 'Handoff',
            plugins: handoff,
            tags: ['hand-off', 'handoff', 'Hand-off', 'Handoff'],
            all: [],
            set: setHandoff,
            icon: iconHandoff,
        },
        {
            name: 'SVG',
            plugins: svg,
            tags: ['svg', 'SVG'],
            all: [],
            set: setSvg,
            icon: iconSvg,
        },
    ];

    React.useEffect(() => {
        let allData = [];

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                allData = [...data.plugins];
                allData.sort(compare(sort));
                setPlugins(allData);
                setAllPlugins(allData);
            });
    }, []);

    const collectTags = React.useCallback((t, allArray, s) => {
        if (!allArray.includes(t)) {
            if (t.name.includes(s) || t.description.includes(s) || t.publisherName.includes(s)) {
                allArray.push(t);
            }
        }
    }, []);

    React.useEffect(() => {
        allPlugins.map((t) => {
            tagData.map((j) => {
                j.tags.forEach((s) => {
                    collectTags(t, j.all, s);
                });
                j.set(j.all);
            });
        });
    }, [allPlugins]);

    const thumbnailToggle = () => {
        setThumbnail(!thumbnail);
        window.scrollTo(0, 0);
    };
    const tagSortHandle = (tag, name) => {
        setPlugins(tag);
        setTagActive(name);
        window.scrollTo(0, 0);
    };

    const searchHandle = (e) => {
        setPlugins(
            allPlugins.filter((t) => {
                let text = t.name.toLocaleLowerCase() + t.description.toLocaleLowerCase();
                return text.includes(e.target.value);
            })
        );
        window.scrollTo(0, 0);
    };

    return (
        <AppStyle className={'App'}>
            <div
                className="iconTop"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
            >
                <img src={iconTop} alt="iconTop" />
            </div>
            <GlobalStyles />
            <HeaderStyle>
                <ul>
                    <li onClick={thumbnailToggle}>Cover</li>
                    {tagData.map((t) => {
                        return (
                            <li
                                key={Math.random()}
                                onClick={(e) => tagSortHandle(t.plugins, e.target.innerText)}
                                className={tagActive.includes(t.name) ? 'tagActive' : null}
                            >
                                <img src={t.icon} alt={t.name} />
                                {t.name}
                                <i>{t.plugins.length}</i>
                            </li>
                        );
                    })}
                </ul>
            </HeaderStyle>
            <input placeholder="Search..." onChange={(e) => searchHandle(e)} autoFocus />
            <main className={thumbnail ? `thumbnailView` : null}>
                {plugins.map((i) => {
                    return (
                        <a
                            key={Math.random()}
                            href={`https://www.figma.com/community/plugin/${i.id}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {thumbnail ? (
                                <img
                                    src={`https://www.figma.com/community/plugin/${i.id}/thumbnail`}
                                    alt="thumbnail"
                                    loading="lazy"
                                    className="cover"
                                />
                            ) : null}
                            <section>
                                <div className="card-top">
                                    <div className="name">
                                        <img
                                            src={`https://www.figma.com/community/plugin/${i.id}/icon`}
                                            alt="icon"
                                            className="icon"
                                        />
                                        <h3>{i.name} </h3>
                                    </div>
                                    <p>
                                        {subString(
                                            i.description
                                                .replace(/(<p>)/gi, '')
                                                .replace(/(<\/p>)/gi, '')
                                                .replace(/(<strong>)/gi, '')
                                                .replace(/(<\/strong>)/gi, '')
                                                .replace(/(<br>)/gi, '')
                                                .replace(/(<\/br>)/gi, '')
                                                .replace(/(<h2>)/gi, '')
                                                .replace(/(<\/h2>)/gi, '')
                                                .replace(/(<h1>)/gi, '')
                                                .replace(/(<\/h1>)/gi, '')
                                                .replace(/(<h3>)/gi, '')
                                                .replace(/(<\/h3>)/gi, '')
                                                .replace(/(<h4>)/gi, '')
                                                .replace(/(<\/h4>)/gi, '')
                                                .replace(/(<h5>)/gi, '')
                                                .replace(/(<\/h5>)/gi, '')
                                                .replace(/(<h6>)/gi, '')
                                                .replace(/(<\/h6>)/gi, '')
                                                .replace(/(<li>)/gi, '')
                                                .replace(/(<a>)/gi, '')
                                                .replace(/(<\/a>)/gi, '')
                                                .replace(/(<span>)/gi, '')
                                                .replace(/(<\/span>)/gi, '')
                                                .replace(/(<\/li>)/gi, ''),
                                            100
                                        )}
                                    </p>
                                </div>
                                <div className="card-info">
                                    {/* <span>{i.publisherName}</span> */}
                                    <div>
                                        <span>
                                            <img src={iconLike} alt="like" />
                                            <i>{i.likeCount.toLocaleString()}</i>
                                        </span>
                                        <span>
                                            <img src={iconInstall} alt="install" />
                                            <i>{i.installCount.toLocaleString()}</i>
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </a>
                    );
                })}
            </main>
            <footer>
                <a target="_blank" href="https://love.figma.cool">
                    ❤️ Sponsor us
                </a>
            </footer>
        </AppStyle>
    );
};

export default App;
