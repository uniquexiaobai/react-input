import React from 'react';
export interface Props {
    value?: string;
    onChange: (x: string) => void;
}
declare const withComposition: (WrappedComponent: any) => React.FC<Props>;
export default withComposition;
