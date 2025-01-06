import React, {ReactNode} from 'react';

type IconProps = {
    icon: any;
}

const Icon = ({icon: IconComponent}: IconProps) => {
    return (
        <IconComponent
            width={48}
            height={48}
        />
    );
};

export default Icon;
