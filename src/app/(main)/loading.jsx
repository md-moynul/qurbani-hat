import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div>
            <div className="flex items-center gap-4 min-h-screen justify-center">
                <Spinner  size='50'/>
            </div>
        </div>
    );
};

export default LoadingPage;