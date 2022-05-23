import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormForNumber = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            index: index + 1
        };
        console.log(config);
        return React.cloneElement(child, config);
    });
};
FormForNumber.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormForNumber>
                <Component />
                <Component />
                <Component />
            </FormForNumber>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
