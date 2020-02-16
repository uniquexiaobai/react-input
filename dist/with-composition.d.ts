import React from 'react';
export interface Props {
    value?: string;
    onChange: (x: string) => void;
}
declare type InputType = 'input' | 'textarea';
declare function withComposition<T extends Props>(WrappedComponent: React.ComponentType<T> | InputType): React.FC<T & Props>;
export default withComposition;
