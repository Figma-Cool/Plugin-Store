import * as React from 'react';
import '../styles/ui.css';
import { AppStyle, GlobalStyles, HeaderStyle } from "../styles/styles.tsx";

const url = "https://yuanqing.github.io/figma-plugins-stats/";

function compare(p) {
    return function (m, n) {
        var a = m[p];
        var b = n[p];
        return b - a;
    };
}

function subString(str, n) {
    var r = "";
    var m;

    if (str.replace(r, "**").length > n) {
        m = Math.floor(n / 2);

        for (var i = m, l = str.length; i < l; i++) {
            if (str.substr(0, i).replace(r, "**").length >= n) {
                return str.substr(0, i);
            }
        }
    }

    return str;
}


const App = ({ }) => {
    const [tagActive, setTagActive] = React.useState("全部");
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
    const [sort, setSort] = React.useState("installCount");
    const [thumbnail, setThumbnail] = React.useState(true);


    let tagData = [
        {
            name: "全部",
            plugins: allPlugins,
            tags: [],
            all: [],
            set: () => { },
        },
        {
            name: "图标",
            plugins: icon,
            tags: ["icon"],
            all: [],
            set: setIcon,
        },
        {
            name: "插画",
            plugins: illustration,
            tags: ["llustration"],
            all: [],
            set: setIllustration,
        },
        {
            name: "移动端",
            plugins: mobile,
            tags: ["mobile", "ios", "android", "phone"],
            all: [],
            set: setMobile,
        },
        {
            name: "颜色",
            plugins: color,
            tags: ["color", "palette", "Gradient"],
            all: [],
            set: setColor,
        },
        {
            name: "文字",
            plugins: text,
            tags: ["text", "typography", "font", "title", "Title"],
            all: [],
            set: setText,
        },
        {
            name: "样机",
            plugins: mock,
            tags: ["mockup"],
            all: [],
            set: setMock,
        },
        {
            name: "图表",
            plugins: chart,
            tags: ["chart", "Visualization"],
            all: [],
            set: setChart,
        },
        {
            name: "中文",
            plugins: chinese,
            tags: ["Chinese", "China", "chinese", "china", "中", "是", "的"],
            all: [],
            set: setChinese,
        },
        {
            name: "组件",
            plugins: component,
            tags: ["component", "Component", "master", "datech"],
            all: [],
            set: setComponent,
        },
        {
            name: "图像",
            plugins: image,
            tags: ["image", "Image", "pic", "Pixel"],
            all: [],
            set: setImage,
        },
        {
            name: "代码",
            plugins: code,
            tags: [
                "code",
                "Code",
                "react",
                "vue",
                "css",
                "js",
                "html",
                "HTML",
                "javascript",
            ],
            all: [],
            set: setCode,
        },
        {
            name: "布局",
            plugins: layout,
            tags: ["ayout", "grid"],
            all: [],
            set: setLayout,
        },
        {
            name: "3D",
            plugins: threeD,
            tags: ["3d", "3D"],
            all: [],
            set: setThreeD,
        },
        {
            name: "设计系统",
            plugins: dSystem,
            tags: [
                "design system",
                "Design System",
                "Design system",
                "token",
                "Token",
                "Material",
            ],
            all: [],
            set: setDSystem,
        },
        {
            name: "动画",
            plugins: animation,
            tags: ["animation", "Animation", "gif", "animate"],
            all: [],
            set: setAnimation,
        },
        {
            name: "Figma.Cool",
            plugins: cool,
            tags: ["Figma.Cool"],
            all: [],
            set: setCool,
        },
        {
            name: "原型",
            plugins: prototype,
            tags: [
                "prototype",
                "ireframe",
                "arrow",
                "Slide",
                "slide",
                "Principle",
                "Framer",
            ],
            all: [],
            set: setPrototype,
        },
        {
            name: "交付",
            plugins: handoff,
            tags: ["hand-off", "handoff", "Hand-off", "Handoff"],
            all: [],
            set: setHandoff,
        },
        {
            name: "SVG",
            plugins: svg,
            tags: ["svg", "SVG"],
            all: [],
            set: setSvg,
        },
    ];

    React.useEffect(() => {
        let allData = [];

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                allData = [...data.plugins];
                allData.sort(compare(sort));
                // allData.forEach((i) => {
                //     zh.forEach((t) => {
                //         if (i.name === t.name) {
                //             i.description = t.zh;
                //         }
                //     });
                // });
                setPlugins(allData);
                setAllPlugins(allData);
            });
    }, []);

    const collectTags = React.useCallback((t, allArray, s) => {
        if (!allArray.includes(t)) {
            if (
                t.name.includes(s) ||
                t.description.includes(s) ||
                t.publisherName.includes(s)
            ) {
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

    const Header = () => {
        const likeSortHandle = () => {
            setSort("likeCount");
        };
        const downSortHandle = () => {
            setSort("installCount");
        };
        const thumbnailToggle = () => {
            setThumbnail(!thumbnail);
        };
        const tagSortHandle = (tag, name) => {
            setPlugins(tag);
            setTagActive(name);
            window.scrollTo(0, 0);
            console.log(name);
        };

        return (
            <HeaderStyle>
                <ul>
                    <li onClick={thumbnailToggle}>封面</li>
                    {tagData.map((t) => {
                        return (
                            <li
                                onClick={(e) => tagSortHandle(t.plugins, e.target.innerText)}
                                className={tagActive.includes(t.name) ? "tagActive" : null}
                            >
                                {t.name}
                                <i>{t.plugins.length}</i>
                            </li>
                        );
                    })}
                </ul>
            </HeaderStyle>
        );
    };

    const pluginList = plugins.map((i) => {
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
                                    .replace(/(<p>)/gi, "")
                                    .replace(/(<\/p>)/gi, "")
                                    .replace(/(<strong>)/gi, "")
                                    .replace(/(<\/strong>)/gi, "")
                                    .replace(/(<br>)/gi, "")
                                    .replace(/(<\/br>)/gi, "")
                                    .replace(/(<h2>)/gi, "")
                                    .replace(/(<\/h2>)/gi, "")
                                    .replace(/(<h1>)/gi, "")
                                    .replace(/(<\/h1>)/gi, "")
                                    .replace(/(<h3>)/gi, "")
                                    .replace(/(<\/h3>)/gi, "")
                                    .replace(/(<h4>)/gi, "")
                                    .replace(/(<\/h4>)/gi, "")
                                    .replace(/(<h5>)/gi, "")
                                    .replace(/(<\/h5>)/gi, "")
                                    .replace(/(<h6>)/gi, "")
                                    .replace(/(<\/h6>)/gi, "")
                                    .replace(/(<li>)/gi, "")
                                    .replace(/(<a>)/gi, "")
                                    .replace(/(<\/a>)/gi, "")
                                    .replace(/(<span>)/gi, "")
                                    .replace(/(<\/span>)/gi, "")
                                    .replace(/(<\/li>)/gi, ""),
                                100
                            )}
                        </p>
                    </div>
                    <div className="card-info">
                        {/* <span>{i.publisherName}</span> */}
                        <div>
                            <span>
                                <i>{`Likes: ${i.likeCount.toLocaleString()}`}</i>
                            </span>
                            <span>
                                <i>{`Installs: ${i.installCount.toLocaleString()}`}</i>
                            </span>
                        </div>
                    </div>
                </section>
            </a>
        );
    });



    return (
        <AppStyle className={"App"}>
            <GlobalStyles />
            <Header />
            {/* <input
          onChange={(e) => {
            inputValueHandle(e);
          }}
        /> */}
            <main className={thumbnail ? `thumbnailView` : null}>{pluginList}</main>
        </AppStyle>
    );
};

export default App;
