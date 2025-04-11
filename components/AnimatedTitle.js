import { jsx } from 'react/jsx-runtime';

var styles = {"title":"AnimatedTitle-module_title__GTuKe"};

function AnimatedTitle(props) {
    const { title, containerClassName, containerStyle } = props;
    return (jsx("div", { className: containerClassName, style: containerStyle, children: jsx("div", { className: styles.title, children: title }) }));
}

export { AnimatedTitle as default };
