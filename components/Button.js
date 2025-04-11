import { jsx } from 'react/jsx-runtime';

const Button = ({ variant, ...props }) => {
    const styles = () => {
        const propStyle = props.style ?? {};
        if (props.disabled)
            return propStyle;
        if (variant === "primary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#6366F1",
                color: "#FAFAFA",
                ...propStyle,
            };
        if (variant === "secondary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#FAFAFA",
                color: "#6366F1",
                ...propStyle,
            };
        return propStyle;
    };
    return (jsx("button", { ...props, style: styles(), children: props.children }));
};

export { Button as default };
