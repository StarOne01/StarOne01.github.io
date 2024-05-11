import React from 'react';

const GoogleConsoleVerificationPage: React.FC = () => {
    const htmlCode = 'google-site-verification: google7e961ac57acacaad.html';

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
    );
};

export default GoogleConsoleVerificationPage;