import React from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1}

    onIncrement = () => {
        this.updateEnthusiasm(1);
    };

    onDecrement = () => {
        this.updateEnthusiasm(-1);
    };

    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <button onClick={this.onIncrement}>-</button>
                <button onClick={this.onDecrement}>+</button>
            </div>
        );
    }

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}