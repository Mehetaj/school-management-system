import React from 'react';
import SmallTitle from './small-title';

const SectionHeader = ({title, heading, description}:{title: string, heading: string, description: string}) => {
    return (
        <div className="text-center mb-16">
            <SmallTitle title={title} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {heading}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;